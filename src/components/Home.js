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

<div className="new">
          <img src={require('./assets/avatar.jpg')} alt='avatar' />
        </div>
        <div>
            <a href={require("./assets/kipchirchir.updated.resume.pdf") }target="_blank" rel="noopener noreferrer">
<button style={{marginBottom:10}} >View Resume </button>
</a>
</div>

</div>

)
}
export default Home;