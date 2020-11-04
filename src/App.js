import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import Amplify, { Analytics } from "aws-amplify";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    const analyticsCaller = async () => {
      try {
        const message = await Analytics.updateEndpoint({
          attributes: {
            // Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
            hobbies: ["piano", "hiking"],
          },
          metrics: {
            // Custom metrics that your app reports to Amazon Pinpoint.
            minutesListened: 30,
          },
          /** Indicates whether a user has opted out of receiving messages with one of the following values:
           * ALL - User has opted out of all messages.
           * NONE - Users has not opted out and receives all messages.
           */
          optOut: "ALL",
          // Customized userId
          userId: "test",
          // User attributes
          userAttributes: {
            interests: ["football", "basketball", "AWS"],
            // ...
          },
        });

        await Analytics.record({ name: "albumVisit" });
        await Analytics.record("userSignin", { username: "Rahul Tarak" });

        console.log("Updated!", message);
      } catch (err) {
        console.error(err.message);
      }
    };
    analyticsCaller();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
