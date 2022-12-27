/*   
     ___________
    /   _  _    \
   /   /_   \_   \
  /_______________\
  \_______________/

  Original Distribution from cordzip
  credit if in use

  for specific user only!

  this is made for catkatwu company,

  Ask Us at https://cordzip.web.app/contact.html  
  
*/
/*

Failed Screen Mirror (Causes of Screen Bugging)
  adel()

function adel() {
  
  localStorage.setItem("data", document.getElementById("e").value)


  setTimeout(() => {
    adel()
  }, 10);
  } 

  redel()
  function redel() {
  document.getElementById("preview").innerText = localStorage.getItem("data", document.getElementById("e").value)
  setTimeout(() => {
    redel()
  }, 10);
  }

  */

  function handleDataAvailable (e) {
    txt.push(e.data);
   }
   
   function update() {
    document.getElementById("e").value =  localStorage.getItem("e");
    localStorage.setItem("e", document.getElementById("e").value);
}
function getdata() {
  localStorage.setItem("a", document.getElementById("a").value);
  localStorage.setItem("b", document.getElementById("b").value);
  localStorage.setItem("c", document.getElementById("c").value);
  localStorage.setItem("d", document.getElementById("d").value);
  localStorage.setItem("e", document.getElementById("e").value);
  localStorage.setItem("f", document.getElementById("f").value);
  localStorage.setItem("g", document.getElementById("g").value);
}
     run = always()
       function always() {
          to = get_data()

          setTimeout(() => {
            always()
          }, 500);
       }

