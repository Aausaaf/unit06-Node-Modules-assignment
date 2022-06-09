import sum from "./second";
import mul from "./mul"
import React from "react";
import { ReactDOM } from "react-dom";
import("./index.css")
console.log(sum(3,4));
console.log(mul(3,4));

// webpack can even resolve dependency
// it minifiles our code
// it decrease our code length or size
// and also it makes a code hard to understand so other can not copy our code (source code)
// it optimise our code 

// work flow
  // you will write clean code
  
// mode
 // devloment : it provide less optimise code
 // production : good optimise code   

 // Loaders : it is a libraries that makes javascrit to understand css
   // from it you just have to create file of css and import in js file js handover this file to loader and loder understand this and make it understand to javascript
   // every types of file have different loader like for css file there is different loaderes


   let a =[]
   
     console.log(data.value)
   let buttom = document.getElementById("buttom")
 
   buttom.addEventListener("click",function(){
     
     a.push(data.value)
     data.value = ""
     let container = document.getElementById("root")
     container.innerHTML = " "
     a.forEach(ele => {
       let div= document.createElement("div")
       div.setAttribute("class","div")
       let p = document.createElement("p")
       p.setAttribute("class","para")
       p.innerHTML = ele
       div.append(p)
       container.append(div)
     });
     console.log(data.value)
     console.log(a)
   })


   
  // let h1 = React.createElement("h1",{ className:"red-font" },"Hello World");
//  ReactDOM.render( h1 , document.getElementById("root"))