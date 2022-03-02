import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, buySushi, plates}) {
  const [sushiIndex, setSushiIndex] = useState(0);
  const fourSushi = sushiIndex + 4 < sushis.length ? 
    sushis.slice(sushiIndex, sushiIndex+4) :
    [...sushis.slice(sushiIndex, sushis.length-1), ...sushis.slice(0, ((sushiIndex + 4) % sushis.length)+ 1)]
  
    
  const sushiToDisplay = fourSushi.map(sushi => {
   return <Sushi 
      key={sushi.id}
      id={sushi.id}
      img_url={sushi.img_url}
      price={sushi.price}
      name={sushi.name}
      buySushi={buySushi}
      plates={plates}
    />
  })

  function getFourMore(){
    setSushiIndex((sushiIndex + 4) % (sushis.length))
  }
  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton onMoreClick={getFourMore}/>
    </div>
  );
}

export default SushiContainer;
