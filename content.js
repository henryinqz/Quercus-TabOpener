if (document.getElementById("doc_preview") != null) { // Check if doc_preview exists
    // console.log("doc_preview exists")
    chrome.runtime.sendMessage({"message": "badge_activity", "status": true}); // Enable green badge on browser action/extension icon (indicates a module can be opened)
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "clicked_browser_action" && document.getElementById("doc_preview") != null) {
            var docViewerLink = document.getElementById("doc_preview").getElementsByTagName("iframe")[0].src;
            // console.log(docViewerLink);

            chrome.runtime.sendMessage({"message": "open_new_tab", "url": docViewerLink});
        }
    }
);