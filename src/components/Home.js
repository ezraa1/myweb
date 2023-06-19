import React from "react";
import Typewriter from "typewriter-effect";


function Home(){
return(
<div style={{ color: '#d8e2dc' ,fontSize: 20, marginLeft:20}}>
    <h1>Hi, I am Kipchirchir Ezra</h1>
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

<div>
          <img src={require('./assets/avatar.jpg')} alt='avatar' style={{width:500, marginLeft:500, height:500, marginTop:-50}}/>
        </div>
        <div>
            <a href="https://drive.google.com/file/d/1cy-74pe1hWIfDJspEiExi4P5dpJF7zuB/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
<button style={{marginBottom:10}} >View Resume </button>
</a>
</div>

</div>

)
}
export default Home;