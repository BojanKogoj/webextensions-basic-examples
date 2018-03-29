window.onload = function () {
    document.getElementById("ohno").onclick = function () {
        browser.runtime.sendMessage({ "message": "Oh no!" });
    };
};
