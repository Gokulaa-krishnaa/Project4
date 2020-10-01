var slider=document.getElementById("grader")
var grade=document.getElementById("grade")
grade.innerHTML = slider.value;
slider.oninput = function(){
	grade.innerHTML = this.value;
}