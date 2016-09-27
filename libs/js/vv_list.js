$(function(){
	//$.fx.off=true;
	$('.header_box').load('header.html',function(){		
		$('.kinds .btn').trigger('click');
	});
	$('#list_footer').load('footer.html');
	$('.content_box .leftBox ul li ul li ul').slideUp(0).eq(0).slideDown(0);
	$('.content_box .leftBox .listbtn').click(function(){
		$(this).siblings('ul').slideToggle();
	})
	$('.rightTitle .title_middle span').hover(function(){
			$(this).css({
				borderBottomColor:'white',
			})
			$('.prd_posi').show();
		},function(){
			$(this).css({
				borderBottomColor:'#E6E6E6',
			})
			$('.prd_posi').hide();
		})
	$('.prd_posi').hover(function(){
		$(this).show();
		$('.rightTitle .title_middle span').css({
				borderBottomColor:'white',
			})
	},function(){
		$(this).hide();
		$('.rightTitle .title_middle span').css({
				borderBottomColor:'#E6E6E6',
			})
	});
	var data=window.location.search;
	data=data.replace('?','');
	var pageIndex=1;//默认页面为1
	if(data.search('page')>=0){
		var star=data.search('page');
		data=data.slice(star,data.length);
		var arr=data.split("&");
		page=arr[0].split('=');
		pageIndex=page[1];
	}
	$.get("libs/JSON/productdata.json",function(data){
		var num=0;
//		加载页数按钮
//		for(var k in data){
//			num++;
//		}
//		console.log(num);
		var obj=data['page'+pageIndex];
		if(!obj){
			//obj没定义就是没有这页；
			alert("没有该页数");
		}
		var str="";
		for(var i=0;i<obj.length;i++){
			if(i>0){
				str+='<div class="list_Box"><dl><dt><a href="product1.html"><img src="';
			}
			else{
				str+='<div class="list_Box"><dl><dt><a href="product.html"><img src="';
			}
			str+=obj[i].src+'"/></a></dt>';
			str+='<dd><a href="#">'+obj[i].introduction+'</a><br /><span>¥';
			str+=obj[i].price+'</span>';
			str+='<span class="out_price">¥'+obj[i].outprice+'</span><p>库存';
			str+=obj[i].stock+'</p></dd></dl></div>';
		}
		$('.rightBox .list_BigBox').html(str);
		console.log(page);
	})
	
	//下方的翻页按钮
	$('.list_btnBox li').slice(2,7).on('click',function(){
		var pageNum=$(this).html();
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	$('.list_btnBox li').eq(0).on('click',function(){
		var pageNum=1;
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	$('.list_btnBox li:last-child').on('click',function(){
		var pageNum=5;
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	$('.list_btnBox li').eq(1).on('click',function(){
		var pageNum=parseInt(pageIndex)-1;
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	$('.list_btnBox li').eq(-2).on('click',function(){
		var pageNum=parseInt(pageIndex)+1;
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	
	
	//排序条的上下页按钮
	$('.title_right span').eq(0).on('click',function(){
		var pageNum=parseInt(pageIndex)-1;
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	$('.title_right span').eq(1).on('click',function(){
		var pageNum=parseInt(pageIndex)+1;
		console.log(pageNum);
		window.location.href='list.html?page='+pageNum;
	});
	
	
	
	if(pageIndex==1){
		$('.list_btnBox li:lt(3)').addClass('noclick').off('click');
		
	}
	
	
	
	
	
	
	
	
	
	
	
})
