const express = require("express");
const res = require("express/lib/response");
const app = express();
const userRouter = require("./routers/userRouter");

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["https//localhost:3000"],
  },
});



const port = 5000;

// for reading JSON data
app.use(express.json());

app.use("/user", userRouter);

// creating a endpoint for '/'
app.get("/", (req, res) => {
  // for the server
  console.log("request on /");
  // for the client
  res.send("Request processed on /");
});

app.get("/", (req, res) => {
  // for the server
  console.log("request on /home");
  // for the client
  res.send("Request processed on /home");
});

app.get("/", (req, res) => {
  // for the server
  console.log("request on /add");
  // for the client
  res.send("Request processed on /add");
});

app.listen(port, () => {
  console.log("server started");
});

//  swiper library
// cors = creater origin resource server
