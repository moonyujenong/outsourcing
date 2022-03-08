/**
 * 앱 정보 URL
 * https://developers.kakao.com/apps/358189
 */

var KakaoHelper = (function(){
    var _apikey = "fdc14d614cfc073c6eccaf2ab1a4fa0dqq";
    var _channelID = '_sxdrkT';
    var _obj = {};

    _obj.addChannelButton = function(selector) {
        Kakao.Channel.createAddChannelButton({
            container: selector,
            channelPublicId: _channelID
        });
    };

    _obj.addChannel = function() {
        Kakao.Channel.addChannel({
            channelPublicId: _channelID
        });
    };

    _obj.addChannelChatButton = function(selector) {
        Kakao.Channel.createChatButton({
            container: selector,
            channelPublicId: _channelID
        });
    };

    _obj.chatChannel = function() {
        Kakao.Channel.chat({
            channelPublicId: _channelID
        });
    };


    Kakao.init(_apikey);

    return _obj;
})();