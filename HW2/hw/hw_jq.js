/* addBtn / modiBtn */
	function AllLoad() {
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
				alert("Fail!!");
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
                                alert("Fail!!");
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
                                alert("Fail!!");
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
                                alert("Fail!!");
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
                                alert("Fail!!");
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
				document.getElementById("e_title").value = title;
				document.getElementById("e_contents").value = response.trim();
				document.getElementById("modifyModal").style.display = "block";
			},
			error: function() {
				alert("fail");
			}
		});
	}

$(document).ready(function() {
	$("#addBtn").click(function(){
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
				alert("success!");
			},
			error: function() {
				location.reload();
				alert("Fail!");
			}
		});
	});

	$("#delBtn").click(function(){
		var selectedArray = new Array();
		$("input:checkbox[id='chk']").each(function() {
			if(this.checked) {
				selectedArray.push(this.value);
			}
		});

		$.ajax({
			type:"POST",
			url:"./delete.jsp",
			data : {selectedArray : selectedArray },
			traditional: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success: function(){
				location.reload();
				alert("delete success");
			},
			error: function(){
				location.reload();
				alert("delete fail");
			}
		});
	});

	$("#modiBtn").click(function(){
		$.ajax({	
			type:"POST",
			url:"./modify.jsp",
			data : {
				/*
				day:$("#e_day").val(),
				title:$("#e_title").val(),
				content:$("#e_content").val()

				*/
				day: document.getElementById("e_day").value,
				title: document.getElementById("e_title").value,
				content: document.getElementById("e_contents").value
			},
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success: function() {
				location.reload();
				alert("success");
			},
			error: function(){
				alert("fail");
			}
		});	
	});


});





