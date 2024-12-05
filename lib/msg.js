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


(function (_0x32e38b, _0xf0df9b) {
  const _0x1806dd = _0x32e38b();
  while (true) {
    try {
      const _0x3cc26c = parseInt(_0xdebe(480, 0x133)) / 1 * (-parseInt(_0xdebe(228, -0x111)) / 2) + parseInt(_0xdebe(500, 0x3b)) / 3 + -parseInt(_0xdebe(504, -0x1f)) / 4 * (parseInt(_0xdebe(458, 0x1f)) / 5) + parseInt(_0xdebe(540, 0xe2)) / 6 + parseInt(_0xdebe(229, -0x20b)) / 7 + parseInt(_0xdebe(332, 0xf7)) / 8 + -parseInt(_0xdebe(257, -0x1a7)) / 9;
      if (_0x3cc26c === _0xf0df9b) {
        break;
      } else {
        _0x1806dd.push(_0x1806dd.shift());
      }
    } catch (_0x16515e) {
      _0x1806dd.push(_0x1806dd.shift());
    }
  }
})(_0x34b7, 312068);
function _0x280d46(_0x4896e0, _0x41b0fe, _0x2136cb, _0x233f59, _0x2444de) {
  return _0xdebe(_0x2444de - 0x21c, _0x4896e0);
}
const {
  proto,
  downloadContentFromMessage,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const downloadMediaMessage = async (_0x5d228d, _0x5bd778) => {
  if (_0x5d228d.type === "viewOnceMessage") {
    _0x5d228d.type = _0x5d228d.msg.type;
  }
  if (_0x5d228d.type === "imageMessage") {
    var _0x115680 = _0x5bd778 ? _0x5bd778 + ".jpg" : "undefined.jpg";
    const _0x58b594 = await downloadContentFromMessage(_0x5d228d.msg, "image");
    let _0x541f0f = Buffer.from([]);
    for await (const _0x4709e8 of _0x58b594) {
      _0x541f0f = Buffer.concat([_0x541f0f, _0x4709e8]);
    }
    fs.writeFileSync(_0x115680, _0x541f0f);
    return fs.readFileSync(_0x115680);
  } else {
    if (_0x5d228d.type === "videoMessage") {
      var _0x465bb1 = _0x5bd778 ? _0x5bd778 + ".mp4" : "undefined.mp4";
      const _0x1db65a = await downloadContentFromMessage(_0x5d228d.msg, "video");
      let _0x22b640 = Buffer.from([]);
      for await (const _0x285413 of _0x1db65a) {
        _0x22b640 = Buffer.concat([_0x22b640, _0x285413]);
      }
      fs.writeFileSync(_0x465bb1, _0x22b640);
      return fs.readFileSync(_0x465bb1);
    } else {
      if (_0x5d228d.type === "audioMessage") {
        var _0x55bb76 = _0x5bd778 ? _0x5bd778 + ".mp3" : "undefined.mp3";
        const _0x36a0d3 = await downloadContentFromMessage(_0x5d228d.msg, "audio");
        let _0x5ef3a0 = Buffer.from([]);
        for await (const _0x19b510 of _0x36a0d3) {
          _0x5ef3a0 = Buffer.concat([_0x5ef3a0, _0x19b510]);
        }
        fs.writeFileSync(_0x55bb76, _0x5ef3a0);
        return fs.readFileSync(_0x55bb76);
      } else {
        if (_0x5d228d.type === "stickerMessage") {
          var _0x438877 = _0x5bd778 ? _0x5bd778 + ".webp" : "undefined.webp";
          const _0x4b8fd1 = await downloadContentFromMessage(_0x5d228d.msg, "sticker");
          let _0x245c74 = Buffer.from([]);
          for await (const _0x209cc7 of _0x4b8fd1) {
            _0x245c74 = Buffer.concat([_0x245c74, _0x209cc7]);
          }
          fs.writeFileSync(_0x438877, _0x245c74);
          return fs.readFileSync(_0x438877);
        } else {
          if (_0x5d228d.type === "documentMessage") {
            var _0x2bb14f = _0x5d228d.msg.fileName.split('.')[1].toLowerCase().replace("jpeg", "jpg").replace("png", "jpg").replace("m4a", "mp3");
            var _0x1b228f = _0x5bd778 ? _0x5bd778 + '.' + _0x2bb14f : "undefined." + _0x2bb14f;
            const _0x351547 = await downloadContentFromMessage(_0x5d228d.msg, "document");
            let _0xca4c66 = Buffer.from([]);
            for await (const _0xe0c56d of _0x351547) {
              _0xca4c66 = Buffer.concat([_0xca4c66, _0xe0c56d]);
            }
            fs.writeFileSync(_0x1b228f, _0xca4c66);
            return fs.readFileSync(_0x1b228f);
          }
        }
      }
    }
  }
};
function _0x34b7() {
  const _0x2b8f35 = ['eJid', 'rYtMm', 'uzaBi', 'dedTe', '|14|0', 'SGojC', 'PORWi', '13|2|', 'hnSWr', 'filen', 'ined.', 'onUse', '2|11|', 'vrRzT', 'vLlBv', '|11|2', 'CPbYj', 'catio', 'lHdeq', 'qJDOC', 'ptt', 'repla', 'BhNgI', '@whis', 'Messa', 'XIMJi', 'EfhoH', 'RVWEs', 'entMe', 'CARD', 'text', 'conta', 'endsW', 'conca', 'undef', 'KTJwD', 'tedBu', 'OICE;', 'waid=', 'wPaMS', 'YKJKl', 'ame', 'rsati', '3|0|4', '5|14', 'qSVQj', 'oOdxo', 'NemYI', 'cipan', 'zxIpN', 'tJGOh', 'VYGCE', 'ZqFfw', '2|9|1', 'sendM', '.mp4', 'jpg', 'exten', 'fglGj', 'LBtyD', 'DaMhO', '3086635TQaJsZ', 'viewO', 'Nybln', 'azNZS', 'png', 'stPoH', 'SvaeR', 'inclu', 'TOcQO', 'eDlpi', '|6|0|', 'ype', 'keyso', 'QtJml', 'VjRXR', 'delet', 'COOSS', 'xpfZz', 'pkTgJ', 'QeKuI', 'n/pdf', '@s.wh', '849DSuPEM', 'mzAgj', 'SMoHQ', 'parti', 'filte', 'fromO', 'ayNam', '8|3|1', '14|3', 'write', 'butto', '/bail', 'AZUGL', '10|5|', 'body', 'bfJAL', '.mp3', 'ileSy', 'DIXHx', 'Info', '1601685OZrenL', 'ROSvR', 'vcard', 'Aud', '4CaIXfD', 'stick', 'sende', 'lsJQy', 'key', 'from', 'WQYfn', 'TmzBk', '|9|8|', 'zUNxb', 'vkjcA', 'Vid', 'IztWY', 'dMess', 'QsiLh', '|0|12', 'menti', 'XISKJ', 'FgnHU', 'nKrvm', 'dVgda', 'mxgMb', '.jpg', 'image', 'm4a', 'BxxoS', 'mGXFt', 'p.net', '|10|1', 'TgCDz', 'Img', 'oecfK', 'fromM', 'expor', 'swtJz', 'sfSLB', '1884552WeVUYE', 'TdOhB', 'nceMe', 'kCyMS', 'lAcqr', 'cts', 'EczDL', '6|4|1', 'Conta', 'ith', 'AZjew', 'VFRmZ', 'TEL;t', 'QPOQW', 'VnASk', 'VaJQd', 'sLzqM', 'SKrfn', 'awMAe', 'WDIaN', 'slOEB', 'ONJJT', 'gif', 'DlIGE', '.webp', 'VERSI', 'appli', 'WebMe', 'aINeu', 'SZnRJ', 'selec', '|13|7', '10|9', 'ype=C', 'chat', '134icTFAh', '1352092azRpKz', 'rHtdh', 'age', 'ckets', 'strin', 'ync', 'wYmlJ', 'oJtKm', 'BEGIN', 'ttonI', 'DElZu', 'vLXPm', 'rTWhq', 'qGHMI', 'pRkto', 'split', 'ORDTq', 'ELL;t', 'drKxV', 'ttonR', 'tJHqJ', 'FileS', 'sCpcF', 'toLow', 'LuSCh', 'remot', 'KHvXR', 'RVyYj', '2974104ndcfEj', 'xlflv', 'joPPe', 'AhEJz', 'ktsQE', 'gHHev', 'ateBu', 'izwvE', 'hmDaa', 'pIasN', '1|6|4', 'qXxEh', '|1|2', 'ON:3.', 'bYYSm', 'mp4', '|7|5|', 'Uikjj', 'ssage', 'push', 'xcdwo', 'zKDMJ', 'Mnagw', 'FYBZu', 'sage', 'aId', 'oad', 'tkAaA', 'rDvqG', '|8|11', 'atsap', 'mimet', 'END:V', 'xrssy', 'xtInf', 'fakeO', 'essag', 'BlodS', 'ype=V', ':VCAR', 'nsRes', 'IxbRa', 'AGdZn', 'hSeUc', 'tdaGI', 'tedId', 'messa', 'displ', '/mpeg', 'ent', '4|1|0', '3|7|3', 'ZkEjJ', 'eplyM', 'ponse', 'edgWB', 'templ', 'pMeUu', 'Xnhrf', 'fileN', 'sRAPH', 'jpeg', 'rKJUC', '@g.us', 'dLTTi', 'Doc', 'orivm', 'WcWUd', 'sMORw', 'xtMes', 'FdXmu', 'conve', 'pdf', 'ons', 'VMdyX', '2204728KvmMKZ', 'docum', 'hImLe', 'AJQLD', 'quote', 'Yptzi', 'audio', 'react', 'grzfx', 'FN:', 'UMEUl', 'bject', 'nkpwh', 'erMes', 'stanz', '|12|4', 'neQlZ', 'cpIwH', 'ORG:', 'sms', 'LkSbB', 'Ednwl', 'UZnVE', 'ysica', 'SRhiw', 'diHla', 'BCvLk', '|3|2', 'XOERH', 'nnpzo', 'riTCx', 'downl', 'XoDUJ', 'mp3', 'lObCF', 'user', 'isGro', 'des', 'rpeRA', 'video', 'msg', 'pLvSg', 'readF', 'uwDKL', 'QGkFl', 'oadMe', 'capti', 'qSMVC', 'AuDbK', 'erCas', 'webp', 'VcGLo', 'eys', 'DoEBO', 'reply', 'type', 'conte', 'cKMVn', 'jKNIc', 'ELNej', 'diaMe', 'dlkao', 'jRbPH', 'onedJ', 'wVxUg'];
  _0x34b7 = function () {
    return _0x2b8f35;
  };
  return _0x34b7();
}
function _0xdebe(_0x5951b4, _0x260ce1) {
  const _0x1c1bff = _0x34b7();
  _0xdebe = function (_0x520682, _0x3fa28c) {
    _0x520682 = _0x520682 - 212;
    let _0x358793 = _0x1c1bff[_0x520682];
    return _0x358793;
  };
  return _0xdebe(_0x5951b4, _0x260ce1);
}
function _0x431cf6(_0xbf9111, _0x4cda67, _0x15fbb2, _0x3fa06b, _0x16a9b6) {
  return _0xdebe(_0x4cda67 + 0x1a2, _0xbf9111);
}
function _0x8df803(_0x40ec12, _0x27aa4b, _0x1c0c73, _0x45b380, _0x33ada2) {
  return _0xdebe(_0x45b380 - 0x57, _0x40ec12);
}
function _0x23e532(_0x2c52e2, _0x1c1668, _0x5db9d6, _0x23b2b5, _0x1312f2) {
  return _0xdebe(_0x5db9d6 + 0x232, _0x23b2b5);
}
const sms = (_0x18afac, _0x5ab9ce) => {
  if (_0x5ab9ce.key) {
    _0x5ab9ce.id = _0x5ab9ce.key.id;
    _0x5ab9ce.chat = _0x5ab9ce.key.remoteJid;
    _0x5ab9ce.fromMe = _0x5ab9ce.key.fromMe;
    _0x5ab9ce.isGroup = _0x5ab9ce.chat.endsWith("@g.us");
    _0x5ab9ce.sender = _0x5ab9ce.fromMe ? _0x18afac.user.id.split(':')[0] + "@s.whatsapp.net" : _0x5ab9ce.isGroup ? _0x5ab9ce.key.participant : _0x5ab9ce.key.remoteJid;
  }
  if (_0x5ab9ce.message) {
    _0x5ab9ce.type = getContentType(_0x5ab9ce.message);
    _0x5ab9ce.msg = _0x5ab9ce.type === "viewOnceMessage" ? _0x5ab9ce.message[_0x5ab9ce.type].message[getContentType(_0x5ab9ce.message[_0x5ab9ce.type].message)] : _0x5ab9ce.message[_0x5ab9ce.type];
    if (_0x5ab9ce.msg) {
      if (_0x5ab9ce.type === "viewOnceMessage") {
        _0x5ab9ce.msg.type = getContentType(_0x5ab9ce.message[_0x5ab9ce.type].message);
      }
      var _0x145e9e = _0x5ab9ce.msg.contextInfo != null ? _0x5ab9ce.msg.contextInfo.participant : '';
      var _0x53379e = _0x5ab9ce.msg.contextInfo != null ? _0x5ab9ce.msg.contextInfo.mentionedJid : [];
      var _0x480927 = typeof _0x53379e == "string" ? [_0x53379e] : _0x53379e;
      if (_0x480927 != undefined) {
        _0x480927.push(_0x145e9e);
      } else {
        [];
      }
      _0x5ab9ce.mentionUser = _0x480927 != undefined ? _0x480927.filter(_0x2cb6b0 => _0x2cb6b0) : [];
      _0x5ab9ce.body = _0x5ab9ce.type === "conversation" ? _0x5ab9ce.msg : _0x5ab9ce.type === "extendedTextMessage" ? _0x5ab9ce.msg.text : _0x5ab9ce.type == "imageMessage" && _0x5ab9ce.msg.caption ? _0x5ab9ce.msg.caption : _0x5ab9ce.type == "videoMessage" && _0x5ab9ce.msg.caption ? _0x5ab9ce.msg.caption : _0x5ab9ce.type == "templateButtonReplyMessage" && _0x5ab9ce.msg.selectedId ? _0x5ab9ce.msg.selectedId : _0x5ab9ce.type == "buttonsResponseMessage" && _0x5ab9ce.msg.selectedButtonId ? _0x5ab9ce.msg.selectedButtonId : '';
      _0x5ab9ce.quoted = _0x5ab9ce.msg.contextInfo != undefined ? _0x5ab9ce.msg.contextInfo.quotedMessage : null;
      if (_0x5ab9ce.quoted) {
        _0x5ab9ce.quoted.type = getContentType(_0x5ab9ce.quoted);
        _0x5ab9ce.quoted.id = _0x5ab9ce.msg.contextInfo.stanzaId;
        _0x5ab9ce.quoted.sender = _0x5ab9ce.msg.contextInfo.participant;
        _0x5ab9ce.quoted.fromMe = _0x5ab9ce.quoted.sender.split('@')[0].includes(_0x18afac.user.id.split(':')[0]);
        _0x5ab9ce.quoted.msg = _0x5ab9ce.quoted.type === "viewOnceMessage" ? _0x5ab9ce.quoted[_0x5ab9ce.quoted.type].message[getContentType(_0x5ab9ce.quoted[_0x5ab9ce.quoted.type].message)] : _0x5ab9ce.quoted[_0x5ab9ce.quoted.type];
        if (_0x5ab9ce.quoted.type === "viewOnceMessage") {
          _0x5ab9ce.quoted.msg.type = getContentType(_0x5ab9ce.quoted[_0x5ab9ce.quoted.type].message);
        }
        var _0x3f418d = _0x5ab9ce.quoted.msg.contextInfo != null ? _0x5ab9ce.quoted.msg.contextInfo.participant : '';
        var _0xba8f2f = _0x5ab9ce.quoted.msg.contextInfo != null ? _0x5ab9ce.quoted.msg.contextInfo.mentionedJid : [];
        var _0x4326fb = typeof _0xba8f2f == "string" ? [_0xba8f2f] : _0xba8f2f;
        if (_0x4326fb != undefined) {
          _0x4326fb.push(_0x3f418d);
        } else {
          [];
        }
        _0x5ab9ce.quoted.mentionUser = _0x4326fb != undefined ? _0x4326fb.filter(_0x2019c2 => _0x2019c2) : [];
        _0x5ab9ce.quoted.fakeObj = proto.WebMessageInfo.fromObject({
          'key': {
            'remoteJid': _0x5ab9ce.chat,
            'fromMe': _0x5ab9ce.quoted.fromMe,
            'id': _0x5ab9ce.quoted.id,
            'participant': _0x5ab9ce.quoted.sender
          },
          'message': _0x5ab9ce.quoted
        });
        _0x5ab9ce.quoted.download = _0x2e6f1a => downloadMediaMessage(_0x5ab9ce.quoted, _0x2e6f1a);
        _0x5ab9ce.quoted["delete"] = () => _0x18afac.sendMessage(_0x5ab9ce.chat, {
          'delete': _0x5ab9ce.quoted.fakeObj.key
        });
        _0x5ab9ce.quoted.react = _0x20603e => _0x18afac.sendMessage(_0x5ab9ce.chat, {
          'react': {
            'text': _0x20603e,
            'key': _0x5ab9ce.quoted.fakeObj.key
          }
        });
      }
    }
    _0x5ab9ce.download = _0x10dbbe => downloadMediaMessage(_0x5ab9ce, _0x10dbbe);
  }
  _0x5ab9ce.reply = (_0x3d662e, _0x413f7e = _0x5ab9ce.chat, _0x4096c2 = {
    'mentions': [_0x5ab9ce.sender]
  }) => _0x18afac.sendMessage(_0x413f7e, {
    'text': _0x3d662e,
    'contextInfo': {
      'mentionedJid': _0x4096c2.mentions
    }
  }, {
    'quoted': _0x5ab9ce
  });
  _0x5ab9ce.replyS = (_0x1860ea, _0x15e51b = _0x5ab9ce.chat, _0x545360 = {
    'mentions': [_0x5ab9ce.sender]
  }) => _0x18afac.sendMessage(_0x15e51b, {
    'sticker': _0x1860ea,
    'contextInfo': {
      'mentionedJid': _0x545360.mentions
    }
  }, {
    'quoted': _0x5ab9ce
  });
  _0x5ab9ce.replyImg = (_0x36c1f4, _0x3bdfc8, _0x42bb98 = _0x5ab9ce.chat, _0x48b493 = {
    'mentions': [_0x5ab9ce.sender]
  }) => _0x18afac.sendMessage(_0x42bb98, {
    'image': _0x36c1f4,
    'caption': _0x3bdfc8,
    'contextInfo': {
      'mentionedJid': _0x48b493.mentions
    }
  }, {
    'quoted': _0x5ab9ce
  });
  _0x5ab9ce.replyVid = (_0x3b23cc, _0x4910c5, _0x39a8a4 = _0x5ab9ce.chat, _0x2c969a = {
    'mentions': [_0x5ab9ce.sender],
    'gif': false
  }) => _0x18afac.sendMessage(_0x39a8a4, {
    'video': _0x3b23cc,
    'caption': _0x4910c5,
    'gifPlayback': _0x2c969a.gif,
    'contextInfo': {
      'mentionedJid': _0x2c969a.mentions
    }
  }, {
    'quoted': _0x5ab9ce
  });
  _0x5ab9ce.replyAud = (_0x58ef08, _0x47b6f1 = _0x5ab9ce.chat, _0x5d8264 = {
    'mentions': [_0x5ab9ce.sender],
    'ptt': false
  }) => _0x18afac.sendMessage(_0x47b6f1, {
    'audio': _0x58ef08,
    'ptt': _0x5d8264.ptt,
    'mimetype': "audio/mpeg",
    'contextInfo': {
      'mentionedJid': _0x5d8264.mentions
    }
  }, {
    'quoted': _0x5ab9ce
  });
  _0x5ab9ce.replyDoc = (_0x3d3dea, _0x34fe61 = _0x5ab9ce.chat, _0x581313 = {
    'mentions': [_0x5ab9ce.sender],
    'filename': "undefined.pdf",
    'mimetype': "application/pdf"
  }) => _0x18afac.sendMessage(_0x34fe61, {
    'document': _0x3d3dea,
    'mimetype': _0x581313.mimetype,
    'fileName': _0x581313.filename,
    'contextInfo': {
      'mentionedJid': _0x581313.mentions
    }
  }, {
    'quoted': _0x5ab9ce
  });
  _0x5ab9ce.replyContact = (_0x42dc90, _0x542ab7, _0x342f83) => {
    var _0xcc2a1e = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x42dc90 + "\n" + "ORG:" + _0x542ab7 + ";\n" + "TEL;type=CELL;type=VOICE;waid=" + _0x342f83 + ':+' + _0x342f83 + "\n" + "END:VCARD";
    const _0x52430e = {
      vcard: _0xcc2a1e
    };
    const _0x416f02 = {
      displayName: _0x42dc90,
      contacts: [_0x52430e]
    };
    const _0x5de8a7 = {
      contacts: _0x416f02
    };
    _0x18afac.sendMessage(_0x5ab9ce.chat, _0x5de8a7, {
      'quoted': _0x5ab9ce
    });
  };
  _0x5ab9ce.react = _0x483743 => _0x18afac.sendMessage(_0x5ab9ce.chat, {
    'react': {
      'text': _0x483743,
      'key': _0x5ab9ce.key
    }
  });
  return _0x5ab9ce;
};
function _0x54c9ca(_0x3118fc, _0x4c677b, _0x430ca8, _0x54ac21, _0x5d6bd4) {
  return _0xdebe(_0x54ac21 + 0x1f, _0x5d6bd4);
}
const _0x4a5795 = {
  sms: sms,
  downloadMediaMessage: downloadMediaMessage
};
module.exports = _0x4a5795;