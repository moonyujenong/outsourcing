$(document).ready(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
});

function openWindowCenter(path, width, height, name){
    var left = (screen.width/2)-(width/2);
    var top = (screen.height/2)-(height/2);
    window.open(path, name, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');

}

var initMyResult = function(scriptId, htmlId, btnMoreViewId){
    var scrMyResultHtml = $("#" + scriptId).html();
    var scrMyResultTpl = Handlebars.compile(scrMyResultHtml);
    var page = 1;
    var prevData = null;
    Handlebars.registerHelper('dateStr', function (date, time) {
        return  date.substr(0, 10) + " " + time.substr(0, 5);
    });

    Handlebars.registerHelper('numberFormat', function (totalPrice) {
        return comma(parseInt(totalPrice));
    });

    Handlebars.registerHelper('seq', function (length, seq) {
        return length - seq;
    });

    Handlebars.registerHelper('isBuy', function (type, options) {
        if(type == '매수'){
            return options.fn(this);
        }else {
            return options.inverse(this);
        }
    });

    Handlebars.registerHelper('isComeTrue', function (type, options) {
        if(type == '실현'){
            return options.fn(this);
        }else {
            return options.inverse(this);
        }
    });

    var getMyResultList = function(type, startDate, isRefresh, callback){
        if(isRefresh){
            page = 1
        }

        $.ajax({
            type: "GET",
            url: "/trade/myresult",
            dataType : "json",
            data : {
                type : type,
                startDate : startDate,
                page : page
            },
            success : function(result){
                if(result.resultCode == 'complete'){
                    var rowSize = result.resultData.data.length;

                    if(isRefresh){
                        prevData = result.resultData.data;
                        makeMyResult(prevData);
                    }else {
                        prevData = prevData.concat(result.resultData.data);
                        makeMyResult(prevData);
                    }

                    if(rowSize == 100){
                        $('#' + btnMoreViewId).show();
                    }else {
                        $('#' + btnMoreViewId).hide();
                    }

                    if(callback != null){
                        callback();
                    }

                    // var htmlStr = makeMyResultList(result.resultData);
                    // var jMyResult = $('#tbMyResult');
                    // jMyResult.empty();
                    // jMyResult.append(htmlStr);
                    // $('#textMyResultCnt').text(result.resultData.length);
                }
            },
            error : function(result){
                //alert("error");
            }
        });

        page++;
    };

    var makeMyResult = function(data){

        var rowSize = data.length;
        var showMoreBtn = (rowSize == 0 ? false : true);

        var bindData = {
            rowSize : comma(rowSize),
            rowData : data,
            showMoreBtn : showMoreBtn
        };

        $('#totalCountText').text(comma(rowSize));

        var html = scrMyResultTpl(bindData);
        $('#' + htmlId).html(html);
    };

    return {
        getMyResultList : getMyResultList
    };
};



var initTradeAgreePop = function(id){
    var scrSaveFormHtml = $("#" + id).html();
    var scrSaveFormTpl = Handlebars.compile(scrSaveFormHtml);

    var getMyresultDetail = function(idx){alert(idx)
        $.ajax({
            type: "GET",
            url: "/trade/myresultdetail/index.asp" + idx,
            dataType : "json",
            success : function(result){
                if(result.code == 'complete' && result.data != null){
                    makeMyResultDetail(result.data);
                }
            },
            error : function(result){
                //alert("error");
            }
        });
    };

    var makeMyResultDetail = function(result){
        console.log('실행');

        var eachLotArr = result.memo.split(',');
        var lot = null;
        var json = null;
        var tradeFormInfo = [];

        for(var i = 0; i < eachLotArr.length; i++){
            lot = eachLotArr[i].split(':');
            json = {
                price : comma(parseInt(lot[1]) * parseInt(lot[0])),
                count : lot[2]
            }
            tradeFormInfo.push(json);
        }

        var data = {
            typeName : result.game_type,
            isTimePartHidden : true,
            isModalKeep : true,
            className : result.game_type == '매수' ? 'buy' : 'sell',
            // className : type,
            tradeFormInfo : tradeFormInfo,
            totalPrice : comma(parseInt(result.total_price)),
            startDateTime : startTimeStr(result.game_date, result.game_time)
        };

        $('#fsModaldoc').modal('show');
        $('#saveForm').html(scrSaveFormTpl(data));

    };

    var startTimeStr = function(startDate, startTime){

        var dateStr = startDate.substr(0, 4) + "년" + startDate.substr(4, 2) + "월" + startDate.substr(6, 2) + "일";
        var timeStr = startTime.substr(0, 2) + "시" + startTime.substr(2, 2) + "분" + startTime.substr(4, 2) + "초";


        return dateStr + timeStr;
    }

    return {
        scrSaveFormTpl : scrSaveFormTpl,
        getMyresultDetail : getMyresultDetail
    };
};

// var initWithdrawal = function(id){
//     var scrWithdrawalHtml = $("#" + id).html();
//     var scrWithdrawalTpl = Handlebars.compile(scrWithdrawalHtml);
//
//     return {
//         getWithdrawalTpl : scrWithdrawalTpl
//     }
// }

var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};


if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
      value: function(value) {
  
        // Steps 1-2.
        if (this == null) {
          throw new TypeError('this is null or not defined');
        }
  
        var O = Object(this);
  
        // Steps 3-5.
        var len = O.length >>> 0;
  
        // Steps 6-7.
        var start = arguments[1];
        var relativeStart = start >> 0;
  
        // Step 8.
        var k = relativeStart < 0 ?
          Math.max(len + relativeStart, 0) :
          Math.min(relativeStart, len);
  
        // Steps 9-10.
        var end = arguments[2];
        var relativeEnd = end === undefined ?
          len : end >> 0;
  
        // Step 11.
        var final = relativeEnd < 0 ?
          Math.max(len + relativeEnd, 0) :
          Math.min(relativeEnd, len);
  
        // Step 12.
        while (k < final) {
          O[k] = value;
          k++;
        }
  
        // Step 13.
        return O;
      }
    });
  }


var msgAlert = function(_this, wd, ht, msg, type) {
    var alertPopIcon = $('#alertPopIcon');

    if(type == 'o'){
        alertPopIcon.addClass('ty1');
    }else {
        alertPopIcon.removeClass('ty1');
    }

    $('#alertPop').text(msg);
    //var _this = $(this);
		
		/*
    $(document).find("#alerLypop").addClass("open");
    $(document).find("#alerLypop").fadeIn();


    setTimeout(function() {
        $(document).find("#alerLypop").removeClass("open");
        $(document).find("#alerLypop").fadeOut();
    }, 1500)
		*/

	$(document).find("#alerLypop").removeClass("out");
	$(document).find("#alerLypop").removeClass("off");
	$(document).find("#alerLypop").addClass("open");
	//$(document).find("#alerLypop").fadeIn();


    setTimeout(function() {
			$(document).find("#alerLypop").removeClass("open");
			$(document).find("#alerLypop").addClass("off");
			setTimeout(function() {
				$(document).find("#alerLypop").addClass("out");
				//$(document).find("#alerLypop").fadeOut();
			}, 200);
    }, 1500);
};


/* 확인을 눌러야 닫히는 툴팁형 팝업 */
var msgAlertfrm = function(_this, wd, ht, id, option) {

    var title = option.title;
    var contents = option.content;
    var leftBtnText = option.leftText || '취소';
    var rightBtnText = option.rightText || '확인';
    var type = option.type;
    var cancelCallback = option.cancel;
    var okCallback = option.ok;

    //var _this = $(this);
    var $targetAlert = $(id);
    $targetAlert.find('#checkAlertTitle').text(title);
    $targetAlert.find('#checkAlertContents').text(contents);
    $targetAlert.find('#checkAlertLeftBtnText').text(leftBtnText);
    $targetAlert.find('#checkAlertRightBtnText').text(rightBtnText);

    var $checkAlertImg = $('#checkAlertImg');
    $checkAlertImg.removeClass('ty2');
    $checkAlertImg.removeClass('ty1');

    if(type == 'check'){
        $checkAlertImg.addClass('ty1')
    }else if(type == 'questionmark'){
        $checkAlertImg.addClass('ty2')
    }

    $targetAlert.find(".popcont").css({"width" : wd, "height" : ht, "margin-left" : -(wd/2), "margin-top" : -(ht/2) })
    $targetAlert.addClass("open");
    $targetAlert.fadeIn();

    var leftBtn = $targetAlert.find('#checkAlertLeftBtnText');
    var rightBtn = $targetAlert.find('#checkAlertRightBtnText');

    leftBtn.off();
    rightBtn.off();

    leftBtn.on('click',function(){
        if(cancelCallback != null) cancelCallback();
        $(id).hide();
    });

    rightBtn.on('click',function(){
        if(okCallback != null) okCallback();
        $(id).hide();
    });

    $(id).find('.btn').on("click", function(e) {
        e.preventDefault();
        $(id).hide();
    })
}


var msgAlertPrompt = function(wd, ht, id, option){
    var title = option.title;
    var contents = option.content;
    var leftBtnText = option.leftText || '취소';
    var rightBtnText = option.rightText || '확인';
    var cancelCallback = option.cancel;
    var type = option.type;
    var okCallback = option.ok;

    //var _this = $(this);
    var $targetAlert = $(id);
    $targetAlert.find('#promptAlertTitle').text(title);
    $targetAlert.find('#promptAlertLeftBtnText').text(leftBtnText);
    $targetAlert.find('#promptAlertRightBtnText').text(rightBtnText);
    $targetAlert.find('#alertPropmtInput').prop('type', 'text');

    if(type == 'password') $targetAlert.find('#alertPropmtInput').prop('type', 'password');

    $targetAlert.find(".popcont").css({"width" : wd, "height" : ht, "margin-left" : -(wd/2), "margin-top" : -(ht/2) })
    $targetAlert.addClass("open");
    $targetAlert.fadeIn();

    var leftBtn = $targetAlert.find('#promptAlertLeftBtnText');
    var rightBtn = $targetAlert.find('#promptAlertRightBtnText');

    leftBtn.off();
    rightBtn.off();

    leftBtn.on('click',function(){
        if(cancelCallback != null) cancelCallback();
        $(id).hide();
    });

    rightBtn.on('click',function(){
        if(okCallback != null) okCallback();
        $(id).hide();
    });

    $(id).find('.btn').on("click", function(e) {
        e.preventDefault();
        $(id).hide();
    })
}


//msgAlertOk('o','제목', 'contents', function(){ console.log('test')})
var msgAlertOk = function(type, title, contents, okCallback){
    var $alerLypopCheckOneBtn = $('#alerLypopCheckOneBtn');

    var $alertPositiveImg = $('#alertPositiveImg');
    var $positiveTitle = $('#positiveTitle');
    var $alertNegativeImg = $('#alertNegativeImg');
    var $alertNegativeTitle = $('#alertNegativeTitle');
    var $alertNegativeContents = $('#alertNegativeContents');

    $alertPositiveImg.hide();
    $positiveTitle.hide();
    $alertNegativeImg.hide();
    $alertNegativeTitle.hide();
    $alertNegativeContents.hide();

    if(type == 'o'){
        $alertPositiveImg.show();
        $positiveTitle.show();
        $positiveTitle.text(title);
    }else if(type == 'x'){
        $alertNegativeImg.show();
        $alertNegativeTitle.show();
        $alertNegativeContents.show();
        $alertNegativeTitle.text(title);
        $positiveTitle.text(contents);
    }

    $alertOkBtn = $('#alerOkBtn');
    $alertOkBtn.off();
    $alertOkBtn.on('click', function(){
        if(okCallback != null) okCallback();
        $alerLypopCheckOneBtn.hide();
    });

    $alerLypopCheckOneBtn.show();
};


var initSe2Editor = function(id){
    var oEditors = [];

    var sLang = "ko_KR"; // 언어 (ko_KR/ en_US/ ja_JP/ zh_CN/ zh_TW), default = ko_KR
    // 추가 글꼴 목록
    //var aAdditionalFontSet = [["MS UI Gothic", "MS UI Gothic"], ["Comic Sans MS", "Comic Sans MS"],["TEST","TEST"]];
    nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: id,
        sSkinURI: "/se2/SmartEditor2Skin.html",
        htParams : {
            bUseToolbar : true,    // 툴바 사용 여부 (true:사용/ false:사용하지 않음)
            bUseVerticalResizer : true,  // 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
            bUseModeChanger : true,   // 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
            //bSkipXssFilter : true,  // client-side xss filter 무시 여부 (true:사용하지 않음 / 그외:사용)
            //aAdditionalFontList : aAdditionalFontSet,  // 추가 글꼴 목록
        }, //boolean
        fCreator: "createSEditor2"
    });

    return {
        sendDataToTextArea : function(){
            oEditors.getById[id].exec("UPDATE_CONTENTS_FIELD", []);
        }
    }

}


var openPhoneAuth = function(path, width, height, name) {

    if (getCookie('device') == 'android' || getCookie('device') == 'ios'){
        console.log('test');
        var ifrPop = $('#ifrPop');
        ifrPop.prop('src', path);
        $('.back_view').css('display', 'block');
    }else {
        console.log('test2');
        openWindowCenter(path, width, height, name);
    }
    //ifrPop.prop('src', "{{ route('login.phonecert_result') }}");
    //$('.back_view').css('display', 'block');
};

