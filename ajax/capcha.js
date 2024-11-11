$(document).ready(function () {
  let captchaText = "";

  function generateCaptcha() {
    const charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";

    for (let i = 0; i < 6; i++) {
      captcha += charsArray[Math.floor(Math.random() * charsArray.length)];
    }

    captchaText = captcha;
    const canvas = document.getElementById("captcha");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillText(captchaText, 10, 40);
  }

  $("#refresh-captcha").click(generateCaptcha);

  $("#validate-captcha").click(function () {
    const userCaptcha = $("#captcha-input").val();
    if (userCaptcha === captchaText) {
      alert("CAPTCHA validated successfully!");
    } else {
      alert("Invalid CAPTCHA. Please try again.");
    }
  });

  generateCaptcha();
});
