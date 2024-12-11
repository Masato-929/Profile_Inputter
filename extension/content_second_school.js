(async () => {
    document.querySelector("body > div.popup > div.popupcontents > div.btnwrapshort.clearfix > p.btn_rightshort.clearfix > span > input").addEventListener("click", () => {
        chrome.runtime.sendMessage({
           message: "school load2"
        });});
    document.querySelector("body > div.popup > div.popupcontents > div.contents_areaoves > form > dl > dd > div > ul > li:nth-child(1) > span > input").click()
    document.querySelector("body > div.popup > div.popupcontents > div.btnwrapshort.clearfix > p.btn_rightshort.clearfix > span > input").click()
    
})();
