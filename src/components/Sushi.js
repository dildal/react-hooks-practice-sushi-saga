import React from "react";

function Sushi({name, img_url, price, id, plates, buySushi}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => buySushi(price, id)}>
        {/* Tell me if this sushi has been eaten! */}
        {plates.indexOf(id) !== -1 ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
