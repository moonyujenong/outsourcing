
var initDatePickerMonth = function(callback){
	$(".date").datetimepicker({
		format:'YYYY-MM',
		icons: {
			time: "fa fa-clock-o",
			date: "fa fa-calendar",
			up: "fa fa-arrow-up",
			down: "fa fa-arrow-down"
		},
		locale: 'ko',
	}).on('dp.change', function() {
		if(callback != null) callback();
	});
};


var initDatePickerDate = function(callback){
	$(".date").datetimepicker({
		format:'YYYY-MM-DD',
		icons: {
			time: "fa fa-clock-o",
			date: "fa fa-calendar",
			up: "fa fa-arrow-up",
			down: "fa fa-arrow-down"
		},
		locale: 'ko',
	}).on('dp.change', function() {
		if(callback != null) callback();
	});
};

$(function(){
	
   var bindDatePicker = function(e) {		
		
		$(".date").datetimepicker({
      format:'YYYY-MM-DD',			
			icons: {
				time: "fa fa-clock-o",
				date: "fa fa-calendar",
				up: "fa fa-arrow-up",
				down: "fa fa-arrow-down"
			},
			locale: 'ko',
			showTodayButton : true,
			showClear : false,
			showClose : true,
			//widgetParent : 'container'
		});
	};

	if($(document).find(".input-group.date.js_calendar_default").length > 0) {
		console.log('실행됨');
		bindDatePicker();
	}
	
	/* 버튼 클릭시 버튼 효과 */
	$(document).on('click', '.btn , button', function(){
		$(this).addClass('active');
		$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function() {
			$(this).removeClass('active');
		});

		$(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
		function() {
			$(this).removeClass('active');
		});
	});

	/*  인풋 포커스 제어 */
	$(document).on({
		'focusin' : function(){
			if($(this).parent('.inputset').hasClass("on")) {
				$(this).parent('.inputset').removeClass("on");
			} else {
				$(this).parent('.inputset').addClass("on");
			}
		},
		'focusout' : function(){
			if($(this).parent('.inputset').hasClass("on")) {
				$(this).parent('.inputset').removeClass("on");
			} else {
				$(this).parent('.inputset').addClass("on");
			}
		}
	},'.inputset > input , .inputset > select, .inputset > textarea');

	$(document).on({
		'click' : function() {

			if($(this).prop("checked")) {
				$(this).parents('.inputset').addClass("on");

			} else {
				$(this).parents('.inputset').removeClass("on");

			}
		}
	}, '.inputset.ckbox label > input');

	$(document).on({
		'click' : function() {
			var chkname = $(this).attr("name");
			if($(this).prop("checked")) {
				$(".inputset.rdo input[name ='" + chkname + "']").parents('.inputset').removeClass("on");
				$(this).parents('.inputset').addClass("on");

			}
		}
	}, '.inputset.rdo label > input');


	var gnbInit = function() {
		var _target = $('nav .navlist > li > a');
		$('nav').removeClass("on");
		_target.parent().each(function(index, element) {
			$(element).find(".dp2").removeAttr('style');
			var dp2OtherWd = parseInt($(element).find(".dp2").outerWidth());
			$(element).find(".dp2").css("margin-left", -(parseInt(dp2OtherWd / 2)));
		});

		_target.parent().hover(
			function() {
				var _this = $(this);
				var _thispt = _this.parent();

				$('nav .navlist > li').removeClass("on");
				_this.addClass("on");
			},
			function() {
				var _this = $(this);
				var _thispt = _this.parent();
				_this.removeClass("on");
			}
		);
	};

	var gnbMobileLink = function() {

		var _target = $('nav .navlist > li > a');
		$('nav .navlist .dp2').removeAttr('style');
		_target.on("click", function(e) {
			var _this = $(this);
			var _thispt = _this.parent();
			if(_thispt.hasClass("on")) {
				_thispt.removeClass("on");
				_thispt.find(".dp2").slideUp();
			} else {
				$('nav .navlist > li').removeClass("on");
				_thispt.addClass("on");
				$('nav .navlist .dp2').slideUp();
				_thispt.find(".dp2").slideDown();
			}
		});
	};

	$('.navtoggle .toggle').on("click", function(e) {
		e.preventDefault();
		var _this = $(this);
		var _targetNav = _this.parents("nav");
		if(_targetNav.hasClass("on")) {
			_targetNav.removeClass("on");
		} else {
			_targetNav.addClass("on");
		}
	});



	function gnbResponse(e) {

		var winWH = $(window).width();
		var natTargetOrigin = $('nav .navlist > li > a');
		if(winWH < 1280) {
			natTargetOrigin.off("click");
			gnbMobileLink(e);
			natTargetOrigin.parent().off("mouseenter");
			natTargetOrigin.parent().each(function(index, element) {
			 	$(element).find(".dp2").parents("li").addClass("act");
			});
			//$("#talkFloat").removeClass("on");
			//$("#talkFloat").addClass("mb");
			
		} else {
			gnbInit();
			natTargetOrigin.off("click");
			natTargetOrigin.parent().removeClass("act");
			//$("#talkFloat").addClass("on");
		}
		
		if(winWH < 768) { 
			$("#talkFloat").addClass("on");
			$("#talkFloat").addClass("moff");
		} else { 
			//$("#talkFloat").addClass("on");
			$("#talkFloat").removeClass("moff");
			$("#talkFloat").removeClass("mon");
		} 
	}
	gnbResponse();


	$(window).resize(function() {
		gnbResponse();
	});

	/* 로케이션 자동 출력 */
	var autoLocation = function() {
		var listTarget = $('.navlist > li');

		/* 각 화면 별로 첫번째 메뉴 갯수 */
		var etcArray = ["이용약관", "개인정보 보호정책"];
		var etcArraylink = ["useragree.html", "personalprivacy.html"];

		if(m1 > 99) {
			var listTargetLeng = etcArray.length;  // 0 혹은 1 2 3 4 ~
		} else {
			var listTargetLeng = listTarget.eq(m1 - 1).find(".dp2 > li").length;  // 0 혹은 1 2 3 4 ~
		}


		var listTargetLeng2;
		if(listTargetLeng == 0) {
			var listTargetLeng2 = listTargetLeng + 1;
		} else {
			var listTargetLeng2 = listTargetLeng;
		}

		var navTarget = $('.navlist');
		var locTarget = $('.locallist');

		var listString = "";
		for(var m = 0; m < listTargetLeng2; m++) {
			listString = listString + '<li><a href=""></a></li>';
		}
		locTarget.append(listString);
		locTarget.find("li").eq(m2 - 1).addClass("on");

		for(var i = 0; i < locTarget.find("li").length; i++) {
		var navTargettext;
		var navTargetlink;

			if(m1 > 99) {
				navTargettext = etcArray[i];
				navTargetlink = etcArraylink[i];
			} else {
				if(listTargetLeng == 0) {
					navTargettext = navTarget.find("> li").eq(m1 - 1).find("a").text();
					navTargetlink = navTarget.find("> li").eq(m1 - 1).find("a").attr('href');


				} else {
					navTargettext = navTarget.find("> li").eq(m1 - 1).find(".dp2 > li").eq(i).find("a").text();
					navTargetlink = navTarget.find("> li").eq(m1 - 1).find(".dp2 > li").eq(i).find("a").attr('href');

				}
			}
			
//			if(m1 == 100 && m2 == 5) { 
//				locTarget.parents(".location").hide();
//			}

			

			locTarget.find("li").eq(i).find("a").text(navTargettext);
			locTarget.find("li").eq(i).find("a").attr('href', navTargetlink);
		}
	};

	autoLocation();



		$("input[data-type='currency']").on({

				keyup: function() {
					formatCurrency($(this));
				},
				blur: function() {
					//formatCurrency($(this), "blur");
				},
				focus : function() {
					//$(this).get(0).setSelectionRange(0,9999);

				}
		});

		$(".inputset.money .clear").on("click", function() {

			var _target = $('.inputset.money').find("input[data-type='currency']");
			_target.val("");
			$(this).removeAttr('style');
		});

		function formatNumber(n) {
			// format number 1000000 to 1,234,567
			return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}

		function formatCurrency(input, blur) {
		// appends $ to value, validates decimal side
		// and puts cursor back in right position.

		// get input value
		var input_val = input.val();

		// don't validate empty input
		if (input_val === "") {

			$(".inputset.money .clear").removeAttr('style');
			return;
		} else {
			$(".inputset.money .clear").css('visibility','visible');
		}

		// original length
		var original_len = input_val.length;

		// initial caret position
		var caret_pos = input.prop("selectionStart");

		// check for decimal
		if (input_val.indexOf(".") >= 0) {

			// get position of first decimal
			// this prevents multiple decimals from
			// being entered
			var decimal_pos = input_val.indexOf(".");

			// split number by decimal point
			var left_side = input_val.substring(0, decimal_pos);
			var right_side = input_val.substring(decimal_pos);

			// add commas to left side of number
			left_side = formatNumber(left_side);

			// validate right side
			right_side = formatNumber(right_side);

			// On blur make sure 2 numbers after decimal
			if (blur === "blur") {
				//right_side += "00";
			}

			// Limit decimal to only 2 digits
			right_side = right_side.substring(0, 2);

			// join number by .
			//input_val = "$" + left_side + "." + right_side;
			input_val = left_side + "." + right_side;

		} else {
			// no decimal entered
			// add commas to number
			// remove all non-digits
			input_val = formatNumber(input_val);
			//input_val = "$" + input_val;
			input_val = input_val;

			// final formatting
			if (blur === "blur") {
				//input_val += ".00";
			}
		}

		// send updated string to input
		input.val(input_val);

		// put caret back in the right position
		var updated_len = input_val.length;
		caret_pos = updated_len - original_len + caret_pos;
		if ( event.keyCode === 8) {
			input[0].setSelectionRange(original_len, updated_len);
		} else {
			input[0].setSelectionRange(caret_pos, caret_pos);
		}
	}

	$(document).on('click', '#wprint', function(){
			var browser = navigator.userAgent.toLowerCase();
			if ( -1 != browser.indexOf('chrome') ){
								 window.print();
			}else if ( -1 != browser.indexOf('trident') ){
				 try{
									//참고로 IE 5.5 이상에서만 동작함

									//웹 브라우저 컨트롤 생성
									var webBrowser = '<OBJECT ID="previewWeb" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';

									//웹 페이지에 객체 삽입
									document.body.insertAdjacentHTML('beforeEnd', webBrowser);

									//ExexWB 메쏘드 실행 (7 : 미리보기 , 8 : 페이지 설정 , 6 : 인쇄하기(대화상자))
									previewWeb.ExecWB(7, 1);

									//객체 해제
									previewWeb.outerHTML = "";
				 }catch (e) {
									alert("- 도구 > 인터넷 옵션 > 보안 탭 > 신뢰할 수 있는 사이트 선택\n   1. 사이트 버튼 클릭 > 사이트 추가\n   2. 사용자 지정 수준 클릭 > 스크립팅하기 안전하지 않은 것으로 표시된 ActiveX 컨트롤 (사용)으로 체크\n\n※ 위 설정은 프린트 기능을 사용하기 위함임");
				 }
			}
	});

	$('#talkFloat .btn.ctr').on("click", function(e) {
		e.preventDefault();
		var _targetOrigin = $("#talkFloat");
		/* 
			1. 모바일에서는 기본으로 꺼져있어야 하고 pc에서는 기본으로 켜져있야야함 
			2. on이 켜져있으면 pc활성화 on이 없어지면 pc 비활성화
			3. on.moff 이면 모바일 기본 비활성화 
			4. on 이 있는 경우 on 과 moff를 날리면서 mon으로 모바일 활성화
			5. on이 없는 경우 on과 moff를 합치면서 비활성화
		*/
		if(_targetOrigin.hasClass("on")) {
				_targetOrigin.removeClass("on");
				$("#talkFloat").removeClass("moff");
				$("#talkFloat").addClass("mon");
				$('container').off("touchmove");
		} else {
			_targetOrigin.addClass("on");
				$("#talkFloat").addClass("moff");
				$("#talkFloat").removeClass("mon");
			

			$('container').on("touchmove", function(e) {
				e.preventDefault();
			});
		}
	});

	$('#talkFloat .btn.toplink').on("click", function(e) {
		e.preventDefault();
		var body = $("html, body");
		body.stop().animate({scrollTop:0});
	});

	$('#chatSet .chat_ctrset .btn').on("click", function(e)  {
		e.preventDefault();
		
		
		var _targetOrigin = $("#chatSet");
		var _this = $(this);
		
		if(_targetOrigin.hasClass("off")) {
			_targetOrigin.removeClass("off");

		} else {
			_targetOrigin.addClass("off");			
		}
		$('#chatSet .chat_ctrset .btn').removeClass("on");
		_this.addClass("on");		
	});
	
	

});

$.fn.tabFunc = function() {
	var _this = $(this);
	var _target = _this.find(".tablist > li > a");
	_target.on("click", function(e) {
		e.preventDefault();
		var _this = $(this);
		var _thispt = _this.parent();
		var _thisptIndex = _thispt.index();
		var contentTarget = _this.parents(".mtab").find(".tab_sectionout > .tab_section");

		if(_thispt.hasClass("on")) {

		} else {
			_this.parents(".tablist").find("li").removeClass("on");
			_thispt.addClass("on");

			contentTarget.hide();
			contentTarget.eq(_thisptIndex).show();
		}
	});
};

$.fn.imgReplaceFunc = function() {
	var _this = $(this);
	var _thisimg = _this.find("img").attr("src");
	var _thisimgcut = _thisimg.substr(0, _thisimg.length - 4);
	if($(window).width() < 768) {
		_this.find("img").attr("src", _thisimgcut + "m.jpg");
	}

	$(window).resize(function() {
		var _this = $(this);
		var _thisimg = _this.find("img").attr("src");
		var _thisimgcut = _thisimg.substr(0, _thisimg.length - 4);
		if($(window).width() < 768) {
			_this.find("img").attr("src", _thisimgcut + "m.jpg");
		}
	})

}

$.fn.autoRequire = function() {
	var _this = $(this);
	_this.find(".inputset").each(function(index, element) {
		var _required = $(element).find("input[required]");
		var _required2 = $(element).find("select[required]");
		_required.parents("td").prev().append('<span class="required">*</span>');
		_required2.parents("td").prev().append('<span class="required">*</span>');
	});
};
