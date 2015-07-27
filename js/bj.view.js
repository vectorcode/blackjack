var BjV = (function() {
    'use strict';
    
    var init = function(){//публичный метод
        _c("Инициализировали модуль BjV");
        
    },
    draw = function(obj){
    	_c('drawStart: Отрисовываем объект', 'w');
    	_c(obj);

    	/*vCredit : vCredit,
		vBet : vBet,
		vSumUser : vSumUser,
		vSumDil : vSumDil,
		vBlkBigFishki : vBlkBigFishki,
		vBlkTblFishki : vBlkTblFishki,
		btnSplit : btnSplit,
		btnInsurance : btnInsurance,
		btnDouble : btnDouble,
		btnStand : btnStand,
		btnClear : btnClear,
		btnHit : btnHit,
		btnDeal : btnDeal

			this.credit = {'name' : 'credit', 'val' : credit};
    	this.cards = {'name' : 'cards', 'val' : false};
    	this.busted = {'name' : 'busted', 'val' : false};
    	this.score = {'name' : 'credit', 'val' : false};
    	this.black_jack = {'name' : 'black_jack', 'val' : false};
    	this.maybeSplit = {'name' : 'maybeSplit', 'val' : false};
    	this.forked = {'name' : 'forked', 'val' : false};
    	this.doubled = {'name' : 'doubled', 'val' : false};
    	this.insured = {'name' : 'insured', 'val' : false};
    	this.bet = {'name' : 'bet', 'val' : 0};
    	this.split = {'name' : 'split', 'val' : false};
    	this.insurance = {'name' : 'insurance', 'val' : false};
    	this.double = {'name' : 'double', 'val' : false};
    	this.stand = {'name' : 'stand', 'val' : false};
    	this.clear = {'name' : 'clear', 'val' : false};
    	this.hit = {'name' : 'hit', 'val' : false};
    	this.deal = {'name' : 'deal', 'val' : false};

		*/
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				

				switch (obj[prop].name) {
				   case "credit":
				   		_pastData(BjC.vCredit, obj[prop].val);
				      break
				   case "cards":
				   		if(obj[prop].val){
				   			_c(obj[prop].val)
				   		}else{

				   		}
				      break
				   
				   default:
				   	_c('Не отрисовали данные', 'w');
				   	_c(obj[prop]);
				      break
				}

			}
		}


    },
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
    _pastData = function(blk, data) {
    	blk.html(data);
    },
    _bindForm = function(){
        _c("Запустилт скрытый метод");
    };

    return {
    	init : init,
    	draw : draw
    };
}());

