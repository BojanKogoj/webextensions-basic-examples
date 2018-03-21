function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        noidea: document.querySelector("#noidea").checked,
    });
}
function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#noidea").checked = result.noidea || false;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var ni = browser.storage.local.get("noidea");
    ni.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
