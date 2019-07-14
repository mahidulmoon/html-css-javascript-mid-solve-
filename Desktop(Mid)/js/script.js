function CalculationPrice(){
	var name = document.getElementById("namebox").value;
	var quantity = document.getElementById("quantitybox").value;
	var fabricselect = document.getElementById("fabrics").value;
	
	
	var totalBill ;
	
	var typeOfDelivary = document.getElementsByName("delivarytype");
	
	var selectedDelivary = "" ;
	for(var i = 0; i < typeOfDelivary.length; i++ ) {
		if(typeOfDelivary[i].checked) 
		selectedDelivary = typeOfDelivary[i].value;
	}
	
	console.log(selectedDelivary);
	if(name =="") {
		document.getElementById("nametext").innerHTML = "Box is required *";
		document.getElementById("nametext").style.color = "red"; 
		
	}
	if(quantity =="") {
		document.getElementById("quantitytext").innerHTML = "Box is required *";
		document.getElementById("quantitytext").style.color = "red"; 
		
	}
	if(selectedDelivary ==""|| selectedDelivary == "undefined")  {
		document.getElementById("delivarytext").innerHTML = "Box is required *";
		document.getElementById("delivarytext").style.color = "red"; 
		
	}
	else {
		var quantity1 = parseInt(quantity);
		var fabric1 = parseInt(fabricselect);
		var delivarType = parseInt(selectedDelivary);
		
		if(quantity1 > 100) {
			totalBill = (((quantity1 * fabric1) - (quantity1 * 5)) + delivarType);
			document.getElementById("ShowResult").innerHTML = "Your total bill = " + totalBill;
			
		} else if(document.getElementById("student").checked) {
			totalBill = ((quantity * fabricselect)   + selectedDelivary);
			document.getElementById("ShowResult").innerHTML = "Your total bill = " + totalBill;
		}
		else {
			totalBill = ((quantity1 * fabric1) + delivarType);
			document.getElementById("ShowResult").innerHTML = "Your total bill = " + totalBill;
		}
	}
	
	
	
}

function PlaceOrder(){

}

function UploadId(){
	var boxChecked = document.getElementById("student").checked;
	if(boxChecked) {
		document.getElementById("fileupload").style.display = "block";
	}
	else 
	{
		document.getElementById("fileupload").style.display = "none";
		
	}
}