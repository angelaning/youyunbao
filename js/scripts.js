/* 
 *  全局JS
 *  ---------------------------------------
 *  作者: haibao(http://smwell.sinaapp.com/)
 *  时间: 2014-12-15
 *  企鹅：964279742
 *  创意源于生活，代码如诗从你我开始
 */

/***************** Smooth Scrolling ******************/
$(function() {
	//首屏动画
	$('.dw').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
        $(this).removeClass('zoomIn animated').addClass('fadeInUp animated');
  	});
	
	//返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$('#HGoTop').fadeIn();
		}else{
			$('#HGoTop').fadeOut();
		}
	});
	
	//返回顶部按钮点击事件
	$('#HGoTop').click(function(){
		$('body,html').animate({ scrollTop:0 },500);
		return false;
	});
	
	/***************** Waypoints ******************/
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	/***************** 返回  ******************/
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1200);
				return false;
			}
		}
	});
	
	/********* Flexsliders **********/
	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
  	
  	/*********** 案例  ************/
  	$(".img").mouseenter(function(){
        $(this).addClass("hover");
    }).mouseleave(function(){
        $(this).removeClass("hover");
    }).click(function(){
    	//显示案例弹出层
  		var e = $(this).attr('data-anchor');
  		var con,tit,desc,img1,img2,img3;
  		switch (e){
  			case 'a1':
  				tit = 'K11';
  				desc = '利用豆瓣+社区+地方性媒体的组合渠道为K11环保购物袋活动进行O2O推广，具体包含：1）线上募集 2）线上评选互动 3）线下评委最终评选 4）大牌展示 5）豆瓣直播 几大功能！短短1个月时间，累计曝光超过5000W，累计收获作品6000副';
  				img1 = 'img/p1_1.png';
  				img2 = 'img/p1_2.png';
  				img3 = 'img/p1_3.png';
  			break;
  			case 'a2':
  				tit = '重庆东原新新PARK';
  				desc = '完成新新Park的微网站设计和实现，在世界杯期间，策划举行系列世界杯活动，包括有奖竞猜、世界杯脱口秀系列等等，带动了新新Park粉丝数量上升，增加了互动性。';
  				img1 = 'img/p2_1.jpg';
  				img2 = 'img/p2_2.jpg';
  				img3 = 'img/p2_3.jpg';
  			break;
  			case 'a3':
  				tit = '上海万科万之家';
  				desc = '上海万科·万之家官方网站整体改版(增加了微信万客会wap版)，为了打通微信数据，策划30周年活动，通过有奖投票活动增加了与粉丝的互动。短时间内大幅度提升万之家活跃会员和公众号粉丝的互动。';
  				img1 = 'img/p3_1.jpg';
  				img2 = 'img/p3_2.jpg';
  				img3 = 'img/p3_3.jpg';
  			break;
  			case 'a4':
  				tit = 'JackWolfSkin';
  				desc = '设计公众号功能和微网站，策划每月微信活动，并通过后台数据追踪分析，提供精准的粉丝行为报告。';
  				img1 = 'img/p4_1.jpg';
  				img2 = 'img/p4_2.jpg';
  				img3 = 'img/p4_3.jpg';
  			break;
  			case 'a5':
  				tit = 'NAUTICA';
  				desc = '设计公众号功能和微网站，策划每月微信活动，并通过后台数据追踪分析，提供精准的粉丝行为报告。';
  				img1 = 'img/p5_1.jpg';
  				img2 = 'img/p5_2.jpg';
  				img3 = 'img/p5_3.jpg';
  			break;
  			case 'a6':
  				tit = 'FED';
  				desc = '设计公众号功能和微网站，并且与FED会员系统对接，会员可以通过微信查询会员信息、积分，在线通过积分兑换礼品。同时还有各种互动活动激励用户活跃度，例如大转盘，刮刮乐，优惠券，签到等活动形式绿宝，微信公众号设计，微网站，室内地图导航，楼层导购等。';
  				img1 = 'img/p6_1.jpg';
  				img2 = 'img/p6_2.jpg';
  				img3 = 'img/p6_3.jpg';
  			break;
  			case 'a7':
  				tit = '上海申通地铁指路通';
  				desc = '基于LBS功能，为上海地铁曲阜路站点设计实现指路通功能，实现地铁内导航，碰头服务等。';
  				img1 = 'img/p7_1.jpg';
  				img2 = 'img/p7_2.jpg';
  				img3 = 'img/p7_3.jpg';
  			break;
  			case 'a8':
  				tit = '苏州绿宝广场';
  				desc = '绿宝，微信公众号设计，微网站，室内地图导航，楼层导购等。';
  				img1 = 'img/p8_1.jpg';
  				img2 = 'img/p8_2.jpg';
  				img3 = 'img/p8_3.jpg';
  			break;
  		}
  		con = '<h2 id="proTit">'+tit+'</h2>';
		con += '<p class="proDesc">'+desc+'</p>';
		con += '<ul id="proImg">';
		con += '<li><img src="'+img1+'" /></li>';
		con += '<li><img src="'+img2+'" /></li>';
		con += '<li><img src="'+img3+'" /></li>';
		con += '</ul>';
  		
  		$('body').find('#portfolios').remove().end().append('<div class="animated zoomIn" id="portfolios"><div class="portfolios_con">'+con+'<a id="close" title="关闭" href="javascript:;">X</a></div></div>');
  		
  		//close
  		$('#close').click(function(){
  			$('#portfolios').remove();
  		});
    });
    
	/*********** 加载地图 ************/
    $('.view-map').click(function(){
    	var id = $(this).attr('id');
    	if(id == 'sh'){
    		loadJScript('sh');
    	}else{
    		loadJScript('sz');
    	}
    });
    
});


//百度异步加载地图
function loadJScript(e) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=OYXSraTSwOk3vOR4YF4nESqx&callback="+e+"_init";
	document.body.appendChild(script);
}
function sz_init() {
	var map = new BMap.Map("sz-map");    
    var point = new BMap.Point(120.745178,31.283142); 
    map.centerAndZoom(point,17);                 
    map.enableScrollWheelZoom();
    map.addControl(new BMap.MapTypeControl()); 
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
	var top_left_navigation = new BMap.NavigationControl(); 
	map.addControl(top_left_control);        
	map.addControl(top_left_navigation);  
    var marker = new BMap.Marker(new BMap.Point(120.74507,31.282834));
    map.addOverlay(marker);             
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    var opts = {
	  width : 200,
	  height: 90,
	  title : "苏州分公司",
	  enableMessage: true
	}
	var infoWindow = new BMap.InfoWindow("地址：苏州市工业园区仁爱路150号第二教学楼A-322室", opts);
	map.openInfoWindow(infoWindow,point);
	marker.addEventListener('click',function(){
		map.openInfoWindow(infoWindow,point);
	});
}  
function sh_init() {
	var map = new BMap.Map("sh-map");    
    var point = new BMap.Point(121.416169,31.228196); 
    map.centerAndZoom(point,17);                 
    map.enableScrollWheelZoom();
    map.addControl(new BMap.MapTypeControl()); 
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
	var top_left_navigation = new BMap.NavigationControl(); 
	map.addControl(top_left_control);        
	map.addControl(top_left_navigation);  
    var marker = new BMap.Marker(new BMap.Point(121.416169,31.228086));
    map.addOverlay(marker);             
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    var opts = {
	  width : 200,
	  height: 90,
	  title : "上海总部"
	}
	var infoWindow = new BMap.InfoWindow("地址：上海市万航渡路2170号弘基创邑河1号楼D3室", opts);
	map.openInfoWindow(infoWindow,point);
	marker.addEventListener('click',function(){
		map.openInfoWindow(infoWindow,point);
	});
}  
