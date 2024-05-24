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
          Welcome to our Online Courses platform! Here, you have the freedom to
          both create and purchase courses, as well as stream them at your
          convenience. To optimize video storage, we utilize YouTube embedded
          links, ensuring efficient access to course content.
        </p>

        <p>
          Please note that, due to our free backend hosting, establishing a
          connection may take some time. We appreciate your patience as the
          application works to establish a stable connection.
        </p>
        <p>
          Our platform is still in its early stages, but we're constantly
          working to improve and expand its features. Whether you're a beginner
          or an expert, there's something here for everyone. So dive in,
          explore, and enjoy the learning journey with us!"
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
