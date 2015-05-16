$(function(){
	var person='me';
	
	$("#me").click(function(){
		$(this).hide();
		$("#you").show();
		person="you";
	});
	
	$("#you").click(function(){
		$(this).hide();
		$("#me").show();
		person="me";
	});
	
	$("#btn").click(function(){
		var content=$("#txt").val();
		var wrap=$("#wrap");
		var str="";
		if(person=="me"){
			str='<div class="right">'+person+':'+content+'</div>';
		}else{
			str='<div class="left">'+person+':'+content+'</div>';
		}
		 
		wrap.prepend(str);
	});
	
})