// https://basarat.gitbooks.io/typescript/content/docs/promise.html

// The Promise class is something that exists in many modern
// JavaScript engines and can be easily polyfilled.
// The main motivation for promises is to bring
// synchronous style error handling to Async / Callback style code.
import fs = require("fs");
import process = require("process");

// Synchronous File Read
function promise() {
  function loadJSONSync(filename: string) {
    let fileName = process.cwd() + "/logic/" + filename;
    return JSON.parse(fs.readFileSync(fileName).toString());
  }

  console.log(loadJSONSync("promise.json"));

  // Three possible results:
  // Valid result, File doesnt exist, Incorrect json format

  // Attempt 1
  function loadJSON(filename: string, cb: (error: Error, data: any) => void) {
    fs.readFile(filename, function(err, data) {
      if (err) cb(err, (data = null));
      else cb(null, JSON.parse(data.toString()));
    });
  }
  // Highly reccomend reading through the examples - .

  // LESSON - Contain all sync code in try catch block except when calling a callback.
  function loadJSONAsync(
    filename: string,
    cb: (error: Error, data: any) => void
  ) {
    fs.readFile(filename, function(err, data) {
      if (err) return cb(err, null);
      // Contain all your sync code in a try catch
      try {
        var parsed = JSON.parse(data.toString());
      } catch (err) {
        return cb(err, null);
      }
      // except when you call the callback
      return cb(null, parsed);
    });
  }

  // Promises
  // Status: pending | fulfulled | rejected
  const promise = new Promise((resolve, reject) => {
    // Resolve and Reject control the fate of the promise
    resolve(200);
    reject(404);
  });

  promise
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  // Shortcuts
  // Promise.resolve("Data");
  // Promise.reject("Err Data");

  // Chainability
  // Aggregate the error handling of any preceding portain with a single catch
  // Promise.reject(123)
  Promise.resolve(123)
    .then(res => {
      console.log(res);
      return 456;
    })
    .then(res => {
      console.log(res);
      return Promise.resolve(678);
    })
    .then(res => {
      console.log(res);
      return Promise.resolve("Done");
    })
    .catch(err => {
      console.log("Aggregated Error");
    });

  // Catch starts a new chain
  // Promise.reject(123)
  Promise.reject(123)
    .catch(err => {
      console.log("Aggregated Error");
      return "Aggregated Error";
    })
    .then(res => {
      console.log(res.toLocaleLowerCase());
    });
  // Any sync errors will cause promise to fail
  // Only catch nearest to failure will continue
  // Catch is only called in case of error in the preceding chain

  // Promises allows for a better async programming paradigm than raw call backs:
  //  Errors jump to the tailing catch
  //  Sync errors get caught by tailing catch

  // Typescript and Promises
  //  Infers response types
  // Unwraps function calls

  // Convert to callback style
  //  reject if error
  //  resolve if good

  // Revisit JSON Sync example with Promises

  function readFileAsync(filename: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // dir + filename
      let fileName = process.cwd() + "/logic/" + filename;
      fs.readFile(fileName, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  function loadJSONAsync2(filename: string): Promise<any> {
    return readFileAsync(filename).then(function(res) {
      return JSON.parse(res);
    });
  }
  console.log(123);
  loadJSONAsync2("promise.json")
    .then(function(val) {
      console.log(val);
    })
    .catch(function(err) {
      console.log("good.json error", err.message);
    });

  ///////////////////////
  // Parallel Flow

  function loadItem(id: number): Promise<{ id: number }> {
    return new Promise(resolve => {
      console.log(`loading item ${id}`);
      setTimeout(() => {
        resolve({ id: id });
      }, 1000);
    });
  }

  // chaining
  let item1, item2;
  loadItem(1)
    .then(res => {
      item1 = res;
      return loadItem(2);
    })
    .then(res => {
      item2 = res;
      console.log("done");
    });

  // Parallel
  Promise.all([loadItem(50), loadItem(150)]).then(res => {
    [item1, item2] = res;
    console.log("Done");
  });

  var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, "Task one wins");
  });

  var task2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, "Task two wins");
  });

  // Parallel Race conditions
  Promise.race([task1, task2]).then(response => {
    console.log(response);
  });

  // Converting callbacks to Promise
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms, ms));
  delay(2000).then(value => console.log(value));

  // const readFile = util.promisify(fs.readFile);
}
promise();
