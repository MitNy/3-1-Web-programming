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
        amodal.style.display = "none";
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
// 갱신
function getList(text) {
    var text = text;
    if( text == "Mon") {
        var monContainer = document.getElementById("mon_table");
        if( mon_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< mon_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+mon_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+mon_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p id='re'>"+mon_array[i].input_title+"</p></a></div></tr>");
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
                domItems.push("<tr><div class='doContent' id='"+tue_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+tue_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p>"+tue_array[i].input_title+"</p></a></div></tr>");
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
                domItems.push("<tr><div class='doContent' id='"+wed_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+wed_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p>"+wed_array[i].input_title+"</p></a></div></tr>");
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
                domItems.push("<tr><div class='doContent' id='"+thu_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+thu_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p>"+thu_array[i].input_title+"</p></a></div></tr>");
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
                domItems.push("<tr><div class='doContent' id='"+fri_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+fri_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p>"+fri_array[i].input_title+"</p></a></div></tr>");
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


function openModify(this_array,index) {
    mModal.style.display = "block";
    if( this_array == "Mon") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Mon";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = mon_array[index].input_title;
        document.getElementById("e_contents").value = mon_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    else if( this_array == "Tue") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Tue";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = tue_array[index].input_title;
        document.getElementById("e_contents").value = tue_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    else if( this_array == "Wed") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Wed";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = wed_array[index].input_title;
        document.getElementById("e_contents").value = wed_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    else if( this_array == "Thu") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Thu";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = thu_array[index].input_title;
        document.getElementById("e_contents").value = thu_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    else if( this_array == "Fri") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Fri";
        //day.options[day.selectedIndex].innerHTML = fri_array[index].input_day;
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = fri_array[index].input_title;
        document.getElementById("e_contents").value = fri_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }

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

function ModifyFunction(this_day,this_index) {
    //var this_index = index;
    var day = document.getElementById("modifyDay");
    var number = document.getElementById("number").value;
    var text = day.options[day.selectedIndex].text;
    var title = document.getElementById("e_title").value;
    var content = document.getElementById("e_contents").value;

    var object = {
        input_day: text,
        input_title: title,
        input_content: content
    }

    
    if( !text.length || !title.length|| !content.length || !number.length ) {
        alert("빈 칸을 채워주세요.");
    }
    else {
        if( this_day == "Mon") {
            closeModifyModal();
            closeAddModal();

            if( text != "Mon" ) {
                mon_array.splice(number,1);
                eval(text.toLowerCase()+'_array').push(object);
                getList("Mon");
                getList(text);
            }
            else {
                if(this_index != number) {
                    var targetArray = mon_array[this_index];
                    var move = (number - this_index) / Math.abs(number - this_index);

                    for( var element = this_index; element != number; element+=move) {
                        mon_array[element] = mon_array[element+move];
                    }
                    mon_array[number] = targetArray;
                }
                mon_array[number].input_day = text;
                mon_array[number].input_title = title;
                mon_array[number].input_content = content;
                getList(text); 
            }
        }
        else if( this_day == "Tue") {
                closeModifyModal();
                closeAddModal();
            
            if( text != "Tue" ) {
                tue_array.splice(number,1);
                eval(text.toLowerCase()+'_array').push(object);
                getList("Tue");
                getList(text);
            }
            else {
                if(this_index != number) {
                    var targetArray = tue_array[this_index];
                    var move = (number - this_index) / Math.abs(number - this_index);

                    for( var element = this_index; element != number; element+=move) {
                        tue_array[element] = tue_array[element+move];
                    }
                    tue_array[number] = targetArray;
                }
                tue_array[number].input_day = text;
                tue_array[number].input_title = title;
                tue_array[number].input_content = content;
                getList(text); 
            }
            
        }
        else if( this_day == "Wed") {
                closeModifyModal();
                closeAddModal();

            if( text != "Wed" ) {
                wed_array.splice(number,1);
                eval(text.toLowerCase()+'_array').push(object);
                getList("Wed");
                getList(text);
            }
            else {
                if(this_index != number) {
                    var targetArray = wed_array[this_index];
                    var move = (number - this_index) / Math.abs(number - this_index);

                    for( var element = this_index; element != number; element+=move) {
                        wed_array[element] = wed_array[element+move];
                    }
                    wed_array[number] = targetArray;
                }
                wed_array[number].input_day = text;
                wed_array[number].input_title = title;
                wed_array[number].input_content = content;
                getList(text); 
            }
        }
        else if( this_day == "Thu") {
            closeModifyModal();
            closeAddModal();
            
            if( text != "Thu" ) {
                thu_array.splice(number,1);
                eval(text.toLowerCase()+'_array').push(object);
                getList("Thu");
                getList(text);
            }
            else {
                if(this_index != number) {
                    var targetArray = thu_array[this_index];
                    var move = (number - this_index) / Math.abs(number - this_index);

                    for( var element = this_index; element != number; element+=move) {
                        thu_array[element] = thu_array[element+move];
                    }
                    thu_array[number] = targetArray;
                }
                thu_array[number].input_day = text;
                thu_array[number].input_title = title;
                thu_array[number].input_content = content;
                getList(text); 
            }
        }
        else if( this_day == "Fri") {
            closeModifyModal();
            closeAddModal();
            
            if( text != "Fri" ) {
                fri_array.splice(number,1);
                eval(text.toLowerCase()+'_array').push(object);
                getList("Fri");
                getList(text);
            }
            else {
                if(this_index != number) {
                    var targetArray = fri_array[this_index];
                    var move = (number - this_index) / Math.abs(number - this_index);

                    for( var element = this_index; element != number; element+=move) {
                        fri_array[element] = fri_array[element+move];
                    }
                    fri_array[number] = targetArray;
                }
                fri_array[number].input_day = text;
                fri_array[number].input_title = title;
                fri_array[number].input_content = content;
                getList(text); 
            }
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
/*
function search() {
    var day = document.getElementById("selectDay");
    var text = day.options[day.selectedIndex].text;
    alert(text);

}
*/
function search() {
    var mon_table = document.getElementById("mon_table");
    var tue_table = document.getElementById("tue_table");
    var wed_table = document.getElementById("wed_table");
    var thu_table = document.getElementById("thu_table");
    var fri_table = document.getElementById("fri_table");
    
    var day = document.getElementById("selectDay");
    var text = day.options[day.selectedIndex].text;
    var input, filter, table, tr, p, i,result,div;
  // Declare variables 
    if (window.event.keyCode == 13) {
        if( text == "day") {    // 모든 요일 검색
            mon_table.style.display = "";
            tue_table.style.display = "";
            wed_table.style.display = "";
            thu_table.style.display = "";
            fri_table.style.display = "";
            input = document.getElementById("myInput");
            filter = input.value;
            var mon_div = mon_table.getElementsByTagName("div");
            var tue_div = tue_table.getElementsByTagName("div");
            var wed_div = wed_table.getElementsByTagName("div");
            var thu_div = thu_table.getElementsByTagName("div");
            var fri_div = fri_table.getElementsByTagName("div");
            
            p = document.getElementsByTagName("p");
            for( i=0; i< mon_div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    mon_div[i].style.display="";
                }
                else {
                    mon_div[i].style.display="none";
                }
            }
            for( i=0; i< tue_div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    tue_div[i].style.display="";
                }
                else {
                    tue_div[i].style.display="none";
                }
            }
            for( i=0; i< wed_div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    wed_div[i].style.display="";
                }
                else {
                    wed_div[i].style.display="none";
                }
            }
            for( i=0; i< thu_div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    thu_div[i].style.display="";
                }
                else {
                    thu_div[i].style.display="none";
                }
            }
            for( i=0; i< fri_div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    fri_div[i].style.display="";
                }
                else {
                    fri_div[i].style.display="none";
                }
            }
            
        }
        else if( text == "Mon") {   // 월요일 내에서 검색
            mon_table.style.display = "";
            tue_table.style.display = "none";
            wed_table.style.display = "none";
            thu_table.style.display = "none";
            fri_table.style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = mon_table.getElementsByTagName("div");
            p = document.getElementsByTagName("p");
            for( i=0; i< div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    div[i].style.display="";
                }
                else {
                    div[i].style.display="none";
                }
            }
        }
        else if( text == "Tue" ) {
            mon_table.style.display = "none";
            tue_table.style.display = "";
            wed_table.style.display = "none";
            thu_table.style.display = "none";
            fri_table.style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = tue_table.getElementsByTagName("div");
            p = document.getElementsByTagName("p");
            for( i=0; i< div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    div[i].style.display="";
                }
                else {
                    div[i].style.display="none";
                }
            }           
        }
         else if( text == "Wed" ) {
            mon_table.style.display = "none";
            tue_table.style.display = "none";
            wed_table.style.display = "";
            thu_table.style.display = "none";
            fri_table.style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = wed_table.getElementsByTagName("div");
            p = document.getElementsByTagName("p");
            for( i=0; i< div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    div[i].style.display="";
                }
                else {
                    div[i].style.display="none";
                }
            }           
        }       
        else if( text == "Thu" ) {
            mon_table.style.display = "none";
            tue_table.style.display = "none";
            wed_table.style.display = "none";
            thu_table.style.display = "";
            fri_table.style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = thu_table.getElementsByTagName("div");
            p = document.getElementsByTagName("p");
            for( i=0; i< div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    div[i].style.display="";
                }
                else {
                    div[i].style.display="none";
                }
            }           
        }
        else if( text == "Fri" ) {
            mon_table.style.display = "none";
            tue_table.style.display = "none";
            wed_table.style.display = "none";
            thu_table.style.display = "none";
            fri_table.style.display = "";
            input = document.getElementById("myInput");
            filter = input.value;
            div = fri_table.getElementsByTagName("div");
            p = document.getElementsByTagName("p");
            for( i=0; i< div.length; i++ ) {
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    div[i].style.display="";
                }
                else {
                    div[i].style.display="none";
                }
            }           
        }
    }
}