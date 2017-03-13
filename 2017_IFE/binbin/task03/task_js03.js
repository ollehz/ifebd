window.onload = function(){
	var $btn = document.getElementById('sort-btn');
	var $source = document.getElementById('source');
	var $li = $source.getElementsByTagName('li');
	var $b = document.getElementsByTagName('b');
	var liLen = $li.length;
	var $resort = document.getElementById('resort');
	var arrData = [];
	var zero = 0, one = 1;
	/*
		将页面上的城市名字及对应空气质量 获取到
		返回一个数组
		data = [
			["北京", 90],
			["上海", 70]
			......
		]
	*/

	function getData() {
		for (var i = 0; i < liLen; i++) {
			var liTxt = $li[i].innerText;
			//将字符串 转换成数组
			var txtArr = liTxt.split(': ');
			arrData.push(txtArr);
			/*
				var city = arrData[i][0].substring(0,arrData[i][0].length-4);
				arrData[i][0] = city;
				console.log(city);
			*/
		}
		//console.log(arrData);
		return arrData;

	}

	/*
		从小到大排序	
	*/
	function sortAqiData(data) {
		//console.log(arrData);
		arrData.sort(function(prev, next) {
			return prev[1] - next[1];
		})
		console.log(arrData);
	}


	/*
		输出显示到id为resort的列表中
	*/
	function render(data) {
		for(var i = 0; i < liLen; i++) {
			//创建li元素，<b>元素
			var createli = document.createElement('li');
			var createStrong = document.createElement('b');
			//创建<b>元素内的文本元素，并添加到<b>元素内
			var createStrongTxt = document.createTextNode(arrData[i][one]);
			var x = createStrong.appendChild(createStrongTxt);
			//创建li文字里的 城市文本 元素
			var arrDataTxt = arrData[i][zero] + ': ';
			//追加到lili元素后面
			createli.appendChild(document.createTextNode(arrDataTxt));
			createli.appendChild(createStrong);
			$resort.appendChild(createli);
		}
		
	}
	// <li>
	// 	杭州
	// 	<b>
	// 		74
	// 	</b>
	// </li>

	function btnHandle() {
		var aqiData = getData();
		aqiData = sortAqiData(aqiData);
		render(aqiData);
	}

	/*
		给button 绑定一个点击事件,点击时触发btnHandle函数
	*/
	// function re() {
	// 	var z = $source.innerHTML;
	// 	console.log(z); 
	// }
	function init() {
		$btn.onclick = function(){
			btnHandle();
			//re();

		}
	}
	init();
}
