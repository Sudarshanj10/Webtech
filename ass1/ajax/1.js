"use strict";

let btn1 = document.getElementById("btn1");

//Dom Event Listener for Button 1
btn1.addEventListener("click", function () {
  var xmlhttp = new XMLHttpRequest();
  console.log(xmlhttp);
  console.log(xmlhttp.readyState);
  console.log(xmlhttp.status); // if the request is in progress, status is 0 request is not yet sent, status is 1 request is being sent, status is 2 request is sent and headers and status are received, status is 3 request is processing, status is 4 request is complete and response is ready to be used.

  xmlhttp.onreadystatechange = function () {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log(xmlhttp.responseText);
      var result = JSON.parse(xmlhttp.responseText);
      console.log(result);
      result &&
        result.length > 0 &&
        result.forEach(function (v, i) {
          console.log(v, i);
          var divtag = document.createElement("div");
          var imgtag = document.createElement("img");
          var ptag = document.createElement("p");
          var h2tag = document.createElement("h2");
          imgtag.src = v.image;
          h2tag.textContent = v.price;
          ptag.innerHTML = v.description;
          divtag.className = "col-xl-3 text-center";
          imgtag.className = "img-fluid";
          divtag.append(imgtag, h2tag, ptag);
          document.querySelector("#row").append(divtag);
        });
    }
  };
    // this event is triggered when the readyState changes

    xmlhttp.open("GET", "https://fakestoreapi.com/products"); // allow as to connect to the server and fetch data from the server

    xmlhttp.send(); // send the request to the server and readyState will change to 2 means request send and then change to 3 when the request is being sent and process mode and 4 when the request is complete and the response is ready to be used.
});
