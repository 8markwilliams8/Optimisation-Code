function pollingFn() {
    return window.pageType === 'Product'
  }

function pollingFn() {
  return window.pageType === "Top Level Category" || window.pageType === "Listing Category" || window.pageType === "Category - Multiple Filters" && ($('.breadcrumbs__item span:contains("Special Offer")').length > 0)
  }


function pollingFn() {
  return window.pageType === "Top Level Category" || window.pageType === "Listing Category" || window.pageType === "Category - Multiple Filters" && ($('.breadcrumbs__item span:contains("Special Offer")').length > 0)
  }
