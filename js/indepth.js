var w=$(window).width();
var h=$(window).height();
var mobile=false;

$(".indepth_imag_cont").css("width",w+"px");
$(".indeth_portada").css("width",w+"px");
if(w>h){
	$(".indepth_cont").css("height",h+"px");
	$(".indeth_portada").css("height",h+"px");
}else{
	$(".indepth_imag_cont").css("width",(w*2)+"px");
	$(".indepth_cont").css("width","400%");
	$(".indepth_cont").css("height",(h*.6)+"px");
	$(".indeth_portada").css("height",(h*.4)+"px");
	$(".indepth_portada_body").css("background-attachment","inherit");
		$(".indepth_portada_body").css("height",(h*.4)+"px");

	if(mobile){
		
	console.log("mobil");
	
}
	
}






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
	$(".indepth_portada_body").css(".indepth_portada_body","inherit");
	
	
}else{

}




$(window).on("resize", function(){
	 w=$(window).width();
	 h=$(window).height();
	 
	 $(".indepth_imag_cont").css("width",w+"px");
$(".indeth_portada").css("width",w+"px");
if(w>h){
	$(".indepth_cont").css("height",h+"px");
	$(".indeth_portada").css("height",h+"px");
	console.log("kekekek");
}else{
$(".indepth_cont").css("height",(h/2)+"px");
console.log("dsfsdfsdf");
$(".indeth_portada").css("height",(h/2)+"px");
}
 
 if(mobile){

	
	
}else{
	
}
 
 
});



