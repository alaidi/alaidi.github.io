
function calculate() {
	var x = document.getElementById("octal_val").value;
	conversion_type();
	if(document.getElementById("type").checked){
		if ((/[^0-1]/g.test(x)) || x == "") {
			document.getElementById("error1").innerHTML="Enter a valid Binary value!";
			document.getElementById("octal_val").value = "";
			return 0;
		}else{
			document.getElementById("error1").innerHTML="";
			var outputValue=x.charAt(0);
			var prev=x.charAt(0);
			for(var i = 1; i < x.length; i++) {
				outputValue+=addition_1(prev,x.charAt(i));
				prev = x.charAt(i);
			}
			document.getElementById("result1").value=outputValue;
		}
	}else{
		if ((/[^0-1]/g.test(x)) || x == "") {
			document.getElementById("error1").innerHTML="Enter a valid Gray Code!";
			document.getElementById("octal_val").value = "";
			return 0;
		}else{
			document.getElementById("error1").innerHTML="";
			var outputValue=x.charAt(0);
			var prev=x.charAt(0);
			for(var i = 1; i < x.length; i++) {
				prev=addition_1(prev,x.charAt(i));
				outputValue += prev;
			}
			document.getElementById("result1").value=outputValue;
		}
	}
}
function addition_1(num1,num2){
	if(num1==num2)
		return 0;
	else
		return 1;
}

 function conversion_type(){
	if(document.getElementById("type").checked==false){
		document.getElementById("conversion-result").innerHTML="Binary";
		document.getElementById("input-type").innerHTML="Enter Gray Code";
	}else{
		document.getElementById("conversion-result").innerHTML="Gray Code";
		document.getElementById("input-type").innerHTML="Enter Binary Number";
	}
 }conversion_type();
	 