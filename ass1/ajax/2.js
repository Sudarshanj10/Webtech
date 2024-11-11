"use strict";

$(document).ready(function () {
  $("button").click(function () {
    //alert('Button Clicked!');
    $.ajax({
      type: "GET",
      url: "https://restcountries.com/v3.1/all",
      success: function (data) {
        // console.log(data.flag.png.data.name.common);
        $.each(data, function (i, v) {
          console.log(i, v);
          $("#row").append(`
            <div class="col-xl-3 text-center">
              <img
                src="${v.flags.png}"
                alt="${v.name.common}"
                class="img-fluid"
              />
              <h1>${v.name.common}</h1>
            </div>
          `);
        });
      },
      error: function () {
        console.log("Api failed");
      },
    });
  });
});
