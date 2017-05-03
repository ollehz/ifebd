
	var Oul = document.createElement('ul');
	Oul.setAttribute('id', 'numList');
	var Obody = document.getElementsByTagName('body');
	var inputNum, createLi, createTxtNode;
	insertAfter(Oul, $('sortToS'));
	var inputTxt = $('num')
		//获取id元素
	function $(idElm){
		return document.getElementById(idElm);
	}
		//检查输入的元素是不是空值
	function testInputVal (){
		if(inputTxt.value == null || inputTxt.value == ''){
			alert('输入不能为空，请在输入框内输入有效数字');
			inputNum = '';
		} 
		else if(inputTxt.value > 100 || inputTxt.value < 10){
			alert('请在输入框内输入在10~100范围内的有效数字');
			inputNum = '';
		}
		else {
			inputNum = inputTxt.value;
		}
		return inputNum;
	}
		//创建元素li
	function createLiNode(){
		createLi = document.createElement('li');
		createTxtNode = document.createTextNode(parseInt(inputTxt.value));
		createLi.appendChild(createTxtNode);
		createLi.style.height = (inputNum*2) + "px";
		createLi.style.lineHeight = (inputNum*2) + "px";	
	}
		//判断页面中有没有li元素
	function hasLi() {
		if( $('numList').children.length == 0 ){
			alert("请先添加一个元素到列表");
			return false;
		} 
		return true;
	}
	//左侧入
	function leftIn() {
		testInputVal();

		var OulLiLength = Oul.children.length;
			console.log(OulLiLength)
			if(OulLiLength < 60) {
				if(inputNum) {
					createLiNode();

					var uLfirChildNode = Oul.firstElementChild;
					Oul.insertBefore(createLi,uLfirChildNode);		
					$('num').value = "";
				}	
			} else {
				alert("队列元素上限为60个！")
			}
	}
	//右侧入
	function rightIn(){
		testInputVal();

		var OulLiLength = Oul.children.length;
			console.log(OulLiLength)
			if(OulLiLength < 60) {
				if(inputNum) {
					createLiNode();

					Oul.appendChild(createLi);		
					$('num').value = ""; 
				}	
			} else {
				alert("队列元素上限为60个！")
			}
	}
	//左侧出
	function leftOut() {
		if(hasLi()) {
			var deleNum = Oul.firstElementChild.innerHTML;
			alert(deleNum);
			Oul.firstElementChild.remove();
		} 
	}
	//右侧出
	function rightOut() {
		if(hasLi()) {
			var deleNum = Oul.lastElementChild.innerHTML;
			alert(deleNum);
			Oul.lastElementChild.remove();
		}
	}
	//点击任意一个从队列删除
	function removeLi(e){
		var e = event || window.event;
		source = e.target || e.srcElement;
		if(source.nodeName.toLowerCase() == 'li'){
			alert(e.)
			$('numList').removeChild(e.target);
			e.stopPropagation();
		}
	}
	//排序
	function rank(e) {
		var li = document.getElementsByTagName('li');
		var arr = [];
		for (var i = 0; i < li.length; i++) {
			arr[i] = li[i].innerHTML;
		}
		var target = e.target || e.srcElement;
		if (target.name == "sortToB") {
			//alert("toda");
			var z = arr.sort(function(a,b) {
				return a - b;
			})
		}else if (target.name == "sortToS") {
			//alert("toxiao");
			var z = arr.sort(function(a, b) {
				return b - a;
			})
		}
		Oul.innerHTML = '';
		for (var i = 0; i < z.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = z[i];
			li.style.height = (z[i]*2) + 'px';
			li.style.lineHeight = (z[i]*2) + 'px';
			Oul.appendChild(li);
		}
	}

	
	$('leftIn').onclick = leftIn;	
	$('rightIn').onclick = rightIn;	
	$('leftOut').onclick = leftOut;
	$('rightOut').onclick = rightOut;

	Oul.addEventListener('click', removeLi);
	//排序从小到大
	$('sortToB').addEventListener('click', rank);
	//排序从大到小
	$('sortToS').addEventListener('click', rank);
	//在元素后面添加元素
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}





// var childLength = Obody[0].children.length-1;
// var childLengthNode = Obody[0].children[childLength-2]
// console.log(childLengthNode);
// console.log(childLength);

	// $('test').onclick = function(){
	// 	var x = this.getAttribute('id');
	// 	alert(x);
	// }


 
