var num_j=17;
var num_or=num_j;
var num_d=num_j-1;
var mobile=false;
var w=$(window).width();
var h=$(window).height();
	


/*if(w>h){
$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 1);
		
		
		
}else{
	
	$('.indepth_cont').animate({
			scrollLeft: (w*((2*num_d)))
		}, 1);
		
		
		num_d=(2*num_d);
		
		
}*/


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
	
	zoom("6", 665, 170, 945, 645, "1");
	zoom("6", 1140, 380, 1415, 635, "2");
	zoom("6", 1420, 455, 1605, 655, "4" );
	zoom("6", 860, 80, 1150, 243, "3" );
	
	zoom("7", 110, 320, 460, 580, "2");
	zoom("7", 480, 320, 920, 560, "1");
	zoom("7", 1230, 550, 1605, 755, "3" );
	zoom("7", 930, 420, 1210, 680, "4" );
	
	zoom("8", 160, 350, 550, 650, "3");
	zoom("8", 860,30, 1060,315 , "1");
	zoom("8", 660, 450, 1250, 670, "2" );
	zoom("8", 350, 670, 680, 860, "4" );
	
	zoom("9", 750, 65, 945, 260, "1");
	zoom("9", 340, 75, 650,315,"2");
	zoom("9", 565, 540, 775, 875, "3" );
	zoom("9", 1590, 470, 1870, 780, "4" );
	
	zoom("10", 850, 10, 1180, 340, "4");
	zoom("10", 700, 425, 1015 ,770,"1");
	zoom("10", 1070, 600, 1385, 810, "2" );
	zoom("10", 1460, 310, 1695, 590, "3" );
	
	zoom("11", 440, 415, 710, 660, "2");
	zoom("11", 770, 320, 990 ,560,"1");
	zoom("11", 1000, 640, 1190, 840, "3" );
	zoom("11", 1240, 510, 1485, 710, "4" );
	
	zoom("12", 830, 175, 1210, 415, "1");
	zoom("12", 770, 425, 990 ,550,"2");
	zoom("12", 140, 560, 695, 795, "3" );
	zoom("12", 780, 560, 1210, 825, "4" );
	zoom("12", 1215, 660, 1470 ,880,"5");
	zoom("12", 1600, 640, 1830, 855, "6" );
	zoom("12", 1385, 285, 1830, 555, "7" );
	
	zoom("13", 800, 360, 1035, 635, "1");
	zoom("13", 35, 480, 450, 780, "3" );
	zoom("13", 560, 250, 825, 495, "4" );
	zoom("13", 1270, 450, 1450, 690,"5");
	zoom("13", 1170, 160, 1425, 320, "6" );
	zoom("13", 1090, 300, 1280, 560, "7" );
	zoom("13", 540, 520, 790, 800, "8" );
	zoom("13", 1425, 345, 1630, 520, "9" );
	
	zoom("14", 610, 235, 800, 435, "1");
	zoom("14", 925, 250, 1250 ,480,"2");
	zoom("14", 890, 445, 1190, 720, "3" );
	zoom("14", 1400, 535, 1825, 815, "4" );
	
	zoom("15", 390, 285, 637, 535, "2");
	zoom("15", 180, 545, 555 ,730,"1");
	zoom("15", 725, 175, 1360, 475, "3" );
	zoom("15", 530, 535, 1230, 810, "4" );
	
	zoom("16", 81, 165, 380, 345, "1");
	zoom("16", 780, 195, 1305 ,530,"2");
	zoom("16", 745, 535, 970, 855, "3" );
	zoom("16", 1525, 100, 1880, 380, "4" );
	
	zoom("17", 30, 505, 750, 890, "1");
	zoom("17", 115, 10, 610 ,495,"2");
	zoom("17", 690, 50, 1300, 500, "3" );
	zoom("17", 890, 565, 1445, 830, "4" );
}


mapa_img();

$(document).on("click","area",function(){
	$(".indepth_image_zoom").css("display","table");
	var r=$(this).attr("jornada");
	console.log(r);
	$("#image_j"+$(this).attr("jornada")+"_"+$(this).attr("num")).css("display","table");;
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
		$(".indepth_container").css("width",((num_j*w)+40)+"px");
		$(".indepth_portada_body").css("height",h+"px");
		$(".indepth_button_cont").show();
		
	}else{
		num_j=num_or*2;
		$(".indepth_imag_cont").css("width",(w*2)+"px");
		$(".indepth_container").css("width",((num_j*w)+40)+"px");
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
	//$(".indepth_image_zoom_item").css("margin-top",btf+"px");
	
	
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
        
        if(w>h){
$('.indepth_cont').animate({
			scrollLeft: w*num_d
		}, 1);
		
		console.log("w>h "+(w*num_d));
		
		
}else{
	
	$('.indepth_cont').animate({
			scrollLeft: (w*((2*num_d)))
		}, 1);
		
		console.log("else "+(w*((2*num_d))));
		
		num_d=(2*num_d);
		
		
}



