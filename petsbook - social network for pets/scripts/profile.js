/* Changing picture */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/space1.jpg') {
      myImage.setAttribute ('src','images/mars1.jpg');
      document.getElementById('postBody').style.backgroundImage="url(images/back10.jpg)";
      document.getElementById('h2post2').style.color = "#ff704d";
      document.getElementById('h2post').style.color = "#ff704d";
      document.getElementById('i1').style.color = "#ff704d";
      document.getElementById('i2').style.color = "#ff704d";


    } else {
      myImage.setAttribute ('src','images/space1.jpg');
      document.getElementById('h2post').style.color = "#0B4280";
      document.getElementById('h2post2').style.color = "#0B4280";
      document.getElementById('postBody').style.backgroundImage="url(images/back13.jpg)";
      document.getElementById('i1').style.color = "#0B4280";
      document.getElementById('i2').style.color = "#0B4280";
    }
}



// Like button
 function like() {

  document.getElementById("pur").innerHTML = "I like you too!";
}


// Dislike button
function dislike() {
  document.getElementById("pur").innerHTML = "Get out of my page!";
}











//document.write("<p>Fontcolor: " + txt.fontcolor("green") + "</p>");
