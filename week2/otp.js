/*2.OTP Countdown Simulator (Console App)
------------------------------------
       
        Simulate OTP sending flow in Node.js:
       
        Show “OTP Sent Successfully”
       
        Start 10-second countdown
       
        Allow resend only after countdown ends*/
console.log("OTP sent successfully");
let count = 10;
let timer = setInterval(() => {
  console.log(`${count} seconds`);
  count--;
  if (count < 0) {
    clearInterval(timer);
    console.log("resend OTP");
  }
}, 1000);

