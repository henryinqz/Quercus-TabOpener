chrome.contextMenus.create({
    id: "docId",
    title: "Open module in new tab",
    visible: true,
    contexts: ["frame"],
    documentUrlPatterns: ["*://canvadocs-yul-prod.inscloudgate.net/*"],
    targetUrlPatterns: ["*://q.utoronto.ca/*"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info["frameUrl"] !== undefined && info["frameUrl"] !== "about:blank") {
        chrome.tabs.create({url: info["frameUrl"]})
    }
});