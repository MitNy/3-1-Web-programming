/* Add ToDo Modal 열기 */
function openAddModal() {
    "use strict";
    document.getElementById("addModal").style.display = "block";
}

/* Add toDo Modal 닫기 */
function closeAddModal() {
    "use strict";
    document.getElementById("addModal").style.display = "none";
}

/* Modify Modal 닫기 */
function closeModifyModal() {
    "use strict";
    document.getElementById("modifyModal").style.display = "none";
}

/* Modal 창 밖 영역 클릭시 Modal 닫기 */
window.onclick = function (event) {
    "use strict";
    if (event.target === document.getElementById("addModal")) {
        document.getElementById("addModal").style.display = "none";
    } else if (event.target === document.getElementById("modifyModal")) {
        document.getElementById("modifyModal").style.display = "none";
    }
}

/* 검색 기능 */
function search() {
    var mon_table = document.getElementById("mon_table");
    var tue_table = document.getElementById("tue_table");
    var wed_table = document.getElementById("wed_table");
    var thu_table = document.getElementById("thu_table");
    var fri_table = document.getElementById("fri_table");
    
    var day = document.getElementById("selectDay");
    var text = day.options[day.selectedIndex].text;
    var input, filter, table, tr, p, i,result,div;
    
    // enter 누를 때만 검색
    if (window.event.keyCode == 13) {
        if( text == "day") {    // 모든 요일 검색, 검색어가 없을 경우 모든 요일 목록 출력
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
        else if( text == "Mon") {   // 월요일 내에서 검색, 검색어가 없을 경우 월요일 전체 목록 출력
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
        else if( text == "Tue" ) { // 화요일 내에서 검색, 검색어가 없을 경우 화요일 전체 목록 출력
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
        // 수요일 내에서 검색, 검색어가 없을 경우 수요일 전체 목록 출력
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
        // 목요일 내에서 검색, 검색어가 없을 경우 목요일 전체 목록 출력
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
        
        // 금요일 내에서 검색, 검색어가 없을 경우 금요일 전체 목록 출력
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
        // 검색어 초기화
        document.getElementById("myInput").value = "";
    }   
}

