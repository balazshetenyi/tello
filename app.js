const http = require("http");
const express = require("express");
const Tello = require("tello-drone");
 
const app = express();
app.use(express.static('public'));
const port = 3000;



app.get("/", function(req, res) {

/*
    const drone = new Tello({
        host: "192.168.10.1",     // manually set the host.
        port: "8889",             // manually set the port.
        statePort: "8890",        // manually set the state port.
        skipOK: false,            // dont send the OK message.
    });

    drone.on("connection", () => {
        console.log("Connected to drone");
    });
    
    drone.on("connection", async () => {
    
        try {
            await drone.send("takeoff");
            await drone.send("flip", { value: "f"});
            await drone.send("land");
        }
        catch (error) {
            console.log(error);
        }
    });

    res.send("Hello world!");
    */
});

let drone;


app.get("/fly", function(req, res){

    try {
         drone.send("takeoff");
         drone.send("land");
    }
    catch (error) {
        console.log(error);
    }
    res.send("Hello world!");
});

app.listen(port, function(){
    drone = new Tello({
        host: "192.168.10.1",     // manually set the host.
        port: "8889",             // manually set the port.
        statePort: "8890",        // manually set the state port.
        skipOK: false,            // dont send the OK message.
    });

    drone.on("connection", () => {
        console.log("Connected to drone");
    });

    console.log(`Example app listening on port ${port}`);
});
