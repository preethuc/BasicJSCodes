const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require("os"); //to get the num of cpus inside the processor

const numCpus = os.cpus().length;
app.get("/", (req, res) => {
  res.send(`response from server ${process.pid}`);
  cluster.worker.kill(); //kill the worker and execute else if
});
// if (cluster.isMaster) {
//   for (let i = 0; i < numCpus; i++) {
//     cluster.fork();
//   }
// }
// else {
//   app.listen(3000, () => {
//     console.log(`Running on the port 3000 and pid : ${process.pid}`);
//   });
// }
if (cluster.isWorker) {
  app.listen(3000, () => {
    console.log(`Running on the port 3000 and pid : ${process.pid}`);
  });
} else if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
}

cluster.on("exit", (worker, code, signal) => {
  console.log(`worker ${worker.process.pid} is dead`);
  cluster.fork();
});
