let serial;
let latestData = "waiting for data";


function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();

  serial.list();
  serial.open('COM4');

  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
}



function serverConnected() {
  print("Connected to Server");
}



function gotList(thelist) {
  print("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}



function gotOpen() {
  print("Serial Port is Open");
}



function gotClose(){
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}



function gotError(theerror) {
  print(theerror);
}



function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  console.log(currentString);
  latestData = currentString;
}



function draw() {
}



function updateSerial(character) {
  // serial.write(character);
  // print(character);
}
