window.__require = function t(e, r, n) {
function i(s, c) {
if (!r[s]) {
if (!e[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!e[u]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var a = r[s] = {
exports: {}
};
e[s][0].call(a.exports, function(t) {
return i(e[s][1][t] || t);
}, a, a.exports, t, e, r, n);
}
return r[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
return i;
}({
"test-first": [ function(t, e) {
"use strict";
cc._RF.push(e, "912795WyhhNJ7ssdtf4at3V", "test-first");
cc.Class({
extends: cc.Component,
properties: {
tips: t("LabelLocalized")
},
start: function() {
this.tips.textKey = "cases/AssetBundle.8";
},
goLoadSubpackage: function() {
cc.director.loadScene("AssetBundle");
}
});
cc._RF.pop();
}, {
LabelLocalized: void 0
} ]
}, {}, [ "test-first" ]);