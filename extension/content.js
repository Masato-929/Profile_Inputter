console.log('content.js loaded');
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(2) > dd > span > span:nth-child(1) > div > div > div > input").value="性";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(2) > dd > span > span:nth-child(2) > div > div > div > input").value="名";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(3) > dd > span > span:nth-child(1) > div > div > div > input").value="セイ";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(3) > dd > span > span:nth-child(1) > div > div > div > input").value="メイ";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(6) > dd > span > div:nth-child(1) > div > span").innerHTML= "卒業年数";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(6) > dd > span > div:nth-child(3) > div > span").innerHTML = "卒業月";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(6) > dd > span > div:nth-child(5) > div > span").innerHTML = "卒業（修了）見込み";
const BunkeiRadio = document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(7) > dd > span:nth-child(1) > a");
let RikeiRadioClassList = [...document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(7) > dd > span:nth-child(3) > a").classList];
if(RikeiRadioClassList.some((element) => {
   return  element!== "jqTransformChecked"})){
    document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(7) > dd > span:nth-child(3) > a").classList.add(("jqTransformChecked"));
    BunkeiRadio.classList.remove(("jqTransformChecked"));
   }
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(9) > dd > span > div:nth-child(1) > div > span").innerHTML = "生年";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(9) > dd > span > div:nth-child(3) > div > span").innerHTML = "生月";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(9) > dd > span > div:nth-child(5) > div > span").innerHTML = "正日";
//女の子はここを適用してください（女の子：ここから）
// const BoyRadio =document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(10) > dd > ul > li:nth-child(1) > span > a")
// let GirlRadioClassList = [...document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(10) > dd > ul > li:nth-child(2) > span > a").classList];
// if(GirlRadioClassList.some((element) => {
//    return  element!== "jqTransformChecked"})){
//     document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(10) > dd > ul > li:nth-child(2) > span > a").classList.add(("jqTransformChecked"));
//     BoyRadio.classList.remove(("jqTransformChecked"));
//    }
//(女の子：ここまで)
//男の子はここを適用してください（男の子：ここから）
const GirlRadio =document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(10) > dd > ul > li:nth-child(2) > span > a");
let BoyRadioClassList = [...document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(10) > dd > ul > li:nth-child(1) > span > a").classList];
if(BoyRadioClassList.some((element) => {
   return  element!== "jqTransformChecked"})){
    document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(10) > dd > ul > li:nth-child(1) > span > a").classList.add(("jqTransformChecked"));
    GirlRadio.classList.remove(("jqTransformChecked"));
   }
//(男の子：ここまで)
document.querySelector("#gyubin1").value = "郵便番号１(3桁)";
document.querySelector("#gyubin > div:nth-child(3) > div > div > input").value = "郵便番号２(4桁)";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(13) > dd > span > div > div > span").innerHTML = "都道府県";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(14) > dd > p > div > div > div > input").value = "市区町村と番地";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(15) > dd > p > div > div > div > input").value = "マンション名・部屋番号";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(16) > dd > span.hosoku.clearfix > div:nth-child(1) > div > div > input").value = "家の電話番号１";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(16) > dd > span.hosoku.clearfix > div:nth-child(3) > div > div > input").value = "家の電話番号２";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(16) > dd > span.hosoku.clearfix > div:nth-child(5) > div > div > input").value = "家の電話番号３";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(17) > dd > span.hosoku.clearfix > div:nth-child(1) > div > div > input").value = "携帯電話番号１";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(17) > dd > span.hosoku.clearfix > div:nth-child(3) > div > div > input").value = "携帯電話番号２";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(17) > dd > span.hosoku.clearfix > div:nth-child(5) > div > div > input").value = "携帯電話番号３";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(19) > span > span > a").click()
document.querySelector("#bikoa").value = "システムセキュリティ研究室";
document.querySelector("#bikob").value = "クラブ、サークル名（なかったら空欄）";
const firstemail = "メールアドレス１(＠まで）";
const secondemail = "メールアドレス２";
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(28) > dd > span > span:nth-child(1) > div:nth-child(1) > div > div > input").value = firstemail;
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(28) > dd > span > span:nth-child(1) > div:nth-child(3) > div > div > input").value = secondemail;
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(28) > dd > span > span:nth-child(3) > div:nth-child(1) > div > div > input").value = firstemail;
document.querySelector("body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(28) > dd > span > span:nth-child(3) > div:nth-child(3) > div > div > input").value = secondemail;


