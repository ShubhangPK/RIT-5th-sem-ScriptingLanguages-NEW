
function calgrade(){
	var m1=parseInt(document.getElementById("m1").value);
	var m2=parseInt(document.getElementById("m2").value);
	var m3=parseInt(document.getElementById("m3").value);
	var m4=parseInt(document.getElementById("m4").value);
	var m5=parseInt(document.getElementById("m5").value);
	var m6=parseInt(document.getElementById("m6").value);
	var btn=document.getElementById("cal");
	btn.style.display = "none";
	var avg=(m1+m2+m3+m4+m5+m6)/6;
	if(avg>89 && avg<=100){
		document.getElementById("result").innerHTML="S+";
	}
	else if(avg>79 && avg<=89){
		document.getElementById("result").innerHTML="S";
	}
	else if(avg>69 && avg<=79){
		document.getElementById("result").innerHTML="A";
	}
	else if(avg>59 && avg<=69){
		document.getElementById("result").innerHTML="B";
	}
	else if(avg>49 && avg<=59){
		document.getElementById("result").innerHTML="C";
	}
	else if(avg>39 && avg<=49){
		document.getElementById("result").innerHTML="D";
	}
	else if(avg< && avg>=0){
		document.getElementById("result").innerHTML="FAIL";
	}
	else{
		alert("WRONG INPUT DATA !");
		btn.style.display="block";
	}
}
