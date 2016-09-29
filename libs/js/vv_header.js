$(function() {
	$('img').attr('draggable','false');
	$('#address_city li').click(function() {
		var num = $('#address_city li').index(this);
		$('#address_city li').removeClass().eq(num).addClass('target_city');
		$('.city').eq(0).html('<span class="city">送至：' + $('#address_city li').eq(num).html() + '<i class="icon"></i></span>')
	})
	//移动上去显示出城市菜单
	$('.city').hover(function() {
		$(this).css({
			border: '1px solid #DDDDDD',
			borderBottom: 'none',
			borderTop: 'none',
			background: '#fff'
		});
		$('.icon', this).toggleClass('icon2');
		$('#address_city').show();
	}, function() {
		$(this).css({
			border: '1px solid #fafafa',
			borderBottom: 'none',
			borderTop: 'none',
			background: '#fafafa'
		});
		$('.icon', this).toggleClass('icon2');
		$('#address_city').hide();
	})
	
	
	//移动上去显示出城市菜单
	$('#address_city').hover(function() {
		$('.city').css({
			border: '1px solid #DDDDDD',
			borderBottom: 'none',
			borderTop: 'none',
			background: '#fff'
		});
		$('#address_city').show();
	}, function() {
		$('.city').css({
			border: '1px solid #fafafa',
			borderBottom: 'none',
			borderTop: 'none',
			background: '#fafafa'
		})
		$('#address_city').hide();
	});


	//移动上去显示出下拉菜单
	$('.header_nav_right li').hover(function() {
		var num = $('.header_nav_right li').index(this);
		if(num == 2) {
			return;
		}
		if(num > 2) {
			num--;
		}
		$(this).toggleClass('bg_border');
		$(this).toggleClass('bg_white');
		$('.icon', this).toggleClass('icon2');
		$('.nav_ul ul').eq(num).css({
			display: 'block'
		})

	}, function() {
		var num = $('.header_nav_right li').index(this);
		if(num == 2) {
			return;
		}
		if(num > 2) {
			num--;
		}
		$(this).toggleClass('bg_border');
		$(this).toggleClass('bg_white');
		$('.icon', this).toggleClass('icon2');
		$('.nav_ul ul').eq(num).css({

			display: 'none'
		})
	})
	
	
	
	//移动上使下拉菜单不消失
	$('.nav_ul ul').hover(function() {
		var num = $('.nav_ul ul').index(this);
		if(num > 1) {
			num++
		}
		$('.header_nav_right li:eq(' + num + ')').toggleClass('bg_border');
		$('.header_nav_right li:eq(' + num + ')').toggleClass('bg_white');
		$('.icon', '.header_nav_right li:eq(' + num + ')').toggleClass('icon2');
		$(this).show();
	}, function() {
		var num = $('.nav_ul ul').index(this);
		if(num > 1) {
			num++
		}
		$('.header_nav_right li:eq(' + num + ')').toggleClass('bg_border');
		$('.header_nav_right li:eq(' + num + ')').toggleClass('bg_white');
		$('.icon', '.header_nav_right li:eq(' + num + ')').toggleClass('icon2');
		$(this).hide();
	});
	$('.my_cart').hover(function() {
		$(this).css({
			borderBottom: 'white'
		});
		$('.cart').show();
	}, function() {
		$(this).css({
			borderBottom: '1px solid #ddd'
		})
		$('.cart').hide();
	});
	
	
	
	//移动上去显示小购物车
	$('.cart').hover(function() {
		$(this).show();
		$('.my_cart').css({
			borderBottom: 'white'
		});
	}, function() {
		$(this).hide();
		$('.my_cart').css({
			borderBottom: '1px solid #ddd'
		});
	});
	
	//点击弹出右边购物车
	var showT = 0;
	$('.right_cart').click(function() {
		if(showT == 0) {
			$('.right_cart_ul').stop().animate({
				right: '38px'
			}, 400, function() {
				showT = 1;
			})
		}
		if(showT == 1) {
			$('.right_cart_ul').stop().animate({
				right: '-162px'
			}, 400, function() {
				showT = 0;
			})
		}
	})
	//收起购物车
	$('.right_cart_ul_icon').click(function() {
		$('.right_cart_ul').stop().animate({
			right: '-162px'
		}, 400, function() {
			showT = 0;
		})
	})

	//右边登录框显示/隐藏
	$('.right_login:eq(0)').click(function() {
		$('.right_login_box').fadeToggle();
	})

	$('.close_login').click(function() {
		$('.right_login_box').fadeToggle();
	})

	//移动在导航栏会出现详细导航页
	$('.bottom_nav .nav li').hover(function() {
		var num = $('.bottom_nav .nav li').index(this);
		if(num < 1 || num > 2) {
			return;
		}
		$('.bottom_nav .nav_kinds').eq(num - 1).show();

	}, function() {
		var num = $('.bottom_nav .nav li').index(this);
		if(num < 1 || num > 2) {
			return;
		}
		$('.bottom_nav .nav_kinds').eq(num - 1).hide();

	})
	
	//移动在导航栏会出现详细导航页
	$('.bottom_nav .nav_kinds').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	})


	//回到顶部
	$('.right_cart_box .btn').click(function() {
		$('body,html').animate({scrollTop:0},500);
	})

	$.idcode.setCode();
	$('.right_login_box .btn').click(function() {
		var IsBy = $.idcode.validateCode();
		var user = $('.right_login_box input[name=user]').val();
		var pwd = $('.right_login_box input[name=psw]').val();
		$.get('libs/JSON/userdata.json', function(data) {
			var oUser = data.login;
			for(var i = 0; i < oUser.length; i++) {
				if(oUser[i].user == user && oUser[i].pwd == pwd) {
					if(IsBy==true){
						alert("登录成功");
						window.location.href = "index.html?user=" + user ;
						return;
					}
					else{
						alert("验证码错误");
						return;
					}
				}
			}
			alert("用户名/密码错误！");
		})

		//	$.cookie('user',user);
		//	$.cookie('psw',psw);
		//	window.location='index.html';
	})


//	//用search方式判断是否登录了页面
//	if(window.location.search) {
//		var name=window.location.search;
//		name=name.replace('?','');
////		var arr=name.split('?');
////		name=arr[1]
//		console.log(name);
//		if(name.search('user')>=0){
//			var star=name.search('user');
//			name=name.slice(star,name.length);
//			console.log(name);
//			var data=name.split('&');
//			var UserName=data[0].split('=');
//			var str = UserName[1] + ' 您好，欢迎来到<a href="#">为为商城</a>'
//			$('.header_nav_right span').html(str);
//			$('.right_login_box').remove();
//		}
//		
//	}
	
	
	//用cookice方式判断是否有账户登录了
	if($.cookie('user')) {
		var name=$.cookie('user');
		console.log(name);
		var str =name + ' 您好，欢迎来到<a href="#"> 为为商城 </a><b>退出</b>'
		$('.header_nav_right span').html(str);
		$('.right_login_box').remove();
	}
	
	$('.header_nav_right b').click(function(){
		$.cookie('user','',{expires:-1});
		window.location.href='index.html';
	})
	
	
	
	
	
	//小购物车删除 购物信息
	$('.closeli').click(function(){
		$(this).parent().remove();
	});
	
	//右边购物车删除购物信息
	$('.closeLi').click(function(){
		$(this).parent().remove();
	});
	
	
	$('#go_cart1').click(function(){
		window.location.href='shopping_cart.html';
	})
	
	$('#go_cart').click(function(){
		window.location.href='shopping_cart.html';
	})
	
	
	
	
	//头部加载时判断是否已经有购物信息 有则加进去
	var arr=JSON.parse($.cookie('cartli'));
	
	
	
	function addcart(arr){
		//添加到两边购物车
		var str1='';//小购物车的html
		var str2='';//右边购物车的html
		var num=arr.length;
		if(num==0){
			$('.goods_num').text(num).hide();
		}
		else{
			$('.goods_num').text(num).show();
		}
		var str3='共<b>'+num+'</b>种商品，总计金额<b>¥';//总共金额的html
		var alltotal=0;
		for(var j=0;j<arr.length;j++){
			console.log(123);
			var pro_price=parseInt(arr[j].price);
			alltotal+=pro_price*arr[j].account;
			str1+='<li><img src="';
			str1+=arr[j].src+'"/><dl><dt><a href="#">';
			str1+=arr[j].title+'</a></dt><dd>¥';
			str1+=pro_price.toFixed(2)+'×'+arr[j].account+'</dd></dl><span class="closeli">×</span></li>';
			str2+='<li><img src="';
			str2+=arr[j].src+'"/><dl><dt><a href="#">';
			str2+=arr[j].title+'</a></dt><dd><span>¥';
			str2+=pro_price.toFixed(2)+'</span>×'+arr[j].account+'</dd></dl>';
			str2+='<span class="closeLi">×</span></li>';
		}
		str3+=alltotal+'</b>';
		$('.goods_charge').html(str3);
		$('.cart ul').html(str1);
		$('#right_cart_ul').html(str2);
		//重新加载删除功能
		//小购物车删除 购物信息
		$('.closeli').click(function(){
			var title=$(this).siblings('dl').children('dt').children('a').text();
			deletcartDate(title);
			$(this).parent().remove();
		});
		
		//右边购物车删除购物信息
		$('.closeLi').click(function(){
			var title=$(this).siblings('dl').children('dt').children('a').text();
			deletcartDate(title);
			$(this).parent().remove();
			
		});	
	}
		//删除cookice数据
	function deletcartDate(txt){
		var arr=JSON.parse($.cookie('cartli'));
		for(var i=0;i<arr.length;i++){
			if(arr[i].title==txt){
//				arr[i].account=parseInt(arr[i].account)+parseInt($('.account_box input').val());
//				none=1;
				break;
				console.log(1);
			}
		}
		arr.splice(i,1);
		addcart(arr);
		//删除完成当前页面，保存cookice
		var cookicData=JSON.stringify(arr);
		$.cookie('cartli',cookicData,{expires:7});
		
		
		
	}
	
	
	
	
	
	addcart(arr);
	
	
	//简单的搜索功能
	$('.search .search_btn').click(function(){
		var txt=$('.search .search_txt').val();
		if(txt==''){
			return;
		}
		$.get('libs/JSON/productdata.json',function(data){
			for(var k in data){
				for(var i=0;i<data[k].length;i++){
					if(data[k][i].introduction.search(txt)>0){
						var num=k.substring(4,5);
						window.location.href='list.html?page='+num;
						return;
					}
				}
			}
		})
	})
	
	
	
	
})