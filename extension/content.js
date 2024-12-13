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
  findList('漢字氏名').querySelectorAll('input')[0].value = familyName;
  findList('漢字氏名').querySelectorAll('input')[1].value = personalName;
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(2) > dd > span > span:nth-child(1) > div > div > div > input'
  //   ).value = familyName;
  //   document.querySelector(
  //     'body > div.wrap > div.container.clearfix.formrap > div.contents_area > form:nth-child(6) > dl > div:nth-child(2) > dd > span > span:nth-child(2) > div > div > div > input'
  //   ).value = personalName;
  findList('カナ氏名').querySelectorAll('input')[0].value = familyName_kana;
  findList('カナ氏名').querySelectorAll('input')[1].value = personalName_kana;
  for (let i = 0; i < 3; i++) {
    [
      ...[
        ...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper'),
      ][i].querySelectorAll('li'),
    ]
      .find((v) => v.innerText === `${birthDay.split('/')[i]}`)
      .querySelector('a')
      .click();
  }
  //   [
  //     ...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper'),
  //   ][1].querySelector('select').value = birthDay.split('/')[1];
  //   [
  //     ...findList('生年月日').querySelectorAll('.jqTransformSelectWrapper'),
  //   ][2].querySelector('select').value = birthDay.split('/')[2];

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
    [...findList('性別').querySelectorAll('li')]
      .find((v) => v.querySelector('label')?.innerText.includes('男'))
      ?.querySelector('a')
      ?.click();
  } else {
    [...findList('性別').querySelectorAll('li')]
      .find((v) => v.querySelector('label')?.innerText.includes('女'))
      ?.querySelector('a')
      ?.click();
  }
  findList('都道府県')
    .querySelector('.jqTransformSelectWrapper')
    .querySelector('span').innerText = prefecture;
  findList('番地').querySelector('input').value = cityTown;
  for (let i = 0; i < 2; i++) {
    findList('郵便番号').querySelectorAll('input')[i].value =
      postCode.split('-')[i];
    [...findList('卒業').querySelectorAll('.jqTransformSelectWrapper')][
      i
    ].querySelector('span').innerText = graduateYear.split('/')[i];
  }
  [
    ...findList('卒業').querySelectorAll('.jqTransformSelectWrapper'),
  ][2].querySelector('span').innerText = '卒業（修了）見込み';
  for (let i = 0; i < 3; i++) {
    [...findList('電話番号').querySelectorAll('input')][i].value =
      homePhoneNumber.split('-')[i];
    [...findList('携帯').querySelectorAll('input')][i].value =
      mobilePhoneNumber.split('-')[i];
  }

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
  document
    .querySelector('#gkinfoid > div.formbox02schoolbtn > span > input')
    .addEventListener('click', () => {
      chrome.runtime.sendMessage({
        message: 'school load',
      });
    });
} else if (location.href.includes('job.axol')) {
  const findList = (searchWord) => {
    return [...document.querySelectorAll('.form__item')]
      .find((v) =>
        v.querySelector('.form__item__title')?.innerText?.includes(searchWord)
      )
      .querySelector('.form__item__group');
  };
  const findAddressList = (searchWord) => {
    return [...document.querySelectorAll('.form__item')].find((v) =>
      v.querySelector('.form__item__title')?.innerText?.includes(searchWord)
    );
  };

  findList('漢字氏名').querySelectorAll('input')[0].value = familyName;
  findList('漢字氏名').querySelectorAll('input')[1].value = personalName;
  findList('カナ氏名').querySelectorAll('input')[0].value = familyName_kana;
  findList('カナ氏名').querySelectorAll('input')[1].value = personalName_kana;
  if (isMan) {
    [...findList('性別').querySelectorAll('label')]
      .find((v) => v.innerText.includes('男'))
      .querySelector('input')
      .click();
  } else {
    [...findList('性別').querySelectorAll('label')]
      .find((v) => v.innerText.includes('女'))
      .querySelector('input')
      .click();
  }
  for (let i = 0; i < 3; i++) {
    [
      ...findAddressList('番号')
        .querySelector('.form__item__multi')
        .querySelectorAll('.form__item__group'),
    ][0]
      .querySelector('span[name=telg]')
      .querySelectorAll('input')[i].value = homePhoneNumber.split('-')[i];
    [
      ...[
        ...findAddressList('番号')
          .querySelector('.form__item__multi')
          .querySelectorAll('.form__item__group'),
      ][1]
        .querySelector('span[name=keitai]')
        .querySelectorAll('input'),
    ][i].value = mobilePhoneNumber.split('-')[i];
  }
  document.querySelector('select[name="birth_Y"]').value = Number(
    birthDay.split('/')[0]
  );
  document.querySelector('select[name="birth_m"]').value = Number(
    birthDay.split('/')[1]
  );
  document.querySelector('select[name="birth_d"]').value = Number(
    birthDay.split('/')[2]
  );
}
