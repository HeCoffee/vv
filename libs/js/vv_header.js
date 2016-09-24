$(function() {
	$('#address_city li').click(function() {
		var num = $('#address_city li').index(this);
		$('#address_city li').removeClass().eq(num).addClass('target_city');
		$('.city').eq(0).html('<span class="city">送至：' + $('#address_city li').eq(num).html() + '<i class="icon"></i></span>')
	})
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

	var showT = 0;
	$('.right_cart').click(function() {
		if(showT == 0) {
			$('.right_cart_ul').animate({
				right: '38px'
			}, 400, function() {
				showT = 1;
			})
		}
		if(showT == 1) {
			$('.right_cart_ul').animate({
				right: '-162px'
			}, 400, function() {
				showT = 0;
			})
		}
	})
	$('.right_cart_ul_icon').click(function() {
		$('.right_cart_ul').animate({
			right: '-162px'
		}, 400, function() {
			showT = 0;
		})
	})

	$('.right_login:eq(0)').click(function() {
		$('.right_login_box').fadeToggle();
	})

	$('.close_login').click(function() {
		$('.right_login_box').fadeToggle();
	})

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

	$('.bottom_nav .nav_kinds').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	})

	$('.right_cart_box .btn').click(function() {
		$(document).scrollTop(0);
	})

	$('.right_login_box .btn').click(function() {
		var user = $('.right_login_box input[name=user]').val();
		var pwd = $('.right_login_box input[name=psw]').val();
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

		//	$.cookie('user',user);
		//	$.cookie('psw',psw);
		//	window.location='index.html';
	})

	if(window.location.search) {
		var name=window.location.search;
		var UserName=name.split('=');
		console.log(UserName[1]);
		var str = UserName[1] + ' 您好，欢迎来到<a href="#">为为商城</a>'
		$('.header_nav_right span').html(str);

	}

})