var amodal = document.getElementById('addModal');
var mModal = document.getElementById('modifyModal');
var objArray = [];
var input = document.getElementById("addBtn");
var btn2 = document.getElementById("conBtn");

var closeBtn = document.getElementById("close");

var obj = {};
var mon_array = [];
var tue_array = [];
var wed_array = [];
var thu_array = [];
var fri_array = [];
var mon_index = 0;
var tue_index = 0;
var wed_index = 0;
var thu_index = 0;
var fri_index = 0;

function closeAddModal() {
    if (amodal.style.display = "block") {
        amodal.style.display = "none";
    }
}

function closeModifyModal() {
        mModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == amodal) {
        amodal.style.display = "none";
    } else if (event.target == mModal) {
        mModal.style.display = "none";
    }
}

/*function addFunction() {

    
    alert(text);
    
    obj = {
        input_day : text,
        input_title : title,
        input_content : content;
    }
    
    if (text == "day" || content == "" || title == "") {
        alert("빈 칸을 채워주세요.");
        return false;
    }
    else {
        localStorage.elements = obj;
        alert(obj);
    }
}

*/

function openModify() {
    mModal.style.display = "block";
}

function addFunction() {
    var day = document.getElementById("addDay");

    var text = day.options[day.selectedIndex].text;
    var title = document.getElementById("title").value;
    var content = document.getElementById("contents").value;
    var object = {
        input_day: text,
        input_title: title,
        input_content: content
    }
    
    if( !text.length|| !title.length|| !content.length ) {
        alert("빈 칸을 채워주세요.");
    }
    else {
        if( text == "Mon") {
            closeAddModal();
            localStorage.setItem(mon_array.push(object),mon_array);
            document.getElementById("mon_table").innerHTML += "<tr><div class='doContent'><a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'><span id='close' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+mon_array[mon_index].input_title+"</p></div></a></tr>";
            mon_inex++;
        }
        else if( text == "Tue") {
            closeAddModal();
            localStorage.setItem(tue_array.push(object),tue_array);
            document.getElementById("tue_table").innerHTML += "<tr><div class='doContent'><a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'><span id='close' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+tue_array[tue_index].input_title+"</p></div></a></tr>";
            tue_inex++;
        }
        else if( text == "Wed") {
            closeAddModal();
            localStorage.setItem(wed_array.push(object),wed_array);
            document.getElementById("wed_table").innerHTML += "<tr><div class='doContent'><a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'><span id='close' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+wed_array[wed_index].input_title+"</p></div></a></tr>";
            wed_inex++;
        }
        else if( text == "Thu") {
            closeAddModal();
            localStorage.setItem(thu_array.push(object),thu_array);
            document.getElementById("thu_table").innerHTML += "<tr><div class='doContent'><a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'><span id='close' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+thu_array[thu_index].input_title+"</p></div></a></tr>";
            thu_inex++;
        }
        else if( text == "Fri") {
            closeAddModal();
            localStorage.setItem(fri_array.push(object),fri_array);
            document.getElementById("fri_table").innerHTML += "<tr><div class='doContent'><a id='conBtn' href='javascript:deleteElement();' style='text-decoration:none; color:black;'><span id='close' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+fri_array[fri_index].input_title+"</p></div></a></tr>";
            fri_inex++;
        }
 }
}



function deleteElement() {
    alert("a");
}

function search() {
    var day = document.getElementById("selectDay");
    var text = day.options[day.selectedIndex].text;
    alert(text);

}