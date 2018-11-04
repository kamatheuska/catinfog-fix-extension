
console.log(' testing 2')

//chrome.tabs.onUpdated.addListener(setClickListener)
// buttonSearch.addEventListener('click', handleSearch)

document.addEventListener('DOMContentLoaded', function () {

    const buttonSearch = document.getElementById('button__search')
    buttonSearch.addEventListener('click', handleClick)
    console.log('---->>  logging...\n')

    function handleClick() {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.insertCSS(tabs[0].id, { file: 'css/stylesheet.css' })
            console.log(`Printing- - - - tabs[0].id:`, tabs[0].id)
        })
    }
}, false)