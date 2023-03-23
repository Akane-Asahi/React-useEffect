import { useState, useEffect } from "react";
import "./App.css";
import Country from "./components/Country";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [name, setName] = useState([]);

  console.log(name, "This is printed before fetching"); 

  
  const getData = async () => {
    const response = await axios.get(url);
    setName(response.data);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setName(response.data);
    };
    getData();
  }, []);  

  const random = Math.floor(Math.random()*100);
  console.log(random);
  console.log(typeof name, "This is updated name, printed after fetching");
  name.slice(0,12).map((item)=>{console.log(item.name.common)});

  return <div className="App">
    <p>This is App</p>
    {
      name.slice(0,12).map((country) => {
        return(
          <div className="container" style={{display: 'flex'}}>
            <Country countries = { country }/>
          </div>
        )
      })
    }
  </div>;
}

export default App;
