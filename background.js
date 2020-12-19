chrome.browserAction.onClicked.addListener(function(tab) { // User clicks browser action
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Send message to active tab
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "open_new_tab") {
            chrome.tabs.create({"url": request.url})
        }
    }
)