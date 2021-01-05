chrome.contextMenus.create({
    id: "docId",
    title: "Open module in new tab",
    visible: true,
    contexts: ["frame"],
    targetUrlPatterns: ["*://q.utoronto.ca/*"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info["frameUrl"] !== undefined) {
        chrome.tabs.create({url: info["frameUrl"]})
    }
});