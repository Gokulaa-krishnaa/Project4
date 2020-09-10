function uploadfunc(){
	var x=document.getElementById("inputfile");
    var y=document.getElementById("previewarea");
    var file = new SimpleImage(x)
    file.drawTo(y);
}
// function upload(){
//   var x1=document.getElementById("imageme");
//   image=new SimpleImage(x1);
//   var canx=document.getElementById("inputimg");
//   image.drawTo(canx);
// }