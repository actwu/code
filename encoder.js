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


   function save() {

    downloadButton = document.querySelector('.dl');
    txt = document.getElementById("e").value;
    
     var blob = new Blob([txt], { 'type' : 'html/html' });
     downloadButton.href = URL.createObjectURL(blob);
    
   }
   function savepy() {

    downloadButton = document.querySelector('.dlpy');
    txt = document.getElementById("e").value;

     var blob = new Blob([txt], { 'type' : 'python/py' });
     downloadButton.href = URL.createObjectURL(blob);

   }

   function savejs() {

    downloadButton = document.querySelector('.dljs');
    txt = document.getElementById("e").value;

     var blob = new Blob([txt], { 'type' : 'javascript/js' });
     downloadButton.href = URL.createObjectURL(blob);

   }

