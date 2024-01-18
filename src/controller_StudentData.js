let messageAlert = "";
var information = {};

function checkName() {
  	let valueNameTitle = document.getElementById("namet").value;
  	if (namet == "") {
   	messageAlert = messageAlert + "Name title must be filled out\n";
    	return false;
  	}
  	let valueFirstname = document.getElementById("fname").value;
  	if (valueFirstname == "") {
   	messageAlert = messageAlert + "First name must be filled out\n";
    	return false;
  	}
  	information["studentFirstName"] = valueNameTitle + "" + valueFirstname;
}

function checkLastname() {
  	let valueLastname = document.getElementById("lname").value;
  	if (valueLastname == "") {
    	messageAlert = messageAlert + "Last name must be filled out\n";
    	return false;
  	}
  	information["studentLastName"] = "" + valueLastname;
}

function checkID() {
  	let valueID = document.getElementById("stdID").value;
  	if (!valueID) {
    	messageAlert = messageAlert + "Student ID must be filled out\n";
    }
  	if(valueID.length != 10){
    	messageAlert = messageAlert + "Student ID must be 10 character length of number\n";
    	return false;
  	}
	if(isNaN(valueID)){
    	messageAlert = messageAlert + "Student ID must be only number\n";
    	return false;
  	}
  	information["studentId"] = "" + valueID;
}

function checktStudentYear() {
	let valueYear = document.getElementById("Grade").value;
  	if (valueYear == "") {
    	messageAlert = messageAlert + "Student year must be filled out\n";
    	return false;
  	}
  	information["studentYear"] = "" + valueYear;
}

function checkStudyField(){
	let valueField = document.getElementById("major").value;
  	if (valueField == "") {
    	messageAlert = messageAlert + "Major must be filled out\n";
    	return false;
  	}
  	information["studyField"] = "" + valueField;
}

function checkAdvisor() {
  	let valueAdvisorName = document.getElementById("advisor").value;
  	if (valueAdvisorName == "") {
    	messageAlert = messageAlert + "Advisor must be filled out\n";
    	return false;
  	}
  	information["advisor"] = "" + valueAdvisorName;
}
function checkAddress() {
  	let valueHouseNumber = document.getElementById("num").value;
  	let valueMoo = document.getElementById("moo").value;
  	let valueSubDistrict = document.getElementById("Tambon").value;
  	let valueDistrict = document.getElementById("Amphoe").value;
  	let valueProvince = document.getElementById("Province").value;
  	let valuePostalCode = document.getElementById("PostalCode").value;

  	if (valueHouseNumber == "") {
    	messageAlert = messageAlert + "House number must be filled out\n";
    	return false;
  	}
  	if (valueMoo == "") {
    	messageAlert = messageAlert + "Moo must be filled out\n";
    	return false;
  	}
  	if (valueSubDistrict == "") {
    	messageAlert = messageAlert + "Sub District must be filled out\n";
    	return false;
  	}
  	if (valueDistrict == "") {
    	messageAlert = messageAlert + "District must be filled out\n";
    	return false;
  	}
  	if (valueProvince == "none") {
    	messageAlert = messageAlert + "Province must be selected\n";
    	return false;
  	}
  	if (valuePostalCode == "") {
    	messageAlert = messageAlert + "Postal Code must be filled out\n";
    	return false;
  	}
  	if (valuePostalCode.length != 5){
    	messageAlert = messageAlert + "Postal Code must be 5 character length\n";
    	return false;
  	}
  	information["houseNumber"] = "" + valueHouseNumber;
  	information["moo"] = "" + valueMoo;
  	information["subDistrict"] = "" + valueSubDistrict;
  	information["district"] = "" + valueDistrict;
  	information["province"] = "" + valueProvince;
  	information["postalCode"] = "" + valuePostalCode;
}

function checkNumber(){
  	let valuephoneNumber = document.getElementById("numPhone").value;
  	let valuehouseNumberC = document.getElementById("numHouse").value;
  	if (valuephoneNumber == "") {
    	messageAlert = messageAlert + "Phone Number must be filled out\n";
    	return false;
  	}
  	if (valuephoneNumber.length != 10) {
    	messageAlert = messageAlert + "Phone Number must be 10 character length\n";
    	return false;
  	}
  	if(isNaN(valuephoneNumber)) {
    	messageAlert = messageAlert + "Phone Number must be only number\n";
    	return false;
  	}
  	if(valuephoneNumber.charAt(0) != "0") {
    	messageAlert = messageAlert + "Phone Number must be started with 0\n";
    	return false;
  	}
  	if(valuehouseNumberC != "") {
    	if(isNaN(valuehouseNumberC)) {
      		messageAlert = messageAlert + "House Number must be only number\n";
      		return false;
    	}
    	if(valuehouseNumberC.charAt(0) != "0") {
      		messageAlert = messageAlert + "House Number must be started with 0\n";
      		return false;
	   }
  	}
  	information["mobilePhone"] = "" + valuephoneNumber;
  	information["phone"] = "" + valuehouseNumberC;
}

function checkForm(){
	let valuePetition = document.getElementById("petition").value;
  	if (valuePetition == "") {
    	messageAlert = messageAlert + "Form must be selected\n";
    	return false;
  	}
  	information["form"] = "" + valuePetition;
}

function checkEverything(){
  	checkName();
  	checkLastname();
  	checkID();
  	checktStudentYear();
  	checkStudyField();
  	checkAdvisor();
  	checkAddress();
  	checkNumber();
  	checkForm();
  
  	var c = document.getElementById("petition").value;
  	if (messageAlert != "") {
        alert(messageAlert);
        messageAlert = "";
        return false;
    }
    else if (messageAlert == "") {
        if(c=="add/drop"){
      	location.href='AddDrop.html'
   	}
   	if(c=="exit"){
      	location.href='Quit.html'
   	}
    }
  	console.log(JSON.stringify(information, null, 4));
  	messageAlert = "";
}
