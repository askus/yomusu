function checkForValidUrl(tabId, changeInfo, tab) {
	if(getDomainFromUrl(tab.url).toLowerCase()=="www.books.com.tw"){
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);


var articleData = {};
articleData.error = "加载中...";
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	if(request.type!=="books-article-information")
		return;
		console.log( request );
	}
});
