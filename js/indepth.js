var num_j=3;
var num_or=num_j;
var mobile=false;
var w=$(window).width();
	var h=$(window).height();
	var num_d=2;
$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 1);

var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="98f8df57-8081-4394-b494-ef5a88e85895";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;


 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};

loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);


var medidas = function(){
	
	w=$(window).width();
	h=$(window).height();
	$(".indepth_imag_cont").css("width",w+"px");
	$(".indeth_portada").css("width",w+"px");
	if(w>h){
		num_j=num_or;
		$(".indepth_cont").css("height",h+"px");
		$(".indeth_portada").css("height",h+"px");
		$(".indepth_container").css("width",(num_j*102)+"%");
		$(".indepth_portada_body").css("height",h+"px");
		$(".indepth_button_cont").show();
		
	}else{
		num_j=num_or*2;
		$(".indepth_imag_cont").css("width",(w*2)+"px");
		$(".indepth_container").css("width",(num_j*102)+"%");
		$(".indepth_cont").css("height",(h*.65)+"px");
		$(".indeth_portada").css("height",(h*.35)+"px");
		$(".indepth_portada_body").css("background-attachment","inherit");
		$(".indepth_portada_body").css("height",(h*.4)+"px");
		$(".indepth_button_cont").hide();
		$(".indepth_flechas_cont").css("bottom","7px");
	
		if(mobile){
			
		
		}
		
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
	$(".indepth_cont").css("overflow","hidden");
	
}else{

}




$(window).on("resize", function(){
	medidas(); 
	$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 10);
 
});



$("#scrolllll").swipe( { swipeLeft:swipe1, swipeRight:swipe2, allowPageScroll:"auto"} );

 function swipe1(event, phase, direction, distance) {
        
        console.log("r");
	        if(num_d<(num_j-1)){
		        num_d=num_d+1;
	        }
	        
				
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

			
			 console.log(num_d);
			 $('.indepth_cont').animate({
				scrollLeft: w*num_d
			}, 600);
        
       
   }
    function swipe2(event, phase, direction, distance) {
  console.log("left");
	        if(num_d>0){
				num_d=num_d-1;
			}
	        
		
			
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

			
			$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 600);
			console.log(num_d);
        }



