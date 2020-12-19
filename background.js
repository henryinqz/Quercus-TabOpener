chrome.browserAction.onClicked.addListener(function(tab) { // User clicks browser action
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Send message to active tab
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            chrome.tabs.create({url: request.url})
        } else if (request.message === "icon_activity") {
            if (request.status) {
                chrome.tabs.query({active:true, windowType:"normal", currentWindow: true},function(d){
                    var tabId = d[0].id;
                    chrome.browserAction.setBadgeBackgroundColor({color: [0, 200, 0, 10]}); // Green
                    chrome.browserAction.setBadgeText({text: " ", tabId: tabId})
                })
            }
        }
    }
)