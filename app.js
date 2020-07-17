//Assignment # 38-44 task no.1
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++)
        result = result * a;
    alert(result)
}
var inputA = prompt("Enter Base Value: ");
var inputB = prompt("Enter Exponent Value");

power(inputA, inputB);


//Assignment # 38-44 task no.2
function leapYear(a) {
    if (a % 4 === 0)
        alert(a + " is leap year")
    else
        alert(a + " is not leap year")
}
var input = prompt("Enter Year: ");
leapYear(input);


//Assignment # 38-44 task no.3
function calculateArea(a, b, c) {
    var S = calculateS(a, b, c)
    var area = S * (S - a) * (S - b) * (S - c)
    alert(area)
}
function calculateS(a, b, c) {
    var key = (a + b + c) / 2
    return key;
}
var a = Number(prompt("Enter a: "));
var b = Number(prompt("Enter b: "));
var c = Number(prompt("Enter c: "));

calculateArea(a, b, c)


//Assignment # 38-44 task no.4
function mainFunction() {
    var marks1 = Number(prompt("Enter Marks for subject 1:"))
    var marks2 = Number(prompt("Enter Marks for subject 2:"))
    var marks3 = Number(prompt("Enter Marks for subject 3:"))
    var total = marks1+marks2+marks3

    var average = calculateAverage(total)
    var percentage = calculatePercentage(total)

    alert("Average: " + average + "\nPercentage: " + percentage)
}
function calculateAverage(a) {
    var keyA = a/3
    return keyA;
}
function calculatePercentage(a) {
    var keyB = a/300 * 100
    return keyB;
}
mainFunction()



//Assignment # 38-44 task no.5
function findIndexOf() {
    var string = "Muneeba"
    var char = "n"
for (var i = 0; i < string.length; i++) {
    if (string[i] === char)
        alert("String: "+string + "\n" + char + " is found at " + (i + 1))
    }
}
findIndexOf();


//Assignment # 38-44 task no.6
function checkVowels(string){
    string = string.toLowerCase();
    var newtext = string.replace(/a/g,"")
    newtext = newtext.replace(/e/g,"")
    newtext = newtext.replace(/i/g,"")
    newtext = newtext.replace(/o/g,"")
    newtext = newtext.replace(/u/g,"")
    alert("Before: " + string + "\nAfter: " + newtext)
}

var message = "My name is Muneeba Muhammad Younus"
checkVowels(message)



//Assignment # 38-44 task no.7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let flag = false;
    str = str.toLowerCase()
    for (letter of str) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (flag) {
                        count++;
                        flag = false;
                    } else {
                        flag = true;
                    }
                    break;
                }
            default:
                flag = false
        }
    }

   alert("number of occurrences of any two vowels is: " + count)
}

findOccurrences();


//Assignment # 38-44 task no.8
function meters(a) {
    alert(a * 1000 + " m")
}
function feet(a) {
    alert(a * 3280.84 + " ft")
}
function inches(a) {
    alert(a * 39370.08 + " in")
}
function centimeters(a) {
    alert(a * 100000 + " cm")
}

var distance = Number(prompt("Enter distance (in km): "))
meters(distance)
feet(distance)
inches(distance)
centimeters(distance)


//Assignment # 38-44 task no.9
function overTimePay() {
    var workingHours = Number(prompt("Enter Working Hours: "))
    if (workingHours > 40){
        var overTime = workingHours - 40;
        var pay = overTime * 12.00;
        alert("Over Time Pay is: " + pay)
    }
    else
    alert("\nYou have to work for more than 40 hours to get over time pay")
}
overTimePay()



//Assignment # 38-44 task no.10
var amount = parseInt(prompt("Please input amount for withdraw :"))
function currencyNotes(){
    var hundred =  amount / 100;
    var fifty = (amount % 100) / 50;
    Math.trunc(fifty)
    var ten = ((amount % 100) % 50) / 10;
    Math.trunc(ten)
    var ones = ((amount % 100) % 50) % 10;
    Math.trunc(ones)
    alert("Rs. 100 notes: " +  Math.trunc(hundred) + "\nRs. 50 notes: " +  Math.trunc(fifty) + "\nRs. 10 notes: " +  Math.trunc(ten) + "\nStill remaining: " +  Math.trunc(ones))
}
currencyNotes()



//Assignment # 38-44 task no.1
if (window.confirm('If you click "ok" you would be redirected . Cancel will load this website ')) {
    window.location.href = 'https://www.google.com';
};


//Assignment # 38-44 task no.3
function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var name = document.getElementById("name_row" + no);
  var classV = document.getElementById("classV_row" + no);

  var name_data = name.innerHTML;
  var classV_data = classV.innerHTML;

  name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  classV.innerHTML = "<input type='text' id='classV_text" + no + "' value='" + classV_data + "'>";

}

function save_row(no) {
  var name_val = document.getElementById("name_text" + no).value;
  var classV_val = document.getElementById("classV_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("classV_row" + no).innerHTML = classV_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
  reindex()
}
function add_row() {
  var new_name = document.getElementById("new_name").value;
  var new_classV = document.getElementById("new_classV").value;

  var table = document.getElementById("data_table");
  var table_len = (table.rows.length) - 1;
  var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td> </td><td id='name_row" + table_len + "'>" + new_name + "</td><td id='classV_row" + table_len + "'>" + new_classV + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

  document.getElementById("new_name").value = "";
  document.getElementById("new_classV").value = "";
  reindex();
}

function reindex() {
  const ids = document.querySelectorAll("tr > td:nth-child(1)");
  ids.forEach((e, i) => { e.innerText = (i + 1) });
}


//Assignment # 43-48 task no.5
var i = 0;
function increment() {
    document.getElementById('counter').value = ++i;
}
function decrement() {
    document.getElementById('counter').value = --i;
}



Assignment # 49-52 task no.1
function getData() {
    document.clear();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var qualification = document.getElementById("qualification").value;
    var string = "<h1>Entered Data</h1> Full Name: " + fullName + "<br>Email:" + email + "<br>Contact Number: " + number + "<br>Qualification: " + qualification;
    document.write(string)
}


Assignment # 49-52 task no.2
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}




// Assignment # 53-58 task no.1
var images = ["<img src='images/others/1.jpg'>" , "<img src='images/others/2.jpg'>" , "<img src='images/others/3.jpg'>" , "<img src='images/others/4.png'>"]

for(var i =0; i<images.length; i++){
    document.write(images[i])
}

function onClosedImagModal(){
    var modal = document.getElementById('modal');
     modal.classList.add('modal-open')
}



// Assignment # 53-58 task no.2
var para = document.getElementById("para");
var currTextSize = 20;
para.style.fontSize = currTextSize + 'px';

function zoomIn() {
    currTextSize += currTextSize + 10;
    para.style.fontSize = currTextSize + 'px';
}

function zoomOut() {
    currTextSize += currTextSize - 10;
    para.style.fontSize = currTextSize + 'px';
}
bigger.addEventListener("click", zoomIn);
smaller.addEventListener("click", zoomOut);



Assignment # 58-67 task no.1
var mainContent = document.getElementById("main-content").innerHTML;
document.write(mainContent)

var render = document.getElementsByClassName("render")
for(var i=0; i<5; i++) {
    document.write(render[i].innerHTML + "<br>")
}

document.getElementById('first-name').value='Muneeba' ; 
document.getElementById('last-name').value='Younus' ; 
document.getElementById('email').value='muneeba.younus2001@gmail.com' ; 


// Assignment # 58-67 task no.2
var nodeTypeVariable = document.getElementById("form-content").nodeType;
document.write(nodeTypeVariable);

var nodeTypeVariable2 = document.getElementById("lastName");
document.write(nodeTypeVariable2.nodeType + "<br>")
for (var i = 0; i < nodeTypeVariable2.childNodes.length; i++) {
    document.write(nodeTypeVariable2.childNodes[i].nodeType)
// }

var c = document.getElementById("lastName").childNodes.innerHTML = "Muhammad Younus";
document.write("<br>Updated value: " + c)


var firstChildVariable = document.getElementById("main-content").firstChild.innerHTML;
document.write("<br>First Child: " + firstChildVariable)
var lastChildVariable = document.getElementById("main-content").lastChild.innerHTML;
document.write("<br>Last Child: " + lastChildVariable)


var nextSiblingVariable = document.getElementById("lastName").nextSibling.innerHTML;
document.write("<br>Next Sibling: " + nextSiblingVariable)


var previousSiblingVariable = document.getElementById("lastName").previousSibling.innerHTML;
document.write("<br>Previous Sibling: " + previousSiblingVariable)


var nodeNameVariable = document.getElementById("email").parentNode.nodeName;
document.write(nodeNameVariable);

var nodeTypeVariable3 = document.getElementById("email").nodeType;
document.write("<br>" + nodeTypeVariable3);