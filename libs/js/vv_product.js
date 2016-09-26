$(function(){
	$('.product_header').load('header.html',function(){
		$('.kinds .btn').trigger('click');
	});
	$('.product_footer').load('footer.html');
	$(".bigPic").jqueryzoom({
					xzoom: 500, //放大区域宽度
					yzoom: 500, //放大区域高度
					preload: 1, //是否显示预加载
					offset: 10, //放大区域偏离小图的距离
					position: "right", //放大区域显示的位置（left,right）
					lens: true //是否显示小图上的透明区域
	});
	
	$(".bigPic1").jqueryzoom({
					xzoom: 5, //放大区域宽度
					yzoom: 5, //放大区域高度
					preload: 1, //是否显示预加载
					offset: 10, //放大区域偏离小图的距离
					position: "right", //放大区域显示的位置（left,right）
					lens: true //是否显示小图上的透明区域
	});
	
	$('.left_bottom_sbox .imglist li').mouseenter(function(){
		var num=$('.left_bottom_sbox .imglist li').index(this);
		var img_str='<img src="libs/images/product/product_small'+num+'.jpg" jqimg="libs/images/product/product_big'+num+'.jpg">';
		$('.left_detail .bigPic').html(img_str);
	})
	$('.goods_account li').slice(0,2).click(function(){
		$('.goods_account li').slice(0,2).removeClass();
		$(this).addClass('checked_now');
		var str='已选择 ';
		$('.checked_now').each(function(index,obj){
			str+=$('.checked_now').eq(index).text()+' ';
		})
		$('.total').text(str);
		console.log(str);
	})
	
	$('.account_box li').click(function(){
		var num=$('.account_box li').index(this);
		if(num==0){
			num=1
		}else if(num==1){
			num=-1
		}
		num=parseInt($('.account_box input').val())+num;
		if(num<0||num>100) {
			num=1;
		}
		$('.account_box input').val(num);
	})
	$('.left_sider_bottom dt img').hover(function(){
		$(this).siblings('div').toggle();
	})
	//6792
//	$(document).scroll(function(){
//		console.log($(document).scrollTop());
//	})
	$('.right_sider_title li:eq(1)').click(function(){
		$(document).scrollTop(6792);
	})
	
	
	
	
	
	
	
	
})