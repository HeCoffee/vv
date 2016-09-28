$(function(){
	$('#form1').validate({
		rules:{
		userPhone:{
			required:true,
			minlength:11,
			maxlength:11,
		}
		},
		messages:{
		userPhone:{
			required:'必填',
			minlength:"请填写正确的手机号",
		}
	}		
	});
	
	$('#form2').validate({
		rules:{
		psw2:{
			required:true,
			equalTo:'#psw1',
		}
		},
		messages:{
		psw2:{
			required:'必填',
			equalTo:"两次输入的不一样",
		}
	}		
	});
	
	$.idcode.setCode();
	
	var user;
	var psw;
	$('#form1 .btn').click(function(){
		var IsBy = $.idcode.validateCode();
		if($('#form1').valid()==true){
			//判断验证码
			if($('#form1 :checked')[0]){
				if(IsBy==true){
				$('.rg_bigbox').hide().eq(1).show();
				/*填写账户信息*/
				$('.step li:eq(1)').addClass('now_bd');
				$('.step li span:eq(1)').addClass('now');
				user=$('.rg_bigbox input[name=userPhone]').val();
				$('#form2 span:eq(0)').html(user);
				}
				else{
					alert('验证码输入错误');
				}
			}
			else{
				alert('请阅读服务协议');
			}
			
			
		}
	})
	$('#form2 .btn').click(function(){
		if($('#form2').valid()==true){
			psw=$('.rg_bigbox input[name=psw]').val();
			$('.step li:eq(2)').addClass('now_bd');
			$('.step li span:eq(2)').addClass('now');
			$('.rg_bigbox').hide().eq(2).show();
			$.cookie('user',user);
			$.cookie('psw',psw);
			var timer=window.setTimeout(function(){
				window.location="index.html";
			},3000)
		}
	})
	
	
})
