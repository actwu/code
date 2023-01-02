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
txt = document.querySelector("#e")

htmlcode = [
  
  `
  
  <!--
Copy paste is fun

Txt code : <p class=""> </p>  
Div code : <div class=""> </div>                   
Textarea code : <textarea class=""> </textarea>  
Input code : <input class=""> </input>
Button code <a class="btn prim"><p class"White">Btn<p></a>

-->

<html lang="en">
  <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
          <meta name="theme-color" content="#191919">
          <meta name="apple-mobile-web-app-capable" content="yes">
          <title>My site</title>
          <meta property="og:title" content="site">
          <meta property="og:description" content="My Site">
          <meta property="og:image" content="img/banner.png">
          <meta name="twitter:card" content="summary">
          <meta name="twitter:title" content="Me">
          <meta name="twitter:description" content="My Site">
          <meta name="twitter:image" content="img/banner.png">
          <meta name="twitter:image:alt" content="banner name">
      
      <meta property="title" content="Me">
      <meta property="author" content="Me">
      <meta property="image" content="/img/banner.png">
      <meta property="description" content="My Site">
          
      <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon"> 
      
  </head>
  <body>

  <script>
  const config = [css = 'default', icon = 'fontawesome']
  const configstate = 'defined'
    </script>
   <script src="https://futr.web.app/f.js">
  </script> 
  </body>
  </html>`
];

pycode = [
`app = "app"

print(app)
`
]

jscode = [
`app = document.getElementById("body");

app.innerHTML = "Hello World"
`
]


function page1() {
   
  document.getElementById("page1").classList.remove("hide");

  document.getElementById("page2").classList.add("hide");
  document.getElementById("page3").classList.add("hide");
  document.getElementById("page4").classList.add("hide");
  document.getElementById("page5").classList.add("hide");


}

function page2() {
  started = "true"
  localStorage.setItem("user", started)
  document.getElementById("page2").classList.remove("hide");

  
  document.getElementById("page1").classList.add("hide");
  document.getElementById("page3").classList.add("hide");
  document.getElementById("page4").classList.add("hide");
  document.getElementById("page5").classList.add("hide");

}


/*slider1*/

function slider1() {
   
  document.getElementById("slider1").classList.remove("hide");

  document.getElementById("slider2").classList.add("hide");
  document.getElementById("slider3").classList.add("hide");
  document.getElementById("slider4").classList.add("hide");
  document.getElementById("slider5").classList.add("hide");

  page2()
}


/*slider2*/

function slider2() {
  document.getElementById("slider2").classList.remove("hide");

  document.getElementById("slider1").classList.add("hide");
  document.getElementById("slider3").classList.add("hide");
  document.getElementById("slider4").classList.add("hide");
  document.getElementById("slider5").classList.add("hide");

  page2()
}


/*slider3*/

function slider3() {
  document.getElementById("slider3").classList.remove("hide");

  
  document.getElementById("slider1").classList.add("hide");
  document.getElementById("slider2").classList.add("hide");
  document.getElementById("slider4").classList.add("hide");
  document.getElementById("slider5").classList.add("hide");
  page2()
  

}

/*slider4*/

function slider4() {
  document.getElementById("slider4").classList.remove("hide");

  document.getElementById("slider1").classList.add("hide");
  document.getElementById("slider2").classList.add("hide");
  document.getElementById("slider3").classList.add("hide");
  document.getElementById("slider5").classList.add("hide");
}



/*slider5*/

function slider5() {
  document.getElementById("slider5").classList.remove("hide");

  document.getElementById("slider1").classList.add("hide");
  document.getElementById("slider2").classList.add("hide");
  document.getElementById("slider3").classList.add("hide");
  document.getElementById("slider4").classList.add("hide");

  page2()
}




function project() {
  txt.value = localStorage.getItem("a");

setTimeout(() => {
  slider1()
}, 100);
}
function project2() {
  txt.value = localStorage.getItem("b");

setTimeout(() => {
  slider2()
}, 100);
}
function project3() {
  txt.value = localStorage.getItem("c");

setTimeout(() => {
  slider3()
}, 100);
}
function starthtml() {
  txt.value = htmlcode;
  setTimeout(() => {
    slider5()
}, 100);
}


function startpy() {

  txt.value = pycode;
  setTimeout(() => {
    slider5()
  }, 100);
}

function startjs() {
  txt.value = jscode;
  setTimeout(() => {
    slider5()
  }, 100);
}
