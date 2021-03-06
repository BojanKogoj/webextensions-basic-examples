browser.runtime.onMessage.addListener((msg) => {
    // Get message from popup and send to content
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(onError);
});


function onError(error) {
    console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
        browser.tabs.sendMessage(
            tab.id,
            { greeting: "Hi from background script" }
        ).then(response => {
            console.log("Message from the content script:");
            console.log(response.response);
        }).catch(onError);
    }
}
