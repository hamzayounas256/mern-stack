window.onload = function()
{
    console.log("loading...");
    var inp1 = document.getElementById("myinp1");
    var inp2 = document.getElementById("myinp2");
    // var res = document.getElementById("res");
    var btn = document.getElementById("mybtn");
    btn = Number(inp1) + Number(inp2);
    // res.innerHTML = btn;
    btn.onclick = function(){
        // res = btn.value;
        console.log("The result is the ");
        console.log(btn);
    }
}