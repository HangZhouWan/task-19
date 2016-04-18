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
	leftIn.onclick = Unshift;
	rightIn.onclick = Push;
	leftOut.onclick = Shift;
	rightOut.onclick = Pop;
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
		if(list.length<=60){
             list.unshift(input);
		}
		else{
			alert("最多只能输入60项");
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
		if(list.length<=60){
	        list.push(input);
		}
		else{
			alert("最多只能输入60项");
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
	diplayList();
}
function Pop(){
	var input = document.getElementById("input").value;
	if(list.length!==0){
	var items = list.pop();
	alert(items);
	}
	diplayList();
}
