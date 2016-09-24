$(function(){
	$('#commentForm').validate();
//	$('#commentForm .btn').click(function(){
//		console.log($('#commentForm').valid());
//	})
	
	$('#commentForm .btn').click(function(){
	var user=$('#commentForm  input[name=uesrname]').val();
	var psw=$('#commentForm  input[name=psw]').val();
	$.cookie('user',user);
	$.cookie('psw',psw);
	window.location='index.html';
})
})