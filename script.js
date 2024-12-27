new Clipboard(".btn");

new Cleave(".numberInput", {
  numeral: true,
  numeralDecimalScale: 20,
  numeralDecimalMark: ".",
  delimiter: ",",
});

// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// Convert numbers to Khmer word forms
// * Doesn't use the Khmer counting system
// @epidemiks

var th = ["", "ពាន់", "លាន", "ពពាន់លាន", "ពាន់ពាន់លាន"];
var dg = [
  "សូន្យ",
  "មួយ",
  "ពីរ",
  "បី",
  "បួន",
  "ប្រាំ",
  "ប្រាំមួយ",
  "ប្រាំពីរ",
  "ប្រាំបី",
  "ប្រាំបួន",
];
var tn = [
  "ដប់",
  "ដប់មួយ",
  "ដប់ពីរ",
  "ដប់បី",
  "ដប់ប្រាំ",
  "ដប់ប្រាំមួយ",
  "ដប់ប្រាំពីរ",
  "ដប់ប្រាំបី",
  "ដប់ប្រាំបី",
  "ដប់ប្រាំបួន",
];
var tw = [
  "ម្ភៃ",
  "សាមសិប",
  "សែសិប",
  "ហាសិប",
  "ហុកសិប",
  "ចិតសិប",
  "ប៉ែតសិប",
  "កៅសិប",
];

function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "សុំទោសនោះមិនមែនជាលេខ";
  var x = s.indexOf(".");
  if (x == -1) x = s.length;
  if (x > 15) return "ធំ​ណាស់ / Too big";
  var n = s.split("");
  //   var str = '\uF06E​​    ';
  var str = "";
  var sk = 0;
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tn[Number(n[i + 1])] + "​";
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + "​";
        sk = 1;
      }
    } else if (n[i] != 0) {
      str += dg[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "រយ";
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) str += th[(x - i - 1) / 3] + "​";
      sk = 0;
    }
  }
  if (x != s.length) {
    var y = s.length;
    str += "ចុច ";
    for (var i = x + 1; i < y; i++) str += dg[n[i]] + "​";
  }
  return str.replace(/\s+/g, "​");
}

// Convert numbers to transliterations of Khmer word forms.

var tht = ["", "poan", "lean", "poan lean", "poan poan lean"];
var dgt = [
  "soun",
  "mouy",
  "pii",
  "bei",
  "buon",
  "pram",
  "pram-mouy",
  "pram-pi",
  "pram-bei",
  "pram-buon",
];
var tnt = [
  "dap",
  "dap-mouy",
  "dap-pii",
  "dap-bei",
  "dap-buon",
  "dap-pram",
  "dap-pram-mouy",
  "dap-pram-pii",
  "dap-pram-bei",
  "dap-pram-buon",
];
var twt = [
  "mpei",
  "sam-sup",
  "sae-sup",
  "ha-sup",
  "hok-sup",
  "chet-sup",
  "paet-sup",
  "kao-sup",
];

function toTranslit(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "Sorry, that's not a number";
  var x = s.indexOf(".");
  if (x == -1) x = s.length;
  if (x > 15) return "ធំ​ណាស់ / Too big";
  var n = s.split("");
  //   var str = '\uF075   ';
  var str = "";
  var sk = 0;
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tnt[Number(n[i + 1])] + " ";
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += twt[n[i] - 2] + " ";
        sk = 1;
      }
    } else if (n[i] != 0) {
      str += dgt[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "roy ";
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) str += tht[(x - i - 1) / 3] + " ";
      sk = 0;
    }
  }
  if (x != s.length) {
    var y = s.length;
    str += "choch ";
    for (var i = x + 1; i < y; i++) str += dgt[n[i]] + " ";
  }
  return str.replace(/\s+/g, " ");
}

// Take the numbers, Khmerize them.

function khmerize(s) {
  var res = String(s).replace(/([0-9])/g, function (s, n, ofs, all) {
    return String.fromCharCode(0x17e0 + n * 1);
    var ic = "\uF040";
  });
  //    return '\uF040 ' + res;
  return res;
}
