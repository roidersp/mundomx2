var num_j=5;
var num_or=num_j;
var num_d=4;
var mobile=false;
var w=$(window).width();
	var h=$(window).height();
	


if(w>h){
$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 1);
}else{
	
	$('.indepth_cont').animate({
			scrollLeft: (w*((2*num_d)))
		}, 1);
		num_d=(2*num_d);
}


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



var zoom = function(jornada, x, y, x1, y1, num){
	var total_w;
	if(w>h){
		x=(x*w)/1920;
		y=(y*w)/1920;
		x1=(x1*w)/1920;
		y1=(y1*w)/1920;
	}else{
		x=(x*(w*2))/1920;
		y=(y*(w*2))/1920;
		x1=(x1*(w*2))/1920;
		y1=(y1*(w*2))/1920;
	}
	
	
	
	
	$("#jornada"+jornada+" map").append('<area jornada="'+(jornada)+'" num="'+(num)+'" shape="RECT" href=javascript:void(0); coords="'+x+','+y+','+x1+','+y1+'"></area>');
}

var mapa_img = function(){
	$(".indepth_imag_cont map").html("");
	zoom("3", 418, 650, 710, 860, "1");
	zoom("3", 880, 375, 1315, 565, "2");
	zoom("3", 1045, 580, 1230, 855, "3" );
	
	zoom("4", 575, 360, 710, 530, "1");
	zoom("4", 1260, 70, 1500, 220, "2");
	zoom("4", 1060, 395, 1730, 615, "3" );
	
	zoom("5", 40, 435, 350, 675, "1");
	zoom("5", 370, 390, 610, 605, "3");
	zoom("5", 450, 615, 805, 865, "2" );
	zoom("5", 1230, 555, 1620, 815, "4" );
}


mapa_img();

$(document).on("click","area",function(){
	$(".indepth_image_zoom").show();
	var r=$(this).attr("jornada");
	console.log(r);
	$("#image_j"+$(this).attr("jornada")+"_"+$(this).attr("num")).show();
});

$(".indepth_image_zoom").on("click",function(){
	$(this).hide();
	$(this).find("img").hide();
});

var medidas = function(){
	
	w=$(window).width();
	h=$(window).height();
	g=$(".indepth_flechas_cont").width();
	$(".indepth_flechas_cont").css("margin-left",((w-g)/2)+"px");
	var zoom_h;
	$(".indepth_imag_cont").css("width",w+"px");
	$(".indeth_portada").css("width",w+"px");
	
	$(".indepth_image_zoom").css("width",w+"px");
	
	
	if(w>h){
		num_j=num_or;
		$(".indepth_cont").css("height",h+"px");
		zomm_h=(900*w)/1920;
		$(".indepth_image_zoom").css("height",zomm_h+"px");
		$(".indeth_portada").css("height",h+"px");
		$(".indepth_container").css("width",((num_j*w)+60)+"px");
		$(".indepth_portada_body").css("height",h+"px");
		$(".indepth_button_cont").show();
		
	}else{
		num_j=num_or*2;
		$(".indepth_imag_cont").css("width",(w*2)+"px");
		$(".indepth_container").css("width",((num_j*w)+60)+"px");
		$(".indepth_cont").css("height",(h*.65)+"px");
		zomm_h=(h*.65);
		$(".indepth_image_zoom").css("height",zomm_h+"px");
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
	
	
	btf=(zomm_h-$(".indepth_image_zoom_item").height())/2;
	$(".indepth_image_zoom_item").css("margin-top",btf+"px");
	
	
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
		
		mapa_img();
 
});



$("#scrolllll").swipe( { swipeLeft:swipe1, swipeRight:swipe2, allowPageScroll:"horizontal"} );

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



