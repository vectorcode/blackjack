var BjV = (function() {
    'use strict';
    
    var init = function(){//публичный метод
        _c("Инициализировали модуль BjV");
        
    },
    draw = function(obj){
    	_c('draw: Отрисовываем объект', 'w');
    	_c(obj);

		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {

				switch (obj[prop].name) {
				   case "credit":
                        var n = 0;
                        _pastData(BjC.vCredit, obj[prop].val);
                        if (obj[prop].val > 100) {n = 5;
                        } else if (obj[prop].val >= 50){ n = 4;
                        } else if (obj[prop].val >= 25){n = 3;
                        } else if (obj[prop].val >= 5){n = 2;
                        } else if (obj[prop].val >= 1){ n = 1;};
                        _addBigFishki(n);
				      break
				   case "cards":
				   		if(obj[prop].val){
                            _c('В объекте cards - есть карты');
                        }else{
				   			_c('В объекте cards - нет карт');
				   		}
				      break

                    case "bet":
                        _pastData(BjC.vBet, obj[prop].val);
                      break
                    case "vsumuser":
                        _pastData(BjC.vSumUser, obj[prop].val);
                      break

                    case "vsumdil":
                        _pastData(BjC.vSumDil, obj[prop].val);
                      break
                    
                    case "split":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnSplit);
                        }else{
                            _clsDisable(BjC.btnSplit);
                        };
                      break
                    
                    case "insurance":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnInsurance);
                        }else{
                            _clsDisable(BjC.btnInsurance);
                        };
                      break

                    case "double":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnDouble);
                        }else{
                            _clsDisable(BjC.btnDouble);
                        };
                      break

                    case "stand":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnStand);
                        }else{
                            _clsDisable(BjC.btnStand);
                        };
                      break

                    case "clear":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnClear);
                        }else{
                            _clsDisable(BjC.btnClear);
                        };
                      break

                    case "hit":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnHit);
                        }else{
                            _clsDisable(BjC.btnHit);
                        };
                      break

                    case "deal":
                        if (obj[prop].val) {
                            _clsDisableDel(BjC.btnDeal);
                        }else{
                            _clsDisable(BjC.btnDeal);
                        };
                      break


				   
				   default:
				   	_c('Не отрисовали данные', 'w');
				   	_c(obj[prop]);
				      break
				}

			}
		}


    },
    htmlFishkiImg = [
                '<img src="images/f-1-small.png" width="50px">',
                '<img src="images/f-5-small.png" width="50px">',
                '<img src="images/f-25-small.png" width="50px">',
                '<img src="images/f-50-small.png" width="50px">',
                '<img src="images/f-100-small.png" width="50px">'
        ],
    htmlFishki = [
                '<div class="fishka f-1"></div>',
                '<div class="fishka f-5"></div>',
                '<div class="fishka f-25"></div>',
                '<div class="fishka f-50"></div>',
                '<div class="fishka f-100"></div>'
        ],
    htmlBigFishki = [
                '<div class="big-f-1 big-f-active" data-standing="1" data-index="0"></div>',
                '<div class="big-f-5 big-f-active" data-standing="5" data-index="1"></div>',
                '<div class="big-f-25 big-f-active" data-standing="25" data-index="2"></div>',
                '<div class="big-f-50 big-f-active" data-standing="50" data-index="3"></div>',
                '<div class="big-f-100 big-f-active" data-standing="100" data-index="4"></div>'
        ],
    _c = function(x, y){ //управление отображением console.log
    	var flag = true;
    	
    	if(flag){
	    	switch (y) {
				case "w": console.warn(x); break
				case "e": console.error(x);	break
				default: console.log(x); break
			}
    	}
    },
    _clsDisable = function(blk){
        blk.addClass('disable');
    },
    _clsDisableDel = function(blk){
        blk.removeClass('disable');
    },
    _pastData = function(blk, data) {
    	blk.html(data);
    },

    _addBigFishki = function(n){
        _c("Отображаем большие фишки");

        var html ='';

        for (var i = 0; i < n; i++) {
            html += htmlBigFishki[i];
        };
        _pastData(BjC.vBlkBigFishki, html);

    };

    return {
    	init : init,
    	draw : draw,
        htmlFishkiImg : htmlFishkiImg,
        htmlFishki : htmlFishki,
        htmlBigFishki : htmlBigFishki
    };
}());

