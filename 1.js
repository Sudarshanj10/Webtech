"use strict";

var category = ["Electronics", "Books", "shoes"];

var products = [
  {
    name: "Shirt",
    price: 1000.0,
    Path: "https://images.bewakoof.com/t1080/men-s-blue-order-of-the-phoenix-graphic-printed-t-shirt-589548-1721129639-1.jpg",
  },

  {
    name: "Shirt",
    price: 1500.0,
    Path: "https://images.bewakoof.com/t1080/men-s-blue-order-of-the-phoenix-graphic-printed-t-shirt-589548-1721129639-1.jpg",
  },
  {
    name: "Shirt",
    price: 1400.0,
    Path: "https://images.bewakoof.com/t1080/men-s-blue-order-of-the-phoenix-graphic-printed-t-shirt-589548-1721129639-1.jpg",
  },
  {
    name: "Shirt",
    price: 1400.0,
    Path: "https://images.bewakoof.com/t1080/men-s-blue-order-of-the-phoenix-graphic-printed-t-shirt-589548-1721129639-1.jpg",
  },
];
//short circuit for sorting

category &&
  category.length > 0 &&
  category.forEach(function (v, i) {
    console.log(v, i);

    var listtag = document.createElement("li");
    console.log(listtag);
    listtag.innerHTML = v;

    document.querySelector("ul").append(listtag);
  });

products.length > 0 &&
  products.forEach(function (v, i) {
    console.log(v, i);

    var divtag = document.createElement("div");

    divtag.className = "col-xl-4 text-center";
    var imgtag = document.createElement("img");
    var h2tag = document.createElement("h2");
    var ptag = document.createElement("p");
    imgtag.src = v.Path;
    imgtag.className = "img-fluid";

    imgtag.src = v.Path;
    h2tag.innerHTML = v.price;
    ptag.innerHTML = v.name;

    divtag.append(imgtag, h2tag, ptag);
    document.getElementById("row").append(divtag);
  });
