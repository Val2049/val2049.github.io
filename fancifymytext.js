function hello() {
    alert("Hello, world!");
}
function bigger(){
    var textArea = document.getElementById("textArea").style.fontSize = "24px";
    alert("Text is bigger");
  }
  function fancy(){
    var textFancy = document.getElementById("textFancy");
    if(document.getElementById("fancy").checked){
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "blue";
        alert("Text is fancy");
    }
  }
  function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var newText = text.toUpperCase();
    var mooText = newText.split(".").join("-Moo.");
    textArea.value = mooText;
  }
  function boring(){
    var textArea= document.getElementById("textArea");
    if(document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "black";
        alert("Text is boring");
    }
}
    
