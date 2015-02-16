var playGlyph = "<span onclick='controlToggle(event)' class='glyphicon glyphicon-play controls' title='Play'></span>";
var pauseGlyph = "<span onclick='controlToggle(event)' class='glyphicon glyphicon-pause controls' title='Pause'></span>";
var isPlaying = true;


$(document).ready(function(){
		$("#play").hide();
		$("#contact, .smedia, .controls").tooltip({
			placement:'bottom'
		});
		var controllers = $("#gradient, #diamonds, #bars");
		controllers.each(function(){
			$(this).css("background-image", "url('"+$(this).data("img") +"')");
		});
		controllers.click(function(){
			controllers.each(function(){
				$("body").removeClass($(this).data("class"));
			});
			$("body").addClass($(this).data("class"));
		});
		
		$("#facebook, #instagram, #twitter").mouseover(function(){
			$(this).children().first().attr('src','media/'+$(this).attr('id')+'1.png');
		});
		$("#facebook, #instagram, #twitter").mouseout(function(){
			$(this).children().first().attr('src','media/'+$(this).attr('id')+'.png');
		});
		$(".controls").click(function(){
			if(isPlaying){
				$("#pause").hide();
				$("#play").show();
				isPlaying = false;
			} else {
				$("#play").hide();
				$("#pause").show();
				isPlaying = true;
			}
		});	
		
		/*$(".floating").each(function(){
			var thisObj = $(this);
			var floatObj = thisObj.clone();
			var offset = thisObj.offset();
			$(this).css("visibility","hidden");
			floatObj.removeClass("floating").addClass("floated").css("position","fixed").css("left",offset.left).css("top",offset.top - $("html").scrollTop()).css("visibility","visible").css("width",thisObj.css("width")).css("height",thisObj.css("height")).attr('onmouseover','growBy(event,10)').attr('onmouseout','growBy(event,-10)')
			thisObj.parent().append(floatObj);
		});
		
		$(window).resize(function(){
			$(".floated").remove();
			$(".floating").each(function(){
				var thisObj = $(this);
				var floatObj = thisObj.clone();
				var offset = thisObj.offset();
				thisObj.css("visibility","hidden");
				floatObj.removeClass("floating").addClass("floated").css("position","fixed").css("left",offset.left).css("top",offset.top - $("html").scrollTop()).css("visibility","visible").css("width",thisObj.css("width")).css("height",thisObj.css("height")).attr('onmouseover','growBy(event,10)').attr('onmouseout','growBy(event,-10)');
				thisObj.parent().append(floatObj);
			});
		});
		
		$(window).scroll(function(){
			$(".floated").remove();
			$(".floating").each(function(){
				var thisObj = $(this);
				var floatObj = thisObj.clone();
				var offset = thisObj.offset();
				thisObj.css("visibility","hidden");
				floatObj.removeClass("floating").addClass("floated").css("position","fixed").css("left",offset.left).css("top",offset.top - $("html").scrollTop()).css("visibility","visible").css("width",thisObj.css("width")).css("height",thisObj.css("height")).attr('onmouseover','growBy(event,10)').attr('onmouseout','growBy(event,-10)');
				thisObj.parent().append(floatObj);
			});
		});*/
});

function controlToggle(e){
	var btn = e.target;
	if(isPlaying){
		$(btn).replaceWith(playGlyph);
		isPlaying = false;
	} else {
		$(btn).replaceWith(pauseGlyph);
		isPlaying = true;
	}
}

function growBy(e, value){
	var obj = e.target;
	if($(obj).hasClass("smedia")){
		if(value > 0){
			$(obj).attr('src','media/'+$(obj).attr('title').toLowerCase()+'1.png');
			console.log($(obj).attr('title').toLowerCase());
		} else {
			$(obj).attr('src','media/'+$(obj).attr('title').toLowerCase()+'.png');
			console.log($(obj).attr('title').toLowerCase());
		}
	}
	var width = $(obj).width();
	var height = $(obj).height();
	$(obj).css("height","+="+height/width*value).css("width","+="+value).css("left","-="+value/2).css("top","-="+height/width*value/2);
}