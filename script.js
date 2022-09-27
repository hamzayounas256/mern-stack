window.onload = function()
{
    console.log("loading...");
    var btn = document.getElementById("mybtn");
    btn.onclick = addHandle;
}

function addHandle(){
    var newtodo = document.getElementById("myinp").value;
    var mytodos = document.getElementById("todos");
    var newtext = document.createTextNode(newtodo);
    var myli = document.createElement("li");
    myli.appendChild(newtext);
    mytodos.appendChild(myli);
}

function removeHandle(e){
    var tag = e.target;
  var li = tag.parentNode;
  li.parentNode.removeChild(li);

}