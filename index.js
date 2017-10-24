const database = require('./database');
var input = document.getElementById("myText").value;
input.addEventListener("keydown", function(evt){
    let Char = String.fromCharCode(evt.keyCode);
    let SeStart = input.selectionStart;
    let arr = {
        'char' : SeStart,
        'user' : 1,
        'text' : Char,
        'date' : 'dd-mm-yyyy',
        'time' : 'hh-mm-ss-msm',
        'op': 1
    }
    database.save(arr);
});