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
  // background(255,255,255);
  // fill(0,0,0);
  // text(latestData, 10, 10);
}





var neighborhoodSerial1;
var neighborhoodSerial2;
var neighborhoodSerial3;
var neighborhoodSerial4;


function updateNewSerial(buurt) {
  if (buurt.classList.contains("greenBuurt") && greenActive == false) {
    serial.write("0");
  } else if (buurt.classList.contains("limeBuurt") && limeActive == false) {
    serial.write("0");
  } else if (buurt.classList.contains("yellowBuurt") && yellowActive == false) {
    serial.write("0");
  } else if (buurt.classList.contains("orangeBuurt") && orangeActive == false) {
    serial.write("0");
  } else if (buurt.classList.contains("redBuurt") && redActive == false) {
    serial.write("0");
  } else {

    if (buurt.classList.contains("greenBuurt")) {
      serial.write("1");
    } else if ((buurt.classList.contains("limeBuurt"))) {
      serial.write("2");
    } else if ((buurt.classList.contains("yellowBuurt"))) {
      serial.write("3");
    } else if ((buurt.classList.contains("orangeBuurt"))) {
      serial.write("4");
    } else if ((buurt.classList.contains("redBuurt"))) {
      serial.write("5");
    }

  }
}



function updateNewSerial2(buurt) {

    if (buurt.classList.contains("greenBuurt")) {
      serial.write("1");
    } else if ((buurt.classList.contains("limeBuurt"))) {
      serial.write("2");
    } else if ((buurt.classList.contains("yellowBuurt"))) {
      serial.write("3");
    } else if ((buurt.classList.contains("orangeBuurt"))) {
      serial.write("4");
    } else if ((buurt.classList.contains("redBuurt"))) {
      serial.write("5");
    }

}




function sendNewSerial() {
  serial.write("<");
  updateNewSerial(buurtLime1);
  updateNewSerial(buurtGreen1);
  updateNewSerial(buurtOrange2);
  updateNewSerial(buurtYellow1);
  serial.write(">");
}


function sendNewSerial2() {
  serial.write("<");
  updateNewSerial(buurtLime1);
  updateNewSerial(buurtGreen1);
  updateNewSerial(buurtOrange2);
  updateNewSerial(buurtYellow1);
  serial.write(">");
}


function annoying(character) {
  serial.write(character);
  print(character);
}
