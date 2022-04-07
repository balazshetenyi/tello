const http = require("http");
const express = require("express");
const Tello = require("tello-drone");
 
const app = express();
app.use(express.static('public'));
const port = 3000;



app.get("/", function(req, res) {

});

let drone;


app.get("/command", function(req, res){

	console.log(req.query);
	
	try {
		if (req.query.val) {
			drone.send(req.query.command, { value: req.query.val });
		}
		else {
			drone.send(req.query.command);
		}
	}
	catch (error) {
		console.log(error);
	}
	
    res.send("OK!");
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
