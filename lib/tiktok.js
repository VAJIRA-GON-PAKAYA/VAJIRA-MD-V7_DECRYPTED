/*
හායි හායි, පොන්න වජිර and පකේ T.D.D. TEAM 😂 LOL 😂😂. අපෙන් තෑග්ගක් ඔයාලට 
==============================================================
Hi Hi, Ponna Vajira and Pake T.D.D. TEAM 😂 LOL 😂😂. A gift from us to you.
****************
එහ් බන් අසිත මේ වජිර පකයට තව කෝඩ් ටිකක් දොයන් මූ පව්නෙ.. 🥹 | Hey, Asita, add some more code to this Vajira Paka.. 🥹

@ PROJECT NAME :- VAJIRA-MD-V7 DECRYPTED BASE
@ AUTHORS :- වජිරව පේන්න බැරි උන් 😂 | Those who cannot see Vajira 😂
@ BOT OWNER :- හැමදේම අනුන්ගෙන් අරන් තමන්ගෙ බොටාට දාන, අඩු වයසින් උපන් අංගවිකල වජිර රත්නායක 🥹 | Vajira Ratnayake, born at a young age, is a disabled person who takes everything from others and puts it in his own hands🥹

---------------------------☝️☝️☝️☝️☝️☝️☝️☝️-----------------------------

ඔය english වලින් දාපුවා google එකෙන් translate කරපුවා හොදේ..!
It's good that you posted it in English and translated it from google..!                      */


function _0x4de188(_0x348c7c, _0xd424e9, _0x7fc3d8, _0x5c9615, _0x3718c1) {
  return _0x3b87(_0x3718c1 + 0x229, _0x5c9615);
}
(function (_0x27a475, _0x3d0de2) {
  const _0x2a0d4b = _0x27a475();
  while (true) {
    try {
      const _0x10f8d0 = -parseInt(_0x3b87(481, 0x26f)) / 1 * (parseInt(_0x3b87(488, 0x266)) / 2) + parseInt(_0x3b87(478, -0xbc)) / 3 + parseInt(_0x3b87(509, -0xb8)) / 4 * (parseInt(_0x3b87(490, -0x4e)) / 5) + -parseInt(_0x3b87(523, -0x7)) / 6 + -parseInt(_0x3b87(500, -0x44)) / 7 + parseInt(_0x3b87(511, 0x295)) / 8 * (parseInt(_0x3b87(522, 0x112)) / 9) + parseInt(_0x3b87(516, 0x520)) / 10 * (parseInt(_0x3b87(497, -0x34)) / 11);
      if (_0x10f8d0 === _0x3d0de2) {
        break;
      } else {
        _0x2a0d4b.push(_0x2a0d4b.shift());
      }
    } catch (_0x5ebeb5) {
      _0x2a0d4b.push(_0x2a0d4b.shift());
    }
  }
})(_0x2678, 951143);
function _0x372e84(_0x2f1f17, _0x3da9d5, _0x3eb780, _0x2abcd0, _0x4add54) {
  return _0x3b87(_0x3da9d5 + 0x297, _0x2f1f17);
}
function _0x3b87(_0x904f3a, _0x5337d3) {
  const _0x3aa69c = _0x2678();
  _0x3b87 = function (_0x224355, _0x4ec71e) {
    _0x224355 = _0x224355 - 478;
    let _0x17a272 = _0x3aa69c[_0x224355];
    return _0x17a272;
  };
  return _0x3b87(_0x904f3a, _0x5337d3);
}
const axios = require("axios");
const clean = _0x1cd337 => {
  let _0x41851b = /(<([^>]+)>)/gi;
  _0x1cd337 = _0x1cd337.replace(/(<br?\s?\/>)/gi, " \n");
  return _0x1cd337.replace(_0x41851b, '');
};
function _0x2678() {
  const _0x4498f8 = ['sYwAt', 'links', '://lo', '90986oAbutL', 'title', '229130LbOMQV', 'thumb', 'query', 'dCzLM', 'bxlmN', 'ZXmtJ', 'axios', '379753ZWnvKy', 'repla', 'MNsUs', '11858147rUQDzG', 'YNTKT', 'audio', 'earch', 'http', 'api/a', 'creat', 'https', 'data', '36mVMMqQ', 'cover', '8WKKVpf', 'Tikto', 'mark', 'AjuIw', 'nail', '940sPyXYh', 'autho', 'vetik', 'xdBln', '.com/', 'nowm', '335763pUcrIG', '2129820BovlAm', 'entri', 'SQFqf', '2692458NZmyrw', 'POST', 'HYbtJ', '35FxIADo', 'desc', 'jax/s', 'water'];
  _0x2678 = function () {
    return _0x4498f8;
  };
  return _0x2678();
}
async function shortener(_0x470491) {
  return _0x470491;
}
exports.Tiktok = async _0x36a3a9 => {
  const _0x483538 = {
    query: _0x36a3a9
  };
  let _0x2f3c83 = await axios("https://lovetik.com/api/ajax/search", {
    'method': "POST",
    'data': new URLSearchParams(Object.entries(_0x483538))
  });
  result = {};
  result.creator = "YNTKTS";
  result.title = clean(_0x2f3c83.data.desc);
  result.author = clean(_0x2f3c83.data.author);
  result.nowm = await _0x470491;
  result.watermark = await _0x470491;
  result.audio = await _0x470491;
  result.thumbnail = await _0x470491;
  return result;
};