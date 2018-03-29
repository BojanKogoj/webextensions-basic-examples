chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    var as = document.getElementsByTagName('a');
    for (var i = 0; i < as.length; i++) {
        as[i].text = 'Oh no!';
    }
    var ps = document.getElementsByTagName('p');
    for (var i = 0; i < ps.length; i++) {
        ps[i].innerText = 'Oh no!';
    }

});
