document.addEventListener('DOMContentLoaded', function () {

	// var button = document.getElementById('download-btn');
	var textarea = document.getElementsByTagName('textarea');
	function getTextarea () {
		for (var i = 0; i < textarea.length; i++) {
			console.log(textarea[i]);
			return textarea[i];
		}
	}
	getTextarea();
	// textarea[i].addEventListener('keypress', function() {
	// 	if (this.scrollTop != 0){
	// 		console.log(this.scrollTop);
	// 	   this.style.height = this.scrollHeight + "px";
	// 	}
	// });


	console.log('Loaded');
});
