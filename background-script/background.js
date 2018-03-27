"use strict";


function rewriteUserAgentHeader(e) {
    for (var header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
            header.value = "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.3.2.2639 Mobile Safari/537.35+";
        }
    }
    return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeader,
    {
        urls: ["https://httpbin.org/*",
            "https://facebook.com/*",
            "https://*.facebook.com/*",]
    },
    ["blocking", "requestHeaders"]);
