// JavaScript Document
window.onload = function(){
	ChangeList();
	diplayList();
}

var list = [];


function ChangeList(){
	var leftIn = document.getElementById("left-in");
	var rightIn = document.getElementById("right-in");
	var leftOut = document.getElementById("left-out");
	var rightOut = document.getElementById("right-out");
	var Random = document.getElementById("random");
	var newList = document.getElementById("abc");
	leftIn.onclick = Unshift;
	rightIn.onclick = Push;
	leftOut.onclick = Shift;
	rightOut.onclick = Pop;
	Random.onclick = randomList;
	newList.onclick = resort;
	
}
function diplayList(){
	var container = document.getElementById("container");
	container.style.cssText = "width:100%;height:500px;border:1px solid black ; display:flex;flex-warp:nowarp;align-items:flex-end;"
	var inner = "";
	for(i in list){
		inner += "<div style='width:10%; margin-left:5px;height:"+(list[i]*5)+"px;background-color:red;'></div>";
	}
	container.innerHTML = inner;
}

function Unshift(){
	var input = document.getElementById("input").value;
	if((!isNaN(Number(input)))&&input !== ""){
		if(list.length<60){
			if(input>=10&&input<=100){
                list.unshift(input);
			}
			else{
				alert("数字范围是10-100!");
			}
		}
		else{
			alert("最多只能输入60项");
			document.getElementById("input").value = "";
			return false;
		}
	}
	else{
		alert("请输入一个数字！");
		return false;
	}
	document.getElementById("input").value = "";
	diplayList()
}
function Push(){
	var input = document.getElementById("input").value;
	if((!isNaN(Number(input)))&&input !== ""){
		if(list.length<60){
			if(input>=10&&input<=100){
	           list.push(input);
			}
			else{
				alert("数字范围是10-100!");
			}
		}
		else{
			alert("最多只能输入60项");
			document.getElementById("input").value = "";
			return false;
			}
	}
	else{
		alert("请输入一个数字");
		return false;
	}
	document.getElementById("input").value = "";
	diplayList();
}
function Shift(){
	var input = document.getElementById("input").value;
	if(list.length!==0){
	var items = list.shift();
	alert(items);
	}
	else{
		alert("没有数组！");
	}
	diplayList();
}
function Pop(){
	var input = document.getElementById("input").value;
	if(list.length!==0){
	var items = list.pop();
	alert(items);
	}
	else{
		alert("没有数组！");
	}
	diplayList();
}
function randomList(){
	list = [];
	for(var i = 0;i<60;i++){
		var Random = parseInt(Math.random()*90+10);
		list.push(Random);
	}
	diplayList();
	for(var i in list){
		if(list[i]>100||list[i]<10){
             console.log(list[i]);
		}
	}
}
function quickSort(arr){
	if(arr.length<=1){
		return arr
	}
	var pivotIndex = Math.round(arr.length/2);
	var pivot = arr.splice(pivotIndex,1)[0];
	var left = [],right = [];
	 for(var i = 0;i<arr.length;i++){
		if(arr[i]<pivot){ 
			left.push(arr[i]);
		}
		else{
		  right.push(arr[i]);
		}	    
	 }
	return quickSort(left).concat([pivot],quickSort(right));
}

function resort(){
	list = quickSort(list);
	diplayList();
	
}
	
