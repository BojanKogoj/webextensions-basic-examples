function toggleFilters() {
    setTimeout(function () {
        document.getElementsByClassName('js-show-filters')[0].click();
        toggleFilters();
    }, 1000);
}
toggleFilters();
