import "./App.css";
import { useEffect, useState } from "react";
import { testApiResponse } from "./services/apiService.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await testApiResponse();
        setTestData(data.message);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1>{testData}</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
