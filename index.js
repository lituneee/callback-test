function f1(value, callback) {
  
  if (typeof callback === "function") {
    console.log("Function");
  }
}

function callbacktest() {
  console.log("callbacktest");
}
f1(5, callbacktest);
