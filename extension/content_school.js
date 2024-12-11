
  (async () => {
  
      document.querySelector("body > div.popup > div.popupcontents > div > div.btnwrapshort.clearfix > p.btn_rightshort.clearfix > span > input").addEventListener("click", () => {
          console.log("school load1")
          chrome.runtime.sendMessage({
             message: "school load1"
          });
   })
    document.querySelector("#gkbn-3").click()
    document.querySelector("body > div.popup > div.popupcontents > div > div.contents_areaoves > form > dl > dd:nth-child(4) > div > ul:nth-child(2) > li:nth-child(1) > span > input").click()
    document.querySelector("#entrybox > div > ul:nth-child(8) > li:nth-child(3) > span > input").click()
    document.querySelector("body > div.popup > div.popupcontents > div > div.btnwrapshort.clearfix > p.btn_rightshort.clearfix > span > input").click()
    // await new Promise((res) => {
    //     setTimeout(() => res(), 2000); // 1000ミリ秒 (1秒) 待機
    // });
    // document.querySelector("body > div.popup > div.popupcontents > div.contents_areaoves > form > dl > dd > div > ul > li:nth-child(7) > span > input").click()
    // document.querySelector("body > div.popup > div.popupcontents > div.contents_areaoves > form > dl > dd > div > ul > li:nth-child(7) > span > input").click()
    
    // await new Promise(() => {
    //     setTimeout(() => res(), 2000);
    // });


    // document.querySelector("body > div.popup > div.popupcontents > div.contents_areaoves > form > dl.first_blocks > dd > div > ul > li:nth-child(1) > span > input").click();
    // document.querySelector("body > div.popup > div.popupcontents > div.contents_areaoves > form > dl:nth-child(3) > dd > div > ul > li:nth-child(2) > span > input").click();
    // document.querySelector("body > div.popup > div.popupcontents > div.btnwrapshort.clearfix > p.btn_rightshort.clearfix > span > input").click();
    
    
  })();