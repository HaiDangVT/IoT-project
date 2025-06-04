const firebaseConfig = {
  apiKey: "AIzaSyACiqQEF_0-SUhRqJUxmFjXVu7-Xa-umSs",
  authDomain: "mysmarthome-98cc4.firebaseapp.com",
  databaseURL: "https://mysmarthome-98cc4-default-rtdb.firebaseio.com",
  projectId: "mysmarthome-98cc4",
  storageBucket: "mysmarthome-98cc4.appspot.com",
  messagingSenderId: "529053482451",
  appId: "1:529053482451:web:922687d21bea88d7c24326",
  measurementId: "G-9ETH5Q2KSD",
};

firebase.initializeApp(firebaseConfig);

var nhietdo_pk = document.getElementById("nhietdo");
var dbRef1 = firebase.database().ref("phongkhach").child("nhietdo");
var doam_pk = document.getElementById("doam");
var dbRef2 = firebase.database().ref("phongkhach").child("doam");
var nongdo_pk = document.getElementById("nongdo");
var dbRef3 = firebase.database().ref("phongkhach").child("nongdo");
var buimin_pk = document.getElementById("buimin");
var dbRef4 = firebase.database().ref("phongkhach").child("buimin");

var nhietdo_pn = document.getElementById("nhietdo");
var dbRef5 = firebase.database().ref("phongngu").child("nhietdo");
var doam_pn = document.getElementById("doam");
var dbRef6 = firebase.database().ref("phongngu").child("doam");
var nongdo_pn = document.getElementById("nongdo");
var dbRef7 = firebase.database().ref("phongngu").child("nongdo");
var buimin_pn = document.getElementById("buimin");
var dbRef8 = firebase.database().ref("phongngu").child("buimin");

var nhietdo_pb = document.getElementById("nhietdo");
var dbRef9 = firebase.database().ref("phongbep").child("nhietdo");
var doam_pb = document.getElementById("doam");
var dbRef10 = firebase.database().ref("phongbep").child("doam");
var nongdo_pb = document.getElementById("nongdo");
var dbRef11 = firebase.database().ref("phongbep").child("nongdo");
var buimin_pb = document.getElementById("buimin");
var dbRef12 = firebase.database().ref("phongbep").child("buimin");

function phongkhach() {
  dbRef1.on("value", (snap) => (nhietdo_pk.innerText = snap.val()));
  dbRef2.on("value", (snap) => (doam_pk.innerText = snap.val()));
  dbRef3.on("value", (snap) => (nongdo_pk.innerText = snap.val()));
  dbRef4.on("value", (snap) => (buimin_pk.innerText = snap.val()));
}

function phongngu() {
  dbRef5.on("value", (snap) => (nhietdo_pn.innerText = snap.val()));
  dbRef6.on("value", (snap) => (doam_pn.innerText = snap.val()));
  dbRef7.on("value", (snap) => (nongdo_pn.innerText = snap.val()));
  dbRef8.on("value", (snap) => (buimin_pn.innerText = snap.val()));
}

function phongbep() {
  dbRef9.on("value", (snap) => (nhietdo_pb.innerText = snap.val()));
  dbRef10.on("value", (snap) => (doam_pb.innerText = snap.val()));
  dbRef11.on("value", (snap) => (nongdo_pb.innerText = snap.val()));
  dbRef12.on("value", (snap) => (buimin_pb.innerText = snap.val()));
}

const tem = document.getElementById("tem");
tem.addEventListener("mouseenter", function () {
  this.src = "img_gif/temperature.gif";
});
tem.addEventListener("mouseleave", function () {
  this.src = "img_gif/temperature.png";
});

const hum = document.getElementById("hum");
hum.addEventListener("mouseenter", function () {
  this.src = "img_gif/humidity.gif";
});
hum.addEventListener("mouseleave", function () {
  this.src = "img_gif/humidity.png";
});

const co2 = document.getElementById("co2");
co2.addEventListener("mouseenter", function () {
  this.src = "img_gif/pollution.gif";
});
co2.addEventListener("mouseleave", function () {
  this.src = "img_gif/pollution.png";
});

const dust = document.getElementById("dust");
dust.addEventListener("mouseenter", function () {
  this.src = "img_gif/dust.gif";
});
dust.addEventListener("mouseleave", function () {
  this.src = "img_gif/dust.png";
});

let isOn1 = false;
function Den() {
  isOn1 = !isOn1;
  const den = document.getElementById("den");
  const btn1 = document.getElementById("btn1");
  if (isOn1) {
    den.src = "img_gif/light-bulb.gif";
    den.alt = "On";
    btn1.style.backgroundColor = "#ffffb5";
  } else {
    den.src = "img_gif/light-bulb.png";
    den.alt = "Off";
    btn1.style.backgroundColor = "white";
  }
  firebase
    .database()
    .ref("phongkhach")
    .child("den")
    .set({
      state: isOn1 ? "on" : "off",
    });
}

let isOn2 = false;
function Maylanh() {
  isOn2 = !isOn2;
  const ml = document.getElementById("ml");
  const btn2 = document.getElementById("btn2");
  if (isOn2) {
    ml.src = "img_gif/air-conditioner.gif";
    ml.alt = "On";
    btn2.style.backgroundColor = "#bdf3f3";
  } else {
    ml.src = "img_gif/air-conditioner.png";
    ml.alt = "Off";
    btn2.style.backgroundColor = "white";
  }
  firebase
    .database()
    .ref("phongkhach")
    .child("maylanh")
    .set({
      state: isOn2 ? "on" : "off",
    });
}

let isOn3 = false;
function Mayloc() {
  isOn3 = !isOn3;
  const mlkk = document.getElementById("mlkk");
  const btn3 = document.getElementById("btn3");
  if (isOn3) {
    mlkk.src = "img_gif/air-purifier.gif";
    mlkk.alt = "On";
    btn3.style.backgroundColor = "#fae4d9";
  } else {
    mlkk.src = "img_gif/air-purifier.png";
    mlkk.alt = "Off";
    btn3.style.backgroundColor = "white";
  }
  firebase
    .database()
    .ref("phongkhach")
    .child("maylockhongkhi")
    .set({
      state: isOn3 ? "on" : "off",
    });
}
