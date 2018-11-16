$.fn.scrollAlwaysBottom = function() {
	var ele = $(this)[0];
	$(this).css('overflow','auto');
	var timer = setInterval(function() {
		ele.scrollTop = ele.scrollHeight;
	}, 300);
};
