$(function(){
	$('#header').load('header.html?_='+Math.random())
	var mySwiper = new Swiper('.swiper_box .swiper-container', {
	autoplay: 2500,//可选选项，自动滑动
	pagination : '.swiper_box .swiper-pagination',
	paginationClickable :true,
	autoplayDisableOnInteraction: false
	})
	var mySwiper2 = new Swiper('.swiper-container1 .swiper-container', {
	autoplay: 2500,//可选选项，自动滑动
	pagination : '.swiper-container1 .swiper-pagination',
	paginationClickable :true,
	autoplayDisableOnInteraction: false
	})
	
	$('#footer0').load('footer.html?_='+Math.random());
	$('.hot_production_left .nav li').hover(function(){
		$(this).addClass('hot_border').siblings().removeClass();
		var num=$('.hot_production_left .nav li').index(this);
		$('.hot_production_show').hide().eq(num).show();
	})
	
	$('.hot_production_right_box1 li').hover(function(){
		var num=$('.hot_production_right_box1 li').index(this);
		if(num>1){
			return;
		}
		$('.hot_production_right_box1 .right_news').hide().eq(num).show();
	})
	
	$(document).scroll(function(){
		if($(document).scrollTop()>=1300){
			$('.stairs_box').css({
				position:'fixed',
				top:'0px',
				zIndex:10
			})
			$('.stairs_box ul li').removeClass().eq(0).addClass('now_stairs');
			if($(document).scrollTop()>=1670&&$(document).scrollTop()<2170){
				$('.stairs_box ul li').removeClass().eq(1).addClass('now_stairs');
			}else if($(document).scrollTop()>=2170){
				$('.stairs_box ul li').removeClass().eq(2).addClass('now_stairs');
			}
		}
		else{
			$('.stairs_box ul li').removeClass().eq(0).addClass('now_stairs');
			$('.stairs_box').css({
				position:'relative',
			})
		}
	})
	$('.stairs_box ul li').click(function(){
		var num=$('.stairs_box ul li').index(this);
		var top=1200+num*546;
		$(document).scrollTop(top);
	})
})