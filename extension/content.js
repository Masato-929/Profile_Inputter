console.log('content.js loaded');

var {
  familyName,
  personalName,
  familyName_kana,
  personalName_kana,
  graduateYear,
  birthDay,
  postCode,
  prefecture,
  cityTown,
  homePhoneNumber,
  mobilePhoneNumber,
  labo,
  circle,
  email,
  isMan,
} = chrome.runtime.getManifest().env;
if (location.href.includes('i-webs.jp')) {
  const findList = (searchWord) => {
    return [...document.querySelectorAll('.formbox')]
      .find((v) =>
        v.querySelector('.formbox01')?.innerText?.includes(searchWord)
      )
      .querySelector('.formbox02');
  };
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(2) > dd > span > span:nth-child(1) > div > div > div > input'
  //   ).value = familyName;
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(2) > dd > span > span:nth-child(2) > div > div > div > input'
  //   ).value = personalName;
  findList('カナ氏名').querySelectorAll('input')[0].value = familyName_kana;
  findList('カナ氏名').querySelectorAll('input')[1].value = personalName_kana;
  for (let i = 0; i < 3; i++) {
    const defaultValue = [
      ...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper'),
    ][i].querySelector('span').innerText;
    [...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper')][i]
      .querySelector('select')
      .querySelector(`option[value="${birthDay.split('/')[i]}"]`)
      .setAttribute('selected', 'selected');
    if (!defaultValue.includes('▼')) {
      [...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper')][i]
        .querySelector('select')
        .querySelector(`option[value="${defaultValue}"]`)
        .removeAttribute('selected', 'selected');
    }
    [...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper')][
      i
    ].querySelector('span').innerText = birthDay.split('/')[i];
  }
  [
    ...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper'),
  ][1].querySelector('select').value = birthDay.split('/')[1];
  [
    ...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper'),
  ][2].querySelector('select').value = birthDay.split('/')[2];
  [
    ...findList('卒業').querySelectorAll('.jqTransformSelectWrapper'),
  ][0].querySelector('span').innerText = graduateYear.split('/')[0];
  [
    ...findList('卒業').querySelectorAll('.jqTransformSelectWrapper'),
  ][1].querySelector('span').innerText = graduateYear.split('/')[1];
  [
    ...findList('卒業').querySelectorAll('.jqTransformSelectWrapper'),
  ][1].querySelector('span').innerText = '卒業（修了）見込み';
  //   const BunkeiRadio = document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(7) > dd > span:nth-child(1) > a'
  //   );
  //   let RikeiRadioClassList = [
  //     ...document.querySelector(
  //       'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(7) > dd > span:nth-child(3) > a'
  //     ).classList,
  //   ];
  //   if (
  //     RikeiRadioClassList.some((element) => {
  //       return element !== 'jqTransformChecked';
  //     })
  //   ) {
  //     document
  //       .querySelector(
  //         'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(7) > dd > span:nth-child(3) > a'
  //       )
  //       .classList.add('jqTransformChecked');
  //     BunkeiRadio.classList.remove('jqTransformChecked');
  //   }
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(9) > dd > span > div:nth-child(1) > div > span'
  //   ).innerHTML = birthDay.split('/')[0];
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(9) > dd > span > div:nth-child(3) > div > span'
  //   ).innerHTML = birthDay.split('/')[1];
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(9) > dd > span > div:nth-child(5) > div > span'
  //   ).innerHTML = birthDay.split('/')[2];
  if (isMan) {
    [...findList('性別').querySelectorAll('.sexcd')]
      .find((v) => v.querySelector('label')?.innerText.includes('男'))
      ?.querySelector('a')
      ?.click();
  } else {
    [...findList('性別').querySelectorAll('.sexcd')]
      .find((v) => v.querySelector('label')?.innerText.includes('女'))
      ?.querySelector('a')
      ?.click();
  }
  findList('郵便番号').querySelectorAll('input')[0].value =
    postCode.split('-')[0];
  findList('郵便番号').querySelectorAll('input')[1].value =
    postCode.split('-')[1];
  findList('都道府県')
    .querySelector('.jqTransformSelectWrapper')
    .querySelector('span').innerText = prefecture;
  findList('番地').querySelector('input').value = cityTown;

  [...findList('電話番号').querySelectorAll('input')][0].value =
    mobilePhoneNumber.split('-')[0];
  [...findList('電話番号').querySelectorAll('input')][1].value =
    mobilePhoneNumber.split('-')[1];
  [...findList('電話番号').querySelectorAll('input')][2].value =
    mobilePhoneNumber.split('-')[2];

  [...document.querySelectorAll('.formbox')]
    .find((v) => v.querySelector('label')?.innerText.includes('現住所と同じ'))
    .querySelector('a')
    .click();
  findList('研究室').querySelector('input').value = labo;
  findList('サークル').querySelector('input').value = circle;
  if (findList('アドレス').querySelectorAll('input').length < 2) {
    findList('アドレス').querySelectorAll('input')[0].value =
      email.split('@')[0];
    findList('アドレス').querySelectorAll('input')[1].value =
      email.split('@')[1];
  } else {
    findList('アドレス').querySelectorAll('input')[0].value =
      email.split('@')[0];
    findList('アドレス').querySelectorAll('input')[1].value =
      email.split('@')[1];
    findList('アドレス').querySelectorAll('input')[2].value =
      email.split('@')[0];
    findList('アドレス').querySelectorAll('input')[3].value =
      email.split('@')[1];
  }

  //学校の選択ボタンを押したタイミングでこれを実行する
  //   document
  //     .querySelector('#gkinfoid > div.formbox02schoolbtn > span > input')
  //     .addEventListener('click', () => {
  //       chrome.runtime.sendMessage({
  //         message: 'school load',
  //       });
  //     });
} else if (location.href.includes('job.axol')) {
}
