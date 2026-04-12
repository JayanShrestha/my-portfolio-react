const Cold_start = () => {
  return (
    <div className="flex flex-col py-4">
      <span>
        <p className="mb-4 body-1 text-n-4">
          If you've ever deployed a NestJS backend on serverless platform and
          seen this strange behavior, this post breaks down exactly why it
          happend, and how I fixed it with a combination of:
        </p>
        <ul className="mb-4 body-1 text-n-4">
          <li>- Proper CORS configuration</li>
          <li>- A/health endpoint + UptimeRobot</li>
          <li>
            - A parallel-processing rewrite that made my mulit-domain endpoint
            5-10x faster
          </li>
        </ul>
      </span>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        1. The Sympton: First Requests Fail, Then Everything Works
      </h3>
      <p className="mb-4 body-1 text-n-4">
        My frontend (Cloudflare Pages) would call:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            /ranking/tranco/multi?domains=seek.com.au,indeed.com.au,...
          </code>
        </pre>
        The first few requests always failed with a CORS/network error or a 503
        Service Unavailable. After 2–3 attempts, the API suddenly became stable
        and responsive. This wasn’t random — it was predictable.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        2. The Root Cause: CORS + Serverless Cold Starts
      </h3>
      <p className="mb-4 body-1 text-n-4">
        Two separate issues were combining into one confusing problem.
        <h3 className="text-lg font-semibold" mt-6 mb-2>
          A. Missing CORS Configuration in NestJS
        </h3>
        My main.ts originally had no CORS setup. So when the browser sent a
        preflight request:
        <br></br>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>OPTIONS /ranking/tranco/multi</code>
        </pre>
        NestJS responded without:
        <br></br>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            Access-Control-Allow-Origin
            <br></br>Access-Control-Allow-Methods{" "}
          </code>
        </pre>
        The browser blocked the request before it ever reached my controller.
        Postman worked. Browser failed. Logs showed nothing. Classic CORS issue.
      </p>
      <p className="mb-4 body-1 text-n-4">
        <h3 className="text-lg font-semibold" mt-6 mb-2>
          B. Koyeb Cold Starts
        </h3>
        Koyeb is serverless. When the app is idle, it sleeps. The first request
        wakes the container — this takes 300–800ms. During that wake up window,
        the CORS preflight request times out, and Koyeb sometimes returns:
        <br></br>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>503 Service Unavailable</code>
        </pre>
        After the container is warm, everything works.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        3. The Fix: Enable CORS + Bind to 0.0.0.0
      </h3>
      <p className="mb-4 body-1 text-n-4">
        Here’s the exact fix I added to main.ts:
        <br></br>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {"app.enableCors({"}
            <br></br>
            {" origin: '*',"}
            <br></br>
            {"methods: 'GET,POST,OPTIONS',"}
            <br></br>
            {"allowedHeaders: 'Content-Type, Authorization',"}
            <br></br>
            {"});"}
            <br></br>
            {"await app.listen(process.env.PORT || 3000, '0.0.0.0');"}
          </code>
        </pre>
        This solved the CORS issue and ensured Koyeb routed traffic correctly.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        4. The Real Bottleneck: Sequential Processing in the Multi Domain
        Endpoint
      </h3>
      <p className="mb-4 body-1 text-n-4">
        My original multi domain logic looked like this:
        <br></br>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {"for (const domain of domains) {"}
            <br></br>
            {" await this.getLatestRecord(domain);"}
            <br></br>
            {"await this.deleteOldRecords(domain);"}
            <br></br>
            {"const data = await this.fetchTrancoRanking(domain);"}
            <br></br>
            {"for (const entry of data.ranks) {"}
            <br></br>
            {"await this.saveRankingToDB(...);"}
            <br></br>
            {"  }}"}
            <br></br>
          </code>
        </pre>
        This meants:
        <ul>
          <li>• Domain 1 → finish</li>
          <li>• Domain 2 → finish</li>
          <li>• Domain 3 → finish</li>
          <li>• Domain 4 → finish</li>
          <li>• Domain 5 → finish</li>
        </ul>
        Total time = sum of all domains. On a warm server, this was fine. On a
        cold Koyeb server, this was deadly. The heavy sequential loop exceeded
        Koyeb’s internal warm up window → 503.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        5. The Solution: Rewrite Multi Domain Logic to Run in Parallel
      </h3>
      <p className="mb-4 body-1 text-n-4">
        I refactored the entire multi domain handler into a parallelized,
        production ready version.
        <br></br>
        Step 1 — Extract single domain logic
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {"private async processDomain(domain: string) {"}
            <br></br>
            {" const lower = domain.toLowerCase();"}
            <br></br>
            {"const latest = await this.getLatestRecord(lower);"}
            <br></br>
            {"if (latest && this.isFresh(latest.updatedAt)) {"}
            <br></br>
            {"const cachedData = await this.rankingModel.findAll({"}
            <br></br>
            {"      where: { domain: lower },"}
            <br></br>
            {"order: [['checkedAt', 'DESC']],"}
            <br></br>
            {"    });"}
            <br></br>
            {"  return {"}
            <br></br>
            {"          domain:lower"}
            <br></br>
            {"         cached: true,"}
            <br></br>
            {"        count: cachedData.length,"}
            <br></br>
            {"   records: cachedData,"}
            <br></br>
            {" };}"}
            <br></br>
            {" await this.deleteOldRecords(lower);"}
            <br></br>
            {"   const data = await this.fetchTrancoRanking(lower);"}
            <br></br>
            {"const savedRecords: Ranking[] = [];"}
            <br></br>
            {"   for (const entry of data.ranks) {"}
            <br></br>
            {" const saved = await this.saveRankingToDB("}
            <br></br>
            {"       lower,"}
            <br></br>
            {" entry.rank,"}
            <br></br>
            {"      entry.date,"}
            <br></br>
            {"     );"}
            <br></br>
            {"     savedRecords.push(saved);"}
            <br></br>
            {"  }"}
            <br></br>
            {"   return {"}
            <br></br>
            {" domain: lower,"}
            <br></br>
            {"     cached: false,"}
            <br></br>
            {" count: savedRecords.length,"}
            <br></br>
            {"     records: savedRecords,"}
            <br></br>
            {" };}"}
            <br></br>
          </code>
        </pre>
        Step 2 — Run all domains in parallel
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {" async fetchAndStoreMultipleDomains(domains: string[]) {"}
            <br></br>
            {"   const tasks = domains.map(async (domain) => {"}
            <br></br>
            {"    try {"}
            <br></br>
            {"       return await this.processDomain(domain);"}
            <br></br>
            {"     } catch (err) {"}
            <br></br>
            {"       return {"}
            <br></br>
            {"domain,"}
            <br></br>
            {"         cached: false,"}
            <br></br>
            {"         count: 0,"}
            <br></br>
            {" records: [],"}
            <br></br>
            {"         error: true,"}
            <br></br>
            {" message: err.message,"}
            <br></br>
            {" };}"}
            <br></br>
            {"   });"}
            <br></br>
            {" const results = await Promise.all(tasks);"}
            <br></br>
            {"return {"}
            <br></br>
            {"    success: true,"}
            <br></br>
            {"     results,"}
            <br></br>
            {" };}"}
            <br></br>
          </code>
        </pre>
        Performance impact
        <ul>
          <li>
            • Old version: sequential, slow, cold start unfriendly
            <li>• New version: parallel, 5–10× faster, cold start resistant</li>
            <li>• Total time ≈ longest single domain, not sum of all</li>
          </li>
        </ul>
        This completely eliminated the 503 errors.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        6. Bonus: Keep the API Warm with UptimeRobot
      </h3>
      <p className="mb-4 body-1 text-n-4">
        I added a lightweight health route:
        <br></br>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            {"@Get('health')"}
            <br></br>
            {" getHealth() {"}
            <br></br>
            {"  return { ok: true };"}
            <br></br>
            {"}"}
          </code>
        </pre>
        Then set UptimeRobot to ping it every 5 minutes. This prevents cold
        starts entirely.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">7. Final Result</h3>
      <p className="mb-4 body-1 text-n-4">
        After adding:
        <ul>
          <li>• CORS • 0.0.0.0 binding</li>
          <li> • Parallel processing</li>
          <li>• UptimeRobot warm up </li>{" "}
        </ul>
        My Domain Ranking Application now loads instantly and reliably — even on
        Koyeb’s free tier. No more:
        <ul>
          <li>• first request failures </li>
          <li> • silent CORS timeouts</li>
          <li>• 503 errors </li>
          <li> • slow multi domain processing </li>{" "}
        </ul>
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        8. Final Thoughts/Key Takeaways
      </h3>
      <p className="mb-4 body-1 text-n-4">
        <ul>
          <li>• Serverless platforms sleep — expect cold starts</li>
          <li>• Browsers enforce CORS — Postman does not</li>
          <li>
            • Missing CORS + cold starts = confusing intermittent failures
          </li>
          <li>• Sequential loops kill serverless performance</li>
          <li>• Parallel processing is essential for batch endpoints</li>
          <li>• Keep your backend warm with a /health route + UptimeRobot</li>
        </ul>
      </p>
    </div>
  );
};

export default Cold_start;
