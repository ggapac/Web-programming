document.addEventListener("DOMContentLoaded", getInfo())

function getInfo() {
  var request = new XMLHttpRequest();
	request.addEventListener("load", showInfo);
	request.open("GET", "./json/user.json");
	request.responseType = "text";
	request.send();
}

function showInfo(event) {
  var info = JSON.parse(this.responseText);
  console.log(info.user[0].firstname)
  var tabela = document.querySelector(".infoUser");


  tabela.innerHTML = '<tr><th>FIRST NAME:</th><th>' + info.user[0].firstname + '</th></tr>'
                    +'<tr><th>LAST NAME:</th><th>' + info.user[0].lastname + '</th></tr>'
                    +'<tr><th>PRODUCTIVITY POINTS:</th><th>' + info.user[0].productivity + '</th></tr>'
                    +'<tr><th>NUMBER OF TO DOs:</th><th>' + info.user[0].todos + '</th></tr>'
                    +'<tr><th>NUMBER OF DONEs:</th><th>' + info.user[0].dones + '</th></tr>'
  geolocation();
}

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    noPosition();
  }
}

function showPosition(position) {
  var tabela = document.querySelector(".infoUser");
  tabela.innerHTML += '<tr><th>LATITUDE:</th><th>' + (position.coords.latitude).toFixed(3)
                   + '</th></tr><tr><th>LONGITUDE:</th><th>' + (position.coords.longitude).toFixed(3)
                   + '</th></tr>'
}
function noPosition() {
  var tabela = document.querySelector(".infoUser");
  tabela.innerHTML += '<tr><th>LATITUDE:</th><th>' + 'none'
                   + '</th></tr><tr><th>LONGITUDE:</th><th>' + 'none'
                   + '</th></tr>'
}
