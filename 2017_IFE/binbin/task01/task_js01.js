window.onload = function(){
	var inputTxt = document.getElementById('aqi-input');
	var btn = document.getElementById('button');
	var inputShow = document.getElementById('aqi-display');
	btn.onclick = function(){
		var showTxt = inputTxt.value;
		//console.log(showTxt);
		inputShow.innerHTML = showTxt;
	};
}
