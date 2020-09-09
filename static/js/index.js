//https://www.eclipse.org/paho/clients/js/


function total() {
	var x, y;
	x="1";
	y="2";
	message = new Paho.MQTT.Message("t"+" "+ x +" "+ y );
    message.destinationName = "pemaldonado.fie@unach.edu.ec/RASP";
    client.send(message);
	
}
function Hora() {
	var x, y;
	x="1";
	y="2";
	message = new Paho.MQTT.Message("h"+" "+ x +" "+ y );
    message.destinationName = "pemaldonado.fie@unach.edu.ec/RASP";
    client.send(message);
	
}
function Minuto(){	
	var x, y;
	x="1";
	y="2";
	message = new Paho.MQTT.Message("m"+" "+ x +" "+ y );
    message.destinationName = "pemaldonado.fie@unach.edu.ec/RASP";
    client.send(message);
	
}
function Segundos(){	
	var x, y;
	x="1";
	y="2";
	message = new Paho.MQTT.Message("s"+" "+ x +" "+ y );
    message.destinationName = "pemaldonado.fie@unach.edu.ec/RASP";
    client.send(message);
	
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "pemaldonado.fie@unach.edu.ec",
    password: "Paul625366236",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("pemaldonado.fie@unach.edu.ec/WEB");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "pemaldonado.fie@unach.edu.ec/RASP";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
     text=(message.payloadString);
	 console.log(text)
	 document.getElementById("respuesta").innerHTML = text;
  }
