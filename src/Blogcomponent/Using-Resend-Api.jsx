import Resend from "../assets/Blogs/Resend.png";
import ResendCode from "../assets/Blogs/ResendCode.png";
import ResendCode2 from "../assets/Blogs/ResendCode2.png";
import Postman from "../assets/Blogs/Postman.png";
import Success from "../assets/Blogs/Success.png";
import Email from "../assets/Blogs/Email.png";

const Using_Resend_Api = () => {
  return (
    <>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          1. Getting started with the backend
        </h3>
        <p className="mb-4 body-1 text-n-4">
          First, we need to start the node project into the directory where you
          want to build your project (assuming Node JS is already installed, if
          not install Node JS and use command node -v to confirm successful
          installation).
        </p>
        <p class="mt-6 body-1 text-n-4">Here is an example:</p>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit body-1 ">
          <code>
            mkdir contact-backend; <br></br>cd contact-backend;<br></br>
            npm init -y;// default configuration file
          </code>
        </pre>
      </div>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          2. Create account on RESEND API
        </h3>
        <p className="mb-4 body-1 text-n-4">
          Creat an account on{" "}
          <a href="https://resend.com/" className="color-1 font-bold">
            RESEND API
          </a>{" "}
          using gmail or github account. Click on API keys from the dashboard
          which prompts you to create API key. Setup the name and save the key
          on notepad or somewhere safe because once it is created you can
          neither edit or view it. If forgotten or misplaced, delete the API key
          and create a new one again.(save at .env file at your project
          location)
        </p>
        <img
          src={Resend}
          alt="Resend api picture"
          className="border rounded-lg"
        />
      </div>
      <div className="flex flex-col py-4">
        <h3 class="text-xl font-semibold mt-6 mb-2">
          3. Installing the packages for project{" "}
        </h3>
        <p className="mb-4 body-1 text-n-4">
          Install the following packages inside the terminal of project location
          created.
        </p>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit text-xs md:text-base">
          <p>npm i express cors dotenv resend;</p>
        </pre>
      </div>
      <div>
        <h3 class="text-xl font-semibold mt-6 mb-2">
          4. Code to build API in index.js
        </h3>
        <p className="mb-4 body-1 text-n-4">
          After installing with default configuration, there should be a file
          named index.js. Code the following boiler plate for Resend
          Application:
        </p>
        <img
          src={ResendCode}
          alt="Resend Code boiler plate picture"
          className="border rounded-lg"
        />
        <p className="mb-4 body-1 text-n-4 py-2">
          process.env.RESEND_API_KEY is the API key that was generated earlier
          when you created an account on RESEND API, and the key is stored
          inside .env file untracked from github as RESEND_API_KEY =
          your_api_key. Later, when deploying on Koyeb, make sure to add
          environmental variables under the same name i.e. RESEND_API_KEY.
        </p>
        <p className="mb-4 body-1 text-n-4 py-2">
          Rest of the code should look like the following:
        </p>
        <img
          src={ResendCode2}
          alt="Resend Code main picture"
          className="border rounded-lg"
        />
        <p className="mb-4 body-1 text-n-4 py-2">
          <ul>
            <li>
              • Destructuring JSON into name, email, subject, message from
              req.body.
            </li>
            <li>
              • Trying to send email using resend api with all the JSON data
              received from POST method.
            </li>
            <li>
              • Returns error with status code and error message in JSON if it
              fails to send data.
            </li>
            <li>
              • API listens on port 5000 i.e. "localhost:5000" as defined in the
              env file. (default port defined on Koyeb)
            </li>
            <li>
              {" "}
              • Start the app locally via "npm run start" or if you have nodemon
              installed "nodemon index.js"
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold mt-6 mb-2">
          5. Testing API on Postman
        </h3>
        <p className="mb-4 body-1 text-n-4">
          Postman is a great tool for testing API locally and from live server.
          First, head to the Postman by clicking on this{" "}
          <a
            href="https://www.postman.com/"
            target="_blank"
            className="text-color-1 hover:underline"
          >
            link.
          </a>
          You might be required to install postman locally to test local host
          after creating an account. After creating the account, you can test
          the API you created via the following ways:
        </p>
        <ul className="body-1 text-n-4">
          <li>
            • Click on workspaces on the left-hand sidebar from dashboard.
          </li>
          <li>
            • Create a new workspace to test your API. You can name
            contact-backend or anything to workspace to begin testing.
          </li>
          <li> • Click on "+" sign to create new request.</li>
          <li> • Select Request type to "Post".</li>
          <li>
            {" "}
            • Add http://localhost:5000/contact to address for now, select raw
            and JSON under Body, then type the JSON value for its
            properties.{" "}
          </li>
          <img
            src={Postman}
            alt="Resend Code main picture"
            className="border rounded-lg my-2"
          />
          <li>
            • Click send and if its successful, you will recieve an id and
            returned status "200".
          </li>
          <img
            src={Success}
            alt="Resend Code main picture"
            className="border rounded-lg my-2"
          />

          <li>
            • Check inbox in your email that you integrated with Resend API to
            confirm that you received your email.
          </li>
          <img
            src={Email}
            alt="Resend Code main picture"
            className="border rounded-lg my-2"
          />
          <li>
            • At last, the API is ready to be deployed on koyeb after successful
            testing on Postman.
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mt-6 mb-2">6. Deploying to Koyeb</h3>
        <p className="mb-4 body-1 text-n-4">
          After creating a repository named "contact" or "contact-backend" on
          your git, initialize git on your local machine (add .env filename
          under .gitignore file):
        </p>
        <pre className="dark:bg-n-4 bg-black text-white p-4 rounded-lg mt-2  w-fit text-xs md:text-base ">
          <p>git init -y</p>
          <p>git add .</p>
          <p>git commit -m "Initial commit"</p>
          <p>git branch -M main</p>
          <p>git remote add origin{" <YOUR_GITHUB_REPO_URL>"}</p>
          <p>git push -u origin main</p>
        </pre>

        <p className="mb-4 body-1 text-n-4 py-2">
          After creating Koyeb account, on your Koyeb dashboard:
          <ul>
            <li>• Create a new Web Service.</li>
            <li>• Select your Github repository or url.</li>
            <li>
              • Set the environmental variables for the Resend API key under
              name "RESEND_API_KEY".
            </li>
            <li>
              • Follow the prompt and after deploy, your API will be live on
              .koyeb.app domain
            </li>
            <li>
              • Now, finally test your live API by copying koyeb's live url and
              append /contact along with JSON raw body, it will send the email
              to your inbox.
            </li>
          </ul>
        </p>
        <div>
          <h3 class="text-xl font-semibold mt-6 mb-2">6. Final Thoughts</h3>
          <p className="body-1 text-n-4">
            Now, you have created the production-ready Node/Express JS backend
            running on Koyeb. This setup is simple and beginner friendly, and
            perfect to grasp the idea on how API works. You can use the live API
            Url for your SPA or mult-page application built on React or Next
            JS.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Using_Resend_Api;
