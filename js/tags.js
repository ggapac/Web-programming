document.addEventListener("DOMContentLoaded", getData())

function getData() {
  var request = new XMLHttpRequest();
	request.addEventListener("load", addTags);
	request.open("GET", "./json/tags.json");
	request.responseType = "text";
	request.send();
}

function addTags(event) {

  var tags = JSON.parse(this.responseText);
  var div = document.querySelector(".tags");
  console.log(div)

  div.innerHTML = '<a class ="add" href="#addTag">+</a><h3>TAGS</h3><ul>';

  for (i in tags.tags) {
    if (tags.tags[i].name == "All") {
      div.innerHTML += '<li style="list-style-type: none!important;"><input type="checkbox" checked>' + tags.tags[i].name + '</li>';
    }
    else {
      div.innerHTML += '<li style="list-style-type: none!important;"><input type="checkbox">' + tags.tags[i].name + '</li>';
    }
  }
  div.innerHTML += '</ul>';
}
