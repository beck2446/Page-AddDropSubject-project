let messageAlert = "";
var information = {};
var addValue = parseInt(document.getElementById('numberAddSub').value, 10);
var deleteValue = parseInt(document.getElementById('numberDeleteSub').value, 10);
var tableAddSub = document.getElementById("tableAddSub");
var tableDeleteSub = document.getElementById("tableDeleteSub");

AddTable1()

function AddTable1() {
    addValue = isNaN(addValue) ? 0 : addValue;
    if (addValue < 10 && (addValue + deleteValue) < 10) {
        addValue++;
        document.getElementById('numberAddSub').value = addValue;
        var row = tableAddSub.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        cell1.innerHTML = addValue;
        cell2.innerHTML = `<input type="text" id="numCoursesAdd" name="${addValue}numCoursesAdd" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell3.innerHTML = `<input type="text" id="nameCoursesAdd" name="${addValue}nameCoursesAdd" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell4.innerHTML = `<input type="text" id="numSectionAdd" name="${addValue}numSectionAdd" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell5.innerHTML = `<input type="text" id="unitAdd" name="${addValue}unitAdd" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell6.innerHTML = `<select id="day1Add" name="${addValue}day1Add"required><option value="" selected>--Date--</option><option value="จันทร์">Mon.</option><option value="อังคาร">Tue.</option><option value="พุธ">Wed.</option><option value="พฤหัสบดี">Thr.</option><option value="ศุกร์">Fri.</option><option value="เสาร์">Sat.</option><option value="อาทิตย์">Sun.</option></select></label><label for="time1"><input type="time" id="time1.1Add" name="${addValue}time1.1Add" style="border: none;border-bottom: none;"required>/<input type="time" id="${addValue}time1.2Add" name="time1.2Add" style="border: none;border-bottom: none;"required><br></label><select id="day2Add" name="${addValue}day2Add"><option value="" selected>--Date--</option><option value="จันทร์">Mon.</option><option value="อังคาร">Tue.</option><option value="พุธ">Wed.</option><option value="พฤหัสบดี">Thr.</option><option value="ศุกร์">Fri.</option><option value="เสาร์">Sat.</option><option value="อาทิตย์">Sun.</option></select></label><label for="time2"><input type="time" id="time2.1Add" name="${addValue}time2.1Add" style="border: none;border-bottom: none;">/<input type="time" id="time2.2Add" name="${addValue}time2.2Add" style="border: none;border-bottom: none;"></label`;
        cell7.innerHTML = `<input type="text" id="name_TeacherAdd" name="${addValue}name_TeacherAdd" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell8.innerHTML = `<input type="checkbox" id="purposeAdd" name="${addValue}purposeAdd" value="add">`;
    }
}

function DeleteTable1() {
    addValue = isNaN(addValue) ? 0 : addValue;

    if (addValue > 0 && (addValue + deleteValue) > 1) {
        addValue > 0 ? addValue-- : addValue = 0;
        document.getElementById('numberAddSub').value = addValue;
        var row = tableAddSub.deleteRow(-1);
    }
}

function AddTable2() {
    deleteValue = isNaN(deleteValue) ? 0 : deleteValue;
    if (deleteValue < 10 && (addValue + deleteValue) < 10) {
        deleteValue++;
        document.getElementById('numberDeleteSub').value = deleteValue;

        var row = tableDeleteSub.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        cell1.innerHTML = deleteValue;
        cell2.innerHTML = `<input type="text" id="numCoursesDelete" name="${deleteValue}numCoursesDelete" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;" required>`;
        cell3.innerHTML = `<input type="text" id="nameCoursesDelete" name="${deleteValue}nameCoursesDelete" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell4.innerHTML = `<input type="text" id="numSectionDelete" name="${deleteValue}numSectionDelete" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell5.innerHTML = `<input type="text" id="unitDelete" name="${deleteValue}unitDelete" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell6.innerHTML = `<select id="day1Delete" name="${deleteValue}day1Delete"required><option value="" selected>--Date--</option><option value="จันทร์">Mon.</option><option value="อังคาร">Tue.</option><option value="พุธ">Wed.</option><option value="พฤหัสบดี">Thr.</option><option value="ศุกร์">Fri.</option><option value="เสาร์">Sat.</option><option value="อาทิตย์">Sun.</option></select></label><label for="time1"><input type="time" id="time1.1Delete" name="${deleteValue}time1.1Delete" style="border: none;border-bottom: none;"required>/<input type="time" id="time1.2Delete" name="${deleteValue}time1.2Delete" style="border: none;border-bottom: none;"required><br></label><select id="day2Delete" name="${deleteValue}day2Delete"><option value="" selected>--Date--</option><option value="จันทร์">Mon.</option><option value="อังคาร">Tue.</option><option value="พุธ">Wed.</option><option value="พฤหัสบดี">Thr.</option><option value="ศุกร์">Fri.</option><option value="เสาร์">Sat.</option><option value="อาทิตย์">Sun.</option></select></label><label for="time2"><input type="time" id="time2.1Delete" name="${deleteValue}time2.1Delete" style="border: none;border-bottom: none;">/<input type="time" id="time2.2Delete" name="${deleteValue}time2.2Delete" style="border: none;border-bottom: none;"></label>`;
        cell7.innerHTML = `<input type="text" id="name_TeacherDelete" name="${deleteValue}name_TeacherDelete" placeholder="คลิกเพื่อกรอกข้อมูล"style="border: none;border-bottom: none; background-color: #FFFAF6;"required>`;
        cell8.innerHTML = `<input type="checkbox" id="purposeDelete" name="${deleteValue}purposeDelete" value="add">`;
    }
}

function DeleteTable2() {
    deleteValue = isNaN(deleteValue) ? 0 : deleteValue;

    if (deleteValue > 0 && (addValue + deleteValue) > 1) {
        deleteValue > 0 ? deleteValue-- : deleteValue = 0;
        document.getElementById('numberDeleteSub').value = deleteValue;
        var row = tableDeleteSub.deleteRow(-1);
    }
}

function submitForm(event) {
    event.preventDefault();
    const submit = new FormData(event.target);

    var add = [];
    for (var i = 1; i <= addValue; i++) {
        var addSub = {
            subjectCode: submit.get(`${i}numCoursesAdd`),
            subjectName: submit.get(`${i}nameCoursesAdd`),
            subjectSection: submit.get(`${i}numSectionAdd`),
            subjectDate: submit.get(`${i}day1Add`) + "|" + submit.get(`${i}time1.1Add`) + "-" + submit.get(`${i}time1.2Add`) + "," + submit.get(`${i}day2Add`) + "|" + submit.get(`${i}time2.1Add`) + "-" + submit.get(`${i}time2.2Add`),
            subjectCredit: submit.get(`${i}unitAdd`),
            subjectTeacher: submit.get(`${i}name_TeacherAdd`),
            subjectTeacherCheck: checkBoolean(submit.get(`${i}purposeAdd`))
        }
        add.push(addSub);
    }
    var drop = [];
    for (var i = 1; i <= deleteValue; i++) {
        var dropSub = {
            subjectCode: submit.get(`${i}numCoursesDelete`),
            subjectName: submit.get(`${i}nameCoursesDelete`),
            subjectSection: submit.get(`${i}numSectionDelete`),
            subjectDate: submit.get(`${i}day1Delete`) + "|" + submit.get(`${i}time1.1Delete`) + "-" + submit.get(`${i}time1.2Delete`) + "," + submit.get(`${i}day2Delete`) + "|" + submit.get(`${i}time2.1Delete`) + "-" + submit.get(`${i}time2.2Delete`),
            subjectCredit: submit.get(`${i}unitDelete`),
            subjectTeacher: submit.get(`${i}name_TeacherDelete`),
            subjectTeacherCheck: checkBoolean(submit.get(`${i}purposeDelete`))
        }
        drop.push(dropSub);
    }

    const info = {
        addSubjectList: add,
        dropSubjectList: drop
    };
    console.log(JSON.stringify(info, null, 2));
}
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function checkBoolean(event) {
    if (event == "add") {
        return true;
    } else {
        return false;
    }
}


function table_to_array(table_id) {
    var myTab = document.getElementById(table_id);
    var arrValues = [];

    for (row = 1; row < myTab.rows.length; row++) {
        // loop through each cell in a row.
        var informationFromArray = {};
        var count = 0;
        for (c = 0; c < myTab.rows[row].cells.length; c++) {
            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].value == '' || element.childNodes[0].value < 1) {
                count -= 1;
            }
            if (c == 1) {
                informationFromArray["subjectCode"] = element.childNodes[0].value;
                count++;
            }
            else if (c == 2) {
                informationFromArray["subjectName"] = element.childNodes[0].value;
                count++;
            }
            else if (c == 3) {
                informationFromArray["subjectSection"] = element.childNodes[0].value;
                count++;
            }
            else if (c == 4) {
                informationFromArray["subjectDate"] = element.childNodes[0].value;
                count++;
            }
            else if (c == 5) {
                informationFromArray["subjectCredit"] = element.childNodes[0].value;
                count++;
            }
            else if (c == 6) {
                informationFromArray["subjectTeacher"] = element.childNodes[0].value;
                count++;
            }
            else if (c == 7) {
                if (element.childNodes[0].value == "on") {
                    informationFromArray["subjectTeacherCheck"] = false;
                }
                else {
                    informationFromArray["subjectTeacherCheck"] = true;
                }
            }
        }
        if (count == 6) {
            arrValues.push(informationFromArray);
        }
        else {
            if (table_id == 'tableAddSub') {
                messageAlert = messageAlert + "All information in Add table must be filled out or Credit should be more than 0\n";
                return 0;
            } else if (table_id == 'tableDeleteSub') {
                messageAlert = messageAlert + "All information in Drop table must be filled out or Credit should be more than 0\n";
                return 0;
            }

        }
    }
    if (table_id == 'tableAddSub') {
        information["addSubjectList"] = arrValues;
    } else if (table_id == 'tableDeleteSub') {
        information["dropSubjectList"] = arrValues;
    }
}

function checkreason(){
    let valueReason = document.getElementById("reason").value;
  if (valueReason == "") {
    messageAlert = messageAlert + "Reason must be filled out\n";
    return false;
  }
  information["reason"] = "" + valueReason;
}

function checkEverything() {
    table_to_array("tableAddSub");
    table_to_array("tableDeleteSub");
    checkreason();

    if (messageAlert != "") {
        alert(messageAlert);
        messageAlert = "";
        return false;
    }
    else if (messageAlert == "") {
        alert("Done input forming");
        location.href = "MainPageStudent.html";
    }
    console.log(JSON.stringify(information, null, 4));
    messageAlert = "";
}