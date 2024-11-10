"use strict";
class auth {
  constructor() {
    this.details = [
      {
        email: "amitshah@gmail.com",
        password: "amit@123",
      },
      {
        email: "narendramodi@gmail.com",
        password: "modi@123",
      },
      {
        email: "ramdevbaba @gmail.com",
        password: "patanjali@123",
      },
    ];
  }
  checkemail(emailid) {
    console.log(emailid);
    var exp =
      /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
    var result = exp.test(emailid);
    return result;
  }
  checkpassword(password) {
    console.log(password);
    var exp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
    var result = exp.test(password);
    return result;
  }
  checkemaliandpass() {}
}
export default auth;
