var BjC = (function() {
    'use strict';
    
    var init = function(){//публичный метод
       _c("Инициализировали модуль BjC");
        var baceStatus = new _status(1000);
        BjV.draw(baceStatus);
    },
    vCredit = $('#v_credit'), //отображение кол-ва денег
    vBet = $('#v_bet'), // отображение ставки
    vSumUser = $('#v_sum_user'),// отображение баллов игрока
    vSumDil = $('#v_sum_dil'), // отображение баллов диллера
    vBlkBigFishki = $('#blk_big_fishki'), // блок с фишками
    vBlkTblFishki = $('#blk_tbl_fishki'), // блок фишек на столе
    btnSplit = $('#btn_split'),// кнопка nSplit
    btnInsurance = $('#btn_nsurance'),// кнопка Insurance
    btnDouble = $('#btn_double'), //кнопка Stand
    btnStand = $('#btn_stand'), // кнопка Clear
    btnClear = $('#btn_clear'), // кнопка Clear
    btnHit = $('#btn_hit'), // кнопка Hit
    btnDeal = $('#btn_deal'), // кнопка Deal
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
    _status = function(credit){
    	this.credit = {'name' : 'credit', 'val' : credit};
    	this.cards = {'name' : 'cards', 'val' : false};
    	this.busted = {'name' : 'busted', 'val' : false};
    	this.score = {'name' : 'score', 'val' : false};
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

    	_c("Базовый объект инициализирован");
    	_c(this);
    },
    _addOn = function(){//события
        _c("Метод установки событий и определения активных блоков вёрстки");

    };

    return {
    	init : init,
    	vCredit : vCredit,
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
    };
}());

