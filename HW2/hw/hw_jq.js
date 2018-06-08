/* addBtn / modiBtn */
	function AllLoad() {
		lastTime();
		MonLoad();
		TueLoad();
		WedLoad();
		ThuLoad();
		FriLoad();
	}
	function MonLoad() {
		$.ajax({
			type:"GET",
			url:"./MonList.jsp",
			dataType:"text",
			success: function(data){
				document.getElementById("mon_table").innerHTML = data;	

			},
			error: function(){
			}	
		});
	}

	function TueLoad() {
		$.ajax({
                        type:"GET",
                        url:"./TueList.jsp",
                        dataType:"text",
                        success: function(data){
                                document.getElementById("tue_table").innerHTML = data;
                        },
                        error: function(){
                        }
                });
	}

	function WedLoad() {
		$.ajax({
                        type:"GET",
                        url:"./WedList.jsp",
                        dataType:"text",
                        success: function(data){
                                document.getElementById("wed_table").innerHTML = data;
                        },
                        error: function(){
                        }
                });
	}

	function ThuLoad() {
		$.ajax({
                        type:"GET",
                        url:"./ThuList.jsp",
                        dataType:"text",
                        success: function(data){
                                document.getElementById("thu_table").innerHTML = data;
                        },
                        error: function(){
                        }
                });
	}

	function FriLoad() {
		$.ajax({
                        type:"GET",
                        url:"./FriList.jsp",
                        dataType:"text",
                        success: function(data){
                                document.getElementById("fri_table").innerHTML = data;
                        },
                        error: function(){
                        }
                });
	}

	function lastTime(){
		$.ajax({
			type:"GET",
			url:"./lastTime.jsp",
			dataType:"text",
			success:function(data){
				document.getElementById("time").value = data.trim();
			},
			error: function(){
			}
		});
	}

	function dayModify(obj,day) {
		$.ajax({
			type:"POST",
			url:"./dayModify.jsp",
			data: {
				fName:obj,
				day:day
			},
			success:function(response){
				console.log(response);
			},
			error: function() {

			}
		});
	}	

	function openModify(title,day) {
		$.ajax({
			type:"POST",
			url:"./todoLoad.jsp",
			data:{
				"day" : day,
				"title" : title
			},
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success : function(response) {
				document.getElementById("e_day").value = day;
				document.getElementById("this_title").value = title;
				document.getElementById("e_title").value = title;
				document.getElementById("e_contents").value = response.trim();
				document.getElementById("modifyModal").style.display = "block";
			},
			error: function() {
			}
		});
	}

$(document).ready(function() {
	$("#addBtn").click(function(){
		if( $("#addDay").val() != "0" && $("#title").val() != null && $("#contents").val() != null ){
		$.ajax({
			type:"POST",
			url:"./addTodo.jsp",
			data :{
				day: $("#addDay").val(),
				title: $("#title").val(),
				content: $("#contents").val()
			},
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success : function(){
				

				location.reload();
				alert("성공적으로 추가 했습니다.");
			},
			error: function() {
				location.reload();
			}
		});
		}
		else {
			alert("빈 칸을 채워주세요");
		}
	});

	$("#delBtn").click(function(){
		var selectedArray = new Array();
		$("input:checkbox[id='chk']").each(function() {
			if(this.checked) {
				selectedArray.push(this.value);
			}
		});

		if( selectedArray.length > 0 ) {
		$.ajax({
			type:"POST",
			url:"./delete.jsp",
			data : {selectedArray : selectedArray },
			traditional: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success: function(){
				location.reload();
			},
			error: function(){
				location.reload();
			}
		});
		}
		else {
			alert("삭제할 항목을 체크해주세요.");
		}
	});

	$("#modiBtn").click(function(){
		$.ajax({	
			type:"POST",
			url:"./modify.jsp",
			data : {
				day: document.getElementById("e_day").value,
				this_title:document.getElementById("this_title").value,
				title: document.getElementById("e_title").value,
				content: document.getElementById("e_contents").value
			},
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success: function() {
				location.reload();
			},
			error: function(){
			}
		});	
	});


	$(function(){
    		$('#mon_table').sortable({
			placeholder: "ui-state-highlight",
			helper:'clone',
			connectWith: "#tue_table,#wed_table,#thu_table,#fri_table",
                        update: function() {
                                var mon_array = new Array();
                                $("#mon_table").children().each(function() {
                                        mon_array.push($(this).find("#chk").attr("value"));
                                });
                                for( var i=0; i<mon_array.length; i++ ){
                                        var str = mon_array[i].substring(0,3);
                                        if( str != "Mon" ){
                                                dayModify(mon_array[i],"Mon");
                                        }
                                }
                        }

		});
		$('#tue_table').sortable({
			placeholder: "ui-state-highlight",
			helper:'clone',
			connectWith: "#mon_table,#wed_table,#thu_table,#fri_table",
			update: function() {
				var tue_array = new Array();
				$("#tue_table").children().each(function() {
					tue_array.push($(this).find("#chk").attr("value"));
				});
				for( var i=0; i<tue_array.length; i++ ){
					var str = tue_array[i].substring(0,3);
					if( str != "Tue" ){
						dayModify(tue_array[i],"Tue");
					}
				}
			}
		});
		$('#wed_table').sortable({
			placeholder: "ui-state-highlight",
			helper:'clone',
			connectWith: "#tue_table,#mon_table,#thu_table,#fri_table",
                        update: function() {
                                var wed_array = new Array();
                                $("#wed_table").children().each(function() {
                                        wed_array.push($(this).find("#chk").attr("value"));
                                });
                                for( var i=0; i<wed_array.length; i++ ){
                                        var str = wed_array[i].substring(0,3);
                                        if( str != "Wed" ){
                                                dayModify(wed_array[i],"Wed");
                                        }
                                }
                        }

		});
		$('#thu_table').sortable({
			placeholder: "ui-state-highlight",
			helper:'clone',
			connectWith: "#tue_table,#wed_table,#mon_table,#fri_table",
                        update: function() {
                                var thu_array = new Array();
                                $("#thu_table").children().each(function() {
                                        thu_array.push($(this).find("#chk").attr("value"));
                                });
                                for( var i=0; i<thu_array.length; i++ ){
                                        var str = thu_array[i].substring(0,3);
                                        if( str != "Thu" ){
                                                dayModify(thu_array[i],"Thu");
                                        }
                                }
                        }

		});
		$('#fri_table').sortable({
			placeholder: "ui-state-highlight",
			helper:'clone',
			connectWith: "#tue_table,#wed_table,#thu_table,#mon_table",
                        update: function() {
                                var fri_array = new Array();
                                $("#fri_table").children().each(function() {
                                        fri_array.push($(this).find("#chk").attr("value"));
                                });
                                for( var i=0; i<fri_array.length; i++ ){
                                        var str = fri_array[i].substring(0,3);
                                        if( str != "Fri" ){
                                                dayModify(fri_array[i],"Fri");
                                        }
                                }
                        }

		});
	});


});




