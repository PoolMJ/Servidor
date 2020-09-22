//https://www.eclipse.org/paho/clients/js/






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
    console.log("Conectado a la RPI...!!!..!!..!..");
	
    client.subscribe("pemaldonado.fie@unach.edu.ec/pagweb");
    message = new Paho.MQTT.Message("Conectado..........!!!..!!.!..");
    message.destinationName = "pemaldonado.fie@unach.edu.ec/psd";
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

//document.getElementById("N1N2").innerHTML="numeros";

function SUMA(){
	n1=document.getElementById("n1").value;
	n2=document.getElementById("n2").value;
	message = new Paho.MQTT.Message("SM"+" "+ n1 +" "+ n2 );
	message.destinationName="pemaldonado.fie@unach.edu.ec/psd";
	client.send(message);
}

function RESTA(){
	n1=document.getElementById("n1").value;
	n2=document.getElementById("n2").value;
	message = new Paho.MQTT.Message("R"+" "+ n1 +" "+ n2 );
	message.destinationName="pemaldonado.fie@unach.edu.ec/psd";
	client.send(message);
}

function MULTIPLICACION(){
	n1=document.getElementById("n1").value;
	n2=document.getElementById("n2").value;
	message = new Paho.MQTT.Message("M"+" "+ n1 +" "+ n2 );
	message.destinationName="pemaldonado.fie@unach.edu.ec/psd";
	client.send(message);
}

function DIVISION(){
	n1=document.getElementById("n1").value;
	n2=document.getElementById("n2").value;
	message = new Paho.MQTT.Message("DV"+" "+ n1 +" "+ n2 );
	message.destinationName="pemaldonado.fie@unach.edu.ec/psd";
	client.send(message);
}

//____________________HoraTS______________________

function onMessageArrived(message) {
	identificador=(message.payloadString).split(" ")[0];
	 dato=(message.payloadString).split(" ")[1];
	 if(identificador=="T")
	 document.getElementById("hora").innerHTML = dato;
}

