const Simple_CICD_GCP = () => {
  return (
    <div className="flex flex-col py-4">
      <span>
        <p className="mb-4 body-1 text-n-4">
          If you're new to deploying backends on Google Cloud and want your app
          to automatically update every time you push to GitHub, this post walks
          you through the exact beginner‑friendly CI/CD setup I used. No fancy
          DevOps tools — just:
        </p>
        <ul className="mb-4 body-1 text-n-4">
          <li>- A Google Cloud service account</li>
          <li>- Artifact Registry + Cloud Run</li>
          <li>- A simple GitHub Actions workflow</li>
        </ul>
      </span>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        1. The Symptom: “It Works Locally… Why Doesn’t It Deploy?”
      </h3>
      <p className="mb-4 body-1 text-n-4">
        My backend ran perfectly on my machine. But when I pushed to GitHub,
        Cloud Run refused to deploy. I kept seeing errors like:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>Unauthenticated request</code>
        </pre>
        or:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>iam.serviceaccounts.actAs denied</code>
        </pre>
        After a few attempts, I realised this wasn’t random — it was
        predictable. My CI/CD pipeline simply wasn’t authenticated correctly.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        2. The Root Cause: Missing Authentication + Missing IAM Roles
      </h3>
      <p className="mb-4 body-1 text-n-4">
        Two beginner mistakes were combining into one confusing problem.
        <h3 className="text-lg font-semibold mt-6 mb-2">
          A. GitHub Actions Was Not Authenticated
        </h3>
        GitHub Actions cannot magically deploy to your Google Cloud project. It
        needs a service account key stored in GitHub Secrets. Without it, every
        command fails silently or loudly.
        <h3 className="text-lg font-semibold mt-6 mb-2">
          B. The Service Account Didn’t Have the Right IAM Roles
        </h3>
        Even after adding the key, Cloud Run deploys failed because the service
        account didn’t have:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            roles/artifactregistry.writer
            <br />
            roles/run.admin
            <br />
            roles/storage.admin
            <br />
            roles/iam.serviceAccountUser
            <br />
            roles/iam.serviceAccountTokenCreator
          </code>
        </pre>
        CI/CD is permission‑driven. If one role is missing, the whole pipeline
        collapses.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        3. The Fix: Create a Service Account + Add IAM Roles
      </h3>
      <p className="mb-4 body-1 text-n-4">
        Here’s the exact setup that finally made everything work.
        <br />
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            gcloud iam service-accounts create github-actions
            <br />
            gcloud projects add-iam-policy-binding $PROJECT \ <br />
            --member="serviceAccount:github-actions@$PROJECT.iam.gserviceaccount.com"
            \ <br />
            --role="roles/artifactregistry.writer"
          </code>
        </pre>
        Then generate a key:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>
            gcloud iam service-accounts keys create key.json \ <br />
            --iam-account=github-actions@$PROJECT.iam.gserviceaccount.com
          </code>
        </pre>
        Upload this JSON file to GitHub Secrets as <strong>GCP_SA_KEY</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        4. The Real Bottleneck: Incorrect GitHub Actions Workflow
      </h3>
      <p className="mb-4 body-1 text-n-4">
        My original workflow authenticated Docker before authenticating gcloud.
        This meant Docker was using invalid credentials, causing:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 w-fit body-1">
          <code>denied: Unauthenticated request</code>
        </pre>
        Even though IAM was correct.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        5. The Solution: A Clean, Working GitHub Actions CI/CD Workflow
      </h3>
      <p className="mb-4 body-1 text-n-4">
        Here’s the beginner‑friendly version that works every time:
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2 body-1">
          <code>
            name: Deploy Backend
            <br />
            on: [push]
            <br />
            <br />
            jobs:
            <br />
            &nbsp; deploy:
            <br />
            &nbsp; &nbsp; runs-on: ubuntu-latest
            <br />
            &nbsp;&nbsp; steps:
            <br />
            &nbsp;&nbsp;&nbsp; - uses: actions/checkout@v4
            <br />
            &nbsp;&nbsp;&nbsp; - uses: google-github-actions/auth@v2
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; with:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; credentials_json:{" "}
            {"${{ secrets.GCP_SA_KEY }}"}
            <br />
            &nbsp;&nbsp;&nbsp; - uses: google-github-actions/setup-gcloud@v2
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; with:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; project_id:{" "}
            {"${{ secrets.GCP_PROJECT_ID }}"}
            <br />
            &nbsp;&nbsp;&nbsp; - run: gcloud auth configure-docker{" "}
            {"${{ secrets.GCP_REGION }}"}-docker.pkg.dev
            <br />
            &nbsp;&nbsp;&nbsp; - run: docker build -t $IMAGE .<br />
            &nbsp;&nbsp;&nbsp; - run: docker push $IMAGE
            <br />
            &nbsp;&nbsp;&nbsp; - run: gcloud run deploy backend --image $IMAGE
            --region {"${{ secrets.GCP_REGION }}"}
          </code>
        </pre>
        This workflow builds your Docker image, pushes it, and deploys it to
        Cloud Run automatically on every push.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">7. Final Result</h3>
      <p className="mb-4 body-1 text-n-4">
        After adding:
        <ul>
          <li>• Correct IAM roles</li>
          <li>• Proper authentication</li>
          <li>• A clean GitHub Actions workflow</li>
        </ul>
        My backend now deploys instantly and reliably — every push, every time.
        No more:
        <ul>
          <li>• Unauthenticated requests</li>
          <li>• Permission denied errors</li>
          <li>• Failed Cloud Run deploys</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        8. Final Thoughts / Key Takeaways
      </h3>
      <p className="mb-4 body-1 text-n-4">
        <ul>
          <li>• CI/CD is authentication + permissions</li>
          <li>• GitHub Actions must authenticate before Docker</li>
          <li>• Cloud Run needs iam.serviceAccountUser</li>
          <li>• A clean workflow removes 90% of beginner pain</li>
          <li>• A health check keeps your API warm and fast</li>
        </ul>
      </p>
    </div>
  );
};

export default Simple_CICD_GCP;
