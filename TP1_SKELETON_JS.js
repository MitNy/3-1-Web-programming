/* 요일 관련 문자열 변수 */
var Mon = "Mon";
var Tue = "Tue";
var Wed = "Wed";
var Thu = "Thu";
var Fri = "Fri";

/* 요일별 처리를 위한 배열 및 인덱스 선언*/
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

/* Add ToDo Modal 열기 */
function openAddModal() {
    document.getElementById("addModal").style.display = "block";
}

/* Add toDo Modal 닫기 */
function closeAddModal() {
        document.getElementById("addModal").style.display = "none";
}

/* Modify Modal 닫기 */
function closeModifyModal() {
        document.getElementById("modifyModal").style.display = "none";
}

/* Modal 창 밖 영역 클릭시 Modal 닫기 */
window.onclick = function (event) {
    if (event.target == document.getElementById("addModal")) {
        document.getElementById("addModal").style.display = "none";
    } else if (event.target == document.getElementById("modifyModal")) {
        document.getElementById("modifyModal").style.display = "none";
    }
}

/* Add시 입력한 값 초기화 */
function resetItem() {
    var day = document.getElementById("addDay");
    document.getElementById("title").value = "";
    document.getElementById("contents").value = "";

}
// 갱신
function getList(text) {
    var text = text;
    // case : 월요일
    if( text == "Mon") {
        var monContainer = document.getElementById("mon_table");
        if( mon_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< mon_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+mon_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+mon_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p class='monP'>"+mon_array[i].input_title+"</p></a></div></tr>");
            }

            monContainer.innerHTML = domItems.join('');
        }
        else {
        monContainer.innerHTML = "";
        }
    }
    
    // case : 화요일
    else if( text == "Tue") {
        var tueContainer = document.getElementById("tue_table");
        if( tue_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< tue_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+tue_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+tue_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p class='tueP'>"+tue_array[i].input_title+"</p></a></div></tr>");
            }

            tueContainer.innerHTML = domItems.join('');
        }
        else {
            tueContainer.innerHTML = "";
        }
    }
    // case : 수요일
    else if( text == "Wed") {
        var wedContainer = document.getElementById("wed_table");
        if( wed_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< wed_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+wed_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+wed_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p class='wedP'>"+wed_array[i].input_title+"</p></a></div></tr>");
            }

            wedContainer.innerHTML = domItems.join('');
        }
        else {
            wedContainer.innerHTML = "";
        }
    }
    // case : 목요일
    else if( text == "Thu") {
        var thuContainer = document.getElementById("thu_table");
        if( thu_array.length > 0 ) {
            
            var domItems = [];

            for( var i=0; i< thu_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+thu_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+thu_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p class='thuP'>"+thu_array[i].input_title+"</p></a></div></tr>");
            }

            thuContainer.innerHTML = domItems.join('');
        }
        else {
            thuContainer.innerHTML = "";
        }
    }
    // case : 금요일
    else if( text == "Fri") {
        var friContainer = document.getElementById("fri_table");
        if( fri_array.length > 0 ) {
            var domItems = [];

            for( var i=0; i< fri_array.length; i++ ) {
                domItems.push("<tr><div class='doContent' id='"+fri_index+"'><a id='conBtn' href='javascript:deleteElement("+text+","+i+");' style='text-decoration:none; color:black;'><span id='"+fri_index+"' style='float:right;'>&times;</span></a><a id='conBtn' href='javascript:openModify("+text+","+i+");' style='text-decoration:none; color:black;'><p class='friP'>"+fri_array[i].input_title+"</p></a></div></tr>");
            }

            friContainer.innerHTML = domItems.join('');
        }
        else {
            friContainer.innerHTML = "";
        }
    }
}

/* 각 element별 수정 모달 열기 */
function openModify(this_array,index) {
    document.getElementById("modifyModal").style.display = "block";
    // 클릭한 element가 mon_array 요소 일 때 
    if( this_array == "Mon") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Mon";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = mon_array[index].input_title;
        document.getElementById("e_contents").value = mon_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    // 클릭한 element가 tue_array 요소 일 때
    else if( this_array == "Tue") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Tue";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = tue_array[index].input_title;
        document.getElementById("e_contents").value = tue_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    // 클릭한 element가 wed_array 요소 일 때
    else if( this_array == "Wed") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Wed";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = wed_array[index].input_title;
        document.getElementById("e_contents").value = wed_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    // 클릭한 element가 thu_array 요소 일 때
    else if( this_array == "Thu") {
        var day = document.getElementById("modifyDay");
        day.options[0].innerHTML = "Thu";
        document.getElementById("number").value = index;
        document.getElementById("e_title").value = thu_array[index].input_title;
        document.getElementById("e_contents").value = thu_array[index].input_content;
        document.getElementById("modify_button").innerHTML='<button id="addBtn" onclick="ModifyFunction('+this_array+','+index+')">Done</button>'
    }
    // 클릭한 element가 fri_array 요소 일 때
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

/* Add toTo Modal 에서 Add 버튼 클릭 시 실행 */
function addFunction() {
    getList(Mon);getList(Tue);getList(Wed);getList(Thu);getList(Fri);
    var day = document.getElementById("addDay");
    var text = day.options[day.selectedIndex].text;
    var title = document.getElementById("title").value;
    var content = document.getElementById("contents").value;
    var object = {
        input_day: text,
        input_title: title,
        input_content: content
    }
    
    // 빈 칸이 있으면 추가할 수 없음
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
    resetItem();
}

/* 각 element별 Modify Modal에서 Done 클릭 시 실행 */ 
function ModifyFunction(this_day,this_index) {
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

    // 빈 칸이 있으면 수정할 수 없음
    if( !text.length || !title.length|| !content.length || !number.length ) {
        alert("빈 칸을 채워주세요.");
    }
    else {
        // 현재 클릭한 element가 월요일일 때
        if( this_day == "Mon") {
            closeModifyModal();
            closeAddModal();
            
            // 요일을 수정하려고 할 때
            if( text != "Mon" ) {
                var targetArray = eval(text.toLowerCase()+'_array');
                mon_array.splice(this_index,1);
                targetArray.splice(number,0,object);
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
        // 현재 클릭한 element가 화요일일 때
        else if( this_day == "Tue") {
                closeModifyModal();
                closeAddModal();
            
            // 요일을 수정하려고 할 때
            if( text != "Tue" ) {
                var targetArray = eval(text.toLowerCase()+'_array');
                tue_array.splice(this_index,1);
                targetArray.splice(number,0,object);
                getList("Tue");
                getList(text);
            }
            // 요일 수정 없이 같은 요일 내에서 내용만 변경
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
        // 현재 클릭한 element가 수요일일 때
        else if( this_day == "Wed") {
                closeModifyModal();
                closeAddModal();

            // 요일을 수정하려고 할 때
            if( text != "Wed" ) {
                var targetArray = eval(text.toLowerCase()+'_array');
                wed_array.splice(this_index,1);
                targetArray.splice(number,0,object);
                getList("Wed");
                getList(text);
            }
            // 요일 수정 없이 같은 요일 내에서 내용만 변경
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
        // 현재 클릭한 element가 목요일일 때
        else if( this_day == "Thu") {
            closeModifyModal();
            closeAddModal();
            
            // 요일을 수정하려고 할 때
            if( text != "Thu" ) {
                var targetArray = eval(text.toLowerCase()+'_array');
                thu_array.splice(this_index,1);
                targetArray.splice(number,0,object);
                getList("Thu");
                getList(text);
            }
            // 요일 수정 없이 같은 요일 내에서 내용만 변경
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
        // 현재 클릭한 element가 금요일일 때
        else if( this_day == "Fri") {
            closeModifyModal();
            closeAddModal();
            
            // 요일을 수정하려고 할 때
            if( text != "Fri" ) {
                var targetArray = eval(text.toLowerCase()+'_array');
                fri_array.splice(this_index,1);
                targetArray.splice(number,0,object);
                getList("Fri");
                getList(text);
            }
            // 요일 수정 없이 같은 요일 내에서 내용만 변경
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
            document.getElementById("mon_table").style.display = "";
            document.getElementById("tue_table").style.display = "";
            document.getElementById("wed_table").style.display = "";
            document.getElementById("thu_table").style.display = "";
            document.getElementById("fri_table").style.display = "";
            input = document.getElementById("myInput");
            filter = input.value;
            var mon_div = mon_table.getElementsByClassName("doContent");
            var tue_div = tue_table.getElementsByClassName("doContent");
            var wed_div = wed_table.getElementsByClassName("doContent");
            var thu_div = thu_table.getElementsByClassName("doContent");
            var fri_div = fri_table.getElementsByClassName("doContent");
            
            
            for( i=0; i< mon_div.length; i++ ) {
                p = document.getElementsByClassName("monP");
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    mon_div[i].style.display="";
                }
                else {
                    mon_div[i].style.display="none";
                }
            }
            for( i=0; i< tue_div.length; i++ ) {
                p = document.getElementsByClassName("tueP");
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    tue_div[i].style.display="";
                }
                else {
                    tue_div[i].style.display="none";
                }
            }
            for( i=0; i< wed_div.length; i++ ) {
                p = document.getElementsByClassName("wedP");
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    wed_div[i].style.display="";
                }
                else {
                    wed_div[i].style.display="none";
                }
            }
            for( i=0; i< thu_div.length; i++ ) {
                p = document.getElementsByClassName("thuP");
                result = p[i].innerHTML;
                if(result.indexOf(filter) > -1) {
                    thu_div[i].style.display="";
                }
                else {
                    thu_div[i].style.display="none";
                }
            }
            for( i=0; i< fri_div.length; i++ ) {
                p = document.getElementsByClassName("friP");
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
            document.getElementById("mon_table").style.display = "";
            document.getElementById("tue_table").style.display = "none";
            document.getElementById("wed_table").style.display = "none";
            document.getElementById("thu_table").style.display = "none";
            document.getElementById("fri_table").style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = mon_table.getElementsByClassName("doContent");
            p = document.getElementsByClassName("monP");
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
            document.getElementById("mon_table").style.display = "none";
            document.getElementById("tue_table").style.display = "";
            document.getElementById("wed_table").style.display = "none";
            document.getElementById("thu_table").style.display = "none";
            document.getElementById("fri_table").style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = tue_table.getElementsByClassName("doContent");
            p = document.getElementsByClassName("tueP");
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
            document.getElementById("mon_table").style.display = "none";
            document.getElementById("tue_table").style.display = "none";
            document.getElementById("wed_table").style.display = "";
            document.getElementById("thu_table").style.display = "none";
            document.getElementById("fri_table").style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = wed_table.getElementsByClassName("doContent");
            p = document.getElementsByClassName("wedP");
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
            document.getElementById("mon_table").style.display = "none";
            document.getElementById("tue_table").style.display = "none";
            document.getElementById("wed_table").style.display = "none";
            document.getElementById("thu_table").style.display = "";
            document.getElementById("fri_table").style.display = "none";
            input = document.getElementById("myInput");
            filter = input.value;
            div = thu_table.getElementsByClassName("doContent");
            p = document.getElementsByClassName("thuP");
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
            document.getElementById("mon_table").style.display = "none";
            document.getElementById("tue_table").style.display = "none";
            document.getElementById("wed_table").style.display = "none";
            document.getElementById("thu_table").style.display = "none";
            document.getElementById("fri_table").style.display = "";
            input = document.getElementById("myInput");
            filter = input.value;
            div = fri_table.getElementsByClassName("doContent");
            p = document.getElementsByClassName("friP");
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
        document.getElementById("myInput").value = "";
    }   
}