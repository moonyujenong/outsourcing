var WEBPONENT_CHART_LICENSE_KEY = "%3BVHG.k-TzsEw%3BKYIWFB%3BfSkGOZlj%3BkG%3BQNBIWhbfcJxIW%3B2wA";

/**
 * WEBPONENT_GRID_LICENSE_KEY 웹포넌트 그리드의 라이센스키
 * @type {String}
 */
var WEBPONENT_GRID_LICENSE_KEY = "8379421250251%3B%3BKYfgFq%3BfSOTq%3BzmfxnTNH%3BQmqfghbIAJxfW%3B2PA";

String.prototype.trim = function() {
			return this.replace(/^\s*/ ,"").replace(/\s*$/ ,"");
		};

		String.prototype.format = function() {
			if(this==0) return 0;

			var reg = /(^[+-]?\d+)(\d{3})/;
			var n = (this + '');

			while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

			return n;
		};

		String.prototype.replaceAll = function (str1, str2) {
			var str = this;
			var result = str.replace(eval("/"+str1+"/gi"), str2);
			return result;
		};

		/*
		 * Object Length Count
		 */
		String.prototype.getObjectLength = function () {
			var length = 0;
			for(var prop in this) length ++;
			return length;
		};

		roundNumber = function ( n, digits ) {
			if (digits >= 0) return parseFloat(n.toFixed(digits)); // �뚯닔遺�諛섏삱由�

			  digits = Math.pow(10, digits); // �뺤닔遺�諛섏삱由�
			  var t = Math.round(n * digits) / digits;

			  return parseFloat(t.toFixed(0));
		};

		//TIME Format (TT:MM:SS)
		String.prototype.timeFormat = function(){
			var length = this.length - 6;
			var data = this.substr(length, 2);
			data += ":";
			data += this.substr(length + 2, 2);
			data += ":";
			data += this.substr(length + 4, 2);
			return data;
		};
		//TIME Format (TT:MM)
		String.prototype.timeFormat4 = function(){
			var length = this.length;
			var data = this.substr(length - 4, 2);
			data += ":";
			data += this.substr(length - 2, 2);
			return data;
		};
		// DAY|MONTH Format (0000/00/00 | 0000/00 | 00/00)
		String.prototype.dateFormat = function( separator ){
			var length = this.length;
			var data = this;
			if(length > 6) {
				data = this.substr(0, 4);
				data += separator || ".";
				data += this.substr(4, 2);
				data += separator || ".";
				data += this.substr(6, 2);
			} else if (length > 4) {
				data = this.substr(0, 4);
				data += ".";
				data += this.substr(4, 2);
			} else {
				data = this.substr(0, 2);
				data += ".";
				data += this.substr(2, 2);
			}

			return data;
		};
		// DAY|MONTH Format (YY/MM/DD)
		String.prototype.dateFormatYMD6 = function( ){
			var data = this;
				data = this.substr(2, 2);
				data += "../index.html";
				data += this.substr(4, 2);
				data += "../index.html";
				data += this.substr(6, 2);

			return data;
		};

		//TIME Format (TT:MM:SS)
		timeDataFormat = function( str ){
			str = String(str);
			var length = str.length - 6;
			var data = str.substr(length, 2);
			data += ":";
			data += str.substr(length + 2, 2);
			data += ":";
			data += str.substr(length + 4, 2);
			return data;
		};
		//TIME Format (TT:MM)
		timeDataFormat4 = function( str ){
			str = String(str);
			var length = str.length;
			var data = str.substr(length - 4, 2);
			data += ":";
			data += str.substr(length - 2, 2);
			return data;
		};
		//TIME Format (TTMMSS - > TT:MM)
		timeDataFormat6to4 = function( str ){
			str = String(str);//.toString();
			var length = str.length - 6;
			var data = str.substr(length, 2);
			data += ":";
			data += str.substr(length + 2, 2);
			return data;
		};
		// DAY|MONTH Format (0000/00/00 | 0000/00)
		dayDataFormat = function( str ){
			var length = String(str).length;
			var data = str = String(str);
			if(length > 6) {
				data = str.substr(0, 4);
				data += "../index.html";
				data += str.substr(4, 2);
				data += "../index.html";
				data += str.substr(6, 2);
			} else if (length > 4) {
				data = str.substr(0, 4);
				data += "../index.html";
				data += str.substr(4, 2);
			} else {
				data = str.substr(0, 2);
				data += "../index.html";
				data += str.substr(2, 2);
			}

			return data;
		};
		// DAY|MONTH Format (MM/DD)
		dayDataFormat4 = function( str ){
			var length = str.length;
			var data = str = str.toString();
				data = str.substr(length - 4, 2);
				data += "../index.html";
				data += str.substr(length - 2, 2);

			return data;
		};
		// DAY|MONTH Format (YYYY/MM)
		dayDataFormatYM6 = function( str ){
			var data = str = str.toString();
				data = str.substr(0, 4);
				data += "../index.html";
				data += str.substr(4, 2);

			return data;
		};
		// Number Format 1,000
		priceDataFormat = function(txt) {
			if(txt==0) return 0;

		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = (txt + '');

		    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

		    return n;
		};
		// Number Format 1,000%
		percentDataFormat = function(txt) {
			if(txt==0) return 0;

			var reg = /(^[+-]?\d+)(\d{3})/;
			var n = (txt + '');

			while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

			return n + "%";
		};
		// float Format 1,000.00 | 1,000
		priceDataFormatFixMulti = function(txt, useDot) {
			if(txt==0) return 0;

		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = (txt + '');

		    if(useDot){
		    	n = ((txt/100)).toFixed(2);
		    	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
		    } else {
		    	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
		    }

		    return n;
		};
		// float Format  100000 -> 1,000.00
		priceDataFormatDivideFix = function(txt) {
			if(txt==0) return 0;

		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = ((txt/100)).toFixed(2);
		    	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

		    return n;
		};
		// float Format  1000 -> 1,000.00
		priceDataFormatFix = function(txt) {
			if(txt==0) return 0;

		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = txt.toFixed(2);
		    	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

		    return n;
		};
		// random ID 생성
		getUniqueID = function () {

		  	return Math.random().toString(36).substr(2, 9);
		};

		// YYYY/MM/DD
    	press_format_date1 = function(value) {
    		
    		return value.substr(0, 4) + "/" + value.substr(4, 2) + "/" + value.substr(6,2);
    	};
    	// YYYY/MM
    	press_format_date2 = function(value) {
    		var leng = value.length;
    		return value.substr(0, 4) + "/" + value.substr(4, 2);
    	};
    	// MM/DD
    	press_format_date3 = function(value) {
    		var leng = value.length;
    		if(leng > 6) 		// 20140101
    			return value.substr(4, 2) + "/" + value.substr(6, 2);
    	 	else if(leng == 6) 	//140101
    	 		return value.substr(2, 2) + "/" + value.substr(4, 2);
    	 	else 				// 0101
    	 		return value.substr(0, 2) + "/" + value.substr(2, 2);
    	};

    	// Number 1,000
    	press_format_num1 = function(value) {
			if(value==0) return 0;

		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = (value + '');

		    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

		    return n;
    	};
    	// Number 0.00
    	press_format_num2 = function(value) {
			if(value==0) return 0;

		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = (value + '');

	    	n = Number(n).toFixed(2);
	    	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
		    return n;
    	};


    	press_toolTip_percent = function (pie, data, tipElement) {

			var dataTotalValue = pie.settings.data.dataTotalValue;
			var value = data[pie.options.data.use];
			var average = Math.round(100 / dataTotalValue * value);
			var span = '<span>' + average + '%</span>';

			tipElement.html(span);
		};

		press_toolTip_data = function (pie, data, tipElement) {

			var value = data[pie.options.data.use];
			var span = '<span>' + press_format_num1(value) + '</span>';

			tipElement.html(span);
		};

		press_toolTip_legend_data = function (pie, data, tipElement) {

			var value = data[pie.options.data.use];
			var legend = data[pie.options.legend.use];
			var span = '<span>' + legend + ' : ' + press_format_num1(value) + '</span>';

			tipElement.html(span);
		};

		press_toolTip_legend_percent = function (pie, data, tipElement) {

			var dataTotalValue = pie.settings.data.dataTotalValue;
			var value = data[pie.options.data.use];
			var average = Math.round(100 / dataTotalValue * value);
			var legend = data[pie.options.legend.use];
			var span = '<span>' + legend + ' : ' + average + '%</span>';

			tipElement.html(span);
		};

		press_toolTip_legend_data_percent = function (pie, data, tipElement) {

			var dataTotalValue = pie.settings.data.dataTotalValue;
			var value = data[pie.options.data.use];
			var average = Math.round(100 / dataTotalValue * value);
			var legend = data[pie.options.legend.use];
			var span = '<span>' + legend + ' : ' + press_format_num1(value) + ' (' + average + '%)</span>';

			tipElement.html(span);
		};

		press_korea_toolTip_percent = function (data, tipElement, option) {

			var dataTotalValue = data.dataTotal;
			var value = data[option.data.use];
			var average = Math.round(100 / dataTotalValue * value);
			var span = '<span>' + average + '%</span>';

			tipElement.html(span);
		};

		press_korea_toolTip_data = function (data, tipElement, option) {

			var value = data[option.data.use];
			var span = '<span>' + press_format_num1(value) + '</span>';

			tipElement.html(span);
		};

		press_korea_toolTip_local_data = function (data, tipElement, option) {

			var value = data[option.data.use];
			var local = data[option.data.localOption];
			var span = '<span>' + local + ' : ' + press_format_num1(value) + '</span>';

			tipElement.html(span);
		};

		press_korea_toolTip_local_percent = function (data, tipElement, option) {

			var dataTotalValue = data.dataTotal;
			var value = data[option.data.use];
			var average = Math.round(100 / dataTotalValue * value);
			var local = data[option.data.localOption];
			var span = '<span>' + local + ' : ' + average + '%</span>';

			tipElement.html(span);
		};

		press_korea_toolTip_local_data_percent = function (data, tipElement, option) {

			var dataTotalValue = data.dataTotal;
			var value = data[option.data.use];
			var average = Math.round(100 / dataTotalValue * value);
			var local = data[option.data.localOption];
			var span = '<span>' + local + ' : ' + press_format_num1(value) + ' (' + average + '%)</span>';

			tipElement.html(span);
		};

		press_scatter_toolTip_func = function (data, tipElement, option) {

			var infoText = '';

			_.each(option.toolTip.dataArray, function (infoObj, i) {

				infoText += "<span class='info-label'>" + infoObj.label + "</span>";
				infoText += "<span class='info-data'>" + data[infoObj.data] + "</span>";

				if (i < option.toolTip.dataArray.length - 1) {
					
					infoText += "<br />";
				}
			});

			tipElement.html(infoText);
		};

		press_treemap_info = function (data, option) {

			var informationWrapper = $("." + option.information.className);

			var infoText = '';

			_.each(option.information.dataArray, function (infoObj, i) {

				infoText += "<span class='info-label'>" + infoObj.label + "</span>";
				infoText += "<span class='info-data'>" + data[infoObj.data] + "</span>";

				if (i < option.information.dataArray.length - 1) {
					
					infoText += "|";
				}
			});

			informationWrapper.html(infoText);
		};

		defaultTip = function(tipElement, data, rect){
			
			var date = data.data[data.xaxisname];
			var tip = '<div class="text">'+date + '  : ' + String(data.yaxis).format()+'</div>';

			tipElement.html(tip).show();

			var arrow = '<div class="arrow" style="width: '+tipElement.width() + 'px;"></div>';

			tipElement.html(tipElement.html() + arrow).css({
				left: Math.round(rect.x - (tipElement.width() / 2)), top: rect.y - 35
			});
		};