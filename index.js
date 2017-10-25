const database = require('./database');
const input = document.getElementById("myText").value;
var text = "";
setInterval(function(){
	$.getScript("db.json", function(){
	if(text != db["db"][db.db.length - 1]["text"]){
	var input = document.getElementById ("text_area_2");
	input.selectionStart = db["db"][db.db.length - 1]["char"];
	input.selectionEnd = db["db"][db.db.length - 1]["char"];
	insertAtCaret('text_area_2', db["db"][db.db.length - 1]["text"]);
	text = db["db"][db.db.length - 1]["text"];
	}
});
}, 100);
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
