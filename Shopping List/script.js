var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	btn.appendChild(document.createTextNode("delete"));
	btn.classList.add("delete");
	li.appendChild(btn);
	input.value = "";
	triggerDelete();
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDeleteLine(){
	this.classList.toggle("done");
}

function deleteList(){
	var deleteElement = this.parentElement;
	deleteElement.parentNode.removeChild(deleteElement);
}

function triggerDelete(){
	for (var i = 0; i < deleteButton.length; i++) {
		deleteButton[i].addEventListener("click", deleteList);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(i){i.addEventListener("click", toggleDeleteLine)});

triggerDelete();
