$(function(){
	$('.shopping_cart_header').load('header.html',function(){
		$('.header_wrap').remove();
		$('.bottom_nav').remove();
		$('.header').css("border",'none');
		$('.right_cart').css("visibility",'hidden');
	})
	
	//结算函数
	function charge(){
		var alltotal=0;
		$('tbody tr').each(function(index,obj){
			if($(':checked',obj).attr('checked')){
				alltotal+=parseFloat($(obj).children('td:eq(4)').text());
			}
		});	
		$('tfoot td span').text(alltotal.toFixed(2));
	}
	
	//加载购物车信息
	if($.cookie('cartli')){
		var arr=JSON.parse($.cookie('cartli'));
		console.log(arr);
		var str='';
		for(var i=0;i<arr.length;i++){
			str+='<tr><td><input type="checkbox" name="" id="" value="" checked="checked"/></td><td><a href=""><img src="';
			str+=arr[i].src+'" alt="" />';
			str+=arr[i].title+'</a></td><td>';
			var tr_price=parseFloat(arr[i].price);
			str+=tr_price.toFixed(2)+'</td><td><b>+</b><input type="text" name="" id="" value="';
			str+=arr[i].account+'" /><b>-</b></td><td>';
			var tr_total=arr[i].account*tr_price;
		    str+=tr_total.toFixed(2)+'</td><td><a>删除</a></td></tr>';
		}
		$('tbody').html(str);
		charge()
	}
	
	
	
	
	
	
	
	// + - 结算功能
	$('.cart_content tr td b').click(function(){
		var num=$('.cart_content tr td b').index(this);
		if(num%2==0){
			num=1;
		}else{
			num=-1;
		}
		num=parseInt($(this).siblings('input').val())+num;
		if(num<0){
			num=0;
		}
		$(this).siblings('input').val(num);
		var price=$(this).parent().prev().text();
		var total=price*num;
		$(this).parent().next().text(total.toFixed(2));
		charge();
	});
	
	
	//数量栏 数字改变事件
	$('tbody tr td input:text').change(function(){
		var num=$(this).val();
		if(num<0||isNaN(num)){
			num=0;
			$(this).val(num);
		}
		$(this).siblings('input').val(num);
		var price=$(this).parent().prev().text();
		var total=price*num;
		$(this).parent().next().text(total.toFixed(2));
		charge();
	});
	
	
	//全选功能；
	var t=1;//默认全选
	$('thead th input').click(function(){
		if(t==0){
			$('tbody :checkbox').prop('checked','checked');
			t=1;
		}else if(t==1){
			$('tbody :checkbox').removeProp('checked');
			t=0;
		}
		charge();
	})
	
	
	//勾选变化的时候 重新计算
	$('tbody tr td input:checkbox').change(function(){
		charge();
	});
	
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
		//删除完成当前页面，保存cookice
		var cookicData=JSON.stringify(arr);
		$.cookie('cartli',cookicData,{expires:7});
		
		
		
	}
	
	
	//删除行功能
	$('tbody td a').click(function(){
		var txt=$(this).parent().parent().find('a:eq(0)').text();
		deletcartDate(txt);
		$(this).parent().parent().remove();
		charge();
	});
	
	
	
	
	
	
	
	
	
	
	
	
})
