
import React, { useState} from "react";


const Play = () => {

  const [computerchoice, setComputerchoice] = useState("");
  const [playchoice, setPlaychoice] = useState("ej vald");
  const [playerpoint, setPlayerpoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [counter, setCounter] = useState(0);
  const choices = ["sten", "sax", "påse"]; 
  const [winner, setWinner] = useState("");
  const [roundWinner, setRoundWinner] = useState(""); 
  let randomNo = Math.floor(Math.random() * 3);
  const noLimitRef = React.createRef();


    const startPlay = (e) => { 
    e.preventDefault();
    let playerchoice = e.target.value;
    console.log(playerchoice)  
    setPlaychoice(playerchoice) ;
    setWinner(getwinner(playerpoint,computerPoint)) ;  
    setComputerchoice(choices[randomNo]); 
    setRoundWinner(getPoints(playchoice,computerchoice));
    
    setCounter(counter - 1);
    
    console.log(playerpoint + " " + computerPoint);
    }

    

    let getPoints = (p1,p2) => {
         if(((p1 === choices[0]) && (p2 === choices[1])) ||
         ((p1 === choices[1]) && (p2 === choices[2])) ||
         ((p1 === choices[2]) && (p2 === choices[0]))) {
             setPlayerpoint(playerpoint + 1);}
         else if(playchoice === computerchoice) {
              return "ni valde samma, kör igen";}
         else {
             setComputerPoint(computerPoint + 1)} 
         console.log("player point "+playerpoint);

    }


    console.log(playerpoint + " " + computerPoint);
    var setNumberLimit =(event) => {
        event.preventDefault();
        const inputNoLimit = noLimitRef.current.value;
        setCounter(inputNoLimit);
    }
        

    const getwinner = (p1,p2) => {
        if(p1 > p2){
            return "du vann";
        }else if (p2 > p1) {
            return "du fårlorar , datorn vinner ";
        } else {
            return "Försätt spela...";
        }
      
    }
    
    return(
        <div>
            <form>
            <label className="antalNo">set nummer</label>
            <br/>
            <input type="number" id="limit" ref={noLimitRef}/>
            <button onClick={setNumberLimit} >Set limit</button>
            </form>
            <p>du ska spela : {counter}</p>

            <form >
            <p>välja sten, sax eller påse:</p>
            <span><button value={choices[0]} id="sten" onClick={ startPlay}> Sten </button> </span> 
            <span><button value={choices[1]} id="sax" onClick={ startPlay}> Sax </button></span>
            <span><button value={choices[2]} id="pase" onClick={ startPlay}> Påse </button></span>
            

            <p>din val: {playchoice}</p> 
            <p>dator valde: {computerchoice}</p>
            <p> {roundWinner}</p>
            <p>dina point: {playerpoint}</p>
            <p>datorn point: {computerPoint}</p>
            <p>vinner spelet: { winner} </p>
            </form>
        
        </div>
    )
}
export default Play;