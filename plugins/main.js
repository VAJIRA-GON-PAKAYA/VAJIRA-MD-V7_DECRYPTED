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



(function (_0x59976c, _0x1797ac) {
  const _0x21381f = _0x59976c();
  while (true) {
    try {
      const _0x3c95e1 = -parseInt(_0x2815(974, 0x6ac)) / 1 * (parseInt(_0x2815(544, 0x2a0)) / 2) + parseInt(_0x2815(1101, 0x9a0)) / 3 + -parseInt(_0x2815(850, -0x138)) / 4 * (-parseInt(_0x2815(214, 0x6b7)) / 5) + parseInt(_0x2815(1890, 0x850)) / 6 * (parseInt(_0x2815(426, 0x47f)) / 7) + parseInt(_0x2815(399, 0x3f)) / 8 * (parseInt(_0x2815(1299, -0x93)) / 9) + parseInt(_0x2815(1294, 0x5c1)) / 10 + -parseInt(_0x2815(856, 0x625)) / 11;
      if (_0x3c95e1 === _0x1797ac) {
        break;
      } else {
        _0x21381f.push(_0x21381f.shift());
      }
    } catch (_0x39cfaf) {
      _0x21381f.push(_0x21381f.shift());
    }
  }
})(_0x7c09, 149721);
const config = require("../settings");
const os = require('os');
const fs = require('fs');
const si = require("systeminformation");
const Levels = require("discord-xp");
const {
  cmd,
  commands
} = require("../lib/command");
const owner = JSON.parse(fs.readFileSync("./lib/owner.json"));
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  clockString,
  jsonformat
} = require("../lib/functions");
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require("../lib/database");
function genMsgId() {
  let _0x22a88e = "3EB";
  for (let _0x212863 = "3EB".length; _0x212863 < 22; _0x212863++) {
    const _0x887555 = Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length);
    _0x22a88e += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(_0x887555);
  }
  return _0x22a88e;
}
const reportedMessages = {};
const baseUrl = config.PAIR;
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
const _0x410523 = {
  pattern: "device",
  react: '🔖',
  desc: "To see device type",
  category: "main",
  use: ".device",
  filename: __filename
};
cmd(_0x410523, async (_0x54b715, _0x2cdc2b, _0x6ac4cf, {
  from: _0x2fbab9,
  prefix: _0x5d0ae1,
  l: _0x374ca4,
  quoted: _0x38819d,
  body: _0x665549,
  isCmd: _0x22bfdc,
  command: _0x576c09,
  args: _0x4767c2,
  q: _0x5140b8,
  isGroup: _0x5087be,
  sender: _0x4e1999,
  senderNumber: _0x2c4c18,
  botNumber2: _0x16ef8b,
  botNumber: _0x4fec43,
  pushname: _0x3fd734,
  isMe: _0x279751,
  isOwner: _0x4e3984,
  groupMetadata: _0x1b0de4,
  groupName: _0x4f4e54,
  participants: _0x2d60c6,
  groupAdmins: _0x4b85f9,
  isBotAdmins: _0x39e9bb,
  isAdmins: _0x17e19d,
  reply: _0x2f46d7
}) => {
  try {
    if (!_0x279751) {
      return _0x2f46d7("ℹ️ *Sorry ! This is Owner only Command..*");
    }
    if (!_0x6ac4cf.quoted) {
      return _0x2f46d7("ℹ️ *Please reply a Message...*");
    }
    if (_0x6ac4cf.quoted.id.startsWith('3A')) {
      var _0x589786 = "```";
      _0x54b715.sendMessage(_0x2fbab9, {
        'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Ios WhatsApp(i Phone)" + _0x589786,
        'mentions': [_0x6ac4cf.quoted.sender]
      });
    } else {
      if (_0x6ac4cf.quoted.id.startsWith("3EB")) {
        var _0x589786 = "```";
        _0x54b715.sendMessage(_0x2fbab9, {
          'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Web WhatsApp" + _0x589786,
          'mentions': [_0x6ac4cf.quoted.sender]
        });
      } else {
        if (_0x6ac4cf.quoted.id.startsWith("BAE")) {
          var _0x589786 = "```";
          _0x54b715.sendMessage(_0x2fbab9, {
            'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Web WhatsApp(Wiskeysockets/Baileys-WA-Web-Api)" + _0x589786,
            'mentions': [_0x6ac4cf.quoted.sender]
          });
        } else {
          if (_0x6ac4cf.quoted.id.startsWith("QUEENAMDI")) {
            var _0x589786 = "```";
            _0x54b715.sendMessage(_0x2fbab9, {
              'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Web WhatsApp(QueenAmdi-Wa-Bot)" + _0x589786,
              'mentions': [_0x6ac4cf.quoted.sender]
            });
          } else {
            if (_0x6ac4cf.quoted.id.startsWith("CYBER2")) {
              var _0x589786 = "```";
              _0x54b715.sendMessage(_0x2fbab9, {
                'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Web WhatsApp(Cyber-X-Wa-Bot)" + _0x589786,
                'mentions': [_0x6ac4cf.quoted.sender]
              });
            } else {
              if (_0x6ac4cf.quoted.id.startsWith("ZEROTWO")) {
                var _0x589786 = "```";
                _0x54b715.sendMessage(_0x2fbab9, {
                  'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Web WhatsApp(ZeroTwo-Md-Wa-Bot)" + _0x589786,
                  'mentions': [_0x6ac4cf.quoted.sender]
                });
              } else {
                var _0x589786 = "```";
                _0x54b715.sendMessage(_0x2fbab9, {
                  'text': '@' + _0x6ac4cf.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x589786 + "Android WhatsApp " + _0x589786,
                  'mentions': [_0x6ac4cf.quoted.sender]
                });
              }
            }
          }
        }
      }
    }
  } catch (_0x157759) {
    _0x2f46d7("⛔ *Error accurated !!*\n\n" + _0x157759);
    _0x374ca4(_0x157759);
  }
});
const _0x2459eb = {
  pattern: "system",
  react: "🖥️",
  alias: ["s_info"],
  desc: "To Check bot's System information",
  category: "main",
  use: ".system",
  filename: __filename
};
cmd(_0x2459eb, async (_0x1eac00, _0x29cb50, _0x4fd5c3, {
  from: _0x42fdd7,
  l: _0xb6aa6d,
  quoted: _0xf5a8a2,
  body: _0x313297,
  isCmd: _0x1ebb59,
  command: _0x27f24d,
  args: _0x2894cd,
  q: _0x35cf7d,
  isGroup: _0x2444fb,
  sender: _0x4bf08f,
  senderNumber: _0xedf456,
  botNumber2: _0x5c9243,
  botNumber: _0x59e908,
  pushname: _0x17ed1d,
  isMe: _0x29093f,
  isOwner: _0x122839,
  groupMetadata: _0x31bff6,
  groupName: _0x5406be,
  participants: _0x3968af,
  groupAdmins: _0xd4e850,
  isBotAdmins: _0x2edd39,
  isAdmins: _0xbaf47,
  reply: _0xf85bc0
}) => {
  try {
    const _0x3a75f2 = await si.cpu();
    const _0x3d0ea9 = await si.version();
    const _0x5e3f38 = os.hostname();
    let _0x22beca = await fetchJson("https://gist.github.com/VajiraTech/c4f2ac834de5c45b3a8de8e2d165f973/raw");
    const _0x505a14 = "🖥️ *VAJIRA MD SYSTEM INFO* 🖥️\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n┣🔖  _Runtime -: " + runtime(process.uptime()) + "_\n┣⏳  _Ram Usage -: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB_\n┣🚀  _Bot Version -: " + _0x22beca.version + " Stable_\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📌  *_Server System informations_*\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n┣⛊  _Platform : " + _0x5e3f38 + "_\n┣⛊  _Running OS : " + os.platform() + "_\n┣⛊  _CPU Manufacture  -: " + _0x3a75f2.manufacturer + "_\n┣⛊  _CPU Brand -: " + _0x3a75f2.brand + "_\n┣⛊  _CPU Speed -: " + _0x3a75f2.speed + "_\n┣⛊ _Engine Version -: " + _0x3d0ea9 + "_\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    const _0x4bfece = {
      text: _0x505a14
    };
    const _0xa4aae8 = {
      quoted: _0x29cb50
    };
    await _0x1eac00.sendMessage(_0x42fdd7, _0x4bfece, _0xa4aae8);
  } catch (_0x14428c) {
    _0xf85bc0("*Error !!*");
    _0xb6aa6d(_0x14428c);
  }
});
const _0x29548d = {
  pattern: 'id',
  react: '🔖',
  desc: "To take Device id",
  category: "main",
  use: ".sv",
  filename: __filename
};
cmd(_0x29548d, async (_0x5e0570, _0xd742c0, _0x477047, {
  from: _0x2c78a9,
  prefix: _0x2fc154,
  l: _0x5022b3,
  quoted: _0x29864a,
  body: _0x5406a8,
  isCmd: _0x3d9094,
  command: _0xe601ea,
  args: _0x3f1baf,
  q: _0x59bb70,
  isGroup: _0x4ee04d,
  sender: _0x278b71,
  senderNumber: _0x18b551,
  botNumber2: _0x4096a9,
  botNumber: _0x4541d8,
  pushname: _0x2c2f32,
  isMe: _0x49627f,
  isOwner: _0x15b7c7,
  groupMetadata: _0x51c867,
  groupName: _0x4b0138,
  participants: _0x537a93,
  groupAdmins: _0x2b4399,
  isBotAdmins: _0x5617fd,
  isAdmins: _0xe610cf,
  reply: _0x5e1f2e
}) => {
  try {
    if (!_0x49627f) {
      return _0x5e1f2e("ℹ️ *Sorry ! This is Owner only Command..*");
    }
    if (!_0x477047.quoted) {
      return _0x5e1f2e("ℹ️ *Please reply a Message...*");
    }
    _0x5e1f2e(_0x477047.quoted.id);
  } catch (_0x32e988) {
    _0x5e1f2e("⛔ *Error accurated !!*\n\n" + _0x32e988);
    _0x5022b3(_0x32e988);
  }
});
const _0x1f87f0 = {
  pattern: 'sv',
  react: '🔖',
  desc: "To take owner number",
  category: "main",
  use: ".sv",
  filename: __filename
};
cmd(_0x1f87f0, async (_0x1adc1c, _0x292d7b, _0x574882, {
  from: _0x2bf56f,
  prefix: _0x3f8e56,
  l: _0x2f1c53,
  quoted: _0x4509eb,
  body: _0xe089d6,
  isCmd: _0x34a8d7,
  command: _0x55ce37,
  args: _0xa7136c,
  q: _0xea7b89,
  isGroup: _0x10076b,
  sender: _0x655d2,
  senderNumber: _0xcddcdf,
  botNumber2: _0x494383,
  botNumber: _0x59b47b,
  pushname: _0x1ff96f,
  isMe: _0x1e1165,
  isOwner: _0x4a4386,
  groupMetadata: _0x497b5c,
  groupName: _0x4fc52c,
  participants: _0x492016,
  groupAdmins: _0x5edc29,
  isBotAdmins: _0x3dccba,
  isAdmins: _0x4326e2,
  reply: _0x5b0c3b
}) => {
  try {
    if (_0x292d7b.reply_message && _0x292d7b.reply_message.status) {
      _0x292d7b.reply_message;
    } else {
      false;
    }
    _0x292d7b.bot.forwardOrBroadCast(_0x2bf56f, {
      'quoted': {
        'key': _0x292d7b.key
      }
    });
    _0x5b0c3b("*reply to whatsapp status*");
    const _0x4ba5bb = {
      text: '✅',
      key: _0x292d7b.key
    };
    const _0x5f2496 = {
      react: _0x4ba5bb
    };
    await _0x1adc1c.sendMessage(_0x2bf56f, _0x5f2496);
  } catch (_0x242240) {
    _0x5b0c3b("*Error !!*");
    _0x2f1c53(_0x242240);
  }
});
const _0x28ea25 = {};
function _0x2815(_0x2bc386, _0x1b0486) {
  const _0x153763 = _0x7c09();
  _0x2815 = function (_0x4a1c99, _0x272759) {
    _0x4a1c99 = _0x4a1c99 - 170;
    let _0xef386a = _0x153763[_0x4a1c99];
    return _0xef386a;
  };
  return _0x2815(_0x2bc386, _0x1b0486);
}
_0x28ea25.on = "body";
cmd(_0x28ea25, async (_0x36ec8a, _0x5af2d8, _0x26338d, {
  from: _0x290490,
  prefix: _0x3b0caf,
  l: _0x976c6,
  quoted: _0x599851,
  body: _0x53ad68,
  isCmd: _0x456e98,
  command: _0x53bc31,
  args: _0x4a3451,
  q: _0x2873e8,
  isGroup: _0xf65610,
  sender: _0x2a7060,
  senderNumber: _0x1da8f2,
  botNumber2: _0x42a3fc,
  botNumber: _0x288557,
  pushname: _0x49a17f,
  isMe: _0x1d8079,
  isOwner: _0x548abb,
  groupMetadata: _0x579f68,
  groupName: _0x4e97cc,
  participants: _0x49ad2d,
  groupAdmins: _0x16d84d,
  isBotAdmins: _0x490322,
  isAdmins: _0x348605,
  reply: _0x3d24ba
}) => {
  if (config.AUTO_REACT === "true") {
    const _0x40d9cf = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
    const _0x3cfe75 = _0x40d9cf[Math.floor(Math.random() * _0x40d9cf.length)];
    const _0x17f8cd = {
      text: _0x3cfe75,
      key: _0x5af2d8.key
    };
    const _0x1cb65c = {
      react: _0x17f8cd
    };
    _0x36ec8a.sendMessage(_0x290490, _0x1cb65c);
  }
});
const _0x509964 = {
  on: "text"
};
cmd(_0x509964, async (_0xe204f2, _0x429396, _0x532daa, {
  from: _0x1e4872,
  prefix: _0xbb5d4e,
  l: _0x59c50d,
  quoted: _0x4754b6,
  body: _0x297574,
  isCmd: _0x425b30,
  command: _0x753cc8,
  args: _0x2871d8,
  q: _0x4de8a2,
  isGroup: _0x7148f,
  sender: _0x3d5e27,
  senderNumber: _0x3021cb,
  botNumber2: _0x15399e,
  botNumber: _0x4cebc4,
  pushname: _0x5606d7,
  isMe: _0x658d60,
  isOwner: _0x5d6a81,
  groupMetadata: _0x51a41a,
  groupName: _0x341d04,
  participants: _0xa1fdd5,
  groupAdmins: _0x2f1327,
  isBotAdmins: _0x3b5512,
  isAdmins: _0x2afc4d,
  reply: _0x20f31f
}) => {
  const _0x436962 = await Levels.appendXp(_0x429396.sender, "RandomXP", 8);
  if (_0x436962) {
    const _0x15ae09 = await Levels.fetch(_0x429396.sender, "RandomXP");
    const _0x437b29 = _0x15ae09.level;
    var _0x21cb65 = "GOD";
    if (_0x437b29 <= 2) {
      var _0x21cb65 = "🏳Citizen";
    } else {
      if (_0x437b29 <= 4) {
        var _0x21cb65 = "👼Baby Wizard";
      } else {
        if (_0x437b29 <= 6) {
          var _0x21cb65 = "🧙‍♀️Wizard";
        } else {
          if (_0x437b29 <= 8) {
            var _0x21cb65 = "🧙‍♂️Wizard Lord";
          } else {
            if (_0x437b29 <= 10) {
              var _0x21cb65 = "🧚🏻Baby Mage";
            } else {
              if (_0x437b29 <= 12) {
                var _0x21cb65 = "🧜Mage";
              } else {
                if (_0x437b29 <= 14) {
                  var _0x21cb65 = "🧜‍♂️Master of Mage";
                } else {
                  if (_0x437b29 <= 16) {
                    var _0x21cb65 = "🌬Child of Nobel";
                  } else {
                    if (_0x437b29 <= 18) {
                      var _0x21cb65 = "❄Nobel";
                    } else {
                      if (_0x437b29 <= 20) {
                        var _0x21cb65 = "⚡Speed of Elite";
                      } else {
                        if (_0x437b29 <= 22) {
                          var _0x21cb65 = "🎭Elite";
                        } else {
                          if (_0x437b29 <= 24) {
                            var _0x21cb65 = "🥇Ace I";
                          } else {
                            if (_0x437b29 <= 26) {
                              var _0x21cb65 = "🥈Ace II";
                            } else {
                              if (_0x437b29 <= 28) {
                                var _0x21cb65 = "🥉Ace Master";
                              } else {
                                if (_0x437b29 <= 30) {
                                  var _0x21cb65 = "🎖Ace Dominator";
                                } else {
                                  if (_0x437b29 <= 32) {
                                    var _0x21cb65 = "🏅Ace Elite";
                                  } else {
                                    if (_0x437b29 <= 34) {
                                      var _0x21cb65 = "🏆Ace Supreme";
                                    } else {
                                      if (_0x437b29 <= 36) {
                                        var _0x21cb65 = "💍Supreme I";
                                      } else {
                                        if (_0x437b29 <= 38) {
                                          var _0x21cb65 = "💎Supreme Ii";
                                        } else {
                                          if (_0x437b29 <= 40) {
                                            var _0x21cb65 = "🔮Supreme Master";
                                          } else {
                                            if (_0x437b29 <= 42) {
                                              var _0x21cb65 = "🛡Legend III";
                                            } else {
                                              if (_0x437b29 <= 44) {
                                                var _0x21cb65 = "🏹Legend II";
                                              } else {
                                                if (_0x437b29 <= 46) {
                                                  var _0x21cb65 = "⚔Legend";
                                                } else {
                                                  if (_0x437b29 <= 55) {
                                                    var _0x21cb65 = "🐉Immortal";
                                                  } else {
                                                    var _0x21cb65 = "Kiddo";
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (config.LEVEL_UP_MESSAGE === "false") {
      const _0x10b2d6 = {
        url: "https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg"
      };
      await _0xe204f2.sendMessage(_0x1e4872, {
        'image': _0x10b2d6,
        'caption': "\n━━━━━༺❃༻━━━━━◇\n☱ *look at that! Someone just leveled up! ✨*\n☱ *👤 Name*: " + _0x429396.pushName + "\n☱ *🎚 Level*: " + _0x15ae09.level + "\n☱ *🛑 Exp*: " + _0x15ae09.xp + " / " + Levels.xpFor(_0x15ae09.level + 1) + "\n☱ *📍 Role*: *" + _0x21cb65 + "*\n☱ *Enjoy! 😁*━━━━━༺❃༻━━━━\n"
      }, {
        'quoted': _0x429396
      });
    }
  }
});
const _0x3ef9bc = {
  pattern: "owner",
  react: '🔖',
  desc: "To take owner number",
  category: "owner",
  use: ".ban",
  filename: __filename
};
cmd(_0x3ef9bc, async (_0x5dbaff, _0x201dc3, _0x35d31c, {
  from: _0x594f8b,
  prefix: _0x58c66e,
  l: _0x49517b,
  quoted: _0x5ccfc5,
  body: _0x5d90ad,
  isCmd: _0x3de806,
  command: _0x2f3fd6,
  args: _0xe653e5,
  q: _0x5a7bf8,
  isGroup: _0x5766a6,
  sender: _0x1b3772,
  senderNumber: _0x8c4c31,
  botNumber2: _0x3e796a,
  botNumber: _0x1391d6,
  pushname: _0xc317db,
  isMe: _0x4953c3,
  isOwner: _0x3afe74,
  groupMetadata: _0x18861f,
  groupName: _0xfe1a2,
  participants: _0x21da46,
  groupAdmins: _0x213db5,
  isBotAdmins: _0x314379,
  isAdmins: _0x563827,
  reply: _0x19ab08
}) => {
  try {
    const _0x301cdc = "BEGIN:VCARD\nVERSION:3.0\nFN:Vajira\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + owner[0] + ':+' + owner[0] + "\n" + "END:VCARD";
    const _0x32904b = {
      vcard: _0x301cdc
    };
    const _0x540c34 = {
      displayName: "Vajira",
      contacts: [_0x32904b]
    };
    let _0x188a83 = {
      'contacts': _0x540c34,
      'contextInfo': {
        'externalAdReply': {
          'title': "Vajira",
          'body': "Touch here.",
          'renderLargerThumbnail': true,
          'thumbnailUrl': '',
          'thumbnail': "https://telegra.ph/file/b714e9a697c2fd0794985.jpg",
          'mediaType': 0x2,
          'mediaUrl': '',
          'sourceUrl': "https://wa.me/+" + owner[0] + "?text=Hii bro,I am " + _0x201dc3.pushName
        }
      }
    };
    const _0x254258 = {
      quoted: _0x201dc3
    };
    return await _0x5dbaff.sendMessage(_0x594f8b, _0x188a83, _0x254258);
    const _0x4d0889 = {
      text: '✅',
      key: _0x201dc3.key
    };
    const _0x426e4c = {
      react: _0x4d0889
    };
    await _0x5dbaff.sendMessage(_0x594f8b, _0x426e4c);
  } catch (_0x7f959f) {
    _0x19ab08("*Error !!*");
    _0x49517b(_0x7f959f);
  }
});
const _0x5448dc = {
  pattern: "menu2",
  react: '📂',
  alias: ["help"],
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(_0x5448dc, async (_0xbab0ff, _0xa2e64a, _0x273ec2, {
  from: _0x3612fe,
  l: _0x67b18,
  quoted: _0x5b8f59,
  body: _0x343638,
  isCmd: _0x3c9227,
  command: _0x1973ec,
  args: _0x326e49,
  q: _0x13da49,
  isGroup: _0x3ec40d,
  sender: _0xb93c29,
  senderNumber: _0x1658d5,
  botNumber2: _0x52c5db,
  botNumber: _0x352b99,
  pushname: _0x6c1782,
  isSachintha: _0x41a5e9,
  isSavi: _0x3f5e7d,
  isSadas: _0xf083c7,
  isMani: _0xa10405,
  isMe: _0x2b5a0b,
  isOwner: _0x43ee5c,
  groupMetadata: _0x49630d,
  groupName: _0x40f94d,
  participants: _0x1a9b89,
  groupAdmins: _0x196041,
  isBotAdmins: _0x3b5bc0,
  isAdmins: _0x95f90,
  reply: _0xb3e533
}) => {
  try {
    let _0x5e4737 = '';
    for (let _0xdc09cc = 0; _0xdc09cc < commands.length; _0xdc09cc++) {
      if (commands[_0xdc09cc].category === "download") {
        if (!commands[_0xdc09cc].dontAddCommandList) {
          _0x5e4737 += "*│►* ." + commands[_0xdc09cc].pattern + "\n";
        }
      }
    }
    ;
    let _0x281b94 = '';
    for (let _0x194761 = 0; _0x194761 < commands.length; _0x194761++) {
      if (commands[_0x194761].category === "search") {
        if (!commands[_0x194761].dontAddCommandList) {
          _0x281b94 += "*│⩥* ." + commands[_0x194761].pattern + "\n";
        }
      }
    }
    ;
    let _0xda9247 = '';
    for (let _0x49dae0 = 0; _0x49dae0 < commands.length; _0x49dae0++) {
      if (commands[_0x49dae0].category === "convert") {
        if (!commands[_0x49dae0].dontAddCommandList) {
          _0xda9247 += "*│►* ." + commands[_0x49dae0].pattern + "\n";
        }
      }
    }
    ;
    let _0x418876 = '';
    for (let _0x3a53e7 = 0; _0x3a53e7 < commands.length; _0x3a53e7++) {
      if (commands[_0x3a53e7].category === "logo") {
        if (!commands[_0x3a53e7].dontAddCommandList) {
          _0x418876 += "*│►* ." + commands[_0x3a53e7].pattern + "\n";
        }
      }
    }
    ;
    let _0x2a0b5b = '';
    for (let _0x3329a8 = 0; _0x3329a8 < commands.length; _0x3329a8++) {
      if (commands[_0x3329a8].category === "main") {
        if (!commands[_0x3329a8].dontAddCommandList) {
          _0x2a0b5b += "*│►* ." + commands[_0x3329a8].pattern + "\n";
        }
      }
    }
    ;
    let _0x157ccf = '';
    for (let _0x15c2ba = 0; _0x15c2ba < commands.length; _0x15c2ba++) {
      if (commands[_0x15c2ba].category === "group") {
        if (!commands[_0x15c2ba].dontAddCommandList) {
          _0x157ccf += "*│⩥* ." + commands[_0x15c2ba].pattern + "\n";
        }
      }
    }
    ;
    let _0x98be2 = '';
    for (let _0x47e96e = 0; _0x47e96e < commands.length; _0x47e96e++) {
      if (commands[_0x47e96e].category === "bug") {
        if (!commands[_0x47e96e].dontAddCommandList) {
          _0x98be2 += "*│⩥* ." + commands[_0x47e96e].pattern + "\n";
        }
      }
    }
    ;
    let _0x1b73d9 = '';
    for (let _0x33d17f = 0; _0x33d17f < commands.length; _0x33d17f++) {
      if (commands[_0x33d17f].category === "other") {
        if (!commands[_0x33d17f].dontAddCommandList) {
          _0x1b73d9 += "*│⩥* ." + commands[_0x33d17f].pattern + "\n";
        }
      }
    }
    ;
    let _0x933540 = "*Hellow👸* " + _0x6c1782 + "\n\n*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*\n*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* " + runtime(process.uptime()) + " \n*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*╰──────────●●►*\n*👸 𝘝𝘈𝘑𝘐𝘙𝘈 𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*\n*╭──────────●●►*\n*│🧙‍♂️ DOWNLOAD COMMANDS*\n*│   ───────*\n\n" + _0x5e4737 + "*╰───────────●●►*\n*╭──────────●●►*\n*│🧙‍♂️ SEARCH COMMANDS*\n*│   ───────*\n\n" + _0x281b94 + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ CONVERT COMMANDS*\n*│   ───────*\n\n" + _0xda9247 + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ LOGO COMMANDS*\n*│   ───────*\n\n" + _0x418876 + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ MAIN COMMANDS*\n*│   ───────*\n\n" + _0x2a0b5b + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ GROUP COMMANDS*\n*│   ───────*\n\n" + _0x157ccf + "*╰───────────●●►*\n\t\t       \n*╭──────────●●►*\n*│🧙‍♂️ BUG COMMANDS*\n*│   ───────*\n\n" + _0x98be2 + "*╰───────────●●►*\t\n\n*╭──────────●●►*\n*│🧙‍♂️ OTHER COMMANDS*\n*│   ───────*\n\n" + _0x1b73d9 + "*╰───────────●●►*\t\n\n👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ 👨‍💻";
    const _0x1b071b = {
      url: config.LOGO
    };
    const _0x4ef2e3 = {
      image: _0x1b071b,
      caption: _0x933540
    };
    await _0xbab0ff.sendMessage(_0x3612fe, _0x4ef2e3, {
      'quoted': _0xa2e64a,
      'messageId': genMsgId()
    });
  } catch (_0x2d8620) {
    _0xb3e533("*Error !!*");
    _0x67b18(_0x2d8620);
  }
});
const _0x2aeead = {
  pattern: "getsession",
  react: '🔖',
  desc: "To get bot session",
  category: "main",
  use: ".getsession",
  filename: __filename
};
cmd(_0x2aeead, async (_0x1b2469, _0x575b19, _0x2a8675, {
  from: _0x43d6c4,
  prefix: _0x1fa19f,
  l: _0x54cb2d,
  quoted: _0x5d56d7,
  body: _0x2551b9,
  isCmd: _0x3b8433,
  command: _0xd8be8f,
  args: _0x1484bc,
  q: _0x421f33,
  isGroup: _0x4d04dd,
  sender: _0x2390a4,
  senderNumber: _0x178872,
  botNumber2: _0x5caa93,
  botNumber: _0x1b18de,
  pushname: _0x206bd2,
  isMe: _0x1ffa7e,
  isOwner: _0x31f227,
  groupMetadata: _0x494bbd,
  groupName: _0x393aff,
  participants: _0x497388,
  groupAdmins: _0x445cbf,
  isBotAdmins: _0x421ee6,
  isAdmins: _0x27d754,
  reply: _0x559197
}) => {
  try {
    if (!_0x1ffa7e) {
      return await _0x559197(BOTOW);
    }
    _0x559197("Wait a moment, currently retrieving your session file");
    let _0x41d1f8 = fs.readFileSync("./session/creds.json");
    const _0x35a388 = {
      document: _0x41d1f8,
      mimetype: "application/json",
      fileName: "creds.json"
    };
    _0x1b2469.sendMessage(_0x575b19.chat, _0x35a388, {
      'quoted': _0x575b19
    });
    const _0x26c991 = {
      text: '✅',
      key: _0x575b19.key
    };
    const _0x1d7e91 = {
      react: _0x26c991
    };
    await _0x1b2469.sendMessage(_0x43d6c4, _0x1d7e91);
  } catch (_0x5b9eec) {
    _0x559197("*🛑 This is an owner command...*");
    _0x54cb2d(_0x5b9eec);
  }
});
const _0x1dd7a1 = {
  pattern: "delsession",
  react: '🔖',
  desc: "To delete bot session",
  category: "main",
  use: ".delsession",
  filename: __filename
};
cmd(_0x1dd7a1, async (_0xb11a89, _0xa964de, _0xaaa38e, {
  from: _0x38a423,
  prefix: _0x3f467f,
  l: _0x495dcc,
  quoted: _0x5417c4,
  body: _0x290402,
  isCmd: _0x5e5905,
  command: _0x318e6b,
  args: _0x4c530a,
  q: _0x2d6193,
  isGroup: _0x3c112c,
  sender: _0x48dff4,
  senderNumber: _0xcbc22c,
  botNumber2: _0x43914e,
  botNumber: _0x4396da,
  pushname: _0x5c086f,
  isMe: _0x1e9d34,
  isOwner: _0x12594b,
  groupMetadata: _0xc0953d,
  groupName: _0x4083f8,
  participants: _0x2a2f53,
  groupAdmins: _0x2036eb,
  isBotAdmins: _0x535644,
  isAdmins: _0x57bef1,
  reply: _0x20330f
}) => {
  try {
    if (!_0x1e9d34) {
      return await _0x20330f(BOTOW);
    }
    fs.readdir("./session", async function (_0x5f171a, _0x32dacf) {
      if (_0x5f171a) {
        console.log("Unable to scan directory: " + _0x5f171a);
        return _0x20330f("Unable to scan directory: " + _0x5f171a);
      }
      let _0x12d069 = await _0x32dacf.filter(_0x3ef290 => _0x3ef290.startsWith("pre-key") || _0x3ef290.startsWith("sender-key") || _0x3ef290.startsWith("session-") || _0x3ef290.startsWith("app-state"));
      console.log(_0x12d069.length);
      let _0x53bd1d = "Detected " + _0x12d069.length + " junk files\n\n";
      if (_0x12d069.length == 0) {
        return _0x20330f();
      }
      _0x12d069.map(function (_0x2f5fb6, _0xe9f21a) {
        _0x53bd1d += _0xe9f21a + 1 + (". " + _0x2f5fb6 + "\n");
      });
      _0x20330f();
      await sleep(2000);
      _0x20330f("Deleting junk files...");
      await _0x12d069.forEach(function (_0x3550fa) {
        fs.unlinkSync("./session/" + _0x3550fa);
      });
      await sleep(2000);
      _0x20330f("Successfully deleted all the trash in the session folder");
    });
    const _0x2ab92b = {
      text: '✅',
      key: _0xa964de.key
    };
    const _0x492113 = {
      react: _0x2ab92b
    };
    await _0xb11a89.sendMessage(_0x38a423, _0x492113);
  } catch (_0x4b7603) {
    _0x20330f("*🛑 This is an owner command...*");
    _0x495dcc(_0x4b7603);
  }
});
const _0x2ffb90 = {
  pattern: "block",
  react: '🔖',
  desc: "To block a member",
  category: "main",
  use: ".block",
  filename: __filename
};
function _0x338096(_0x429266, _0x34b160, _0x532417, _0x1bc293, _0x5df209) {
  return _0x2815(_0x532417 + 0x309, _0x5df209);
}
cmd(_0x2ffb90, async (_0x1e7ce4, _0x1ca61e, _0x12c17a, {
  from: _0x43cdc3,
  prefix: _0x2d9c6b,
  l: _0x2fe8a3,
  quoted: _0x36ed12,
  body: _0x209e90,
  isCmd: _0x4700f3,
  command: _0x382acc,
  args: _0x93634,
  q: _0x448688,
  isGroup: _0x53a032,
  sender: _0x204c16,
  senderNumber: _0x28ac9f,
  botNumber2: _0x570e62,
  botNumber: _0x2d7a9f,
  pushname: _0xf3bd49,
  isMe: _0xebba74,
  isOwner: _0x411594,
  groupMetadata: _0x1d6af9,
  groupName: _0x47d00f,
  participants: _0x1b9af3,
  groupAdmins: _0x1289e4,
  isBotAdmins: _0x41e48a,
  isAdmins: _0x1b1a4c,
  reply: _0x1a2cd2
}) => {
  try {
    if (!_0xebba74) {
      return await _0x1a2cd2(BOTOW);
    }
    let _0x856ac0 = _0x1ca61e.mentionedJid ? _0x1ca61e.mentionedJid : _0x1ca61e.quoted ? _0x1ca61e.quoted.sender : _0x448688.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x1e7ce4.updateBlockStatus(_0x856ac0, "block").then(_0x42235c => _0x1a2cd2(jsonformat(_0x42235c)))["catch"](_0x5bf309 => _0x1a2cd2(jsonformat(_0x5bf309)));
    const _0xdd8133 = {
      text: '✅',
      key: _0x1ca61e.key
    };
    const _0x545f32 = {
      react: _0xdd8133
    };
    await _0x1e7ce4.sendMessage(_0x43cdc3, _0x545f32);
  } catch (_0x3c2352) {
    _0x1a2cd2("*Error !!*");
    _0x2fe8a3(_0x3c2352);
  }
});
const _0x17cfaf = {
  pattern: "unblock",
  react: '🔖',
  desc: "To unblock a member",
  category: "main",
  use: ".unblock",
  filename: __filename
};
cmd(_0x17cfaf, async (_0x3fc2fd, _0x2689a8, _0x39a7ba, {
  from: _0x230e74,
  prefix: _0x177641,
  l: _0x619f13,
  quoted: _0x266705,
  body: _0x22b974,
  isCmd: _0x1c1022,
  command: _0x3c2deb,
  args: _0x989223,
  q: _0x24cf85,
  isGroup: _0x3aea12,
  sender: _0x3e13b3,
  senderNumber: _0x38d934,
  botNumber2: _0x3f9d53,
  botNumber: _0x4cf1f1,
  pushname: _0x25a60d,
  isMe: _0x32a8d0,
  isOwner: _0x2d0596,
  groupMetadata: _0x17cd07,
  groupName: _0x5bc498,
  participants: _0x163593,
  groupAdmins: _0x23adfd,
  isBotAdmins: _0x23453e,
  isAdmins: _0x5e3464,
  reply: _0xb1ed55
}) => {
  try {
    if (!_0x32a8d0) {
      return await _0xb1ed55(BOTOW);
    }
    let _0x2e6d38 = _0x2689a8.mentionedJid ? _0x2689a8.mentionedJid : _0x2689a8.quoted ? _0x2689a8.quoted.sender : _0x24cf85.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x3fc2fd.updateBlockStatus(_0x2e6d38, "unblock").then(_0x4df5b5 => _0xb1ed55(jsonformat(_0x4df5b5)))["catch"](_0xd5e7ee => _0xb1ed55(jsonformat(_0xd5e7ee)));
    const _0x28a25d = {
      text: '✅',
      key: _0x2689a8.key
    };
    const _0x2f0052 = {
      react: _0x28a25d
    };
    await _0x3fc2fd.sendMessage(_0x230e74, _0x2f0052);
  } catch (_0x12834a) {
    _0xb1ed55("*🛑 This is an owner command...*");
    _0x619f13(_0x12834a);
  }
});
const _0x1c93e0 = {
  pattern: "shutdown",
  react: '⚙️',
  desc: "To shutdown the bot",
  category: '',
  use: ".shutdown",
  filename: __filename
};
function _0x46721d(_0x355d8a, _0x2642ed, _0xe4fa18, _0x50889c, _0x525414) {
  return _0x2815(_0x355d8a + 0x2a3, _0xe4fa18);
}
cmd(_0x1c93e0, async (_0xb91ddd, _0x5efc73, _0x1cd401, {
  from: _0x3d28ee,
  prefix: _0x4c7abd,
  l: _0x165628,
  quoted: _0x2533be,
  body: _0x3cb39a,
  isCmd: _0x2c658c,
  command: _0x3f4628,
  args: _0x1d2e38,
  q: _0x486e52,
  isGroup: _0x172caf,
  sender: _0x6db607,
  senderNumber: _0x15477e,
  botNumber2: _0x1f3293,
  botNumber: _0x3906cf,
  pushname: _0x3127cd,
  isMe: _0x50f49c,
  isOwner: _0x22ab09,
  groupMetadata: _0x3c0d20,
  groupName: _0x308b80,
  participants: _0x25268f,
  groupAdmins: _0x583d97,
  isBotAdmins: _0x54ed3a,
  isAdmins: _0x4984c8,
  reply: _0x20b566
}) => {
  try {
    if (!_0x50f49c) {
      return await _0x20b566(BOTOW);
    }
    _0x20b566("Bot shutdown few 10 seconds...");
    await sleep(10000);
    process.exit();
    const _0x3e5dbc = {
      text: '✅',
      key: _0x5efc73.key
    };
    const _0x1fd2d0 = {
      react: _0x3e5dbc
    };
    await _0xb91ddd.sendMessage(_0x3d28ee, _0x1fd2d0);
  } catch (_0x4cc118) {
    _0x20b566("*🛑 This is an owner command...*");
    _0x165628(_0x4cc118);
  }
});
const _0x56b0b9 = {
  pattern: "mode",
  react: '⚙️',
  desc: "To change mode",
  category: '',
  use: ".mode",
  filename: __filename
};
cmd(_0x56b0b9, async (_0x425c56, _0x173985, _0x27b03f, {
  from: _0x5ec4b7,
  prefix: _0x4c1d91,
  l: _0x22247c,
  quoted: _0x45e9cf,
  body: _0x363a7e,
  isCmd: _0x5169de,
  command: _0x27cc67,
  args: _0x17268d,
  q: _0x47ee81,
  isGroup: _0x5326b8,
  sender: _0x1c9802,
  senderNumber: _0x2c76ae,
  botNumber2: _0x22e3b2,
  botNumber: _0x1445b2,
  pushname: _0x221424,
  isMe: _0x238eb0,
  isOwner: _0x16288a,
  groupMetadata: _0x2357a8,
  groupName: _0x7af6af,
  participants: _0x1d4eb1,
  groupAdmins: _0x4020d6,
  isBotAdmins: _0x4997e8,
  isAdmins: _0x3f3d7c,
  reply: _0x988c9
}) => {
  try {
    if (!_0x238eb0) {
      return await _0x988c9(BOTOW);
    }
    if (_0x17268d.length < 1) {
      return _0x988c9("Example " + (_0x4c1d91 + _0x27cc67) + " public/self");
    }
    if (_0x47ee81 == "public") {
      _0x425c56["public"] = true;
      _0x988c9("SUCCESSFULLY CHANGE TO PUBLIC MODE");
    } else if (_0x47ee81 == "self") {
      _0x425c56["public"] = false;
      _0x988c9("SUCCESSFULLY CHANGE TO SELF MODE");
    }
    const _0x534547 = {
      text: '✅',
      key: _0x173985.key
    };
    const _0x59978f = {
      react: _0x534547
    };
    await _0x425c56.sendMessage(_0x5ec4b7, _0x59978f);
  } catch (_0x2d2ce9) {
    _0x988c9("*🛑 This is an owner command...*");
    _0x22247c(_0x2d2ce9);
  }
});
const _0x3714ed = {
  pattern: "self",
  react: '⚙️',
  use: ".self",
  filename: __filename
};
cmd(_0x3714ed, async (_0x3beb4d, _0x2bfa28, _0x585e0b, {
  from: _0x3fa67c,
  prefix: _0x15ad73,
  l: _0x4d881d,
  quoted: _0x344f14,
  body: _0x378786,
  isCmd: _0x79ba53,
  command: _0xb4b51b,
  args: _0x525a96,
  q: _0x1cb90c,
  isGroup: _0x402ae7,
  sender: _0x41fa1f,
  senderNumber: _0x58623b,
  botNumber2: _0x232793,
  botNumber: _0x4310b1,
  pushname: _0x42998e,
  isMe: _0x59f390,
  isOwner: _0x2d019c,
  groupMetadata: _0x14f185,
  groupName: _0x161e4d,
  participants: _0x566852,
  groupAdmins: _0x450d41,
  isBotAdmins: _0x3e48bb,
  isAdmins: _0x35508f,
  reply: _0x3f896e
}) => {
  try {
    if (!_0x59f390) {
      return await _0x3f896e(BOTOW);
    }
    _0x3beb4d["public"] = false;
    _0x3f896e("*Successful in Changing To Self Usage*");
    const _0x20482b = {
      text: '✅',
      key: _0x2bfa28.key
    };
    const _0x207e9d = {
      react: _0x20482b
    };
    await _0x3beb4d.sendMessage(_0x3fa67c, _0x207e9d);
  } catch (_0x4cd28f) {
    _0x3f896e("*🛑 This is an owner command...*");
    _0x4d881d(_0x4cd28f);
  }
});
const _0x6542be = {
  pattern: "public",
  react: '⚙️',
  use: ".self",
  filename: __filename
};
cmd(_0x6542be, async (_0x39e46a, _0x271cb3, _0x53c63c, {
  from: _0x479bb0,
  prefix: _0x48ac13,
  l: _0xfeb091,
  quoted: _0xb975de,
  body: _0x52c493,
  isCmd: _0x32caf4,
  command: _0x4c081a,
  args: _0x22253b,
  q: _0x3e1317,
  isGroup: _0x2cc44a,
  sender: _0xab5b7a,
  senderNumber: _0x1ff6c7,
  botNumber2: _0x17cf96,
  botNumber: _0x23894a,
  pushname: _0x8d7342,
  isMe: _0x131327,
  isOwner: _0x81e9ad,
  groupMetadata: _0x57db47,
  groupName: _0x1b6d54,
  participants: _0x4085fa,
  groupAdmins: _0x20b298,
  isBotAdmins: _0x4e4300,
  isAdmins: _0x5a9887,
  reply: _0x3f46f9
}) => {
  try {
    if (!_0x131327) {
      return await _0x3f46f9(BOTOW);
    }
    _0x39e46a["public"] = true;
    _0x3f46f9("*Successful in Changing To Public Usage*");
    const _0x289350 = {
      text: '✅',
      key: _0x271cb3.key
    };
    const _0x43884b = {
      react: _0x289350
    };
    await _0x39e46a.sendMessage(_0x479bb0, _0x43884b);
  } catch (_0x4cc384) {
    _0x3f46f9("*🛑 This is an owner command...*");
    _0xfeb091(_0x4cc384);
  }
});
const _0xd6dde5 = {
  pattern: "request",
  react: '🔖',
  desc: "Contact to bot owner",
  category: "main",
  use: ".rsquest2",
  filename: __filename
};
cmd(_0xd6dde5, async (_0x565435, _0x5c5df2, _0x3f2cd6, {
  from: _0x13bef0,
  prefix: _0x4dc004,
  l: _0x100f86,
  quoted: _0x10f757,
  body: _0x164c96,
  isCmd: _0x3593b0,
  command: _0xa49879,
  args: _0x321396,
  q: _0x482f7e,
  isGroup: _0x4c753a,
  sender: _0x1e5f57,
  senderNumber: _0x1269d9,
  botNumber2: _0x143944,
  botNumber: _0x56ebbc,
  pushname: _0x1c13b7,
  isMe: _0x17dea4,
  isOwner: _0xe5df94,
  groupMetadata: _0x5b3e08,
  groupName: _0x569103,
  participants: _0x300eba,
  groupAdmins: _0x9a0c37,
  isBotAdmins: _0x4f1805,
  isAdmins: _0x4bd80f,
  reply: _0x44ab05
}) => {
  try {
    if (!_0x482f7e) {
      return _0x5c5df2.reply("Example: " + (_0x4dc004 + _0xa49879) + " hi vajira play command is not working");
    }
    var _0x2959ff = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
    const _0x4d9138 = {
      text: "ꜱᴇɴᴅɪɴɢ..."
    };
    let {
      key: _0x4c3292
    } = await _0x565435.sendMessage(_0x13bef0, _0x4d9138);
    for (let _0x29a5ed = 0; _0x29a5ed < _0x2959ff.length; _0x29a5ed++) {
      const _0x40d79a = {
        text: _0x2959ff[_0x29a5ed],
        edit: _0x4c3292
      };
      await _0x565435.sendMessage(_0x13bef0, _0x40d79a);
    }
    const _0x43bb54 = _0x5c5df2.key.id;
    if (reportedMessages[_0x43bb54]) {
      return _0x5c5df2.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }
    reportedMessages[_0x43bb54] = true;
    const _0x5739dc = "\n\n*User*: @" + _0x3f2cd6.sender.split('@')[0] + "\n*Request/Bug*: " + _0x482f7e;
    _0x565435.sendMessage("94711453361@s.whatsapp.net", {
      'text': "*| REQUEST/BUG |*" + _0x5739dc,
      'mentions': [_0x5c5df2.sender]
    }, {
      'quoted': _0x5c5df2
    });
    _0x5c5df2.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");
    const _0x58c7e0 = {
      text: '✅',
      key: _0x5c5df2.key
    };
    const _0x283daf = {
      react: _0x58c7e0
    };
    await _0x565435.sendMessage(_0x13bef0, _0x283daf);
  } catch (_0x4319e2) {
    _0x44ab05("*Error !!*");
    _0x100f86(_0x4319e2);
  }
});
const _0x3ae325 = {
  pattern: "request2",
  react: '⚙️',
  desc: "Contact to bot owner",
  category: '',
  use: ".request",
  filename: __filename
};
cmd(_0x3ae325, async (_0x4b7291, _0x5751f3, _0x578e5f, {
  from: _0x32b378,
  l: _0x50a3ca,
  prefix: _0x57bf6f,
  quoted: _0x1e1674,
  body: _0x2474bb,
  isCmd: _0x1530f6,
  command: _0x1bcacf,
  args: _0x15cd6f,
  q: _0x862367,
  isGroup: _0x31f60b,
  sender: _0x5d56de,
  senderNumber: _0x5bdcb2,
  botNumber2: _0x23a004,
  botNumber: _0x34f1d5,
  pushname: _0x27c4fc,
  isMe: _0xb72b2e,
  isOwner: _0x346075,
  groupMetadata: _0x4de5d6,
  groupName: _0x2de3de,
  participants: _0x569c4b,
  groupAdmins: _0x3514cb,
  isBotAdmins: _0x59568c,
  isAdmins: _0x2b9307,
  reply: _0x57d4f3
}) => {
  try {
    var _0x4528e8 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
    const _0x12da96 = {
      text: "ꜱᴇɴᴅɪɴɢ..."
    };
    let {
      key: _0x164a98
    } = await _0x4b7291.sendMessage(_0x32b378, _0x12da96);
    for (let _0x17b52d = 0; _0x17b52d < _0x4528e8.length; _0x17b52d++) {
      const _0x5aa803 = {
        text: _0x4528e8[_0x17b52d],
        edit: _0x164a98
      };
      await _0x4b7291.sendMessage(_0x32b378, _0x5aa803);
    }
    await _0x4b7291.sendMessage("94719199757@s.whatsapp.net", {
      'text': "*Bug Report From:* wa.me/" + _0x5751f3.sender.split('@')[0] + "\n\n*Bug Report*\n" + (_0x862367 ? _0x862367 : "blank")
    });
    const _0x1658f7 = {
      text: '✅',
      key: _0x5751f3.key
    };
    const _0x5693cc = {
      react: _0x1658f7
    };
    await _0x4b7291.sendMessage(_0x32b378, _0x5693cc);
  } catch (_0x14eccc) {
    _0x57d4f3("🛑 This is an owner command...");
    _0x50a3ca(_0x14eccc);
  }
});
const _0x2b7dde = {
  pattern: "setbotbio",
  react: '⚙️',
  desc: "To change bot number bio",
  category: '',
  use: ".setbotbio",
  filename: __filename
};
function _0x4040be(_0x4f3f40, _0x19be8f, _0xcac546, _0x161857, _0x2c48e6) {
  return _0x2815(_0xcac546 + 0x2d1, _0x2c48e6);
}
cmd(_0x2b7dde, async (_0x276553, _0x467098, _0x478c02, {
  from: _0xb7cb8b,
  prefix: _0x197947,
  l: _0xc3b60d,
  quoted: _0x3f4c82,
  body: _0x8f4179,
  isCmd: _0x290892,
  command: _0x58a3e6,
  args: _0x9232ef,
  q: _0x5098b2,
  isGroup: _0x4ba3f8,
  sender: _0x36c16a,
  senderNumber: _0x250e39,
  botNumber2: _0xbc29a,
  botNumber: _0x37c859,
  pushname: _0x4eb48b,
  isMe: _0x1eeda0,
  isOwner: _0x4d067c,
  groupMetadata: _0x1c6ed2,
  groupName: _0x30660a,
  participants: _0x477d6c,
  groupAdmins: _0x29850e,
  isBotAdmins: _0x381a09,
  isAdmins: _0x3252fd,
  reply: _0x371366
}) => {
  try {
    if (!_0x1eeda0) {
      return await _0x371366(BOTOW);
    }
    if (!_0x5098b2) {
      return _0x371366("Where is the text?\nExample: " + (_0x197947 + _0x58a3e6) + " izumi Bot");
    }
    await _0x276553.updateProfileStatus(_0x5098b2);
    _0x371366("Success in changing the bio of bot's number");
    const _0x5dbc6a = {
      text: '✅',
      key: _0x467098.key
    };
    const _0x53fa81 = {
      react: _0x5dbc6a
    };
    await _0x276553.sendMessage(_0xb7cb8b, _0x53fa81);
  } catch (_0x5cb7be) {
    _0x371366("*🛑 This is an owner command...*");
    _0xc3b60d(_0x5cb7be);
  }
});
const _0x181678 = {
  pattern: "alive",
  react: "👨‍💻",
  alias: ["online", "test", "bot"],
  desc: "Check bot online or no.",
  category: "main",
  use: ".alive",
  filename: __filename
};
cmd(_0x181678, async (_0x4e3f41, _0x34d656, _0x583bc2, {
  from: _0x490dfd,
  prefix: _0x1524fe,
  l: _0x520756,
  quoted: _0x3c5e93,
  body: _0x22e81f,
  isCmd: _0x2ff017,
  command: _0x1c3e87,
  args: _0xaa6ee1,
  q: _0x101eb6,
  isGroup: _0xdd9344,
  sender: _0x53e63b,
  senderNumber: _0x5b23,
  botNumber2: _0x34c951,
  botNumber: _0x11b4de,
  pushname: _0x500e3c,
  isMe: _0x36f592,
  isOwner: _0x25d07c,
  groupMetadata: _0x17f03e,
  groupName: _0xf9034e,
  participants: _0x58565f,
  groupAdmins: _0x5022f1,
  isBotAdmins: _0x1a2dba,
  isAdmins: _0x3e3e19,
  reply: _0x580869
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    var _0x3685d7 = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x26fee7 = {
      text: ''
    };
    let {
      key: _0x5b514c
    } = await _0x4e3f41.sendMessage(_0x490dfd, _0x26fee7);
    for (let _0x3a1f54 = 0; _0x3a1f54 < _0x3685d7.length; _0x3a1f54++) {
      const _0x64486c = {
        text: _0x3685d7[_0x3a1f54],
        edit: _0x5b514c
      };
      await _0x4e3f41.sendMessage(_0x490dfd, _0x64486c);
    }
    const _0x4e5be7 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x1524fe + "menu",
        'description': "COMMANDS MENU"
      }, {
        'title': '2',
        'rowId': _0x1524fe + "ping",
        'description': "VAJIRA-MD SPEED"
      }]
    }];
    const _0x12f28b = {
      url: config.LOGO
    };
    const _0x2748a3 = {
      'caption': "```👋 කොහිමද " + _0x500e3c + " I'm alive now" + "```" + "\n    \n*🚀Version:* " + require("../package.json").version + "\n*⌛Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*🕒Runtime:* " + runtime(process.uptime()) + "\n*📍Platform:* " + hostname + "\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n                    \n*🌻Have A Nice Day..*🌻",
      'image': _0x12f28b,
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x4e5be7
    };
    const _0x3e08c8 = {
      quoted: _0x34d656
    };
    return await _0x4e3f41.replyList(_0x490dfd, _0x2748a3, _0x3e08c8);
  } catch (_0x270638) {
    _0x580869("*ERROR !!*");
    _0x520756(_0x270638);
  }
});
const _0x24baa3 = {
  pattern: "ping",
  react: '📟',
  alias: ["speed"],
  desc: "Check bot's ping",
  category: "main",
  use: ".ping",
  filename: __filename
};
cmd(_0x24baa3, async (_0x4876d3, _0x322797, _0x2f881f, {
  from: _0x4808c5,
  l: _0x5d8525,
  quoted: _0xbcc388,
  body: _0x17e44d,
  isCmd: _0x5c1794,
  command: _0x496c15,
  args: _0x44278a,
  q: _0x2ca1ab,
  isGroup: _0x44121f,
  sender: _0xe53c3a,
  senderNumber: _0x2a9dbc,
  botNumber2: _0x229f79,
  botNumber: _0x4a5453,
  pushname: _0x524bb1,
  isMe: _0x378148,
  isOwner: _0x32c665,
  groupMetadata: _0x12f745,
  groupName: _0x1ff2b2,
  participants: _0x13cee3,
  groupAdmins: _0x2e87a8,
  isBotAdmins: _0x47d0e0,
  isAdmins: _0x5b8090,
  reply: _0x1f8d6a
}) => {
  try {
    var _0x266372 = new Date().getTime();
    const _0x527b4a = {
      text: "```Pinging To QUEEN-IZUMI-MD!!!```"
    };
    const _0x246693 = {
      quoted: _0x322797
    };
    let _0x5dabfa = await _0x4876d3.sendMessage(_0x4808c5, _0x527b4a, _0x246693);
    var _0x36ccde = new Date().getTime();
    return await _0x4876d3.edite(_0x5dabfa, "*Pong*\n *" + (_0x36ccde - _0x266372) + " ms* ");
  } catch (_0x55083a) {
    _0x1f8d6a("*Error !!*");
    _0x5d8525(_0x55083a);
  }
});
const _0x1632af = {
  pattern: "menu",
  react: "👨‍💻",
  alias: ["panel", "help", "commands"],
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(_0x1632af, async (_0x32a275, _0x5a7014, _0x2e8096, {
  from: _0x39528b,
  prefix: _0x5d0d1a,
  l: _0x1d99be,
  quoted: _0x5123c0,
  body: _0x54c388,
  isCmd: _0x38dbf8,
  command: _0xf01c96,
  args: _0x215ae2,
  q: _0x5303a8,
  isGroup: _0x25c2f4,
  sender: _0x3c5272,
  senderNumber: _0x1bfbd6,
  botNumber2: _0x41a424,
  botNumber: _0xdbae96,
  pushname: _0x480be3,
  isMe: _0x5ef573,
  isOwner: _0x293d74,
  groupMetadata: _0x22e398,
  groupName: _0x14a7ef,
  participants: _0x11d942,
  groupAdmins: _0x42fc56,
  isBotAdmins: _0x5b0edd,
  isAdmins: _0xdb5101,
  reply: _0x2a05e6
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    var _0x2d67df = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x5dd1e0 = {
      text: ''
    };
    let {
      key: _0x59ccff
    } = await _0x32a275.sendMessage(_0x39528b, _0x5dd1e0);
    for (let _0x3d6834 = 0; _0x3d6834 < _0x2d67df.length; _0x3d6834++) {
      const _0x338d24 = {
        text: _0x2d67df[_0x3d6834],
        edit: _0x59ccff
      };
      await _0x32a275.sendMessage(_0x39528b, _0x338d24);
    }
    const _0x592936 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x5d0d1a + "downmenu",
        'description': "Downloader Commands"
      }, {
        'title': '2',
        'rowId': _0x5d0d1a + "searchmenu",
        'description': "Search Commands"
      }, {
        'title': '3',
        'rowId': _0x5d0d1a + "convertmenu",
        'description': "Converter Commands"
      }, {
        'title': '4',
        'rowId': _0x5d0d1a + "logomenu",
        'description': "Logo Commands"
      }, {
        'title': '5',
        'rowId': _0x5d0d1a + "mainmenu",
        'description': "Main Commands"
      }, {
        'title': '6',
        'rowId': _0x5d0d1a + "groupmenu",
        'description': "Group Commands"
      }, {
        'title': '7',
        'rowId': _0x5d0d1a + "bugmenu",
        'description': "Bug commands"
      }, {
        'title': '8',
        'rowId': _0x5d0d1a + "othermenu",
        'description': "Other commands"
      }]
    }];
    const _0x87bac7 = {
      url: config.LOGO
    };
    const _0x5669d8 = {
      'caption': "❖──👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻──❖\n\n╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖\n│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* " + require("../package.json").version + "\n│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* " + runtime(process.uptime()) + "\n│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* " + hostname + "\n╰━━━━━━━━━━━━━━━┈⊷",
      'image': _0x87bac7,
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x592936
    };
    const _0x310813 = {
      quoted: _0x5a7014
    };
    return await _0x32a275.replyList(_0x39528b, _0x5669d8, _0x310813);
  } catch (_0x2237ec) {
    _0x2a05e6("*ERROR !!*");
    _0x1d99be(_0x2237ec);
  }
});
const _0x3a16dd = {};
function _0x7c09() {
  const _0x283683 = ['IXcXl', "ot bo", 'nHHYU', 'eving', "eck b", "s to ", 'JKLJa', "ting ", 'hlKFf', " CONV", 'mvRKZ', 'WTfIh', 'UZces', 'essio', "LY CH", '.mode', 'cpsYw', 'vlCbN', " Manu", 'Kpbpr', 'ecQrm', 'BcFyD', 'wWCHB', 'jZLPp', " logo", 'WrvUg', '*╰───', " a ph", 'jvJNF', 'ZHxKm', 'BhqVq', 'il,ba', 'zen', "rror ", '*give', 'other', "ghts ", 'gBVEY', 'khBmT', " To Q", 'AYJIN', 'XJvgk', 'aAZbE', 'RuPjy', 'DSonF', '⚡Spee', 'SenNC', 'BAE', 'UnAVz', '████》', 'bro,I', 'SfoLK', "ℹ️ *Pl", 'menu2', 'gvjHQ', "f you", 'Sbhta', 'XlXsF', 'WDPSi', 'mdiIk', "Bug c", './lib', 'repla', 'rsion', 'abase', 'KtcAP', "\n\n🐼Th", 'OICE;', 'ENWVD', 'mode', "o Sel", 'odNac', "\n☱ *👤", 'aWLRa', ", you", 'sCNfV', 'hriSJ', 'vxgOG', 'kjQKM', 'aVHWp', 'TIvYy', "re  -", "❖──👨‍💻 ", "e try", 'UmBSp', " here", 'LGiKj', 'bugme', 'umbna', 'no.', "𝘪𝘮𝘦 -", "id Wh", 'eBloc', "ɪᴄᴀʟ ", "\n\n   ", "Ａ - Ｍ", 'curre', 'VVrtf', 'dFHZy', 'ULLIc', "🖥️ *VA", '6z.jp', "A-MD ", 'VKUXn', 'Plott', 'vEoqe', 'ayNam', '|2|0', "r tec", 'cts', "ow👸* ", 'cdcb5', "00 Co", 'comma', 'FJeea', '.sv', "t of ", 'GscMA', 'fOJQN', "MAIN ", 'AQwsR', 'DgCtH', 'sNyqj', 'utdow', 'BurAV', "has b", 'RXWUo', "xt?\nE", "ady b", "sion ", 'GGowF', '73/ra', 'ype=C', 'fbEdL', 'MANDS', 'Kabdy', 'ZwDgU', "s.*\n*", 'title', 'oRvkM', 'Zvypl', "d -: ", "d sub", " *🚀𝙑𝙀", 'steMw', "pe of", 'bvtsg', 'panel', "ss >", 'Detec', 'OmvNK', 'forEa', 'rBFLW', "Bug E", '🧙‍♂️Wiza', 'VGIzb', 'ffiKO', "*🔢 Re", 'igvYH', 'LiWQp', "ER CO", 'BFYFA', 'xbLBe', 'FGHIJ', 'XzRsm', "Web W", 'qvJtW', 'AoFQZ', 'Uyqpt', "_\n┣⏳ ", "or mo", " numb", "*An e", 'HnKoy', 'UaNYa', 'uest/', "he bo", " edit", " COMM", "To se", "em in", "! 😁*━", "e dev", " just", 'Kiddo', 'ileSy', 'versi', "*\n☱ *", 'DVqui', "elow ", " your", "R GRO", 'YzkjU', 'aBjXk', " 🖥️\n\n━", "lete ", 'HznfF', " coun", 'KzxbH', 'direc', 'LANG', 'nkjBL', ":*  h", 'iAUjU', 'MfhEV', 'ne_nu', 'PQRST', '19975', " -: ", 'jDWMI', 'ype=V', "ᴏ ᴀɴᴅ", "it ou", "ner n", 'nclud', 'WEnZQ', 'IAEqP', "ERT C", 'GUhUR', 'WBcEt', '.forw', 'nlyCL', 'AUkcU', 'SPEED', 'HOmLg', "_MD\n\n", '10%', 'LEVEL', 'NSZZf', "ion f", 'VAJIR', 'ssion', 'udNcj', 'KTdPy', 'clxIB', 'dfWnv', 'c4f2a', "wner ", "er of", "\n☱ *🛑", 'fqwcG', " bot ", '🖥️...', 'dbgma', 'ovPba', 'PIURh', 'YFIHI', 'orwar', 'ENKTY', "NDS M", 'dHkNt', 'HRryF', 'MhfvM', 'GyAtW', 'WDRUS', 'RquYr', 'bKzhW', 'WvDor', 'vRxVl', 'b/scr', " I'm ", 'ITHUB', 'iles.', 'jlhDp', " all ", '.gets', " DOWN", 'rtal', 'capti', '👨‍💻', 'HVXfW', 'SDVBv', 'WUjfi', 'Domin', 'minut', 'grFWz', 'ABCDE', " am ", "──❖\n│", 'UIOOq', "wn fe", '.pire', 'ZRIBB', 'cumst', "m thi", "s bot", 'XEpIj', '🧚🏻Baby', 'sDhzU', 'INFO*', 'manuf', 'QUEEN', "ode r", "this ", '|0|1', 'JKhDE', 'hJbHY', 'wOWjZ', "gos &", 'zuPoV', 'atsAp', 'forma', 'YPQnK', "\n\n*Hi", 'mHOLG', 'uAJSd', 'BUmxv', 'uvwyt', "rd ms", '35rHtiOe', 'dgSwu', 'l,ban', 'Awqqe', 'repo', 'yjaRM', 'JLfBh', '█▒▒▒▒', 'addre', 'dXp', 'mimet', 'e8e2d', 'MASSA', 'iirif', 'fyLJD', 'gaQxx', "\n🐼Thi", 'uFKsx', 'OCuNd', "* VAJ", 'KUPiz', 'uAyUF', 'ybqkY', 'DaYAS', 'hldyp', "ers O", "bot i", 'feath', 'advan', 'gdwrJ', 'GUXLT', " OTHE", 'ROEQz', 'ESlWf', " play", 'gkkZM', "al cy", 'yjaKG', 'nRvaU', 'FOOTE', 'XjqPE', 'NIZYm', 'VPWoU', "r Wha", 'yanxQ', '*ᴘʟᴇᴀ', 'app-s', 'leted', 'scrip', "so, i", 'xpnds', 'gpnvj', "an be", 'ATSAP', '❃༻━━━', 'LswAD', 'eenAm', 'IubfG', 'pjSNj', 'YcIYr', 'xmYxU', "so, m", 'JGWPo', 'Kiktm', "\n\n🐼 T", " ᴏᴡɴᴇ", " app ", "e Wha", "ot re", 'vnhhJ', "the r", 'iEINQ', 'dVWee', 'pp(Ze', '.jpg', "ge: `", 'rYaKq', 'di-Wa', "me:* ", 'fTqiX', '2m.jp', 'mber>', "t! So", 'HlQNQ', "hers ", 'SJyun', 'GZBSY', "\n*⌛Me", 'List', 'gGDPu', 'devic', 'lkGmV', 'oiGbK', '.requ', "wait ", 'lpHUo', "wns t", 'EbEms', 'ame', 'conve', 'NtHJe', 'lhGih', 'JSGJx', 'mands', 'rdMes', 'down', "ange ", 'qRPOa', 'map', 'KRwWa', "ke ow", "ner M", 'a697c', 'amage', 'Fwxwl', "o Pub", 'HvEDC', 'KJnEV', 'iJSrt', "and c", 'oader', 'st.gi', "Get b", 'ikTok', 'Z0123', 'scguz', "රු හෝ", "t has", '8981i', 'MfqMl', 'logom', "=Hii ", "s. Th", 'ion', 'UEEN-', 'LNhSd', "se:* ", " <pho", 'YBtEC', 'zsfNh', 'eonXr', 'nd...', 'qkLlS', 'a/f/d', 'SfYbS', "DS ME", 'bEAKN', 'oCMOp', '🌬Chil', 'RAXTF', 'ights', 'RFumP', 'ZWzpm', " phon", "the t", " / ", 'hcLoS', " izum", 'ckage', "\n⚠️ Al", "\n╰━━━", 'Zbuhk', 'sage', "To sh", "\n☱ *l", 'QtoUU', 'PikAK', "w 10 ", '🖥️', "g:* ", 'Qugpt', "ENU*\n", 'jiraT', "ᴀʀ ᴛʜ", "u hav", " work", 'appli', 'Glojf', 'iTlSM', 'pp.ne', 'rGEmM', 'crPPX', "ꜰᴏʀ ʏ", 'FHrQc', 'aQlwJ', '1240648JzibUa', 'WDGNM', 'dSmaa', " \n*🌻H", " Role", 'KVKVD', "  උපප", '_UP_M', 'chat', 'WBJbc', " this", 'sAelq', "ᴇᴀsᴇ ", 'cPSkL', "𝘔𝘥 𝘊𝘰", 'ZIUXc', 'lgeWd', 'tsapp', 'tPjwJ', "owns ", 'zYRVd', 'WAtBq', '94985', 'ftxaN', 'sBJEI', 'type', 'onLcK', '2191lfBlVJ', 'GnnVq', 'meone', 'IrKps', "  *_S", "r !!*", "R COM", 'wbDHR', 'eopwx', 'soXlO', 'DswMx', " me m", 'UTQWy', 'ynfco', 'IMRvL', 'ydPkW', '*Pong', 'jtoiY', '.rsqu', 'YujQR', 'MPZlj', 'zFdpm', 'uHTWr', 'LvRRy', 'nZBEi', 'jmYLi', 'xHJQA', 'uXKsd', "🥈Ace ", 'SvQcN', "ꜰᴏʀ ᴀ", "!*\n\n", 'XmeiV', 'JZPxp', 'KDBEl', "e ❌*", 'ᴄʏʙᴇʀ', 'UYiXc', "code ", 'VWzAT', " Spee", 'butto', 'Wfhcz', 'jlHcR', 'r-key', 'EJBst', 'kJPKB', 'toFix', 'Tlppx', 'oAKxl', 'mqCXF', "*: *", 'aauHx', 'Bpotx', 'Conta', 'nLLUw', 'XYIzM', 'onlin', 'edite', "AD CO", "𝘭*\n*╭", '.*🌻', "led u", "ක නොව", "ork a", 'QvezO', "\n*⌛➣U", 'sTZdM', 'mpSCf', 'sUEjX', 'HBxko', 'dAYKx', 'Dttcu', "s is ", 'dygOb', 'delse', 'HttoK', 'aEZXX', "in th", 'spOYi', 'matio', "t's o", '.aliv', "t bot", "ne Ve", '.ping', 'rmati', "hard ", 'tCKaA', '.menu', 'memor', "ers t", '_mess', 'PgKLd', '*Plea', 'ZyCJu', "d fro", 'FyDNu', 'aIkmP', "𝚃𝙷𝙴 𝙾", 'mand', 'LQbGS', "\n│ *⌛", 'maPbN', "gs an", 'oad', "ur bo", "ng lo", 'EyiJy', "he te", '━━━━◇', 'jJByR', ":* ", 'COMMA', 'eJZVZ', '*🕒𝙍𝙐𝙉', 'wXRWT', '.shut', '406wyxupp', "m:* ", 'aKbUJ', 'oups,', '*Mess', 'derat', 'ile', 'SAAGv', 'roTwo', 'OWGIt', "one n", 'GbwZi', 'EqbgL', 'LwGwk', '━━━━༺', "y to ", 'tDztd', 'Enter', 'McWlq', "een f", 'Tech/', 'uCBlg', '://ch', "or !*", 'atsap', 'ᴏʀᴡᴀʀ', " feat", '─●●►*', " ────", 'hEAiZ', 'ZEgch', 'sCuQT', 'QUEST', 'wkZwb', 'RYpnn', 'CfgjG', 'Group', " The ", 'SFNvd', 'url', "take ", 'unqmk', 'zSWhP', 'KwwpV', 'Mfsut', 'ᴛᴇᴄʜɴ', "OS : ", '.devi', '!```', " _Run", 'SFFZs', '//git', "a mom", 'DJBgf', "Main ", 'react', 'UVWXY', '/owne', 'Comma', 'onse.', 'VJiwZ', 'GofGI', 'හිමික', 'Delet', "𝘜𝘴𝘦 -", 'DbOoU', 'MODE', 'cpu', 'ory', "*\n\n", 'desc', '.bloc', 'Downl', 'xJVmm', 'UgVYG', 'mJLlU', 'Touch', "MB\n*🕒", "esc :", 'lmwJY', 'wlLEh', "i Cha", '_Engi', "TO SE", 'LIogb', '@s.wh', 'UhvEE', 'SHatN', "\n*│  ", 'ber', 'CouWp', 'XgaKL', '-Bot)', 'jKSiQ', 'ELL;t', 'sjtVj', 'mPAtG', 'sage*', "_\n┣⛊ ", 'nging', 'pRVDC', 'rkZHg', 'qVcdj', 'ic/se', 'NpnaQ', " _Ram", 'DCIeF', 'IoEnX', 'JuGTg', 'ile/b', 'IGlwJ', 'a/f/k', 'MMAND', " ᴏɴ ɢ", 'ZdSCz', 'CfQUs', "rash ", 'XeUMB', 'EKpMT', 'UsLsA', 'U_API', 'floor', 'hZasr', 'txsco', "h Com", 'ANDS*', 'gQLtx', 'ᴀɴᴇʟ*', 'LOADI', 'fSsSM', 'yGMDo', " down", 'nOohV', '45.jp', "MB_\n┣", 'menti', '▒▒▒▒》', 'kSync', "hone ", "S MEN", 'LrjfQ', " alre", 'REACT', 'time', " MISS", 'roadC', "[👨‍💻 ＶＡ", "BLIC ", "ning ", '𝙋𝙇𝘼𝙏𝙁', 'HHPVN', "𝙔:* ", ".  Al", 'CYBER', 'iQzVk', 'foote', 'secti', 'block', 'GzZlw', 'dhoIW', 'fJhEw', 'Vajir', 'NqQSu', 'hmenu', 'BwLkP', 'HldeU', 'MRNpT', "es in", "This ", 'xJLOr', 'vEdZK', 's/Bai', 'ccura', " bio", 'XFQZH', '╭────', 'VOYee', 'vBNMg', 'VZdjY', 'Makkh', 'HzuAP', "* 💫\n\n", 'XjnLp', "s thi", '94711', 'XjmyR', 'factu', "𝘙𝘶𝘯 𝘛", 'orm', "𝙶 𝚁𝙴𝙿", 'VTecH', "t und", 'YrfWC', "y cir", " ʟɪsᴛ", 'a-Bot', 'ᴏɴsᴇ.', 'Ggpwe', 'resul', 'mEyiS', 'ing', '-imag', 'VJRTX', "ꜱ 👨‍💻", 'mime-', 'qtHKz', "/BUG ", '*Succ', 'nQOal', "D BUG", 'n.*', "🪩 *OU", 'BsQFo', " leve", "To Ch", 'btwPN', 'YXlCC', 'SSZsz', 'TOsYJ', 'nId', 'EkrLU', "s pin", 'hYUVU', "full ", 'AvSoc', "RT CO", '─────', 'readF', 'wFYBB', 'on-', 'TtiAB', 'nMess', 'rreTG', 'bfnID', 'repli', 'qNbix', 'omjtm', 'zIyyB', "Logo ", ", thu", 'ile/0', "ave A", "ᴀ-ᴍᴅ ", 'ddCom', "ease ", 'RPGFQ', "*Bug ", "──═❮ ", " SEAR", 'nggZU', "ිමද ", 'essag', 'IOWds', 'yTyUZ', 'YTcbJ', "  _Pl", 'IFLNf', 'gZtLI', "ply b", 'atYeK', 'est2', 'XKkrM', " junk", 'ain.l', "*\n *", " Stab", 'ons', 'shutd', '://te', "*● ══", 'owner', 'repor', 'SoTdD', "R !!*", "\n☱ *🎚", 'pvhhs', 'rDWep', 'ZjHpB', 'ORG:;', 'aWTiQ', " vide", 'b-Api', 'cyFyc', 'wcTSp', "*| RE", ':VCAR', 'ᴄᴏᴍᴍᴀ', 'cpKLx', 'NlbsJ', 'ge*', 'RsIMb', 'refor', 'MVVLQ', '.ph/f', 'hnQVI', 'aBjQY', 'ＶＡＪＩＲ', 'ZAykQ', 'syste', "\n🎡 *G", "l*: ", "*│🧙‍♂️ S", 'mOrGo', "in 1 ", "\n\n💡 V", '*VAJI', '107344egVOXJ', 'iWZEL', 'atus', "r any", "bO3\n\n", '●●●●', '5334549wGQeNR', " ways", '3j.jp', " bot", 'nShKH', 'legra', 'unlin', "r Onl", 'Check', 'LyZCO', 'pair', 'ofakk', "TO PU", "nds A", 'kStat', "r the", "LF MO", "To ch", 'zsKxn', 'ntime', 'DijCx', 'wTIRp', '8htih', '3EB', 'om/Va', "e, yo", 'Bug*:', 'amEUe', 'BCMiZ', 'UiGhG', "🏅Ace ", 'cHxtq', 'aBkVP', 'llcua', 'jrROp', "oad T", "red! ", 'iyFWm', " Usin", 'DNtin', " Bran", 'qgRUh', 'uRXsd', 'nvewy', 'mXP', 'QYnNP', 'QOFFV', 'env', 'ber-X', 'jKgAZ', " This", 'conta', 'fRcYH', 'banne', "NG ●●", "eme M", 'gyRvH', 'brand', 'umsta', 'heade', " of o", "m:* w", 'BHTao', 'AnqKk', "R BOT", 'qwMRI', 'FIjVL', 'ycOqs', "D OTH", " Comm", ". Usa", 'ZEROT', " 𝘗𝘢𝘯𝘦", "o my ", 'pXSpQ', 'jpOeT', 'folde', 'bot', 'TpRuy', " :* ", 'JsmVr', 'qFGpT', 'rd-xp', 'jfSfT', "and i", 'DBaCn', 'tbio', "rk ea", '://po', 'disco', 'JhYwD', " Mage", 'Phone', 'essfu', 'OonGT', 'OwEjY', 'RFRNj', "ve no", "To un", 'eBKtI', "100 C", 'ator', 'SkdJK', " an o", 'ZvfLE', "sier\n", "n the", "To bl", "\n\n*Us", "e wai", "JIRA ", "ANGE ", 'menu', 'DdsAo', 'MENU*', 'bcRKI', '❄Nobe', 'NtvBU', '1013orkYqu', "e to ", 'eEseG', "nd ou", "bot s", '50%', 'XaCfi', 'AcBhI', "er an", 'qBIan', 'styWe', 'searc', 'wtAjB', 'cTSlY', '⬇👨‍💻', 'mLrUi', 'ands', 'nZbbx', 'ot)', "ꜱᴇ ꜱᴛ", 'hatsA', 'Nhsir', 'docum', 'infor', '-Md-W', "Ai Ch", 'udRvV', 'fnTan', 'VnHTe', '🐉Immo', 'quote', 'nlvqh', 'ᴇᴘᴏʀᴛ', 'MDycd', "d log", " hi v", 'ocket', 'dBXtd', 'zVwOb', "🚀  _B", 'UAfNB', 'zIMwK', " futu", '*📍➣Co', "ʜᴀs ʙ", "d get", "*: ", '?text', ". Iᴛ ", 'GgKfC', 'Owner', 's_inf', 'tatus', 'rgorr', 'ytDge', 'UfBQu', 'liNVk', 'OZWQT', 'iUVKn', 'SSFUL', "e no ", 'WMSMw', 'KlRtS', 'Pleas', 'speed', 'mnPIA', '5nwt0', "r wit", "nner ", 'mainm', 'KqfOV', 'FYyNf', " Usag", 'NjaGF', 'e5c45', "ts wo", 'vOhmG', 'dOXRG', "👨‍💻 OWN", "r. Pl", " thin", "team ", 'creds', "━━\n\n📌", 'pMZwi', 'oWQmw', 'tting', 'TfOjs', 'tJIIU', "❖\n\n╭─", 'cAktB', 'start', 'lXoOd', 'ayTex', 'FLHsI', 'Nobel', 'dbNeW', 'mf2.l', 'KlGrT', "ded t", '👼Baby', 'bgBEc', "NU*\n\n", 'FGarc', '●●○○', 'AxKIm', 'iMCJn', 'yBvtk', "s not", 'c834d', "and y", 'LeSlQ', 'atfor', '𝚁𝙴𝙿𝙾𝚁', '🛡Lege', "*You ", 'image', " is O", '○○○○', 'Eflhj', 'mpZvF', 'OYiKN', "ing j", "GE > ", 'jdEuL', "STEM ", 'EaJgm', '829608YjpRiY', "e or ", 'PBeOt', "ided ", "To ta", '94719', "nd II", 'MQjfN', 'FzNol', 'exten', '../li', " _CPU", 'WmVPB', "se co", 'xTRcw', "🏆Ace ", 'tUWPn', 'IfjpN', 'ZWIaO', 'wCZUw', 'RFhCb', " Nice", "𝚃 𝚂𝙴𝙽", 'UDGeN', 'RuKGl', 'statu', 'pp(Cy', 'ber`*', "\n*Req", "━━\n┣⛊", 'ᴄʀɪᴘᴛ', 'XhQUf', '714e9', '*repl', 'ock', 'pVDIf', 'charA', 'xryQq', 'cRbmL', 'xpFor', "mit o", 'Fhfgi', 'AMDI', 'CBybm', 'WXqhe', 'NfCFl', '1tnjw', "⛔ *Er", '2fd07', 'oalOk', 'NtqkB', '45678', 'log', '𝙏𝙄𝙈𝙀:', '.self', 'VEAAY', 'parse', 'XNwim', 'Other', "ℹ️ *So", 'nGOOd', "lid p", "U*\n\n", ". The", 'WNQrL', "o the", 'STBim', 'WbOyp', "P USE", " MAIN", 'kswZU', '█████', 'WBnDC', "d by ", 'unblo', 'tory:', 'UhiaN', 'readd', 'chanc', 'IioGs', 'sZFcC', 'ZseOi', 'ast', '1|4|3', 'hZKdP', '━━┈⊷', '━༺❃༻━', 'Tʜᴀɴᴋ', 'zxMQy', '.syst', 'zJKfD', "for a", 'AJIRA', 'vLOqc', 'vhMgE', 'phMWa', 'qiAxr', "and o", "ʀ. Pʟ", 'skeys', 'Syste', 'aNnRo', " bot'", 'jcrYY', "er ", 'OVkdK', 'cZevM', 'pgrEb', 'fNcpr', 'zoONW', "ook a", 'RYhwZ', 'nnect', 'QgGmZ', " , ", 'respo', 'tDGzx', 'spons', 'Conve', '...*', 'yf.jp', 'CtiHg', 'QJZot', '/D6w6', "ing T", " Exp*", "LOGO ", "*│►* ", "ＪＩＲＡ ", 'rType', 'IOlHq', " Bot\n", 'fileN', " Day.", 'eDWEZ', " a Me", 'KikgW', 'reply', 'HtLxb', "unk f", 'WKmaH', 'OWNLO', 'YBOBN', 'occur', 'group', "tage ", 'key', 'pxIIH', 'wYLca', '8bpml', "bot n", 'feRHX', "ᴡᴀɪᴛ ", 'iIWSi', 'VgaNO', "se pr", 'VgEhb', 'FpOXb', 'ixCAt', 'vabAx', 'OgpFu', "ntly ", 'leDUY', "ets d", 'atbot', 'GvBZQ', "e -: ", 'r3.jp', 'ZtVgy', "👋 කොහ", 'filte', 'ꜱᴇɴᴅɪ', 'EGgaN', 'IBWFq', 'VsAYw', 'dpy8c', "ngs c", 'TZfAP', 'nEUqx', 'DvQvV', 'dontA', 'edOvH', "ly de", 'kQXVO', 'CzdBa', 'kzWog', 'HBGXs', "👨‍💻]\n\n ", 'sRSRp', '██▒▒》', 'sQbXk', 'gTvHZ', 'TEL;t', '1986270EZgMkB', 'XtOXX', 'qmGRg', " maki", 'rMdmG', '9hzDDAl', "h the", 'code', 'use', 'PxxFf', 'bnPyN', "  _Ru", 'platf', "ode. ", 'wkAEv', 'numbe', 'at.wh', "scan ", 'a/f/0', 'pyDMF', 'IFtql', 'රිපාල', '.ban', "_\n━━━", 'sxjTX', " a va", 'GROUP', 'LGDLT', 'ZeVoD', 'fCzQZ', 'hnAzf', 'ZXfTD', "- ＭＤ ", 'sQpxb', 'KPLiG', 'hDGqB', "res i", " resp", "𝘑𝘐𝘙𝘈 ", "e and", 'sed', 'CARD', 'pYXHv', 'RfHXl', 'a/f/h', '../pa', 'retri', 'rchin', "the b", 'RAvUs', 'NdGRo', "ct to", './ses', "══ ●*", 'dKOht', 'total', 'minfo', "\n*│🧙‍♂️ ", 'IWyeR', 'eIEff', 'ntdjZ', 'RcOJZ', 'AKbLo', " publ", 'aAaNi', "  *Is", "●●►*\n", 'dDmOU', "ams h", 'sIYpN', 'omFJC', "ts ri", 'PAIR', 'bdRLc', "ng gr", "\n*│🕵️‍♂️ ", "* ❯═─", 'ileSt', "rd Lo", 'wqioe', 'CONVE', 'pXvRI', 'YKIaw', "     ", 'Andro', 'YWeFe', "g Rep", "ʙᴏᴛ ꜱ", 'gTeLP', 'PsrXe', 'AZGIC', 'tmJhU', 'Chang', 'OWrFj', 'p.com', 'anagi', "l in ", 'uMEie', 'AcSGT', 'AME', 'zUbdh', 'yYOpy', '7p5nr', 'Maste', 'bloxI', "aker ", 'xsfQd', 'jvxye', 'FFqos', '.json', 'filen', 'b/fun', 'QEPht', 'jqvua', 'ybHeA', "ard <", 'jHZHN', " file", "*│🧙‍♂️ B", "ds An", "rry !", "g for", '*ᴍᴇɴᴜ', 'Xlwlw', 'GPrPt', 'RA-MD', 'BvouN', 'oIRix', 'oimdh', 'forwa', 'ESSAG', "LOAD ", "le: ", " And ", '1a6ad', "t Fro", 'esult', 'RYwSF', "──*\n\n", "ᴏ ᴛʜᴇ", "l cyb", "𝙳 𝚃𝙾 ", 'UKVtl', 'ThTCX', 'xampl', " Name", 'alias', 'eProf', 'iNyqv', 'hp7Mm', 'downl', 'IZUMI', 'ovide', 'QcjkP', 'updat', 'self', "───*\n", "\n│ *📍", 'RRVtm', "CH CO", 'et.jp', "JIRA\n", '*ERRO', "ot's ", '../se', 'rHiBQ', 'rdOrB', '🧜Mage', 'nxPUu', "t.\n\n\n", "ss in", 'RdOGM', 'VnMXh', '*Erro', "ed.\n\n", 'actur', 'Symgq', 'hatsa', 'eoJtg', '://gi', "tbot ", "o, th", 'NJgGU', 'avRpd', 'WfgnR', 'zXOZv', 'help', 'fhbCW', "in ho", 'Brlyw', '30%', 'alive', 'herok', 'tionM', 'XCAAJ', '🎭Elit', 'ROJSw', 'Examp', 'EwbRa', 'YsPNP', 'Searc', 'HSPxZ', '45336', 'DhmDY', 'rando', 'vIzJc', " Leve", 'rfTOv', 'DoGOB', "lic U", 'true', 'Unabl', 'aJsNA', 'BeoHj', 'ggFoz', 'DTRjn', 'WFGSc', 'LOGO', 'JNXhC', 'SIRcR', 'EniQO', 'YfYjB', 'thub.', 'GOD', 'DnTpf', 'SLQGE', 'wGbUn', 'zxqYr', 'bamnu', "MD WH", "►*\n*╭", '𝘮𝘮𝘢𝘮𝘥', 'Where', 'chnic', 'hCOEA', 'umber', 'sNDgj', '🏹Lege', '://wa', 'YVbVE', 'yYiba', "  *VA", " comm", 'EXUsU', "\n\n*Bu", 'ɪᴛʜᴜʙ', 'own', 'st2', 'ajira', 'svgww', 'UIhxm', 'zwiUI', '80%', 'main', 'bHSDn', " and ", 'OOCky', "r bot", 'XPmGi', 'secon', 'ᴠᴀᴊɪʀ', 'AtSuA', 'XiahM', "UG CO", 'iogaq', 'MGGms', 'XphcS', 'EJRlT', 'categ', "ner c", 'paBZd', "age f", "our t", '──●●►', 'OquHS', 'HEROK', 'Dgjae', '▒▒▒▒▒', 'JBjvz', "m inf", 'lnnhS', 'YbbzF', 'aWOUv', 'nGVqd', 'MfayG', 'CfpLH', 'vkvoA', "uest ", 'HDyxf', " ms* ", 'NmyCE', 'iLzCq', 'XYQOH', '7@s.w', 'hostn', 'EFOua', 'sWith', "ake i", "*\n*│🧙‍♂️", 'chang', 'oYOzH', 'ttMFm', 'ELMtL', " now", " 𝘙𝘢𝘮 ", 'EARCH', 'mlqIJ', 'reque', 'jlQCu', 'ptwwf', 'right', 'mmand', 'Elite', 'HLSqN', "o:*\n\n", '```Pi', "of th", 'fetch', 'YIIMQ', "r req", 'rGIUf', " chan", "r Bot", 'b3a8d', "only ", 'publi', "are n", "ION*\n", 'otbio', 'nsukM', 'ndoDy', 'lVnHW', "s\n\n", 'kXlAT', "e: ", 'orKcG', 'kFgjD', 'sEZdQ', " diff", 'sjrHV', "ɪʀᴀ ᴍ", "bers ", "*No r", " subm", 'AesVx', 'QRjCW', '────*', 'fKLNV', 'downm', 'amfdc', "s num", 'vuSCo', "e\n\n", "S*\n*│", '═════', " *OUR", 'IXuYm', 'ubzVG', 'UuYjQ', 'WA-We', 'uptim', 'aELYb', "UR RE", 'TLFEA', "app s", 'xqpfK', 'p.net', 'hNHtO', 'a/f/6', '5.jpg', 'iUMQo', 'waid=', 'OIHVe', "ands ", 'nsibi', 'ɴɢ...', "\n*📃➣D", "nces ", "le_\n━", "  \n*╭", 'FMfpu', "ᴇᴇɴ ꜰ", 'cJEGc', 'Repor', "𝚆𝙽𝙴𝚁 ", 'ist', 'lDwGr', 'st.', "vice ", "On Ou", 'text', 'LLckn', "try c", "Ios W", 'gfyHr', 'PmVbN', "and m", "s And", 'OCJhh', "MB / ", 'RqQwU', 'nBLcB', "io of", 'opluZ', 'https', 'NWLQQ', 'YzHEd', 'ariou', 'FMiwJ', 'fWuMt', 'vPZcF', '━━━━━', '🧙‍♀️Wiza', '`COMP', "MB\n│ ", 'Sgsus', 'hWQsw', 'nWJAt', " more", 'mRGej', 'blank', 'ON:3.', "le: 9", 'mandL', 'simpl', "《 █▒▒", 'AxZgB', 'uwdsG', 'END:V', 'aHWZs', "*🛑 Th", 'HFaXG', "*│⩥* ", 'BFiQp', "eams ", 'mzLFA', 'yrOcs', "p! ✨*", 'YRPmb', "━━\n┣🔖", " prov", 'thCap', "  ───", 'BdpKv', "🥉Ace ", 'ction', 'ssage', 'com/V', 'Gkbgt', 'GjVcO', 'mThZe', '.unbl', 'body', 'YnMRp', 'bkOhd', 'AfctH', '165f9', 'vQckj', 'OLwjg', 'exeqA', 'CNNhI', "nd fo", 'tions', 'mbnai', 'ggaLA', 'vcard', 'PLmzo', " a me", 'oSriP', 'WuLHF', 'rtmen', "ke De", 'CnNAi', 'oiqux', 'CWtIR', 'RdQTM', 'drvYB', 'PpXag', '🧜‍♂️Mast', "►*\n\n*", 'NCLXB', 'OLkOk', 'using', 'OMMAN', "\n    ", '.dels', "   ──", 'dXPXW', "er*: ", 'NCMHU', 'ances', "And 1", 'jHmAr', 'a/f/s', 'MdQIk', "ort*\n", 'KJufR', 'PREFI', 'edit', 'setbo', 'HPxCx', " \n*│🕵️‍♂️", " ʏᴏᴜ ", 'XQXrq', 'NRGFx', 'Wsryu', 'Nbrdy', 'JXKfd', 'BsujP', '100%', " Syst", 'kdHLg', 'wgZiE', 'tadMq', "To ge", 'heapU', " Jid ", 'round', 'QAYxe', 'hZcOa', "n and", 'gBFuM', "ice t", 'EMtTp', " unde", 'e_num', 'VfIKm', "*『 𝙱𝚄", "le ", 'YLakK', 'yUsag', 'FdXGV', "Wait ", 'ptSyG', "rter ", "i Bot", 'nText', 'isYiy', 'mwtdA', 'yRjzV', 'phone', "MD SY", 'uYmWe', 'catch', 'ePpHa', 'toOEs', 'MzgSA', 'enu', 'Rando', 'SUCCE', 'qhaXh', 'TNbDj', 'n/jso', 'entMe', "ot Ve", "y ❌*", "To de", 'VmRlr', "ᴇ ʀᴇᴘ", "UP:* ", '.me/+', " < YO", 'appen', 'SxDox', 'LbVXG', 'CCzsn', 'NeqXR', 'hCrwy', 'ormat', "ging ", "►*\t\n\n", "𝙾𝚁𝚃 』", '🏳Citi', "m : ", 'rfyKZ', 'KsPyH', 'catio', 'lengt', 'sessi', 'Uxfti', 'ENU', 'Enjoy', "_*\n\n━", "\n━━━━", 'vMQjA', 'zLkTP', 'IEDPl', 'YXXmS', 'Maker', "ted ", 'b/dat', 'entWi', "ᴅᴇᴅ ᴛ", 'a/f/o', 'XJbri', 'FzTkM', '426YLlrfr', "ᴏᴜʀ ʀ", "ould ", 'hutdo', 'JYQhQ', "UP CO", 'fohjh', "t tha", 'KBzXp', 'nGOha', "👨‍💻 ᴠᴀᴊ", 'WEFuW', 'fIZJd', 'JaxNC', 'level', 'ssful', 'KvURK', 'fXrwx', 'is7ju', '3f1ec', 'onedJ', '⚔Lege', 'test', "eam o", '25a5e', 'nd..*', 'XfsYy', 'JohzN', 'sende', 'mem', 'lDDpj', 'YvsWj', "re, y", '🔮Supr', "ard w", ", sea", 'mber', 'tate', 'ppToM', "ER VA", 'messa', '```', 'ZzNoC', 'YzZzA', 'tKYgd', "ᴅ ʙʏ ", "is is", "*ඔබ B", 'yNUbs', 'ylYtH', 'yOtWR', 'bug', " Wiza", 'MnHCv', 'DDcei', 'zbedC', 'hiTgg', 'mTpRw', "PORT ", 'getTi', '.setb', 'mory:', 'flXlG', 'AqTis', 'yFpRW', 'NDXFA', 'VERSI', 'sion/', "n Our", "nd li", 'KeSUp', 'BICAT', "ou ha", 'bnqFL', 'JjcMY', 'XQzEL', "►*\n\t\t", " LOGO", "ᴏᴡ ᴍᴇ", 'nds', "🎖Ace ", 'BZDHs', 'FnNch', 'RoaCz', 'MxuJR', 'SuxHq', '████▒', 'ech/V', 'SKnib', 'uGDgu', 'eAdeq', 'wtWsk', 'Succe', 'est', '───●●', 'a.me/', " ✅`", '*Owne', 'then', 'ouQiN', 'NPLrm', 'false', 'AOdyp', 'DGpTu', 'fHYKi', 'erent', 't...*', 'oBFVl', 'logo', 'NHJFy', "ock a", 'erefo', 'ping', 'Ranxx', " sess", 'fakeO', '𝙈𝙀𝙈𝙊𝙍', 'iGiob', 'BhtSh', 'pushN', 'qKKzG', "ur te", 'zgDJv', " agai", "ent, ", '-Wa-B', "d or ", 'ent', 'TQgPx', 'ttps:', 'FN:', "work ", 'lwOmy', "Ｄ 👨‍💻──", 'UhmXe', 'MGWtz', 'whats', 'JQVjT', 'YzKGb', 'mofcT', 'OMShV', 'iksVE', 'ype', 'e-git', 'ydsvu', 'BOSVW', 'omman', 'GSsez', 'CXClJ', 'ds...', 'ULBQs', 'ZEgTr', 'zJZeU', '47891', 'erver', 'leys-', 'eVJtp', '*Hell', 'd...', 'nuCQe', "ror a", 'vvqBg', 'VooIy', "🛑 Thi", 'b/com', 'LesYO', 'sion', 'yoQdY', 'split', 'KLMNO', 'loade', 'er.*', 'sendM', 'APP_N', 'CiGDT', 'MZRyo', 'TJvyX', 'LETED', "lity ", 'SvMKD', "d of ", "\n*🚀Ve", "\n\n*╭─", 'ꜱᴘᴇᴇᴅ', 'r.jso', '*╭───', 'lHkiS', 'Runti', 'yXEwy', "MB\n*╰", 'wKKmX', 'PTFEa', "unt g", 'VaFLU', 'LTkjH', 'vflpo', '𝙍𝙎𝙄𝙊𝙉', 'koyeb', 'XKxnt', "*\n*│ ", 'YGNMO', 'age', " memb", "D GRO", "Bot s", " is t", 'sClyw', 'ptrId', 'qUVHa', "ou sh", 'NTSSs', 'BEGIN', 'aster', 'LhJYM', '-MD!!', 'oBGdT', "for i", 'FTfFF', '💍Supr', 'ItejY', "ce to", " ꜰᴏʟʟ", "ted !", 'getse', 'e.*', 'patte', 'ZgMCe', 'oWnSi', "ible ", 'MFmfE', 'TZisk', 'Ihjag', 'vucHo', 'koOMH', "《 ███", 'mUcZE', 'UJTFP', '.pair', 'WXPVr', '𝙊𝙍𝙈:*', 'EAnWI', 'IRA-M', 'displ', 'sJbEZ', 'lwdxV', 'hub.c', 'RlbPk', 'xlFun', 'YyvwJ', "ge an", "🥇Ace ", "*│🧙‍♂️ D", 'hLlKG', 'CTnBN', 'ynmTC', " circ", 'eSagt', 'DmKcU', "ANDS ", 'Supre', 'wWNVH', "an ow", "ots r", 'FBQqj', "he ma", 'exit', 'tsApp', 'dKSTH', "ɴᴅꜱ ᴘ", 'rAGec', "e ses", 'NdTUh', 'MrNKk', " ʀᴇsᴘ", 'bITuz', 'pp(Wi', 'YTqtN', '4|3|2', "* \n", 'BJSjh', "\n☱ *📍", 'fyqIZ', 'DGKuV', '23880', " owne", 'KIQpF', 'RUQfE', "ේ !*", "s fou", 'AUTO_', " with", 'u-cli', 'Qy5yr', " acco", 'ZFdQe', '💎Supr', "*│   ", 'jrNpE', 'jabiE', 'AgxKL', 'Bvhoo', 'MgXPS', "\n*📍Pl", 'nRNQh', 'aper', "f Usa", 'hnica', " the ", 'TZMsZ', "NDS*\n", "pp(i ", 'types', 'pre-k', ", we ", 'cvfuY', " crea", "*👸 𝘝𝘈", 'pp(Qu', 'GFgHS', 'XVvTS', 'zDsNQ', "eme I", 'FXhXn'];
  _0x7c09 = function () {
    return _0x283683;
  };
  return _0x7c09();
}
_0x3a16dd.pattern = "downmenu";
_0x3a16dd.react = "⬇👨‍💻";
_0x3a16dd.dontAddCommandList = true;
function _0x1415e4(_0x20bd55, _0x1627fa, _0x4ed804, _0x52ffcb, _0x32cff7) {
  return _0x2815(_0x4ed804 + 0x3bc, _0x1627fa);
}
_0x3a16dd.filename = __filename;
cmd(_0x3a16dd, async (_0x41825c, _0xf9b573, _0x4f956e, {
  from: _0x456633,
  prefix: _0x5649ed,
  l: _0x453791,
  quoted: _0x45f71e,
  body: _0x623f23,
  isCmd: _0x2491ba,
  command: _0x5249c3,
  args: _0x2f4794,
  q: _0x18f939,
  isGroup: _0x56a355,
  sender: _0xac239c,
  senderNumber: _0x3aa401,
  botNumber2: _0x356cd8,
  botNumber: _0x1d6d23,
  pushname: _0x395956,
  isMe: _0x4c13ec,
  isOwner: _0x743764,
  groupMetadata: _0x1233e8,
  groupName: _0x381e9f,
  participants: _0x40364c,
  groupAdmins: _0xc0ed5,
  isBotAdmins: _0x50e05a,
  isAdmins: _0x5eee71,
  reply: _0x9afcba
}) => {
  try {
    let _0x28e4ef = "*● ══════════════ ●*\n\n   *VAJIRA-MD DOWNLOAD COMMANDS MENU*\n\n";
    for (let _0x58b762 = 0; _0x58b762 < commands.length; _0x58b762++) {
      if (commands[_0x58b762].category === "download") {
        if (!commands[_0x58b762].dontAddCommandList) {
          _0x28e4ef += "*📍➣Command :* " + commands[_0x58b762].pattern + "\n*📃➣Desc :* " + commands[_0x58b762].desc + "\n*⌛➣Use:* " + commands[_0x58b762].use + "\n\n";
        }
      }
    }
    ;
    const _0x473eba = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x377996 = {
      buttonId: _0x5649ed + 'sc',
      buttonText: _0x473eba,
      type: 0x1
    };
    const _0xa285db = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x1c8809 = {
      buttonId: _0x5649ed + "ping",
      buttonText: _0xa285db,
      type: 0x1
    };
    let _0x36726c = [_0x377996, _0x1c8809];
    const _0x5e75de = {
      url: "https://pomf2.lain.la/f/dis7ju45.jpg"
    };
    const _0x45728b = {
      image: _0x5e75de,
      caption: _0x28e4ef,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x36726c
    };
    return await _0x41825c.buttonMessage(_0x456633, _0x45728b, _0xf9b573);
  } catch (_0x42a1f5) {
    _0x9afcba("*ERROR !!*");
    _0x453791(_0x42a1f5);
  }
});
const _0x477222 = {
  pattern: "searchmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x477222, async (_0x4dea9a, _0x5cc057, _0x4ad45d, {
  from: _0x524500,
  prefix: _0x3a0da8,
  l: _0x3e7464,
  quoted: _0x41bdb1,
  body: _0x3a0263,
  isCmd: _0x215918,
  command: _0x9ddbb,
  args: _0x49dbea,
  q: _0x7ffb9c,
  isGroup: _0xe07e2c,
  sender: _0x311a0d,
  senderNumber: _0x338730,
  botNumber2: _0x6acb53,
  botNumber: _0x3bd22b,
  pushname: _0x1fc87c,
  isMe: _0x44270e,
  isOwner: _0x3e1695,
  groupMetadata: _0x4cb56f,
  groupName: _0x2d171c,
  participants: _0x401e5b,
  groupAdmins: _0x3ff596,
  isBotAdmins: _0x2274bf,
  isAdmins: _0x2c3d21,
  reply: _0x4cecdb
}) => {
  try {
    let _0x2de9fe = "*● ══════════════ ●*\n\n   *VAJIRA-MD SEARCH COMMANDS MENU*\n\n";
    for (let _0x557a39 = 0; _0x557a39 < commands.length; _0x557a39++) {
      if (commands[_0x557a39].category === "search") {
        if (!commands[_0x557a39].dontAddCommandList) {
          _0x2de9fe += "*📍➣Command :* " + commands[_0x557a39].pattern + "\n*📃➣Desc :* " + commands[_0x557a39].desc + "\n*⌛➣Use:* " + commands[_0x557a39].use + "\n\n";
        }
      }
    }
    ;
    const _0x568f03 = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x6d5146 = {
      buttonId: _0x3a0da8 + 'sc',
      buttonText: _0x568f03,
      type: 0x1
    };
    const _0x26d89f = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x1d2a77 = {
      buttonId: _0x3a0da8 + "ping",
      buttonText: _0x26d89f,
      type: 0x1
    };
    let _0x99126d = [_0x6d5146, _0x1d2a77];
    const _0x15596e = {
      url: "https://pomf2.lain.la/f/d8981ir3.jpg"
    };
    const _0xfbea12 = {
      image: _0x15596e,
      caption: _0x2de9fe,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x99126d
    };
    return await _0x4dea9a.buttonMessage(_0x524500, _0xfbea12, _0x5cc057);
  } catch (_0x25dbd7) {
    _0x4cecdb("*ERROR !!*");
    _0x3e7464(_0x25dbd7);
  }
});
const _0x518ca2 = {
  pattern: "convertmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x518ca2, async (_0x4e8354, _0x12725e, _0xbedfc5, {
  from: _0x4aabba,
  prefix: _0x6f4d00,
  l: _0x4e44a8,
  quoted: _0x4aa024,
  body: _0x2c6fec,
  isCmd: _0x51696b,
  command: _0x5e4406,
  args: _0x5a422d,
  q: _0x33f5ac,
  isGroup: _0x32bd22,
  sender: _0x117e61,
  senderNumber: _0x549ffe,
  botNumber2: _0x15fa0a,
  botNumber: _0x2ed97e,
  pushname: _0x2d20c8,
  isMe: _0xd19899,
  isOwner: _0x971738,
  groupMetadata: _0x25a24b,
  groupName: _0xf88e4a,
  participants: _0x2ee9aa,
  groupAdmins: _0x58e8a7,
  isBotAdmins: _0xf6b4f,
  isAdmins: _0x3bfb33,
  reply: _0x32d551
}) => {
  try {
    let _0xafe061 = "*● ══════════════ ●*\n\n   *VAJIRA-MD CONVERT COMMANDS MENU*\n\n";
    for (let _0x27b912 = 0; _0x27b912 < commands.length; _0x27b912++) {
      if (commands[_0x27b912].category === "convert") {
        if (!commands[_0x27b912].dontAddCommandList) {
          _0xafe061 += "*📍➣Command :* " + commands[_0x27b912].pattern + "\n*📃➣Desc :* " + commands[_0x27b912].desc + "\n*⌛➣Use:* " + commands[_0x27b912].use + "\n\n";
        }
      }
    }
    ;
    const _0x32d590 = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x47533f = {
      buttonId: _0x6f4d00 + 'sc',
      buttonText: _0x32d590,
      type: 0x1
    };
    const _0x18049f = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x437e1d = {
      buttonId: _0x6f4d00 + "ping",
      buttonText: _0x18049f,
      type: 0x1
    };
    let _0x30a234 = [_0x47533f, _0x437e1d];
    const _0x36d22a = {
      url: "https://pomf2.lain.la/f/08htih3j.jpg"
    };
    const _0x2a6236 = {
      image: _0x36d22a,
      caption: _0xafe061,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x30a234
    };
    return await _0x4e8354.buttonMessage(_0x4aabba, _0x2a6236, _0x12725e);
  } catch (_0x43b29a) {
    _0x32d551("*ERROR !!*");
    _0x4e44a8(_0x43b29a);
  }
});
const _0x2db657 = {
  pattern: "logomenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2db657, async (_0x458380, _0x53465c, _0x39e7fa, {
  from: _0x2f6b28,
  prefix: _0x1ac91a,
  l: _0x439ca5,
  quoted: _0x2cb430,
  body: _0x59539a,
  isCmd: _0x2318ce,
  command: _0x56cbfb,
  args: _0x19a603,
  q: _0x16ec2a,
  isGroup: _0x490f8f,
  sender: _0x2e3e2a,
  senderNumber: _0x3d2ed0,
  botNumber2: _0x133fa4,
  botNumber: _0x2a2e46,
  pushname: _0x2b0366,
  isMe: _0x123182,
  isOwner: _0x41e88a,
  groupMetadata: _0x5d5285,
  groupName: _0x51fa96,
  participants: _0x300b1c,
  groupAdmins: _0x1930a8,
  isBotAdmins: _0x1d530c,
  isAdmins: _0x138f12,
  reply: _0x3846a6
}) => {
  try {
    let _0xb507e9 = "*● ══════════════ ●*\n\n   *VAJIRA-MD LOGO COMMANDS MENU*\n\n";
    for (let _0x30464d = 0; _0x30464d < commands.length; _0x30464d++) {
      if (commands[_0x30464d].category === "logo") {
        if (!commands[_0x30464d].dontAddCommandList) {
          _0xb507e9 += "*📍➣Command :* " + commands[_0x30464d].pattern + "\n*📃➣Desc :* " + commands[_0x30464d].desc + "\n*⌛➣Use:* " + commands[_0x30464d].use + "\n\n";
        }
      }
    }
    ;
    const _0x526f8e = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x567146 = {
      buttonId: _0x1ac91a + 'sc',
      buttonText: _0x526f8e,
      type: 0x1
    };
    const _0x3aa16e = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x40a185 = {
      buttonId: _0x1ac91a + "ping",
      buttonText: _0x3aa16e,
      type: 0x1
    };
    let _0x23b606 = [_0x567146, _0x40a185];
    const _0x2c8bd1 = {
      url: "https://pomf2.lain.la/f/h1tnjw6z.jpg"
    };
    const _0x4aea43 = {
      image: _0x2c8bd1,
      caption: _0xb507e9,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x23b606
    };
    return await _0x458380.buttonMessage(_0x2f6b28, _0x4aea43, _0x53465c);
  } catch (_0x31f165) {
    _0x3846a6("*ERROR !!*");
    _0x439ca5(_0x31f165);
  }
});
const _0x4c91e0 = {
  pattern: "mainmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4c91e0, async (_0x4c1400, _0x3b719b, _0x2454e6, {
  from: _0x1e24db,
  prefix: _0x4183b9,
  l: _0x52c37d,
  quoted: _0x494f41,
  body: _0x283bb9,
  isCmd: _0x1e32dd,
  command: _0x3e7e8e,
  args: _0x3b1924,
  q: _0x39c6f0,
  isGroup: _0x10b4b0,
  sender: _0x3ffdfc,
  senderNumber: _0x2296c9,
  botNumber2: _0x227ea8,
  botNumber: _0x4ef375,
  pushname: _0x5767c1,
  isMe: _0xd845fa,
  isOwner: _0x6fcdf2,
  groupMetadata: _0x5c138f,
  groupName: _0x423d30,
  participants: _0x5e6fab,
  groupAdmins: _0x1c8b75,
  isBotAdmins: _0x70a610,
  isAdmins: _0x3ba359,
  reply: _0x19301e
}) => {
  try {
    let _0x40bb24 = "*● ══════════════ ●*\n\n   *VAJIRA-MD MAIN COMMANDS MENU*\n\n";
    for (let _0x13d1b4 = 0; _0x13d1b4 < commands.length; _0x13d1b4++) {
      if (commands[_0x13d1b4].category === "main") {
        if (!commands[_0x13d1b4].dontAddCommandList) {
          _0x40bb24 += "*📍➣Command :* " + commands[_0x13d1b4].pattern + "\n*📃➣Desc :* " + commands[_0x13d1b4].desc + "\n*⌛➣Use:* " + commands[_0x13d1b4].use + "\n\n";
        }
      }
    }
    ;
    const _0x4b11fb = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x5b9304 = {
      buttonId: _0x4183b9 + 'sc',
      buttonText: _0x4b11fb,
      type: 0x1
    };
    const _0x2cbfd9 = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x461431 = {
      buttonId: _0x4183b9 + "ping",
      buttonText: _0x2cbfd9,
      type: 0x1
    };
    let _0x5ad44f = [_0x5b9304, _0x461431];
    const _0x52b158 = {
      url: "https://pomf2.lain.la/f/s7p5nr5.jpg"
    };
    const _0x1344ca = {
      image: _0x52b158,
      caption: _0x40bb24,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x5ad44f
    };
    return await _0x4c1400.buttonMessage(_0x1e24db, _0x1344ca, _0x3b719b);
  } catch (_0x4beef7) {
    _0x19301e("*ERROR !!*");
    _0x52c37d(_0x4beef7);
  }
});
const _0x5c074f = {
  pattern: "groupmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5c074f, async (_0xf9444c, _0x553216, _0x16b962, {
  from: _0x4f5fdc,
  prefix: _0x59d5a7,
  l: _0x2b8fce,
  quoted: _0x3ab229,
  body: _0x2bbc8e,
  isCmd: _0x18a57b,
  command: _0x981694,
  args: _0x53e417,
  q: _0x549c8f,
  isGroup: _0x199fb7,
  sender: _0xfa46eb,
  senderNumber: _0x8a2db0,
  botNumber2: _0x536150,
  botNumber: _0x4d8f14,
  pushname: _0x382527,
  isMe: _0x7284e9,
  isOwner: _0x2f8647,
  groupMetadata: _0x5ebda4,
  groupName: _0x5625cd,
  participants: _0x4662a8,
  groupAdmins: _0x5c9bd5,
  isBotAdmins: _0x2560a6,
  isAdmins: _0x277249,
  reply: _0x5d47f6
}) => {
  try {
    let _0x4da69d = "*● ══════════════ ●*\n\n   * VAJIRA-MD GROUP COMMANDS MENU*\n\n";
    for (let _0x2b3680 = 0; _0x2b3680 < commands.length; _0x2b3680++) {
      if (commands[_0x2b3680].category === "group") {
        if (!commands[_0x2b3680].dontAddCommandList) {
          _0x4da69d += "*📍➣Command :* " + commands[_0x2b3680].pattern + "\n*📃➣Desc :* " + commands[_0x2b3680].desc + "\n*⌛➣Use:* " + commands[_0x2b3680].use + "\n\n";
        }
      }
    }
    ;
    const _0x2567db = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x2ffe15 = {
      buttonId: _0x59d5a7 + 'sc',
      buttonText: _0x2567db,
      type: 0x1
    };
    const _0x4ceb71 = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x54b5dd = {
      buttonId: _0x59d5a7 + "ping",
      buttonText: _0x4ceb71,
      type: 0x1
    };
    let _0x34ca16 = [_0x2ffe15, _0x54b5dd];
    const _0x245d5b = {
      url: "https://pomf2.lain.la/f/k5nwt02m.jpg"
    };
    const _0x3b3cea = {
      image: _0x245d5b,
      caption: _0x4da69d,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x34ca16
    };
    return await _0xf9444c.buttonMessage(_0x4f5fdc, _0x3b3cea, _0x553216);
  } catch (_0x24ef03) {
    _0x5d47f6("*ERROR !!*");
    _0x2b8fce(_0x24ef03);
  }
});
const _0x40f953 = {
  pattern: "bugmenu",
  react: "👨‍💻",
  dontAddCommandList: true
};
function _0x4c1569(_0x1f87dc, _0x592773, _0x11d59c, _0x283afa, _0x244966) {
  return _0x2815(_0x11d59c - 0x14e, _0x283afa);
}
_0x40f953.filename = __filename;
cmd(_0x40f953, async (_0x331134, _0x3e1f17, _0x1fc582, {
  from: _0x2e3f58,
  prefix: _0x5225e0,
  l: _0x9f70f3,
  quoted: _0xaa7135,
  body: _0x3b4bb9,
  isCmd: _0x4c47a6,
  command: _0x4e4185,
  args: _0x12f612,
  q: _0x41e737,
  isGroup: _0x518384,
  sender: _0x1f3b81,
  senderNumber: _0x5f3815,
  botNumber2: _0x494ce6,
  botNumber: _0x2f1100,
  pushname: _0x5e884c,
  isMe: _0x49f281,
  isOwner: _0x3d0362,
  groupMetadata: _0x504893,
  groupName: _0x4275e0,
  participants: _0x375907,
  groupAdmins: _0x3630f7,
  isBotAdmins: _0x5887e7,
  isAdmins: _0x3c0d63,
  reply: _0x3dc263
}) => {
  try {
    let _0x20d751 = "*● ══════════════ ●*\n\n   * VAJIRA-MD BUG COMMANDS MENU*\n\n";
    for (let _0x3457a0 = 0; _0x3457a0 < commands.length; _0x3457a0++) {
      if (commands[_0x3457a0].category === "bug") {
        if (!commands[_0x3457a0].dontAddCommandList) {
          _0x20d751 += "*📍➣Command :* " + commands[_0x3457a0].pattern + "\n*📃➣Desc :* " + commands[_0x3457a0].desc + "\n*⌛➣Use:* " + commands[_0x3457a0].use + "\n\n";
        }
      }
    }
    ;
    const _0x5c21cd = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0xbecde2 = {
      buttonId: _0x5225e0 + 'sc',
      buttonText: _0x5c21cd,
      type: 0x1
    };
    const _0x183306 = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x595ea3 = {
      buttonId: _0x5225e0 + "ping",
      buttonText: _0x183306,
      type: 0x1
    };
    let _0x363c5b = [_0xbecde2, _0x595ea3];
    const _0x157eda = {
      url: "https://pomf2.lain.la/f/o8bpmlet.jpg"
    };
    const _0x438430 = {
      image: _0x157eda,
      caption: _0x20d751,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x363c5b
    };
    return await _0x331134.buttonMessage(_0x2e3f58, _0x438430, _0x3e1f17);
  } catch (_0x1873e7) {
    _0x3dc263("*ERROR !!*");
    _0x9f70f3(_0x1873e7);
  }
});
const _0xa138e9 = {
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xa138e9, async (_0x1d88ca, _0x4dc611, _0x343881, {
  from: _0x41fb54,
  prefix: _0x2b875f,
  l: _0x4df06a,
  quoted: _0x4c683a,
  body: _0x139519,
  isCmd: _0x1f10bc,
  command: _0x5aa944,
  args: _0x9076ed,
  q: _0xd5ddd9,
  isGroup: _0x52aed3,
  sender: _0x543dce,
  senderNumber: _0x2e4fe1,
  botNumber2: _0x5973e5,
  botNumber: _0x4727f8,
  pushname: _0x2a285c,
  isMe: _0x13db14,
  isOwner: _0x51e240,
  groupMetadata: _0x2c90e2,
  groupName: _0x14b568,
  participants: _0x4914bb,
  groupAdmins: _0x323311,
  isBotAdmins: _0x20fcf1,
  isAdmins: _0x48c5f8,
  reply: _0x180464
}) => {
  try {
    let _0xd1ba3 = "*● ══════════════ ●*\n\n   * VAJIRA-MD OTHER COMMANDS MENU*\n\n";
    for (let _0x4fccca = 0; _0x4fccca < commands.length; _0x4fccca++) {
      if (commands[_0x4fccca].category === "other") {
        if (!commands[_0x4fccca].dontAddCommandList) {
          _0xd1ba3 += "*📍➣Command :* " + commands[_0x4fccca].pattern + "\n*📃➣Desc :* " + commands[_0x4fccca].desc + "\n*⌛➣Use:* " + commands[_0x4fccca].use + "\n\n";
        }
      }
    }
    ;
    const _0x319f2b = {
      displayText: "ʙᴏᴛ ꜱᴄʀɪᴘᴛ"
    };
    const _0x214a44 = {
      buttonId: _0x2b875f + 'sc',
      buttonText: _0x319f2b,
      type: 0x1
    };
    const _0x5a7d01 = {
      displayText: "ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ"
    };
    const _0x419628 = {
      buttonId: _0x2b875f + "ping",
      buttonText: _0x5a7d01,
      type: 0x1
    };
    let _0x2b149f = [_0x214a44, _0x419628];
    const _0x61d821 = {
      url: "https://pomf2.lain.la/f/6dpy8cyf.jpg"
    };
    const _0x240b02 = {
      image: _0x61d821,
      caption: _0xd1ba3,
      footer: config.FOOTER,
      headerType: 0x4,
      buttons: _0x2b149f
    };
    return await _0x1d88ca.buttonMessage(_0x41fb54, _0x240b02, _0x4dc611);
  } catch (_0xad476f) {
    _0x180464("*ERROR !!*");
    _0x4df06a(_0xad476f);
  }
});
const _0xe8565b = {
  pattern: 'sc',
  react: "👨‍💻",
  alias: ["script", "repo"],
  desc: "Check bot online or no.",
  category: "main",
  use: ".alive",
  filename: __filename
};
cmd(_0xe8565b, async (_0x59308b, _0x33213b, _0x47e792, {
  from: _0x939556,
  prefix: _0x4cbc6b,
  l: _0x493320,
  quoted: _0x497d40,
  body: _0x23e4f8,
  isCmd: _0x5807d5,
  command: _0xe221de,
  args: _0x2122b0,
  q: _0x559723,
  isGroup: _0x277d6d,
  sender: _0x40ba1a,
  senderNumber: _0x27d024,
  botNumber2: _0x40bb0d,
  botNumber: _0x109b22,
  pushname: _0x82aed4,
  isMe: _0xcefc48,
  isOwner: _0x4dbab8,
  groupMetadata: _0x44e451,
  groupName: _0x50474a,
  participants: _0x1f10de,
  groupAdmins: _0x107be9,
  isBotAdmins: _0x5a2d33,
  isAdmins: _0x45ee76,
  reply: _0x386bc9
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    var _0x194b07 = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x40a04d = {
      text: ''
    };
    let {
      key: _0x364688
    } = await _0x59308b.sendMessage(_0x939556, _0x40a04d);
    for (let _0x520b7a = 0; _0x520b7a < _0x194b07.length; _0x520b7a++) {
      const _0x3391cf = {
        text: _0x194b07[_0x520b7a],
        edit: _0x364688
      };
      await _0x59308b.sendMessage(_0x939556, _0x3391cf);
    }
    const _0x873842 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x4cbc6b + "menu",
        'description': "COMMANDS MENU"
      }, {
        'title': '2',
        'rowId': _0x4cbc6b + "ping",
        'description': "VAJIRA-MD SPEED"
      }]
    }];
    const _0x538602 = {
      url: config.LOGO
    };
    const _0x36e444 = {
      caption: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *VAJIRA MD WHATSAPP USER BOT* 💫\n\n                     *OUR MISSION*\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n\n\n🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier\n\n\n💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.\n\n\n⚠️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.\n\n\n👨‍💻 OWNER VAJIRA\n\n🎡 *GITHUB:*  https://github.com/VajiraTech/VAJIRA_MD\n\n🪩 *OUR GROUP:* https://chat.whatsapp.com/D6w6Qy5yrhp7MmfNcprbO3\n\n*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* \n",
      image: _0x538602,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x873842
    };
    const _0x24ab46 = {
      quoted: _0x33213b
    };
    return await _0x59308b.replyList(_0x939556, _0x36e444, _0x24ab46);
  } catch (_0x33170d) {
    _0x386bc9("*ERROR !!*");
    _0x493320(_0x33170d);
  }
});