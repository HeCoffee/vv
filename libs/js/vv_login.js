$(function(){
	$('#commentForm').validate();
//	$('#commentForm .btn').click(function(){
//		console.log($('#commentForm').valid());
//	})
	
	$('#commentForm .btn').click(function(){
//	var user=$('#commentForm  input[name=uesrname]').val();
//	var psw=$('#commentForm  input[name=psw]').val();
//	$.cookie('user',user);
//	$.cookie('psw',psw);
	var user = $('#commentForm input[name=uesrname]').val();
	var pwd = $('#commentForm input[name=psw]').val();
		$.get('libs/JSON/userdata.json', function(data) {
			var oUser = data.login;
			for(var i = 0; i < oUser.length; i++) {
				if(oUser[i].user == user && oUser[i].pwd == pwd) {
					alert("登录成功");
					window.location.href = "index.html?user=" + user ;
					return;
				}
			}
			alert("用户名/密码错误！");
			console.log(oUser);
		})

})
})