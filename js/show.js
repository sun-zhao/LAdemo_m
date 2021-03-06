$(document).ready(function(){
    $mask = $('.mask');
    $footer = $('.footer');
    var $window = $(window),
        $content=$('.content'),
        $wallpaper = $('.wallpaper'),
        $wall_page = $wallpaper.find('.wall_page'),
        $dot =$('.dot_list'),
        li_Nun =$dot.find('li').length,
        top_n = 0;
    $content.off('touchstart').on('touchstart',function(){
		event.preventDefault();
		var startTouch  = event.touches[0];
		startX = startTouch.pageX;
		startY = startTouch.pageY;
		var endX=startX;
        $btn = $('.btn');
		$btn_bottom = $('.btn_bottom');
		$(this).off('touchmove').on('touchmove',function(){
//			event.preventDefault();
			var moveTouch  = event.touches[0];
			endX = moveTouch.pageX;
			endY = moveTouch.pageY;
            $(this).off('touchend').on('touchend',function(){
//			event.preventDefault();
			x = endX - startX;
			y = endY - startY;
			var b = 0;
			if(Math.abs(y) > Math.abs(x)){
				if(y<0){
					b = -1;
					if(!$wallpaper.is(':animated')){
			            if(top_n < 0 && top_n > -($wall_page.length-1) || top_n == 0 && b == -1 || top_n == -($wall_page.length-1) && b == 1){
			                top_n += b>0?1:-1;
			                $wallpaper.css({
			                    'top':top_n*$window.height()
			                }).addClass('animate');
			                $dot.find('li').eq(-top_n).addClass('current').siblings().removeClass('current');
			                if($dot.find('li').eq(3).hasClass('current')){
			                    $('.four .img').stop().animate({
			                        'opacity': 1,
			                        'left': 0,
			                        'bottom': 0
			                    },1500);
			                } else {
			                    $('.four .img').stop().animate({
			                        'opacity': 0,
			                        'left': -50,
			                        'bottom': -50
			                    }, 800);
			                }
                            if($dot.find('li').eq(0).hasClass('current')){
                                $btn.fadeIn();
								$btn_bottom.stop().animate({bottom:-100},400);
                            }else{
                                $btn.fadeOut();
								$btn_bottom.stop().animate({bottom:0},700);
                            }
			            }
			        }
				}else{
					b = 1;
					if(!$wallpaper.is(':animated')){
		            if(top_n < 0 && top_n > -($wall_page.length-1) || top_n == 0 && b == -1 || top_n == -($wall_page.length-1) && b == 1){
		                top_n += b>0?1:-1;
		                $wallpaper.css({
		                    'top':top_n*$window.height()
		                }).addClass('animate');
		                $dot.find('li').eq(-top_n).addClass('current').siblings().removeClass('current');
		                if($dot.find('li').eq(3).hasClass('current')){
		                    $('.four .img').stop().animate({
		                        'opacity': 1,
		                        'left': 0,
		                        'bottom': 0
		                    },1500);
		                } else {
		                    $('.four .img').stop().animate({
		                        'opacity': 0,
		                        'left': -50,
		                        'bottom': -50
		                    }, 800);
		                }
						if($dot.find('li').eq(0).hasClass('current')){
							$btn.fadeIn();
							$btn_bottom.stop().animate({bottom:-100},400);
						}else{
							$btn.fadeOut();
							$btn_bottom.stop().animate({bottom:0},700);
						}
		            }
		        }
				}
			}
		});
		});
	});
	$wall_page.height($window.height());
    $window.resize(function(){
        $wall_page.height($window.height());
        $wallpaper.stop().animate({
            'top':top_n*$window.height()
        },800);
        window.location.reload();
    });
});