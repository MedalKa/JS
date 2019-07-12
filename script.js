for(i=10; i<=20; i++){
	console.log(i);
}
for(i=10; i<=20; i++){
	console.log(Math.pow(i,2));
}
sum=0;
for(i=10; i<=20; i++){
	sum+=i;
	console.log(sum);
}

function buttonClick(){
	rad=document.getElementsByName('algorithm');
	resultDiv = document.getElementById('result');
	resultDiv.innerHTML="";
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	if(!x1.length || !x2.length){
	alert("Поля x1 и x2 должны быть заполнены.");
	}
	else {
		if(Number.isNaN(parseInt(x1)) || Number.isNaN(parseInt(x2))){
			alert("В поля x1 и x2 должны быть введены числовые значения.");
	} else {
	if(rad[0].checked){
		sumAll();
	} 
	if(rad[1].checked){
		multiplicationAll();
	} 
	if(rad[2].checked){
		primeAll();
	} 
}

function sumAll(){
	resultDiv = document.getElementById('result');
	resultDiv.innerHTML="";
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	x1=parseInt(x1);
	x2=parseInt(x2);
	sum=0;
	if(x1<x2){
		for(i=x1; i<=x2; i++){
			sum+=i;
		}
	resultDiv.append(+sum);
	} else {
		for(i=x2; i<=x1; i++){
			sum+=i;
		}
	resultDiv.append(+sum);
	}
}

function multiplicationAll(){
	resultDiv = document.getElementById('result');
	resultDiv.innerHTML="";
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	x1=parseInt(x1);
	x2=parseInt(x2);
	sum=1;
	if(x1<x2){
		for(i=x1; i<=x2; i++){
			sum*=i;
		}
	resultDiv.append(+sum);
	} else {
		for(i=x2; i<=x1; i++){
			sum*=i;
		}
	resultDiv.append(+sum);
	}
}


function primeAll(){
	resultDiv = document.getElementById('result');
	resultDiv.innerHTML="";
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	x1=parseInt(x1);
	x2=parseInt(x2);
	var arr = new Array(x2);
	for(i=0;i<arr.length;i++){
		arr[i]=true;
	}
	arr[0]=false;
	arr[1]=false;
	for(i=2;i*i<x2;i++){
		if(arr[i]){
			for(j=i*i;j<x2;j+=i;){
				arr[j]=false;
			}
		}
	}
	for(i=0;i<x1;i++){
		arr[i]=false;
	}
	for(i=0;i<arr.length;i++){
		if(arr[i]==true){
			resultDiv.append(" "+arr[i]);
		}
	}
}


function clearButton(){
	document.getElementById('x1').value="";
	document.getElementById('x2').value="";
}

