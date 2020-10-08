
/**
 * Uppgift: Skapa en applikation där användaren spelar sten-sax-påse mot datorn. 
 * Användaren ska kunna mata in hur många set matchen ska bestå av, 
 * applikationen ska kontrollera om någon vunnit samt ha en infodel 
 * där aktuell ställning presenteras och gärna någon mer info (senaste drag, tid, etc).  
 */
import React, { useState}from 'react';
import './App.css';
import Play from "./playGame";


function Game() {
   
  const [time, setTime] = useState((new Date().getSeconds())); 
  let endTime;
   

return (
  <div className="App">   
    <h2>VÄLKOMMEN TILL SPELET</h2>
    <h2>Sten &#9904; Sax &#9986; Påse  &#58147;</h2>
    
   
    <div>tiden: {time} sec</div>
    <Play   />
  
   
  </div>
);
   
}
export default Game;
