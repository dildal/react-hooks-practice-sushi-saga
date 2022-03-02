import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(200);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushis(data))
  }, [])

  function buySushi(cost, id){
    if(moneyLeft < cost){
      alert("u can't afford it bb");
    }else{
      setPlates([...plates, id]);
      setMoneyLeft(moneyLeft - cost);
    }
    
  }


  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        plates={plates}
        buySushi={buySushi}
      />
      <Table 
        plates={plates}
        moneyLeft={moneyLeft}
      />
    </div>
  );
}

export default App;
