/*alert("Hello, world!"); */
function hello() {
    alert("Hello, world!");
}
function bigger(){
    document.getElementById("textArea").style.fontSize = '24px';
    alert("Text is bigger");
    hello();
  }
  function fancy(){
    let textFancy = document.getElementById("textFancy");
    if(document.getElementById("fancy").checked){
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "blue";
        alert("Text is fancy");
    }
  }
  function moo() {
    /* document.getElementById("textArea").style.textTransform="Uppercase"; */
    
    document.getElementById("textArea");
    let text = textArea.value;
    let newText = text.toUpperCase();
    let mooText = newText.split(".").join("-Moo.");
    textArea.value = mooText;
  }
  function boring(){
    document.getElementById("textArea");
    if(document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "black";
        alert("Text is boring");
    }
}
    
