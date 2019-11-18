var btns = document.querySelectorAll(".buttons button");
var object = document.getElementsByClassName("object")[0];

for (i = 0; i < btns.length; i++){
	btns[i].addEventListener("click", manage);
}

function manage() {
	if (this.getAttribute("data-add")) {
	 object.classList.add(this.getAttribute("data-add"));
	}

	if (this.getAttribute("data-remove")) {
	 object.classList.remove(this.getAttribute("data-remove"));
	}

}

