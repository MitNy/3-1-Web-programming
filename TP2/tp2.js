/* iframe 크기 조절 */
$(document).ready(function(){
        var iframe_height=parseInt($('html').height());
	window.parent.postMessage(iframe_height,'http://edu.argos.or.kr');
});

/* row 추가 및 삭제 1 */
$(document).ready(function(){
    var i=1;$("#addi_row").click(function(){
        b=i-1;$('#addri'+i).html($('#addri'+b).html()).find('td:first-child').html(i+1);
        $('#tabi_logic').append('<tr id="addri'+(i+1)+'"></tr>');i++});
    $("#deletei_row").click(function(){if(i>1){$("#addri"+(i-1)).html('');i--}})
});
/* row 추가 및 삭제 2 */
$(document).ready(function(){
    var i=1;$("#add_row").click(function(){
        b=i-1;
        $('#addr'+i).html($('#addr'+b).html()).find('td:first-child').html(i+1);
        $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
        i++
    });
    $("#delete_row").click(function(){
        if(i>1){
            $("#addr"+(i-1)).html('');i--
        }})
});

/* 페이지 이동 tab 선택에 따라 tab active 상태 변경 */
$(document).ready(function(){
    $("#goAddSeminar").click(function(){
        $("#addSeminar").show();
        $("#addPhoto").hide();
        $("#seminarTab").addClass('active');
        $("#photoTab").removeClass('active');
    });
    $("#goAddPhoto").click(function(){
        $("#addPhoto").show();
        $("#addSeminar").hide();
        $("#seminarTab").removeClass('active');
        $("#photoTab").addClass('active');
        });
});

/* memberList에서 검색 */
$(document).ready(function(){
    $("#myInput").on("keyup",function(){
        var value=$(this).val().toLowerCase();
        $("#memberList li").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)})
    })
});
/* 년도 선택시 show 또는 hide 상태 변경 */
$(document).ready(function(){
    $("#go2017").click(function(){
        $("#2017").show();
        $("#all").hide();
        $("#2018").hide();
        $("#2016").hide()});
    $("#allMember").click(function(){
        $("#all").show();
        $("#2017").hide();
        $("#2018").hide();
        $("#2016").hide();
    });
    $("#go2018").click(function(){
        $("#2018").show();
        $("#all").hide();
        $("#2017").hide();
        $("#2016").hide()});
    $("#go2016").click(function(){
        $("#2016").show();
        $("#all").hide();
        $("#2017").hide();
        $("#2018").hide;
    })
});

$(document).ready(function(){
    $("#go2017").click(function(){
        $("#2017").show();
        $("#all").hide();
        $("#2018").hide()
    });
    $("#allPhoto").click(function(){
        $("#all").show();
        $("#2017").hide();
        $("#2018").hide();
    });
    $("#go2018").click(function(){
        $("#2018").show();
        $("#all").hide();
        $("#2017").hide();
    })
});
