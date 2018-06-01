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
			dataType:"html",
			success: function(data){
				console.log(data);
				$("#mon_table").html("aa");
			},
			error: function(){
				alert("Fail!!");
			}	
		});
	}

	function TueLoad() {
		$.ajax({

		});
	}

	function WedLoad() {

	}

	function ThuLoad() {

	}

	function FriLoad() {

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
				alert("success!");
			},
			error: function() {
				alert("Fail!");
			}
		});
	});
});





