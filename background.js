chrome.browserAction.onClicked.addListener(function(tab) { // User clicked browser action
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            chrome.tabs.create({url: request.url})
        } else if (request.message === "badge_activity") { // Enable badge on browser action/extension icon (indicates a module can be opened)
            if (request.status) {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    var tabId = tabs[0].id;
                    chrome.browserAction.setBadgeBackgroundColor({color: [0, 200, 0, 10]}); // Green
                    chrome.browserAction.setBadgeText({text: " ", tabId: tabId}) 
                })
            }
        }
    }
)