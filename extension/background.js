console.log("background.js loaded");
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
    });

chrome.runtime.onMessage.addListener(async({message})=>{
    console.log(message)
if(message==="school load")
{
    console.log(message)
  await new Promise((res) => {
  setTimeout(() => res(), 2000); // 1000ミリ秒 (1秒) 待機
});
 await chrome.tabs.query({},async(tabs)=>{
   const schoolTab=tabs.find((v)=>{return v.url.includes("school-search")})
    console.log(schoolTab);
    // console.log(tab.find((v)=>{v}))

    chrome.scripting.executeScript({
      target: {tabId: schoolTab.id},
      files: ['content_school.js']
    }).then(() => console.log("script injected"));
  }) 
  }
if(message==="school load1")
{
  console.log(message)
  await new Promise((res) => {
  setTimeout(() => res(), 2000); // 1000ミリ秒 (1秒) 待機
});
 await chrome.tabs.query({},async(tabs)=>{
   const schoolTab=tabs.find((v)=>{return v.url.includes("change-school")})
    console.log(schoolTab);
    // console.log(tab.find((v)=>{v}))

    chrome.scripting.executeScript({
      target: {tabId: schoolTab.id},
      files: ['content_second_school.js']
    }).then(() => console.log("script injected1"));
  }) 
  }
if(message==="school load2")
{
    await new Promise((res) => {
    setTimeout(() => res(), 2000); // 1000ミリ秒 (1秒) 待機
});
    await chrome.tabs.query({},async(tabs)=>{
    const schoolTab=tabs.find((v)=>{return v.url.includes("faculty-select")})
    console.log(schoolTab);
    // console.log(tab.find((v)=>{v}))

    chrome.scripting.executeScript({
        target: {tabId: schoolTab.id},
        files: ['content_third_school.js']
    }).then(() => console.log("script injected2"));
    }) 
    }
if(message==="school load3")
    {
        await new Promise((res) => {
        setTimeout(() => res(), 2000); // 1000ミリ秒 (1秒) 待機
    });
        await chrome.tabs.query({},async(tabs)=>{
        const schoolTab=tabs.find((v)=>{return v.url.includes("dept-select")})
        console.log(schoolTab);
        // console.log(tab.find((v)=>{v}))
    
        chrome.scripting.executeScript({
            target: {tabId: schoolTab.id},
            files: ['content_forth_search.js']
        }).then(() => console.log("script injected3"));
        }) 
        }
  
})
