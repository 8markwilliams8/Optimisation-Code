var myObjects = [{
    'name': 'Overview',
    'idname': 'mw-overview',
    'classname': '.mw-overviewLink'
  },
   {
    'name': 'Product Details',
    'idname': 'mw-productdetails',
    'classname': '.mw-productDetailsLink'
  },
  {
    'name': 'Reviews',
    'idname': 'mw-reviews',
    'classname': '.mw-reviewsLink'
  },
  {
    'name': 'Need to Know - The Essential Bits',
    'idname': 'mw-needtoknow-theessentialbits',
    'classname': '.mw-needToKnowLink'
  },
  {
    'name': 'Product Choices',
    'idname': 'mw-productchoices',
    'classname': '.mw-productChoicesLink'
  }



];


$.each(myObjects, function(i, obj) {
	var targetSection = $('.collapsibleTab__title:contains(' + obj.name + ')');
  var targetHeading = targetSection.text();
	var trimHeading = $.trim(targetHeading).toLowerCase().replace(/\s+/g, '');
  targetSection.closest('section').before('<div class=\"anchor\" id=\"mw-' + trimHeading + '\"></div>');

  if ($('#' + obj.idname).length > 0) {
    $(obj.classname).show();
  }
});
