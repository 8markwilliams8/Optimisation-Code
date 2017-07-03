$('.productCard__title h3').each(function() {
var title = $(this);
title.text(function(index, currentText) {
    var newText = currentText.substr(0, 50);
	title.text(newText + '...');
});
});
