import React from "react";
import Typewriter from "typewriter-effect";


function Home(){
return(
<div style={{ color: '#d8e2dc' ,fontSize: 20, marginLeft:20}}>
    <h1>I am Kipchirchir Ezra</h1>
<Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("An aspiring software Engineer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Am a Web Developer")
         .start();
 }}
/>
</div>
)
}
export default Home;