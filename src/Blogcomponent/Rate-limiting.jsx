const Rate_Limiting = () => {
  return (
    <>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          1. Understanding the Problem
        </h3>
        <p className="mb-4 body-1 text-n-4">
          When integrating the Tranco ranking API into my backend, everything
          worked smoothly in development. But once deployed, parallel requests
          began firing multiple identical Tranco API calls at the same time.
          Tranco enforces a strict rule: only 1 request per second is allowed.
          Without protection, parallel processing instantly violated this limit.
        </p>

        <p class="mt-6 body-1 text-n-4">Here is an example scenario:</p>

        <pre className="dark:bg-n-7 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            amazon.com.au <br />
            ebay.com.au <br />
            facebook.com.au <br />
            google.com.au <br />
            linkedin.com.au
          </code>
        </pre>

        <p class="mt-6 body-1 text-n-4">
          Without any protection, the backend fires five identical API calls at
          once. This results in rate-limit errors, inconsistent responses, and
          unstable frontend behavior. I needed a way to slow down outbound calls
          while keeping internal processing fast.
        </p>
      </div>

      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          2. Implementing Rate Limiting & Singleflight
        </h3>
        <p className="mb-4 body-1 text-n-4">
          To solve this, I combined two backend patterns: Rate Limiting and
          Singleflight. Rate Limiting ensures only one Tranco request runs every
          1000ms. Singleflight ensures duplicate requests for the same domain
          share the same Promise, preventing redundant API calls.
        </p>

        <p class="mt-6 body-1 text-n-4">
          RateLimiterQueue (1 request per second):
        </p>

        <pre className="dark:bg-n-7 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            {`type Job<T> = { fn: () => Promise<T>; resolve: (v: T) => void; reject: (e: any) => void };`}
            <br />
            <br />
            {`export class RateLimiterQueue {`}
            <br />
            {`  private queue: Job<any>[] = [];`}
            <br />
            {`  private running = false;`}
            <br />
            {`  constructor(private intervalMs = 1000) {}`}
            <br />
            <br />
            {`  enqueue<T>(fn: () => Promise<T>): Promise<T> {`}
            <br />
            {`    return new Promise<T>((resolve, reject) => {`}
            <br />
            {`      this.queue.push({ fn, resolve, reject });`}
            <br />
            {`      if (!this.running) this.start();`}
            <br />
            {`    });`}
            <br />
            {`  }`}
            <br />
            <br />
            {`  private start() {`}
            <br />
            {`    this.running = true;`}
            <br />
            {`    const tick = async () => {`}
            <br />
            {`      const job = this.queue.shift();`}
            <br />
            {`      if (!job) { this.running = false; return; }`}
            <br />
            <br />
            {`      try {`}
            <br />
            {`        const result = await job.fn();`}
            <br />
            {`        job.resolve(result);`}
            <br />
            {`      } catch (err) {`}
            <br />
            {`        job.reject(err);`}
            <br />
            {`      } finally {`}
            <br />
            {`        setTimeout(tick, this.intervalMs);`}
            <br />
            {`      }`}
            <br />
            {`    };`}
            <br />
            {`    tick();`}
            <br />
            {`  }`}
            <br />
            {`}`}
          </code>
        </pre>

        <p class="mt-6 body-1 text-n-4">
          Singleflight (dedupe identical requests):
        </p>

        <pre className="dark:bg-n-7 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            {`const inflight = new Map<string, Promise<any>>();`}
            <br />
            <br />
            {`export function coalesce<T>(key: string, fn: () => Promise<T>): Promise<T> {`}
            <br />
            {`  if (inflight.has(key)) return inflight.get(key) as Promise<T>;`}
            <br />
            <br />
            {`  const p = (async () => {`}
            <br />
            {`    try { return await fn(); }`}
            <br />
            {`    finally { inflight.delete(key); }`}
            <br />
            {`  })();`}
            <br />
            <br />
            {`  inflight.set(key, p);`}
            <br />
            {`  return p;`}
            <br />
            {`}`}
          </code>
        </pre>

        <p class="mt-6 body-1 text-n-4">
          Rate Limiting protects the API. Singleflight protects the server.
          Together, they create a backend that is fast, safe, and predictable.
        </p>
      </div>

      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          3. Using Both Patterns in RankingService or YourService in Nest
        </h3>
        <p className="mb-4 body-1 text-n-4">
          With both utilities ready, integrating them into the RankingService
          becomes straightforward. The RateLimiterQueue ensures only one
          outbound request per second, while Singleflight ensures duplicate
          domain lookups share the same Promise.
        </p>

        <p class="mt-6 body-1 text-n-4">Here is an example:</p>

        <pre className="dark:bg-n-7 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            {`private trancoLimiter = new RateLimiterQueue(1000);`}
            <br />
            <br />
            {`private async callTranco(domain: string) {`}
            <br />
            {`  return this.trancoLimiter.enqueue(() =>`}
            <br />
            {`    this.httpService.axiosRef.get(`}
            <br />
            {`      \`https://tranco-list.eu/api/ranks/domain/\${domain}\``}
            <br />
            {`    ).then(res => res.data)`}
            <br />
            {`  );`}
            <br />
            {`}`}
            <br />
            <br />
            {`async fetchTrancoRanking(domain: string) {`}
            <br />
            {`  return coalesce(domain, () => this.callTranco(domain));`}
            <br />
            {`}`}
          </code>
        </pre>

        <p class="mt-6 body-1 text-n-4">
          With this setup, even 50 parallel requests are handled safely. The
          backend queues them, processes them one by one, and returns consistent
          data without violating Tranco’s 1‑second rule.
        </p>
      </div>

      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">4. Final Thoughts</h3>
        <p className="mb-4 body-1 text-n-4">
          Rate Limiting and Singleflight are essential patterns when working
          with strict third‑party APIs. RateLimiterQueue protects the API,
          Singleflight protects the server, and together they protect the user
          experience. This combination is now part of my standard backend
          toolkit for any external API integration.
        </p>
      </div>
    </>
  );
};
export default Rate_Limiting;
