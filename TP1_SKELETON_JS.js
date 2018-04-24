var amodal = document.getElementById('addModal');
var mModal = document.getElementById('modifyModal');
var objArray = [];
var input = document.getElementById("addBtn");
var btn2 = document.getElementById("conBtn");

var closeBtn = document.getElementById("close");

var Mon = "Mon";
var Tue = "Tue";
var Wed = "Wed";
var Thu = "Thu";
var Fri = "Fri";

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

function resetItem() {
    var day = document.getElementById("addDay");
    var text = day.options[day.selectedIndex].text;
    var title = document.getElementById("title").value;
    var content = document.getElementById("contents").value;
    
    day = '';
    text = '';
    title = '';
    content = '';
}

function getList(text) {
    var text = text;
    
    
    if( text == "Mon") {
        var monContainer = document.getElementById("mon_table");
        if( mon_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< mon_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+mon_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+mon_index+");' style='text-decoration:none; color:black;'><span id='"+mon_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+mon_array[i].input_title+"</p></div></a></tr>");
            }

            monContainer.innerHTML = domItems.join('');
        }
        else {
        monContainer.innerHTML = "";
        }
    }
    else if( text == "Tue") {
        var tueContainer = document.getElementById("tue_table");
        if( tue_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< tue_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+tue_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+tue_index+");' style='text-decoration:none; color:black;'><span id='"+tue_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+tue_array[i].input_title+"</p></div></a></tr>");
            }

            tueContainer.innerHTML = domItems.join('');
        }
        else {
            tueContainer.innerHTML = "";
        }
    }
    else if( text == "Wed") {
        var wedContainer = document.getElementById("wed_table");
        if( wed_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< wed_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+wed_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+wed_index+");' style='text-decoration:none; color:black;'><span id='"+wed_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+wed_array[i].input_title+"</p></div></a></tr>");
            }

            wedContainer.innerHTML = domItems.join('');
        }
        else {
            wedContainer.innerHTML = "";
        }
    }    
    else if( text == "Thu") {
        var thuContainer = document.getElementById("thu_table");
        if( thu_array.length > 0 ) {
            
            var domItems = [];

            for( var i=0; i< thu_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+thu_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+thu_index+");' style='text-decoration:none; color:black;'><span id='"+thu_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+thu_array[i].input_title+"</p></div></a></tr>");
            }

            thuContainer.innerHTML = domItems.join('');
        }
        else {
            thuContainer.innerHTML = "";
        }
    }
    else if( text == "Fri") {
        var friContainer = document.getElementById("fri_table");
        if( fri_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< fri_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+fri_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+fri_index+");' style='text-decoration:none; color:black;'><span id='"+fri_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+fri_array[i].input_title+"</p></div></a></tr>");
            }

            friContainer.innerHTML = domItems.join('');
        }
        else {
            friContainer.innerHTML = "";
        }
    }
}
    /*
document.getElementById("mon_table").innerHTML += "<tr><div class='doContent' id='"+mon_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+mon_index+");' style='text-decoration:none; color:black;'><span id='"+mon_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify();' style='text-decoration:none; color:black;'><p>"+mon_array[mon_index].input_title+"</p></div></a></tr>";*/


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
            mon_array.push(object);
            getList(text);
        }
        else if( text == "Tue") {
            closeAddModal();
            tue_array.push(object);
            getList(text);
        }
        else if( text == "Wed") {
            closeAddModal();
            wed_array.push(object);
            getList(text);
        }
        else if( text == "Thu") {
            closeAddModal();
            thu_array.push(object);
            getList(text);
        }
        else if( text == "Fri") {
            closeAddModal();
            fri_array.push(object);
            getList(text);
        }
 }
}



function deleteElement(this_array,index) {
    
    var speId = "div"+index;
    var dive = document.getElementById(speId);
    if( this_array == "Mon" ) {
        mon_array.splice(index,1);
        getList(this_array);
        console.log(mon_array);
    }
    else if( this_array == "Tue") {
        tue_array.splice(index,1);
        getList(this_array);
    }
    else if( this_array == "Wed") {
        wed_array.splice(index,1);
        getList(this_array);
    }
    else if( this_array == "Thu") {
        thu_array.splice(index,1);
        getList(this_array);
    }
    else if( this_array == "Fri") {
        fri_array.splice(index,1);
        getList(this_array);
    }
}

function search() {
    var day = document.getElementById("selectDay");
    var text = day.options[day.selectedIndex].text;
    alert(text);

}