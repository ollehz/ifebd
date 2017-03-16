window.onload = function(){
	var body = document.getElementsByTagName('body')[0];
	var input_txt= document.getElementById('input_txt');
	var ul = document.createElement('ul');
	ul.setAttribute('id', 'newUl');
	body.appendChild(ul);
	var $li = document.getElementsByTagName('li');

	function $(str){
		return document.getElementById(str);
	}
	//验证输入的字符 是不是数字
	function checkNumber(num) {
		var reg = /^[0-9]+\.?[0-9]*$/gm;
		if(reg.test(num)) {
			return true;
		}
		return false;
	}
	//判断输入的字符是不是数字
	input_txt.onblur = function(){
		console.log(input_txt.value);
		checkNumber(input_txt.value)

		if(!checkNumber(input_txt.value)){
			alert('请重新输入一个整数数字');
			input_txt.value = "";
		}
	}
	// function readyLi() {
	// 	if(input_txt.value == ''||input_txt.value == null){
	// 		return false
	// 	} else {
	// 		var createLi = document.createElement('li');
	// 		var createTxtNode = document.createTextNode(parseInt(input_txt.value));
	// 		createLi.appendChild(createTxtNode);
	// 	}
			
	// }
	function LeftIn(){
		if(input_txt.value == ''||input_txt.value == null) return false;
		var createLi = document.createElement('li');
		var createTxtNode = document.createTextNode(parseInt(input_txt.value));
		createLi.appendChild(createTxtNode);

		var uLfirChildNode = ul.firstElementChild;
		ul.insertBefore(createLi,uLfirChildNode);
	}
	function RightIn(){
		if(input_txt.value == ''||input_txt.value == null) {return false;}
		var createLi = document.createElement('li');
		var createTxtNode = document.createTextNode(parseInt(input_txt.value));
		createLi.appendChild(createTxtNode);

		ul.appendChild(createLi);
	}
	//判断有没有li元素在页面中
	function hasLiEle(){
		if($('newUl').children.length == 0){
				alert('请先添加一个元素');
				return false; //跳出函数
			}
			return true;
	}
	function LeftOut(){
		if( hasLiEle() ){
			var firValue = ul.firstElementChild.innerHTML;
			alert(firValue);
			ul.firstElementChild.remove();
		}
		return false;
	}
	function RightOut(){
		if( hasLiEle() ){
			var lastValue = ul.lastElementChild.innerHTML;
			alert(lastValue);
			ul.lastElementChild.remove();
		}
		return false;
	}

	$('lf-in').addEventListener('click', LeftIn, false);
	$('rg-in').addEventListener('click', RightIn, false);
	$('lf-out').addEventListener('click', LeftOut, false);
	$('rg-out').addEventListener('click', RightOut, false);

	//利用事件委托来执行li的点击删除事件。
	$('newUl').onclick = function(e) {
		var e = event || window.event,
			//target表示在事件冒泡中触发事件的源元素，在IE是srcElement
			source = e.target || e.srcElement;  
			if(source.nodeName.toLowerCase() == 'li') {
				$('newUl').removeChild(e.target);
				e.stopPropagation();
			}
	}
	
}
