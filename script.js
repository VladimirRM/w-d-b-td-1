var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild;
  myNodeList[i].appendChild(span);
}
