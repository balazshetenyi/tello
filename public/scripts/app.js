$(function(){
	
	$(".button").on("mousedown", function(e) { 
		
		var command = $(e.target).closest(".button").attr("data-command");
		var val = $(e.target).closest(".button").attr("data-value");
		
		console.log("command: ", command);
		console.log("value: ", val);
		
		sendCommand(command, val);

	});
	
	function sendCommand(command, val) {
		axios({
        method: 'get',
        url: '/command',
        params: {
          command: command,
          val: val
        }
      });
	}
});
