chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "clicked_browser_action" && document.getElementById("doc_preview") != null) {
            var iframeSrc = document.getElementById("doc_preview").getElementsByTagName("iframe")[0].src;
            
            console.log(iframeSrc);

            chrome.runtime.sendMessage({"message": "open_new_tab", "url": iframeSrc});
        }
    }
);