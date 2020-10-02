
import React, { useState}from 'react';
import './App.css';


function App() {
  const [winner, setWinner] = useState(false); 
  const [playerPoint, setPlayerPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [time, setTime] = useState(new Date().getTime())
  let startTime = new Date().getTime(), endTime;
  let choices = ["sten", "sax", "påse"];
  let randomNo = Math.floor(Math.random() * 3); 
      
  let computerchoice;
  let playerchoice ;
  
  
  
  const startPlay =  () => {
    
    while(!winner && (playerPoint >= 3 || computerPoint >= 3 )){
      playerchoice = prompt("vill du välja, sten, sax eller påse?");
      computerchoice = choices[randomNo];
      console.log(computerchoice);
      console.log(playerchoice); 

        alert("datorn valde :"+ computerchoice);
        if(playerchoice === computerchoice){
            alert("Ni valde samma! kör igen");
            startPlay();
            setWinner(false);
        }else if((playerchoice=== choices[0] && computerchoice=== choices[1]) ||
                (playerchoice=== choices[1] && computerchoice=== choices[2]) ||
                (playerchoice===choices[2] && computerchoice===choices[0])){
            setPlayerPoint(playerPoint + 1);
            alert( "du fick point!");
        }else{
            setComputerPoint(computerPoint + 1);
            alert( "datorn fick point!");
        }

      if(playerPoint > computerPoint){
          setWinner(true) ;
      alert(" du vinner! bra jobbat!");
      }  else if(computerPoint > playerPoint){
      alert(" dator vinner!");
      
      } 
      endTime = new Date().getTime();
      let newTime = (endTime - startTime)/60
      setTime(newTime);
      
    
        
        
    }               
}
   
  return (
    <div className="App">
      <header className="App-header">
        
      <h1>VÄLLKOMEN TILL SPELET</h1>
      <h2>Sten &#9904; Sax &#9986; Påse  &#58147;</h2>
      <p>Tryck på knappen spela{playerchoice}</p>
      <button className="startGame"  onClick={startPlay}>
        spela </button> 
      <div>tiden {time}</div>
      
                
        
      </header>
    </div>
  );
}

export default App;
