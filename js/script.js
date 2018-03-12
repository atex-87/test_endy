'use strict';
var Cart = (function(){
	var _itemsRows = document.querySelectorAll('.row'),
	_pushButton = function(e){
		e.preventDefault();
		var _this = e.target,
		row = _this.parentNode.parentNode;
		row.classList.toggle('removed');
		_this.innerText = !row.classList.contains('removed') ? 'Удалить' : 'Вернуть';
	},
	_changeCounter = function(e) {
		var _this = e.target,
		input = _this.parentNode.querySelector('input'),
		disable = _this.parentNode.querySelector('.disable');
		if ( _this.className === 'counter_minus' && !disable) {
			input.value = +input.value - 1;
			if (input.value <= 1) _this.classList.add('disable');
		} else if( _this.className === 'counter_plus'){
			input.value = +input.value + 1;
			if (!!disable) disable.classList.remove('disable');
		}
		return null;
	};
	return {
		init: function(){
			for(var i = 0; i < _itemsRows.length; i++) {
				var $button = _itemsRows[i].querySelector('button'),
				$counter = _itemsRows[i].querySelector('.counter'),
				$input = _itemsRows[i].querySelector('input');
				$button.addEventListener('click', function(e) {
					_pushButton(e);
				});
				$counter.addEventListener('click', function(e) { 
					_changeCounter(e);
				});
				$input.addEventListener('keydown', function(e) { 
					e.preventDefault();
				});
				this.valueInit($input);
			};
		},
		valueInit: function(_this){
			_this.value = _this.value && _this.value >= 1 ? _this.value : 1;
			if (_this.value <= 1) _this.previousElementSibling.classList.add('disable');
		}
	}
}());
var ProgressBar = (function(){
	var _bars = document.querySelectorAll('.progress_bar');
	return {
		init: function(){
			for(var i = 0; i < _bars.length; i++) {
				var progress = _bars[i].dataset.progress;
				_bars[i].querySelector('.progress').style.width = progress+'%';
				_bars[i].nextElementSibling.innerText = progress+'%';
				_bars[i].nextElementSibling.style.left = progress+'%';
			}	
		}
	}	
})()
Cart.init();
ProgressBar.init();