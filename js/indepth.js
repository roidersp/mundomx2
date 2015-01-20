var num_j=2;
var num_or=num_j;
var mobile=false;
var w=$(window).width();
	var h=$(window).height();
	var num_d=0;


var medidas = function(){
	
	w=$(window).width();
	h=$(window).height();
	$(".indepth_imag_cont").css("width",w+"px");
	$(".indeth_portada").css("width",w+"px");
	if(w>h){
		$(".indepth_cont").css("height",h+"px");
		$(".indeth_portada").css("height",h+"px");
		$(".indepth_container").css("width",(num_j*100)+"%");
		$(".indepth_portada_body").css("height",h+"px");
		$(".indepth_button_cont").show();
		num_j=num_or;
	}else{
		$(".indepth_imag_cont").css("width",(w*2)+"px");
		$(".indepth_container").css("width",(num_j*100)+"%");
		$(".indepth_cont").css("height",(h*.65)+"px");
		$(".indeth_portada").css("height",(h*.35)+"px");
		$(".indepth_portada_body").css("background-attachment","inherit");
		$(".indepth_portada_body").css("height",(h*.4)+"px");
		$(".indepth_button_cont").hide();
	num_j=num_or*2;
		if(mobile){
			
		
		}
		
	}
	
	console.log(num_j);
	}


$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

if(num_d>=(num_j-1)){
		$(".fecha_r div").hide();
	}else{
		$(".fecha_r div").show();
	}
	if(num_d<=0){
		$(".fecha_l div").hide();
	}else{
		$(".fecha_l div").show();
	}

$(".fecha_r div").on("click",function(){
	num_d=num_d+1;
	$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 2000);
		
	if(num_d>=(num_j-1)){
		$(".fecha_r div").hide();
	}else{
		$(".fecha_r div").show();
	}
	if(num_d<=0){
		$(".fecha_l div").hide();
	}else{
		$(".fecha_l div").show();
	}
});

$(".fecha_l div").on("click",function(){
	num_d=num_d-1;
	$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 2000);
	if(num_d>=(num_j-1)){
		$(".fecha_r div").hide();
	}else{
		$(".fecha_r div").show();
	}
	if(num_d<=0){
		$(".fecha_l div").hide();
	}else{
		$(".fecha_l div").show();
	}
});






medidas();


var device = navigator.userAgent

if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
 { 
mobile=true;

}
else
{
	mobile=false;
}


if(mobile){
	$(".indepth_portada_body").css("background-attachment","inherit");
	
	
}else{

}




$(window).on("resize", function(){
	medidas(); 
	$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 10);
 
});



