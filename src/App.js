import "./App.css";
import React from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  
  const [state, setState] = React.useState([]);
  
  async function getMonsters (){
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setState(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(()=>{
    getMonsters();
  }, []);

 


  return (
    <div className="container">
           {
            state.map((monster)=> <Card key={monster.id} monster={monster}/>)
           }
    </div>
  );
}

export default App;
