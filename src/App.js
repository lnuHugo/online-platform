import "./App.css";
import { useEffect, useState } from "react";
import { testApiResponse } from "./services/apiService.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [apiStatus, setApiStatus] = useState("disconnected");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await testApiResponse();
        setApiStatus("connected");
      } catch (error) {
        console.error("There was an error fetching data:", error);
        setApiStatus("disconnected");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="main-content start-main-div">
        <div className={`status-box status-${apiStatus}`}>
          <h1>
            {apiStatus === "connected"
              ? "Connected to backend server"
              : "Disconnected from backend server"}
          </h1>
        </div>
        <p>
          Welcome to our application! This platform serves as a hub for various
          courses and educational content. We are currently{" "}
          {apiStatus === "connected" ? "connected to" : "disconnected from"} our
          backend server, which may impact certain features. Please bear with us
          as we work to establish a stable connection.
        </p>
        <p>
          As you explore the site, feel free to browse our diverse range of
          courses and resources. Whether you're a beginner or an expert, there's
          something here for everyone. We're continuously updating and expanding
          our offerings, so be sure to check back regularly for new content!
        </p>
        <p>
          Please note that this application is still in its early stages and is
          far from complete. Consider this version a starting point as we
          continue to develop and improve the platform. Your feedback is
          valuable to us as we strive to create the best possible experience for
          our users.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
