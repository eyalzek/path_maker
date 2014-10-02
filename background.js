// called when the url of a tab changes
function checkForValidUrl(tabId, changeInfo, tab) {

	if (tab.url.indexOf('maps') !== -1 && tab.url.indexOf('google') !== -1) {
		chrome.pageAction.show(tabId);
	}
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);