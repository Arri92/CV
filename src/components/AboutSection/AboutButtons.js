import React from 'react'

const MainButton =()=> {
    var header = document.getElementById("myAbout");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
    var x = document.getElementById("AboutText");
    x.innerHTML = "<p>- Quick Learner.</p><p>- Quick Learner.</p><p>- Hard worker.</p><p>- Continuosly improving.</p>";
    }

  export default MainButton;

  export const CertButton =()=> {
    var x = document.getElementById("AboutText");
        x.innerHTML = "<p>- Algorithms and Data Structures (FCC)</p><p>- Responsive Web Design (FCC)</p><p>- Front End Libraries (FCC)</p><p> </p>"
      
    }
    export const OtherButton =()=> {
        var x = document.getElementById("AboutText");
            x.innerHTML = "<p>-Drivers Licence B1</p><p> </p><p> </p><p></p>"; 
        }
    
 