let messageAlert = "";
var information = {};
var arrHead = new Array();  // array for header.
arrHead = ['ลำดับ', 'รหัสวิชา', 'ชื่อวิชา', 'Section', 'วันเวลา', 'หน่วยกิต', 'ชื่อผู้สอน' ,'ผู้สอนอนุญาต'];
function addRows(table_id){ 
  var Tab = document.getElementById(table_id);

  var rowCnt = Tab.rows.length;   // table row count.
  var tr = Tab.insertRow(rowCnt); // the table row.
  //tr = Tab.insertRow(rowCnt);

  for (var c = 0; c < arrHead.length; c++) {
      var td = document.createElement('td'); // table definition.
      td = tr.insertCell(c);

      if (c == 0) { 
          var cent = document.createElement('center') ;
          var num = document.createTextNode(rowCnt+'.') ;
          cent.appendChild(num) ;
          td.appendChild(cent) ;
      }
      else if (c == 5){
          var ele = document.createElement('input');
          ele.setAttribute('type', 'number');
          ele.setAttribute('value', '0');

          td.appendChild(ele);
      }
      else if (c == 7){
          var ele = document.createElement('input');
          var cent = document.createElement('center') ;
          ele.setAttribute('type', 'checkbox');
          ele.setAttribute('value', 'on');
          cent.appendChild(ele)

          td.appendChild(cent);
      }
      else{
          var ele = document.createElement('input');
          ele.setAttribute('type', 'text');
          ele.setAttribute('value', '');

          td.appendChild(ele);
      }
  }
}

function deleteRows(table_id){
  var table = document.getElementById(table_id);
  var rowCount = table.rows.length;
  if(rowCount > '2'){
    var row = table.deleteRow(rowCount-1);
    rowCount--;
  }
  else{
    alert('There should be atleast one row');
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
            if(element.childNodes[0].value == '' || element.childNodes[0].value < 1)
            {
              count -= 1;
            }
            if(c==1)
            {
              informationFromArray["subjectCode"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 2)
            {
              informationFromArray["subjectName"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 3)
            {
              informationFromArray["subjectSection"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 4)
            {
              informationFromArray["subjectDate"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 5)
            {
              informationFromArray["subjectCredit"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 6)
            {
              informationFromArray["subjectTeacher"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 7)
            {
              if(element.childNodes[0].value == "on")
              {
                informationFromArray["subjectTeacherCheck"] = false;
              }
              else
              {
                informationFromArray["subjectTeacherCheck"] = true;
              }
            }
        }
    if(count == 6)
    {
      arrValues.push(informationFromArray);
    }
    else
    {
      if(table_id == 'addTable')
      {
        messageAlert = messageAlert + "All information in Add table must be filled out or Credit should be more than 0\n";
        return 0;
      }
 
    }
  }
  if(table_id == 'addTable')
  {
    information["addSubjectList"] = arrValues;
  }
}
function checkEverything()
{
  table_to_array("addTable");

  if(messageAlert != "")
  {
    alert(messageAlert);
    messageAlert="";
    return false;
  }
  else if(messageAlert == "")
  {
    alert("Done input forming");
  }
  console.log(JSON.stringify(information, null, 4));
  messageAlert="";
  location.href = "ProjectWebPage3.html"
}
