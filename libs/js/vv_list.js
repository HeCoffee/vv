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
	
	//排序函数（冒泡）
	function sortArry(arr,li){
		if(li==0){
			//小到大
			for(var n=0;n<arr.length-1;n++){
				for(var i=0;i<arr.length-1-n;i++){
					if(parseInt(arr[i].price)>parseInt(arr[i+1].price)){
						var tem=arr[i];
						arr[i]=arr[i+1];
						arr[i+1]=tem;
					}
				}
			}
		}
		else if(li==1){
			//大到小
			
			for(var n=0;n<arr.length-1;n++){
				for(var i=0;i<arr.length-1-n;i++){
					if(parseInt(arr[i].price)<parseInt(arr[i+1].price)){
						var tem=arr[i];
						arr[i]=arr[i+1];
						arr[i+1]=tem;
					}
				}
			}
		}
		
	}
	
	
	//加载列表函数
	function loadList(obj){
		var str="";
		for(var i=0;i<obj.length;i++){
			str+='<div class="list_Box"><dl><dt><a href="product.html?idcode='+obj[i].idcode+'"><img src="';
			str+=obj[i].src+'"/></a></dt>';
			str+='<dd><a href="#">'+obj[i].introduction+'</a><br /><span>¥';
			str+=obj[i].price+'</span>';
			str+='<span class="out_price">¥'+obj[i].outprice+'</span><p>库存';
			str+=obj[i].stock+'</p></dd></dl></div>';
		}
		$('.rightBox .list_BigBox').html(str);
	}
	
	var rules=1;
	//价格排序功能
	$('.rightTitle li:eq(3)').click(function(){
		$('.rightTitle li').removeClass()
		$(this).addClass('now_sq');
		if(rules==1){
				rules=0;
				$('i',this).removeClass().addClass('icon_up');
			}
			else if(rules==0){
				rules=1;
				$('i',this).removeClass().addClass('icon_down');
		}
			
		$.get("libs/JSON/productdata.json",function(data){
			var obj=data['page'+pageIndex];
			sortArry(obj,rules);
			loadList(obj);
		})
	})
	
	
	
	
	
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
		loadList(obj);
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
