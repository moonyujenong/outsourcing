//@deprecate
var ApexChart = function (chartType) {
    var _CURRENT_PRICE_URL = "../public/current_price/1.html";
    var _CHART_DATA_URL = "/public/chart_data_apex/" + chartType + "/60";

    var _obj = {};
    var _chartData = [];
    var _currentPrice = "0";
    var _chart = null;

    _obj.init = function (elementId) { //"#chart"
        var selector = "#" + elementId;
        var options = {
            chart: {
                animations: {
                    enabled: false,
                },
                defaultLocale: 'en',
                height: 400,
                type: 'candlestick',
                id: 'fxflow'
            },
            tooltip: {
                enabled: true,
            },
            series: [{ data: [] }],
            title: {
                text: 'fxflow 차트',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                forceNiceScale: true,
                tooltip: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false,
            },

        }

        _chart = new ApexCharts(document.querySelector(selector), options);
        _chart.setLocale('en')
        _chart.render();
    };
    _obj.run = function () {

        _obj.update();
        setInterval(function () {
            if (_chartData !== undefined) {
                $.get(_CURRENT_PRICE_URL, function (res) {
                    res = JSON.parse(res);
                    //chart.w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxistooltip')[0].classList.add('active')
                    _chartData[_chartData.length - 1].y[3] = res[0].price;
                    _currentPrice = res[0].price;
                    // _chart.updateSeries([{data:_chartData}],false);
                });
            }
        }, 1000);

        setInterval(function () {
            _obj.update();
        }, 30000);
    };
    _obj.update = function () {
        $.get(_CHART_DATA_URL, function (res) {
            res = JSON.parse(res);
            //console.log(res);
            _.map(res, function (item) {
                item.x = moment(item.x, "YYYYMMDDhhmmss").toDate();
                return item;
            });
            res.reverse();
            _chartData = res;
            _chart.updateSeries([{ data: _chartData }], false);
        });
    }
    _obj.getChart = function () {
        return _chart;
    }
    return _obj;
};



var AmChart = function (chartType) {
    var _CURRENT_PRICE_URL = "/public/current_price/"+ chartType + "/1";
    var _CHART_DATA_URL = "../public/chart_data_amchart/index.html";
    var _obj = {};
    var _chart = null;
    var _chartType =chartType;
    var _dataCounts = [5,15,30,60];
    var _curCountIndex = 3;
    var _currentPriceChangeListener  = undefined;

    _obj.setCurrentPriceChangeListener = function(f) {
        _currentPriceChangeListener = f;
    };

    function decDataCount() {
        _curCountIndex = _curCountIndex - 1;
        if(_curCountIndex <= 0)
            _curCountIndex = 0;
        if(_curCountIndex > 3){
            _curCountIndex = 3;
        }
    }
    function incDataCount() {
        _curCountIndex = _curCountIndex + 1;
        if(_curCountIndex <= 0)
            _curCountIndex = 0;
        if(_curCountIndex > 3){
            _curCountIndex = 3;
        }
    }
    function getDataCount() {
        return _dataCounts[_curCountIndex];
    }
    function getChartDataUrl() {
        return _CHART_DATA_URL + _chartType + "/" + getDataCount();
    }
    _obj.init = function (elementId) { //"#chart"

        am4core.ready(function () {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            _chart = am4core.create(elementId, am4charts.XYChart);
            _chart.paddingRight = 20;
            _chart.language.locale = am4lang_ko_KR;

            _chart.dateFormatter.inputDateFormat = "yyyyMMddHHmmss";

            var dateAxis = _chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.baseInterval = {
                "timeUnit": "minute",
                "count": _chartType
              } 

            var valueAxis = _chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.labelsEnabled = false;

            var series = _chart.series.push(new am4charts.CandlestickSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "close";
            series.dataFields.openValueY = "open";
            series.dataFields.lowValueY = "low";
            series.dataFields.highValueY = "high";
            series.simplifiedProcessing = true;
            series.width = "100%";
            series.dropFromOpenState.properties.fill = am4core.color("#4880f9");
            series.dropFromOpenState.properties.stroke = am4core.color("#4880f9");
            
            series.riseFromOpenState.properties.fill = am4core.color("#f94f5c");
            series.riseFromOpenState.properties.stroke = am4core.color("#f94f5c");

            series.tooltipText = "시가:{openValueY.value.formatNumber('#.00000')}\n고가:{highValueY.value.formatNumber('#.00000')}\n저가:{lowValueY.value.formatNumber('#.00000')}\n종가:{valueY.value.formatNumber('#.00000')}";

            series.events.on('inited',function(){
                console.log("event on");
            });

            /*
            //Zoom 고정
            _chart.events.on("ready", function(ev) {
                valueAxis.min = valueAxis.minZoomed;
                valueAxis.max = valueAxis.maxZoomed;
              });
              */


            _chart.cursor = new am4charts.XYCursor();
            _chart.cursor.draggable = false;

            // a separate series for scrollbar
            var lineSeries = _chart.series.push(new am4charts.LineSeries());
            lineSeries.dataFields.dateX = "date";
            lineSeries.dataFields.valueY = "close";
            // need to set on default state, as initially series is "show"
            lineSeries.defaultState.properties.visible = false;

            // hide from legend too (in case there is one)
            lineSeries.hiddenInLegend = true;
            lineSeries.fillOpacity = 0.5;
            lineSeries.strokeOpacity = 0.5;



            /*
            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.language.locale = am4lang_ko_KR;
            scrollbarX.series.push(lineSeries);
            _chart.scrollbarX = scrollbarX;


            //Y축 줌스크롤바
            var scrollbarY = new am4charts.XYChartScrollbar();
            scrollbarY.language.locale = am4lang_ko_KR;
            scrollbarY.series.push(lineSeries);
            _chart.scrollbarY = scrollbarY;
            */


            _chart.chartContainer.wheelable = false;
            _chart.seriesContainer.dragWhileResize = false;
            _chart.seriesContainer.resizable = false;
            _chart.maxZoomLevel = 1;

            _obj.update();

        });
    };
    _obj.zoomIn = function() {
        decDataCount();
        _obj.update(true);
    };
    _obj.zoomOut = function() {
        incDataCount();
        _obj.update(true);
    };
    _obj.updateFromTradeInfo = function(res){
        //res = JSON.parse(res);
        if(_chart.data.length == 0)
            return;

        _chart.data[_chart.data.length-1]['open'] = res[0].open_price;
        _chart.data[_chart.data.length-1]['high'] = res[0].high_price;
        _chart.data[_chart.data.length-1]['low'] = res[0].low_price;
        _chart.data[_chart.data.length-1]['close'] = res[0].close_price;

        if(_currentPriceChangeListener !== undefined) {
            _currentPriceChangeListener(res[0]);
        }
        _chart.invalidateRawData();
    },
    _obj.run = function () {
        // setInterval(function() {
        //     $.get(_CURRENT_PRICE_URL,function(res){
        //         res = JSON.parse(res);
        //         if(_chart.data.length == 0)
        //             return;
        //
        //         _chart.data[_chart.data.length-1]['open'] = res[0].open_price;
        //         _chart.data[_chart.data.length-1]['high'] = res[0].high_price;
        //         _chart.data[_chart.data.length-1]['low'] = res[0].low_price;
        //         _chart.data[_chart.data.length-1]['close'] = res[0].close_price;
        //
        //         if(_currentPriceChangeListener !== undefined) {
        //             _currentPriceChangeListener(res[0]);
        //         }
        //         _chart.invalidateRawData();
        //     });
        //     }, 1000);

        setInterval(function() {_obj.update(); }, 10000);

    };
    _obj.update = function (forceUpdate) {

        forceUpdate  = forceUpdate || false;

        $.get(getChartDataUrl(),function(res){
            res = JSON.parse(res);

            res.reverse();
            if(_chart.data == undefined || _chart.data.length == 0 || forceUpdate) {
                _chart.data = res;  
                _chart.invalidateRawData();
                return;
            }

            var lastChartIdx = _chart.data.length-1;
            var lastResIdx = res.length-1;

            if(_chart.data[lastChartIdx]['date'] !== res[lastResIdx]['date']) {
                _chart.data = res;
                _chart.invalidateRawData();
            }

        });
    };
    _obj.getChart = function () {
        return _chart;
    };
    return _obj;
};


//@deprecate
var WpChart = function (chartType) {
    var _CURRENT_PRICE_URL = "../public/current_price/1.html";
    var _CHART_DATA_URL = "/public/chart_data_amchart/" + chartType + "/60";

    var _obj = {};
    var _chartData = [];
    var _currentPrice = "0";
    var _chart = null;

    _obj.init = function (elementId) { //"#chart"
        var selector = "#" + elementId;
        var styles = {
			main: {
				layout: {
					paddingTop: 57, paddingRight: 30, color: '#f8f8f8',
					line: {color: '#eaeaea', width: 1}
				},
				graph: {
					color: '#f8f8f8',
					line: {
						top: {color: '#cccccc'},
						left: {width: 0},
						right: {width: 0},
						bottom: {color: '#cccccc'}
					}
				},
				crossLine: {
					color: '#465866'
				},
				xAxis: {
					paddingTop: 13, height: 30,
					text: {family: 'Nanum Gothic', size: 12, color: '#666'},
					line: {color: '#e3e3e3', width: 1}
				},
				yAxis: {
					line: {color: '#cccccc', width: 1, opacity: 1},
					text: {family: 'Nanum Gothic', size: 12, color: '#666', align: 'right'}
				},
				tip: {
					className: 'tip'
				},
				series: {
					s1: {
						area: {
							up: {
								color: [[0, '#f94f5c'],[100, '#f94f5c']],
								over: {
									color: '#ca2a27'
								}
							},
							down: {
								color: [[0, '#4880f9'],[100, '#4880f9']],
								over: {
									color: [[0, '#0260a9'],[100, '#327eb9']]
								}
							}
						},
						line: {
							up: {
								color: '#ff6462', width: 1,
								over: {
									color: '#ca2a27', width: 1
								}
							},
							down: {
								color: '#0193d8', width: 1,
								over: {
									color: '#327eb9', width: 1
								}
							},
							flat: {
								color: '#495b68'
							}
						},
						gradient: {
							direction: 'vertical'
						}
					}
				}
			}
        };
        var options = {
			data: {
				/* url: '/WEB-APP/webponent/chart/sample/chart/data/chart01_txt.txt',
				type: 'text' */
				data: [ ],
				reverse: true
			},
			format: {
				xAxis: function(_str){
					return _str.substr(0, 4)+'.'+_str.substr(4,2)+'.'+_str.substr(6,2);
				},
				yAxis: 'priceDataFormat'
			},
			func: {
				tip: function(tipElement, data, rect){
					var date = data.xaxis.substr(0, 4)+'.'+data.xaxis.substr(4, 2)+'.'+data.xaxis.substr(6, 2);
					var tip = '<div class="text">'+date + ' / 현재가: ' + String(data.close).format().trim()+'</div>';

					tipElement.html(tip).show();

					var arrow = '<div class="arrow" style="width: '+tipElement.width() + 'px;"></div>';

					tipElement.html(tipElement.html() + arrow).css({
						left: rect.x - (tipElement.width() / 2), top: rect.y - 35
					});
				}
			},
			use: {
				animate: false,
				aCrossLine: true
			},
			timeSlice: {
				use: true,
				delay: 300,
				slider: $('.slider'),
				play: $('.play_btn'),
				pause: $('.pause_btn'),
				stop: $('.stop_btn'),
				data: function(data){
					var dateFormat = function(_str){
						return _str.substr(0, 4)+'.'+_str.substr(4,2)+'.'+_str.substr(6,2);
                    }
                    try {
                        $('.info').text('DATE : '+dateFormat(data[0].date) + ' ~ ' + dateFormat(data[data.length -  1].date))
                    }catch(e){
                        console.log(e);
                    }
				}
			}
		}

        var series = {
			"main": {
				"s1": {series: 'candle', xaxis: 'date', open: 'open', high: 'high', low: 'low', close: 'close'}
			}
        };



            _chart = webponent.chart.init($(selector), options, styles, series);
        };
    _obj.run = function () {

        _obj.update();
        _chart.timeSliceInit(_chartData);

        setInterval(function () {
            if (_chartData !== undefined) {
                $.get(_CURRENT_PRICE_URL, function (res) {
                    res = JSON.parse(res);
                    res.reverse();
                    var price = res[0].price;
                    var orgData = _chart.getOriginalData();

                    orgData[orgData.length-1]['close'] = price;
                    _chart.setOriginalData(orgData);
                    _chart.reDraw(orgData);
                    console.log("price update");
                });
            }
        }, 1000);

        setInterval(function () {
            _obj.update();
        }, 30000);
    };
    _obj.update = function () {
        $.ajax({url:_CHART_DATA_URL, success:function (res) {
            res = JSON.parse(res);
            res.reverse();
            _chartData = res;
            _chart.setOriginalData(res);
            _chart.reDraw(res);
            console.log("chart update");
        },async:false});
    }
    _obj.getChart = function () {
        return _chart;
    }
    return _obj;
};