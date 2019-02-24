// https://basarat.gitbooks.io/typescript/content/docs/promise.html

// The Promise class is something that exists in many modern
// JavaScript engines and can be easily polyfilled.
// The main motivation for promises is to bring
// synchronous style error handling to Async / Callback style code.
import fs = require("fs");
const process = require("process");

// Synchronous File Read
function promise() {
  function loadJSONSync(filename: string) {
    return JSON.parse(fs.readFileSync(filename).toString());
  }

  console.log(loadJSONSync(process.cwd() + "/logic/promise.json"));
}

promise();
