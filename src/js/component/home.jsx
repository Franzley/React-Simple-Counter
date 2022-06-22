import React, { useState, useEffect } from "react";
//include images into your bundle

const myClock = {
  color: "white",
  width: "100%",
  height: "150px",
  textAlign: "Center",
  paddingTop: "50px",
};
const myClockBG = {
  background: "black",
};

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [secondsTens, setSecondsTens] = useState(0);
  const [secondsHun, setSecondsHun] = useState(0);
  const [secondsThou, setSecondsThou] = useState(0);
  

  useEffect(() => {
    setTimeout(() => {
      if (seconds === 9){
        setSeconds(0)
        if(secondsTens === 9){
          setSecondsTens(0);
          if(secondsHun === 9){
            setSecondsHun(0)
            if(secondsThou === 9){
              setSecondsThou(0)
            }else{
              setSecondsThou(secondsThou + 1)
            }
          }else{
            setSecondsHun(secondsHun + 1)
          }
        }else{
          setSecondsTens(secondsTens + 1);
        }
      }else{
        setSeconds(seconds + 1);
      }
      
    }, 1000);
  });
  console.log(useEffect);

  return (
    <div className="d-flex flex-row" style={myClockBG}>
      <div className="boxes" style={myClock}>
        <h1>
          <i class="fas fa-clock"></i>
        </h1>
      </div>

      <div className="boxes" style={myClock}>
        <h1>{secondsThou}</h1>
      </div>

      <div className="boxes" style={myClock}>
        <h1>{secondsHun}</h1>
      </div>

      <div className="boxes" style={myClock}>
        <h1>{secondsTens}</h1>
      </div>

      <div className="boxes" style={myClock}>
        <h1>{seconds}</h1>
      </div>
    </div>
  );
};

export default Home;
