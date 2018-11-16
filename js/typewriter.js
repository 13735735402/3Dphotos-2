$.fn.typewriter = function() {
	var $ele = $(this), str = $ele.html(), progress = 0;
	$ele.html('');
	var timer = setInterval(function() {
		var current = str.substr(progress, 1);
		if (current == '<') {
			progress = str.indexOf('>', progress) + 1;
		} else {
			progress++;
		}
		$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
		if (progress >= str.length) {
			clearInterval(timer);	
		}
	},25);
};


/* 
 * <style>标签调用此方法：达到css逐步渲染的效果; 
 * html正文中调用此方法：达到打字机的效果
 * 
 */