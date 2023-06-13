import React from "react";



function Skills(){
return(
    <div>
<li>
<img src={require('./assets/html1.png')} alt='html'/><br></br>
<h3 style={{ color: '#d8e2dc'}}>HTML5</h3>
</li>

<li>
<img src={require('./assets/css1.png')} alt='css'/><br></br>
   <h3 style={{ color: '#d8e2dc'}}>CSS3 </h3>
</li>

<li>
<img src={require('./assets/js1.png')} alt='js'/><br></br>
    <h3 style={{ color: '#d8e2dc'}}>Javascript</h3>
</li>

<li>
<img src={require('./assets/react1.png')} alt='react'/><br></br>
    <h3 style={{ color: '#d8e2dc'}}>ReactJs</h3>
</li>

<li>
<img src={require('./assets/ruby1.png')} alt='ruby'/><br></br>
    <h3 style={{ color: '#d8e2dc'}}>Ruby on Rails</h3>
</li>
    </div>
)
}
export default Skills;