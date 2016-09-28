$(function(){
	$('.product_header').load('header.html',function(){
		$('.kinds .btn').trigger('click');
		//加载时 判断是否已经有商品在购物车
		if($.cookie('cartli')!=undefined){
		var arr1=JSON.parse($.cookie('cartli'));
			addcart(arr1);
		}
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
	
	
	
	//加载评论的函数
	$.get("libs/JSON/assessdata.json",function(data){
		console.log(data);
		var oLi='';
		if(data.length==0){
			oLi='<li><p>暂无评论</p></li>';
		}
		else{
			for(var i=0;i<data.length;i++){
				oLi+='<li><p>'+data[i].assess+'</p><br /><span id="">'+data[i].user+'</span></li>';
			}
		}
		
		$('.appraise_area ul').html(oLi);
		
	});
		
	//创建产品对象
	function productObj(id){
		var obj={};
		obj.src=$('.imglist img:first').prop('src');
		var num=obj.src.search('libs');
		obj.src=obj.src.substring(num);
		obj.title=$('.goods_summary p:eq(0)').text();
		obj.price=$('.goods_middle strong:eq(1)').text();
		obj.price=obj.price.replace('¥','');
		obj.account=$('.account_box input').val();
		obj.id=id;
		return obj;
//		arr.push(obj);
//		var cookicData=JSON.stringify(arr);
//		$.cookie('cartli',cookicData,{expires:7});
	}
	
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
	
	
	
	
	//添加按钮功能
	$('#join').click(function(){
		var id=$('.goods_summary p:eq(0)').attr('idcode');
		var prObj=new productObj(id);
		
		//判断cookice是否存在
		if($.cookie('cartli')==undefined){
			var arr=[];
			arr.push(prObj);
		}else{
			var arr=JSON.parse($.cookie('cartli'));
			var none=0;
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==id){
					arr[i].account=parseInt(arr[i].account)+parseInt($('.account_box input').val());
					none=1;
					break;
				}
			}
			if(none==0){
				arr.push(prObj);
			}
		}
		
		//添加到两边购物车
		addcart(arr);
		
		
		$('.right_cart').trigger('click');
		var timer=window.setTimeout(function(){
			$('.right_cart').trigger('click');
		},1000)
		
		//操作完当前页面，保存cookice
		var cookicData=JSON.stringify(arr);
		$.cookie('cartli',cookicData,{expires:7});
		
//		var obj={};
//		obj.src=$('.imglist img:first').prop('src');
//		var num=obj.src.search('libs');
//		obj.src=obj.src.substring(num);
//		obj.title=$('.goods_summary p:eq(0)').text();
//		obj.price=$('.goods_middle strong:eq(1)').text();
//		obj.price=obj.price.replace('¥','');
//		obj.account=$('.account_box input').val();
//		arr.push(obj);
//		var cookicData=JSON.stringify(arr);
//		$.cookie('cartli',cookicData,{expires:7});

	});
	
	
	
	
})