window.__require = function e(t, i, s) {
function n(a, c) {
if (!i[a]) {
if (!t[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!t[r]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(r, !0);
if (o) return o(r, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = r;
}
var u = i[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return n(t[a][1][e] || e);
}, u, u.exports, e, t, i, s);
}
return i[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < s.length; a++) n(s[a]);
return n;
}({
"3d-model": [ function(e, t) {
"use strict";
cc._RF.push(t, "5f96dFONrhFoosfPR7q5e94", "3d-model");
cc.Class({
extends: cc.Component,
properties: {
playingIndex: 0
},
start: function() {
this.playNextAnimation();
},
playNextAnimation: function() {
var e = this.getComponent(cc.Animation), t = e.getClips();
t[this.playingIndex] || (this.playingIndex = 0);
e.play(t[this.playingIndex].name);
this.playingIndex++;
}
});
cc._RF.pop();
}, {} ],
"3d-support-info": [ function(e, t) {
"use strict";
cc._RF.push(t, "aa6e94UfYREzbFN94D3Gupk", "3d-support-info");
cc.Class({
extends: cc.Component,
properties: {
displayNode: cc.Node
},
start: function() {
if (cc.sys.browserType === cc.sys.BROWSER_TYPE_IE) {
this.displayNode.active = !1;
this.node.active = !0;
} else {
this.displayNode.active = !0;
this.node.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
ActionCallback: [ function(e, t) {
"use strict";
cc._RF.push(t, "2881e6K1edLBbgvc+6/YN7o", "ActionCallback");
cc.Class({
extends: cc.Component,
onLoad: function() {
var e = this.getComponent("TouchEvent"), t = this.getComponent("MouseEvent");
(e || t)._callback = function() {
this.node.runAction(cc.sequence(cc.scaleTo(.5, 2, 1), cc.scaleTo(.25, 1, 1)));
};
}
});
cc._RF.pop();
}, {} ],
AdaptiveSprite: [ function(e, t) {
"use strict";
cc._RF.push(t, "4edf1JTF/BHIKZVY3FaAqsT", "AdaptiveSprite");
cc.Class({
extends: cc.Component,
properties: {
padding: 20,
label: {
default: null,
type: cc.Node
},
backgroup: {
default: null,
type: cc.Node
}
},
update: function() {
this.backgroup.width !== this.label.width && (this.backgroup.width = this.label.width + this.padding);
this.backgroup.height !== this.label.height && (this.backgroup.height = this.label.height + this.padding);
}
});
cc._RF.pop();
}, {} ],
AnimateCustomPropertyCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "fb14cmn7KJJCo4qVcOy/GmS", "AnimateCustomPropertyCtrl");
cc.Class({
extends: cc.Component,
properties: {
hp: 0,
emissionRote: 0,
num: 0,
hpBar: cc.ProgressBar,
particle: cc.ParticleSystem,
score: cc.Label
},
update: function() {
this.hpBar.progress = this.hp;
this.particle.emissionRate = this.emissionRote;
this.score.string = Math.ceil(this.num);
}
});
cc._RF.pop();
}, {} ],
AnimationCallback: [ function(e, t) {
"use strict";
cc._RF.push(t, "3d311umYuNAM61hHscTxwkq", "AnimationCallback");
cc.Class({
extends: cc.Component,
properties: {
playLabel: {
default: null,
type: cc.Label
},
pauseLabel: {
default: null,
type: cc.Label
},
stateLabel: {
default: null,
type: cc.Label
},
animation: {
default: null,
type: cc.Animation
}
},
onEnable: function() {
var e = this.animation;
e.on("play", this.onPlay, this);
e.on("stop", this.onStop, this);
e.on("lastframe", this.onLastFrame, this);
e.on("finished", this.onFinished, this);
e.on("pause", this.onPause, this);
e.on("resume", this.onResume, this);
},
onDisable: function() {
var e = this.animation;
e.off("play", this.onPlay, this);
e.off("stop", this.onStop, this);
e.off("lastframe", this.onLastFrame, this);
e.off("finished", this.onFinished, this);
e.off("pause", this.onPause, this);
e.off("resume", this.onResume, this);
},
onPlayButtonClicked: function() {
if ("play" === this.playLabel.string) {
this.playLabel.string = "stop";
this.animation.play("linear");
} else {
this.playLabel.string = "play";
this.animation.stop("linear");
}
},
onPauseButtonClicked: function() {
if ("pause" === this.pauseLabel.string) {
this.pauseLabel.string = "resume";
this.animation.pause("linear");
} else {
this.pauseLabel.string = "pause";
this.animation.resume("linear");
}
},
onPlay: function() {
cc.log("onPlay");
this.stateLabel.string = "onPlay";
},
onStop: function() {
cc.log("onStop");
this.stateLabel.string = "onStop";
this.playLabel.string = "play";
},
onLastFrame: function() {
cc.log("onLastFrame");
this.stateLabel.string = "onLastFrame";
},
onFinished: function() {
cc.log("onFinished");
this.stateLabel.string = "onFinished";
},
onPause: function() {
cc.log("onPause");
this.stateLabel.string = "onPause";
},
onResume: function() {
cc.log("onResume");
this.stateLabel.string = "onResume";
}
});
cc._RF.pop();
}, {} ],
AnimationEvent: [ function(e, t) {
"use strict";
cc._RF.push(t, "1dc09SR4TdLU74RjGBArlm0", "AnimationEvent");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.find("Canvas/Label");
this._label = e.getComponent(cc.Label);
this._animCtrl = this.node.getComponent(cc.Animation);
},
onNextAnimation: function(e) {
this._animCtrl.play("step_" + e);
this._label.string = i.t("cases/03_gameplay/03_animation/AnimationEvent.js.1") + e + "个动画";
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
AssetLoading: [ function(e, t) {
"use strict";
cc._RF.push(t, "65aa6czKHtKGZog+yjK1bc6", "AssetLoading");
var i, s = e("i18n");
cc.Class(((i = {
extends: cc.Component,
properties: {
showWindow: cc.Node,
loadAnimTestPrefab: cc.Prefab,
loadTips: cc.Label,
loadList: {
default: [],
type: cc.Node
},
assets: []
},
onLoad: function() {
this._curType = "";
this._lastType = "";
this._curRes = null;
this._btnLabel = null;
this._audioSource = null;
this._isLoading = !1;
this._urls = {
Audio: "test_assets/audio",
Txt: "test_assets/text",
Texture: "test_assets/PurpleMonster",
Font: "test_assets/font",
Plist: "test_assets/atom",
SpriteFrame: "test_assets/image",
Prefab: "test_assets/prefab",
Animation: "test_assets/sprite-anim",
Scene: "test_assets/scene",
Spine: "spineboy/spineboy",
CORS: "https://download.cocos.com/test-case/logo.png"
};
this._onRegisteredEvent();
},
onDestroy: function() {},
_onRegisteredEvent: function() {
for (var e = 0; e < this.loadList.length; ++e) this.loadList[e].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
},
_onClick: function(e) {
if (!this._isLoading) {
this._onClear();
this._curType = e.target.name.split("_")[1];
if ("" === this._lastType || this._curType !== this._lastType) {
this._btnLabel && (this._btnLabel.textKey = s.t("cases/05_scripting/07_asset_loading/AssetLoading.js.1") + this._lastType);
this._lastType = this._curType;
this._btnLabel = e.target.getChildByName("Label").getComponent("cc.Label");
this.loadTips.textKey = this._curType + " Loading....";
this._isLoading = !0;
this._load();
} else this._onShowResClick(e);
}
},
_load: function() {
var e = this._urls[this._curType], t = this._loadCallBack.bind(this);
switch (this._curType) {
case "SpriteFrame":
cc.resources.load(e, cc.SpriteFrame, t);
break;

case "Spine":
cc.resources.load(e, sp.SkeletonData, t);
break;

case "Font":
cc.resources.load(e, cc.Font, t);
break;

case "Plist":
cc.resources.load(e, cc.ParticleAsset, t);
break;

case "Animation":
case "Prefab":
case "Texture":
case "Txt":
case "Audio":
cc.resources.load(e, t);
break;

case "Scene":
cc.resources.loadScene(e, t);
break;

case "CORS":
cc.assetManager.loadRemote(e, t);
this.loadTips.textKey = "CORS image should report texImage2D error under WebGL and works ok under Canvas";
break;

default:
cc.assetManager.loadRemote(e, t);
}
},
_loadCallBack: function(e, t) {
this._isLoading = !1;
if (e) cc.log("Error url [" + e + "]"); else {
t instanceof cc.SceneAsset || this.assets.push(t.addRef());
this._curRes = t;
"Audio" === this._curType ? this._btnLabel.textKey = s.t("cases/05_scripting/07_asset_loading/AssetLoading.js.2") : this._btnLabel.textKey = s.t("cases/05_scripting/07_asset_loading/AssetLoading.js.3");
this._btnLabel.textKey += this._curType;
this.loadTips.textKey = this._curType + " Loaded Successfully!";
}
},
_onClear: function() {
this.showWindow.removeAllChildren(!0);
this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
},
_onShowResClick: function() {
"Scene" !== this._curType ? this._createNode(this._curType, this._curRes) : cc.director.runScene(this._curRes);
},
_createNode: function(e, t) {
this.loadTips.textKey = "";
var i = new cc.Node("New " + e);
i.setPosition(0, 0);
var n = null;
switch (this._curType) {
case "SpriteFrame":
(n = i.addComponent(cc.Sprite)).spriteFrame = t;
break;

case "Texture":
case "CORS":
(n = i.addComponent(cc.Sprite)).spriteFrame = new cc.SpriteFrame(t);
break;

case "Audio":
(n = i.addComponent(cc.AudioSource)).clip = t;
n.play();
this._audioSource = n;
this.loadTips.textKey = s.t("cases/05_scripting/07_asset_loading/AssetLoading.js.4");
break;

case "Txt":
(n = i.addComponent(cc.Label)).lineHeight = 40;
n.string = t;
break;

case "Font":
(n = i.addComponent(cc.Label)).font = t;
n.lineHeight = 40;
n.string = "This is BitmapFont!";
break;

case "Plist":
(n = i.addComponent(cc.ParticleSystem)).file = t;
n.resetSystem();
break;

case "Prefab":
var o = cc.instantiate(t);
o.parent = i;
o.setPosition(0, 0);
break;

case "Animation":
var a = cc.instantiate(this.loadAnimTestPrefab);
a.parent = i;
a.setPosition(0, 0);
var c = a.getComponent(cc.Animation);
c.addClip(t);
c.play(t.name);
break;

case "Spine":
(n = i.addComponent(sp.Skeleton)).skeletonData = t;
n.animation = "walk";
i.y = -248;
}
this.showWindow.addChild(i);
}
}).onDestroy = function() {
this.assets.forEach(function(e) {
return e.decRef();
});
this.assets = null;
}, i));
cc._RF.pop();
}, {
i18n: "i18n"
} ],
AudioCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "5696eq9jEBM7KysA0oiKxfR", "AudioCtrl");
cc.Class({
extends: cc.Component,
properties: {
timeLabel: {
default: null,
type: cc.Label
},
_audioTask: null,
_audioID: null
},
setAudioTask: function(e) {
this._audioTask = e;
},
playAudio: function() {
this._audioID = cc.audioEngine.play(this._audioTask, !1);
},
stopAudio: function() {
cc.audioEngine.stop(this._audioID);
},
pauseAudio: function() {
cc.audioEngine.pause(this._audioID);
},
resumeAudio: function() {
cc.audioEngine.resume(this._audioID);
},
stopAllAudio: function() {
cc.audioEngine.stopAll();
},
pauseAllAudio: function() {
cc.audioEngine.pauseAll();
},
resumeAllAudio: function() {
cc.audioEngine.resumeAll();
},
currentTime: function() {
if (this._audioTask && null !== this._audioID) {
var e = cc.audioEngine.getCurrentTime(this._audioID).toFixed(1), t = cc.audioEngine.getDuration(this._audioID).toFixed(1);
this.timeLabel.string = e + " s / " + t + " s";
}
}
});
cc._RF.pop();
}, {} ],
AudioEngineControl: [ function(e, t) {
"use strict";
cc._RF.push(t, "251cfXAScNHQqBfLlu2ffSn", "AudioEngineControl");
cc.Class({
extends: cc.Component,
properties: {
audio: {
type: cc.AudioClip,
default: null
},
label: {
type: cc.Label,
default: null
}
},
_updateLabel: function() {
this.label.string = "Instance: " + this.audioPool.length + " / " + this.maxNum;
},
onLoad: function() {
this.maxNum = cc.audioEngine.getMaxAudioInstance();
this.audioPool = [];
this._updateLabel();
[ "playMusic", "playEffect" ].forEach(function(e) {
cc.audioEngine[e] || cc.warn("." + e + " is not found!");
});
},
onDestroy: function() {
cc.audioEngine.stopAll();
},
removeAudio: function(e) {
var t = this.audioPool.indexOf(e);
t > -1 && this.audioPool.splice(t, 1);
this._updateLabel();
},
play: function() {
if (this.audio && this.audioPool.length !== this.maxNum) {
var e = cc.audioEngine.play(this.audio, !1, 1);
this.audioPool.push(e);
this._updateLabel();
cc.audioEngine.setFinishCallback(e, this.removeAudio.bind(this, e));
}
},
stopAll: function() {
cc.audioEngine.stopAll();
this.audioPool = [];
this._updateLabel();
},
pauseAll: function() {
cc.audioEngine.pauseAll();
},
resumeAll: function() {
cc.audioEngine.resumeAll();
}
});
cc._RF.pop();
}, {} ],
AudioSourceControl: [ function(e, t) {
"use strict";
cc._RF.push(t, "21d1aBwz85GW7Z3zNuBJcwB", "AudioSourceControl");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
label: {
type: cc.Label,
default: null
}
},
onLoad: function() {},
update: function() {
if (this.label) {
var e = this.audioSource;
this.label.string = e.getCurrentTime().toFixed(1) + " s / " + e.getDuration().toFixed(1) + " s";
}
},
play: function() {
this.audioSource.play();
},
pause: function() {
this.audioSource.pause();
},
stop: function() {
this.audioSource.stop();
},
resume: function() {
this.audioSource.resume();
}
});
cc._RF.pop();
}, {} ],
BackToPreloadAssets: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "ad9fd5HvapE3Zc5dYHrtBBi", "BackToPreloadAssets");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = (a.property, function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {};
t.prototype.onclick = function() {
cc.director.loadScene("PreloadAssets.fire");
};
return o([ c ], t);
}(cc.Component));
i.default = r;
cc._RF.pop();
}, {} ],
BasicEventCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "72ce1xP/UlG/rNZB/cIXQ2q", "BasicEventCtrl");
var i = e("TipsManager");
cc.Class({
extends: cc.Component,
properties: {
basicNode: cc.Node,
preNode: cc.Node,
childNode: cc.Node,
tip: cc.Label
},
start: function() {
i.init();
},
changePosition: function() {
this.resetNode();
function e() {
this.tip.string = "Position_changed successd";
}
this.basicNode.on(cc.Node.EventType.POSITION_CHANGED, e, this);
this.basicNode.x -= 40;
this.basicNode.y += 10;
this.basicNode.off(cc.Node.EventType.POSITION_CHANGED, e, this);
},
changeScale: function() {
this.resetNode();
function e() {
this.tip.string = "Scale_changed successd";
}
this.basicNode.on(cc.Node.EventType.SCALE_CHANGED, e, this);
this.basicNode.scaleX += .2;
this.basicNode.scaleY += .2;
this.basicNode.off(cc.Node.EventType.POSITION_CHANGED, e, this);
},
changeSize: function() {
this.resetNode();
function e() {
this.tip.string = "Size_changed successd";
}
this.basicNode.on(cc.Node.EventType.SIZE_CHANGED, e, this);
this.basicNode.width += 100;
this.basicNode.height += 100;
this.basicNode.off(cc.Node.EventType.SIZE_CHANGED, e, this);
},
changeAnchor: function() {
this.resetNode();
function e() {
this.tip.string = "Anchor_changed successd";
}
this.basicNode.on(cc.Node.EventType.ANCHOR_CHANGED, e, this);
this.basicNode.anchorX -= .05;
this.basicNode.anchorY -= .1;
this.basicNode.off(cc.Node.EventType.ANCHOR_CHANGED, e, this);
},
changeColor: function() {
this.resetNode();
function e() {
this.tip.string = "Color_changed successd";
}
this.basicNode.on(cc.Node.EventType.COLOR_CHANGED, e, this);
this.basicNode.color = new cc.Color(100, 100, 100);
this.basicNode.off(cc.Node.EventType.COLOR_CHANGED, e, this);
},
addingChild: function() {
function e(e) {
this.tip.string = "Add_child successd\n zIndex order: " + this.getChildrenContent();
console.log(e);
}
this.preNode.on(cc.Node.EventType.CHILD_ADDED, e, this);
if (2 === this.preNode.children.length) {
this.preNode.addChild(this.childNode);
this.preNode.off(cc.Node.EventType.CHILD_ADDED, e, this);
} else i.createTips("Only support when there is 2 stars existing");
},
removingChild: function() {
this.resetChildNode();
function e(e) {
this.tip.string = "Remove_child successd\n zIndex order: " + this.getChildrenContent();
console.log(e);
}
this.preNode.on(cc.Node.EventType.CHILD_REMOVED, e, this);
if (3 === this.preNode.children.length) {
this.preNode.removeChild(this.childNode);
this.preNode.off(cc.Node.EventType.CHILD_REMOVED, e, this);
} else i.createTips("Only support when there is 3 stars existing");
},
reorderChild: function() {
this.resetChildNode();
function e(e) {
this.tip.string = "Reorder_child successd\n zIndex order: " + this.getChildrenContent();
console.log(e);
}
this.preNode.on(cc.Node.EventType.CHILD_REORDER, e, this);
this.preNode.children[0].zIndex = 10;
this.preNode.sortAllChildren();
this.preNode.off(cc.Node.EventType.CHILD_REORDER, e, this);
},
changeGroup: function() {
this.resetNode();
function e(e) {
this.tip.string = "Group_changed successd: " + this.basicNode.group;
console.log(e);
}
this.basicNode.on(cc.Node.EventType.GROUP_CHANGED, e, this);
this.basicNode.group = "Collider";
this.basicNode.off(cc.Node.EventType.GROUP_CHANGED, e, this);
},
resetNode: function() {
this.basicNode.x = -200;
this.basicNode.y = 75;
this.basicNode.scaleX = 1;
this.basicNode.scaleY = 1;
this.basicNode.width = 256;
this.basicNode.height = 256;
this.basicNode.anchorX = .5;
this.basicNode.anchorY = .5;
this.basicNode.color = new cc.Color(255, 255, 255);
this.basicNode.group = "Default";
},
resetChildNode: function() {
for (var e = this.preNode.children, t = 0; t < e.length; t++) switch (e[t].name) {
case "star1":
e[t].zIndex = 0;
break;

case "star2":
e[t].zIndex = 1;
break;

case "star3":
e[t].zIndex = 2;
}
this.preNode.sortAllChildren();
},
getChildrenContent: function() {
for (var e = "", t = this.preNode.children.sort(function(e, t) {
return e.zIndex - t.zIndex;
}), i = t[0], s = 0; s < t.length; s++) {
var n = t[s];
n.zIndex > i.zIndex && (i = n);
e += n.name + " ";
n.color = new cc.Color(255, 255, 255);
}
i.color = new cc.Color(255, 0, 0);
return e;
}
});
cc._RF.pop();
}, {
TipsManager: "TipsManager"
} ],
Bullet: [ function(e, t) {
"use strict";
cc._RF.push(t, "20d7dzfVhZNh4gNZzwaQgEl", "Bullet");
cc.Class({
extends: cc.Component,
properties: {
speed: 100
},
onLoad: function() {},
onCollisionEnter: function() {
this.node.destroy();
},
update: function(e) {
this.node.y += this.speed * e;
}
});
cc._RF.pop();
}, {} ],
ButtonTransition: [ function(e, t) {
"use strict";
cc._RF.push(t, "d6525ck4GdCHbg0bUMMfDYY", "ButtonTransition");
cc.Class({
extends: cc.Component,
properties: {
btn: cc.Button
},
onInteractable: function(e) {
this.btn.interactable = e.isChecked;
},
onColorTransition: function() {
this.btn.transition = cc.Button.Transition.COLOR;
},
onSpriteTransition: function() {
this.btn.transition = cc.Button.Transition.SPRITE;
},
onScaleTransition: function() {
this.btn.transition = cc.Button.Transition.SCALE;
}
});
cc._RF.pop();
}, {} ],
CameraController: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "fa80dEAmgNHnLqhex15JFoQ", "CameraController");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = cc.Vec3, u = cc.Quat, d = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.translateDelta = 1;
t.rotateDelta = 5;
t._rotateDelta = 0;
t._temp_vec3 = new l();
t._temp_quat = new u();
t._quat = new u();
return t;
}
t.prototype.start = function() {
this._rotateDelta = cc.math.toRadian(this.rotateDelta);
};
t.prototype.translate = function(e, t, i) {
l.set(this._temp_vec3, e * this.translateDelta * i, 0, t * this.translateDelta * i);
this.node.x += this._temp_vec3.x;
this.node.y += this._temp_vec3.y;
this.node.z += this._temp_vec3.z;
};
t.prototype.rotate = function(e, t, i) {
u.fromEuler(this._temp_quat, t * this.rotateDelta * i, e * this.rotateDelta * i, 0);
u.normalize(this._temp_quat, this._temp_quat);
this.node.getRotation(this._quat);
this._quat.multiply(this._temp_quat);
this.node.setRotation(this._quat);
};
t.prototype.onPushJoystick = function(e, t) {
switch (t) {
case "F":
this.translate(0, -1, .2);
break;

case "B":
this.translate(0, 1, .2);
break;

case "L":
this.translate(-1, 0, .2);
break;

case "R":
this.translate(1, 0, .2);
break;

case "U":
this.rotate(0, 1, .2);
break;

case "D":
this.rotate(0, -1, .2);
break;

case "RL":
this.rotate(1, 0, .2);
break;

case "RR":
this.rotate(-1, 0, .2);
}
};
o([ r ], t.prototype, "translateDelta", void 0);
o([ r ], t.prototype, "rotateDelta", void 0);
return o([ c ], t);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {} ],
ColliderListener: [ function(e, t) {
"use strict";
cc._RF.push(t, "9d60fXxtXFNeI79PM6EXYuZ", "ColliderListener");
cc.Class({
extends: cc.Component,
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !0;
this.touchingNumber = 0;
},
onCollisionEnter: function() {
this.node.color = cc.Color.RED;
this.touchingNumber++;
},
onCollisionStay: function() {},
onCollisionExit: function() {
this.touchingNumber--;
0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
}
});
cc._RF.pop();
}, {} ],
ComeBackToAssetLoad: [ function(e, t) {
"use strict";
cc._RF.push(t, "cb585k+cxFKjohloTN1+FuU", "ComeBackToAssetLoad");
cc.Class({
extends: cc.Component,
onComeBlack: function() {
cc.director.loadScene("AssetLoading.fire");
}
});
cc._RF.pop();
}, {} ],
CreateClipCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "0c450SopmNKmbcQu50ror3a", "CreateClipCtrl");
cc.Class({
extends: cc.Component,
properties: {
atlas: null
},
onLoad: function() {
var e = this, t = this.getComponent(cc.Animation);
cc.resources.load("test_assets/atlas", cc.SpriteAtlas, function(i, s) {
e.atlas = s.addRef();
var n = s.getSpriteFrames(), o = cc.AnimationClip.createWithSpriteFrames(n, 10);
o.name = "run";
o.wrapMode = cc.WrapMode.Loop;
t.addClip(o);
t.play("run");
});
},
onDestroy: function() {
this.atlas.decRef();
this.atlas = null;
}
});
cc._RF.pop();
}, {} ],
CurveAnimation: [ function(e, t) {
"use strict";
cc._RF.push(t, "20246VSYL1F6qh0RGAPZpcH", "CurveAnimation");
cc.Class({
extends: cc.Component,
properties: {
size: {
default: null,
type: cc.CurveRange,
serializable: !0
},
sheep: {
default: null,
type: cc.Sprite,
serializable: !0
}
},
start: function() {},
onEnable: function() {
this.duration = 10;
this._time = 0;
},
update: function(e) {
this._time += e;
this._time >= this.duration && (this._time = 0);
var t = this.size.evaluate(this._time / this.duration);
this.sheep.node.setScale(t, t);
}
});
cc._RF.pop();
}, {} ],
CustomEvent: [ function(e, t) {
"use strict";
cc._RF.push(t, "5cc23aoYcxIKazRFwKWGEI7", "CustomEvent");
cc.Class({
extends: cc.Component,
onLoad: function() {
this.getComponent("TouchEvent")._callback = function() {
this.node.emit("CUSTOM_EVENT");
}.bind(this);
var e = cc.find("Canvas/add"), t = cc.find("Canvas/cancel");
function i() {
this.runAction(cc.sequence(cc.scaleTo(.5, 2, 1), cc.scaleTo(.25, 1, 1)));
}
this.node.on("CUSTOM_EVENT", i, e);
this.node.on("CUSTOM_EVENT", i, t);
}
});
cc._RF.pop();
}, {} ],
DeferredLoading: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "913f0DeXrtBvoJoIgZLDjkI", "DeferredLoading");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = (a.property, function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {};
return o([ c ], t);
}(cc.Component));
i.default = r;
cc._RF.pop();
}, {} ],
DestroySelf: [ function(e, t) {
"use strict";
cc._RF.push(t, "c07302m/oFJeIq2igPCJbWE", "DestroySelf");
cc.Class({
extends: cc.Component,
onLoad: function() {
console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function() {
console.log("Pos: " + this.node.x + ", " + this.node.y);
this.node.destroy();
}, this)));
}
});
cc._RF.pop();
}, {} ],
DeviceMotionCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "189c1ckoZZHULnR52/pnCkv", "DeviceMotionCtrl");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
speed: 200,
target: cc.Node,
btn_label: cc.Label,
_time: 0,
_range: cc.v2(0, 0),
_acc: cc.v2(0, 0)
},
onLoad: function() {
this._enabled = !1;
var e = cc.view.getVisibleSize();
this._range.x = e.width / 2 - this.target.width / 2;
this._range.y = e.height / 2 - this.target.height / 2;
cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
},
onOpenAccelerometer: function() {
this._enabled = !this._enabled;
this._enabled ? this.btn_label.textKey = i.t("cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2") : this.btn_label.textKey = i.t("cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1");
if (!this._enabled) {
this._acc.x = 0;
this._acc.y = 0;
this._time = 0;
}
cc.systemEvent.setAccelerometerEnabled(this._enabled);
},
onDestroy: function() {
cc.systemEvent.setAccelerometerEnabled(!1);
cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
},
onDeviceMotionEvent: function(e) {
this._acc.x = e.acc.x;
this._acc.y = e.acc.y;
},
update: function(e) {
var t = this.target, i = this._range;
this._time += 5;
t.x += this._acc.x * e * (this.speed + this._time);
t.x = cc.misc.clampf(t.x, -i.x, i.x);
t.y += this._acc.y * e * (this.speed + this._time);
t.y = cc.misc.clampf(t.y, -i.y, i.y);
(t.x <= -i.x || t.x >= i.x || t.y <= -i.y || t.y >= i.y) && (this._time = 0);
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
DownloaderCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "354a9KeL3pPRKzLyRBzHqyl", "DownloaderCtrl");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
sprite: cc.Sprite,
imgUrl: "https://download.cocos.com/test-case/logo.png",
txtUrl: "https://download.cocos.com/test-case/LICENSE.md",
tempImgUrl: "https://www.cocos.com/wp-content/uploads/2018/03/%E9%BB%98%E8%AE%A4%E6%A0%87%E9%A2%98_%E5%85%AC%E4%BC%97%E5%8F%B7%E5%BA%95%E9%83%A8%E4%BA%8C%E7%BB%B4%E7%A0%81_2018.03.08.png",
audioUrl: "https://download.cocos.com/test-case/ss.mp3",
_downloader: null,
_imgTask: null,
_txtTask: null,
_audioTask: null,
_storagePath: "",
_inited: !1,
_downloading: !1
},
onLoad: function() {
this._downloader = new jsb.Downloader();
this._downloader.setOnFileTaskSuccess(this.onSucceed.bind(this));
this._downloader.setOnTaskProgress(this.onProgress.bind(this));
this._downloader.setOnTaskError(this.onError.bind(this));
this._storagePath = jsb.fileUtils.getWritablePath() + "/example-cases/downloader/";
this._inited = jsb.fileUtils.createDirectory(this._storagePath);
this._inited || (this.label.string = "Failed to create storage path, downloader won't work correctly");
this._audioID = -1;
},
onSucceed: function(e) {
var t = this;
-1 !== this._audioID && cc.audioEngine.stop(this._audioID);
switch (e.requestURL) {
case this.imgUrl:
cc.assetManager.loadRemote(e.storagePath, function(e, i) {
t.sprite.spriteFrame = new cc.SpriteFrame(i);
t.sprite.node.active = !0;
t.label.node.active = !1;
});
break;

case this.txtUrl:
var i = jsb.fileUtils.getStringFromFile(e.storagePath);
this.sprite.node.active = !1;
this.label.node.active = !0;
this.label.string = i.substr(0, 350);
break;

case this.audioUrl:
this.sprite.node.active = !1;
this.label.node.active = !0;
this.label.string = "Audio Download Complete.";
cc.assetManager.loadRemote(e.storagePath, function(e, i) {
t._audioID = cc.audioEngine.play(i);
});
}
this._downloading = !1;
},
onProgress: function() {},
onError: function(e, t, i, s) {
this._downloading = !1;
this.sprite.node.active = !1;
this.label.node.active = !0;
this.label.string = "Failed to download file (" + e.requestURL + "): " + s + "(" + t + ")";
},
downloadImg: function() {
if (this.imgUrl && this._inited && !this._downloading) {
this.sprite.node.active = !1;
this.label.node.active = !0;
this.label.string = "Downloading image";
this._imgTask = this._downloader.createDownloadFileTask(this.imgUrl, this._storagePath + "download1.png");
this._downloading = !0;
}
},
loadImg: function() {
var e = this;
if (this.tempImgUrl && this._inited && !this._downloading) {
this._downloading = !0;
this.label.string = "Downloading image (mem)";
cc.assetManager.loadRemote(this.tempImgUrl, function(t, i) {
e._downloading = !1;
if (t) console.log("Load remote image failed: " + t); else {
e.sprite.spriteFrame = new cc.SpriteFrame(i);
e.sprite.node.active = !0;
e.label.node.active = !1;
cc.audioEngine.stop(e._audioID);
}
});
}
},
downloadTxt: function() {
if (this.txtUrl && this._inited && !this._downloading) {
this.label.node.active = !0;
this.sprite.node.active = !1;
this.label.string = "Downloading Text";
this._downloading = !0;
this._txtTask = this._downloader.createDownloadFileTask(this.txtUrl, this._storagePath + "imagine.txt");
}
},
downloadAudio: function() {
if (this.audioUrl && this._inited && !this._downloading) {
this.sprite.node.active = !1;
this.label.node.active = !0;
this.label.string = "Downloading Audio";
-1 !== this._audioID && cc.audioEngine.stop(this._audioID);
this._downloading = !0;
this._audioTask = this._downloader.createDownloadFileTask(this.audioUrl, this._storagePath + "audioTest.mp3");
}
},
onDisable: function() {
cc.audioEngine.stop(this._audioID);
}
});
cc._RF.pop();
}, {} ],
DragonBonesAttach: [ function(e, t) {
"use strict";
cc._RF.push(t, "dd42bvM/xJDHKcFipNcxQZJ", "DragonBonesAttach");
cc.Class({
extends: cc.Component,
properties: {
skeleton: {
type: dragonBones.ArmatureDisplay,
default: null
},
targetPrefab: {
type: cc.Prefab,
default: null
},
modeLabel: {
type: cc.Label,
default: null
},
redBoneName: "",
greenBoneName: "",
blueBoneName: ""
},
generateAllNodes: function() {
var e = this.skeleton.attachUtil;
e.generateAllAttachedNodes();
var t = e.getAttachedNodes(this.redBoneName), i = t[0];
if (i) {
var s = cc.instantiate(this.targetPrefab);
s.color = cc.color(255, 0, 0);
i.addChild(s);
}
if (i = (t = e.getAttachedNodes(this.blueBoneName))[0]) {
var n = cc.instantiate(this.targetPrefab);
n.color = cc.color(0, 0, 255);
i.addChild(n);
}
},
destroyUnusual: function() {
var e = this.skeleton.attachUtil.getAttachedNodes("root")[0];
e && e.destroy();
},
destroyAllNodes: function() {
this.skeleton.attachUtil.destroyAllAttachedNodes();
},
generateSomeNodes: function() {
var e = this.skeleton.attachUtil.generateAttachedNodes(this.greenBoneName)[0];
if (e) {
var t = cc.instantiate(this.targetPrefab);
t.color = cc.color(0, 255, 0);
e.addChild(t);
}
},
destroySomeNodes: function() {
this.skeleton.attachUtil.destroyAttachedNodes(this.greenBoneName);
},
changeMode: function() {
if (this.skeleton.isAnimationCached()) {
this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
this.modeLabel.string = "cache";
} else {
this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);
this.modeLabel.string = "realtime";
}
}
});
cc._RF.pop();
}, {} ],
DragonBonesCollider: [ function(e, t) {
"use strict";
cc._RF.push(t, "bc72dk4AitNwKGh/9zb4UjM", "DragonBonesCollider");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.collisionManager = cc.director.getCollisionManager();
this.collisionManager.enabled = !0;
this.collisionManager.enabledDebugDraw = !1;
cc.director.once(cc.Director.EVENT_AFTER_DRAW, function() {
this.collisionManager.enabledDebugDraw = !0;
}.bind(this));
this.stayCount = 0;
},
onDestroy: function() {
this.collisionManager.enabledDebugDraw = !1;
},
onCollisionEnter: function() {
this.stayCount++;
},
onCollisionExit: function() {
this.stayCount--;
},
update: function() {
this.stayCount > 0 ? this.node.color = cc.color(0, 200, 200) : this.node.color = cc.color(255, 255, 255);
}
});
cc._RF.pop();
}, {} ],
DragonBonesCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "51a99xQI4JAXqBjenKXSIjl", "DragonBonesCtrl");
if (!cc.runtime) {
var i = [ "weapon_1502b_r", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d", "weapon_1005e" ], s = [ "weapon_1502b_l", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d" ], n = [ "mecha_1502b", "skin_a", "skin_b", "skin_c" ];
cc.Class({
extends: cc.Component,
editor: {
requireComponent: dragonBones.ArmatureDisplay
},
properties: {
touchHandler: {
default: null,
type: cc.Node
},
upButton: {
default: null,
type: cc.Node
},
downButton: {
default: null,
type: cc.Node
},
leftButton: {
default: null,
type: cc.Node
},
rightButton: {
default: null,
type: cc.Node
},
weaponArmature: {
default: null,
type: dragonBones.ArmatureDisplay
},
skinArmature: {
default: null,
type: dragonBones.ArmatureDisplay
},
_bullets: [],
_left: !1,
_right: !1,
_isJumpingA: !1,
_isJumpingB: !1,
_isSquating: !1,
_isAttackingA: !1,
_isAttackingB: !1,
_weaponRIndex: 0,
_weaponLIndex: 0,
_skinIndex: 0,
_faceDir: 1,
_aimDir: 0,
_moveDir: 0,
_aimRadian: 0,
_speedX: 0,
_speedY: 0,
_armature: null,
_armatureDisplay: null,
_weaponR: null,
_weaponL: null,
_aimState: null,
_walkState: null,
_attackState: null,
_target: cc.v2(0, 0)
},
onLoad: function() {
var e = this;
this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
this._armature = this._armatureDisplay.armature();
this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this);
this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this);
this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this);
this._weaponR = this._armature.getSlot("weapon_r").childArmature;
this._weaponL = this._armature.getSlot("weapon_l").childArmature;
this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
for (var t = 1; t < n.length; t++) this.skinArmature.armatureName = n[t];
for (var s = 1; s < i.length; s++) this.weaponArmature.armatureName = i[s];
this._updateAnimation();
if (this.touchHandler) {
this.touchHandler.on(cc.Node.EventType.TOUCH_START, function(t) {
e._mouseDown_ = !0;
var i = t.getTouches()[0].getLocation();
e.aim(i.x, i.y);
e.attack(!0);
}, this);
this.touchHandler.on(cc.Node.EventType.TOUCH_END, function() {
e._mouseDown_ = !1;
e.attack(!1);
}, this);
this.touchHandler.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
var i = t.getTouches()[0].getLocation();
e.aim(i.x, i.y);
}, this);
}
this.upButton && this.upButton.on(cc.Node.EventType.TOUCH_START, function() {
e.jump();
}, this);
if (this.downButton) {
this.downButton.on(cc.Node.EventType.TOUCH_START, function() {
e.squat(!0);
}, this);
this.downButton.on(cc.Node.EventType.TOUCH_END, function() {
e.squat(!1);
}, this);
this.downButton.on(cc.Node.EventType.TOUCH_CANCEL, function() {
e.squat(!1);
}, this);
}
if (this.leftButton) {
this.leftButton.on(cc.Node.EventType.TOUCH_START, function() {
e._left = !0;
e._updateMove(-1);
}, this);
this.leftButton.on(cc.Node.EventType.TOUCH_END, function() {
e._left = !1;
e._updateMove(-1);
}, this);
this.leftButton.on(cc.Node.EventType.TOUCH_CANCEL, function() {
e._left = !1;
e._updateMove(-1);
}, this);
}
if (this.rightButton) {
this.rightButton.on(cc.Node.EventType.TOUCH_START, function() {
e._right = !0;
e._updateMove(1);
}, this);
this.rightButton.on(cc.Node.EventType.TOUCH_END, function() {
e._right = !1;
e._updateMove(1);
}, this);
this.rightButton.on(cc.Node.EventType.TOUCH_CANCEL, function() {
e._right = !1;
e._updateMove(1);
}, this);
}
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(e) {
this._keyHandler(e.keyCode, !0);
}, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(e) {
this._keyHandler(e.keyCode, !1);
}, this);
},
_keyHandler: function(e, t) {
switch (e) {
case cc.macro.KEY.a:
case cc.macro.KEY.left:
this._left = t;
this._updateMove(-1);
break;

case cc.macro.KEY.d:
case cc.macro.KEY.right:
this._right = t;
this._updateMove(1);
break;

case cc.macro.KEY.w:
case cc.macro.KEY.up:
t && this.jump();
break;

case cc.macro.KEY.s:
case cc.macro.KEY.down:
this.squat(t);
break;

case cc.macro.KEY.q:
t && this.switchWeaponR();
break;

case cc.macro.KEY.e:
t && this.switchWeaponL();
break;

case cc.macro.KEY.space:
if (t) {
this.switchWeaponR();
this.switchWeaponL();
}
break;

default:
return;
}
},
_updateMove: function(e) {
this._left && this._right ? this.move(e) : this._left ? this.move(-1) : this._right ? this.move(1) : this.move(0);
},
move: function(e) {
if (this._moveDir !== e) {
this._moveDir = e;
this._updateAnimation();
}
},
jump: function() {
if (!this._isJumpingA) {
this._isJumpingA = !0;
this._armature.animation.fadeIn("jump_1", -1, -1, 0, "normal");
this._walkState = null;
}
},
squat: function(e) {
if (this._isSquating !== e) {
this._isSquating = e;
this._updateAnimation();
}
},
attack: function(e) {
this._isAttackingA != e && (this._isAttackingA = e);
},
switchWeaponL: function() {
this._weaponL.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
this._weaponLIndex++;
this._weaponLIndex >= s.length && (this._weaponLIndex = 0);
var e = s[this._weaponLIndex], t = dragonBones.CCFactory.getInstance();
this._weaponL = t.buildArmature(e);
this._armature.getSlot("weapon_l").childArmature = this._weaponL;
this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
},
switchWeaponR: function() {
this._weaponR.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
this._weaponRIndex++;
this._weaponRIndex >= i.length && (this._weaponRIndex = 0);
var e = i[this._weaponRIndex], t = dragonBones.CCFactory.getInstance();
this._weaponR = t.buildArmature(e);
this._armature.getSlot("weapon_r").childArmature = this._weaponR;
this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
},
switchSkin: function() {
this._skinIndex++;
this._skinIndex >= n.length && (this._skinIndex = 0);
var e = n[this._skinIndex], t = dragonBones.CCFactory.getInstance(), i = t.getArmatureData(e).defaultSkin;
t.replaceSkin(this._armatureDisplay.armature(), i, !1, [ "weapon_l", "weapon_r" ]);
},
aim: function(e, t) {
0 === this._aimDir && (this._aimDir = 10);
this._target = this.node.parent.convertToNodeSpaceAR(cc.v2(e, t));
},
update: function(e) {
this._updatePosition();
this._updateAim();
this._updateAttack();
this._enterFrameHandler(e);
},
onDisable: function() {
for (var e = this._bullets.length - 1; e >= 0; e--) this._bullets[e].enabled = !1;
this._bullets = [];
},
addBullet: function(e) {
this._bullets.push(e);
},
_enterFrameHandler: function() {
for (var e = this._bullets.length - 1; e >= 0; e--) this._bullets[e].update() && this._bullets.splice(e, 1);
},
_animationEventHandler: function(e) {
if (e.type === dragonBones.EventObject.FADE_IN_COMPLETE) if ("jump_1" === e.animationState.name) {
this._isJumpingB = !0;
this._speedY = 20;
0 != this._moveDir && (this._moveDir * this._faceDir > 0 ? this._speedX = 5.04 * this._faceDir : this._speedX = -3.6 * this._faceDir);
this._armature.animation.fadeIn("jump_2", -1, -1, 0, "normal").resetToPose = !1;
} else "jump_4" === e.animationState.name && this._updateAnimation(); else if (e.type === dragonBones.EventObject.FADE_OUT_COMPLETE) {
if ("attack_01" === e.animationState.name) {
this._isAttackingB = !1;
this._attackState = null;
}
} else if (e.type === dragonBones.EventObject.COMPLETE && "jump_4" === e.animationState.name) {
this._isJumpingA = !1;
this._isJumpingB = !1;
this._updateAnimation();
}
},
_frameEventHandler: function(e) {
if ("fire" === e.name) {
var t = cc.v2(e.bone.global.x, e.bone.global.y), i = e.armature.display.node.convertToWorldSpace(t);
this._fire(i);
}
},
_fire: function(e) {
e.x += 2 * Math.random() - 1;
e.y += 2 * Math.random() - 1;
var t = this._armatureDisplay.buildArmature("bullet_01"), i = this._armatureDisplay.buildArmature("fire_effect_01"), s = this._faceDir < 0 ? Math.PI - this._aimRadian : this._aimRadian, n = new o();
n.init(this.node.parent, t, i, s + .02 * Math.random() - .01, 40, e);
this.addBullet(n);
},
_updateAnimation: function() {
if (!this._isJumpingA) if (this._isSquating) {
this._speedX = 0;
this._armature.animation.fadeIn("squat", -1, -1, 0, "normal").resetToPose = !1;
this._walkState = null;
} else if (0 === this._moveDir) {
this._speedX = 0;
this._armature.animation.fadeIn("idle", -1, -1, 0, "normal").resetToPose = !1;
this._walkState = null;
} else {
if (!this._walkState) {
this._walkState = this._armature.animation.fadeIn("walk", -1, -1, 0, "normal");
this._walkState.resetToPose = !1;
}
this._moveDir * this._faceDir > 0 ? this._walkState.timeScale = 1.4 : this._walkState.timeScale = -1;
this._moveDir * this._faceDir > 0 ? this._speedX = 5.04 * this._faceDir : this._speedX = -3.6 * this._faceDir;
}
},
_updatePosition: function() {
if (0 !== this._speedX) {
this.node.x += this._speedX;
var e = -cc.visibleRect.width / 2, t = cc.visibleRect.width / 2;
this.node.x < e ? this.node.x = e : this.node.x > t && (this.node.x = t);
}
if (0 != this._speedY) {
this._speedY > 5 && this._speedY + -.6 <= 5 && (this._armature.animation.fadeIn("jump_3", -1, -1, 0, "normal").resetToPose = !1);
this._speedY += -.6;
this.node.y += this._speedY;
if (this.node.y < -200) {
this.node.y = -200;
this._speedY = 0;
this._armature.animation.fadeIn("jump_4", -1, -1, 0, "normal").resetToPose = !1;
}
}
},
_updateAim: function() {
if (this._mouseDown_ && 0 !== this._aimDir) {
this._faceDir = this._target.x > this.node.x ? 1 : -1;
if (this.node.scaleX * this._faceDir < 0) {
this.node.scaleX *= -1;
this._moveDir && this._updateAnimation();
}
var e = this._armature.getBone("chest").global.y * this.node.scaleY;
if (this._faceDir > 0) this._aimRadian = Math.atan2(this._target.y - this.node.y - e, this._target.x - this.node.x); else {
this._aimRadian = Math.PI - Math.atan2(this._target.y - this.node.y - e, this._target.x - this.node.x);
this._aimRadian > Math.PI && (this._aimRadian -= 2 * Math.PI);
}
var t;
t = this._aimRadian > 0 ? 1 : -1;
if (this._aimDir != t) {
this._aimDir = t;
this._aimDir >= 0 ? this._aimState = this._armature.animation.fadeIn("aim_up", -1, -1, 0, "aim") : this._aimState = this._armature.animation.fadeIn("aim_down", -1, -1, 0, "aim");
this._aimState.resetToPose = !1;
}
this._aimState.weight = Math.abs(this._aimRadian / Math.PI * 2);
this._armature.invalidUpdate();
}
},
_updateAttack: function() {
if (this._isAttackingA && !this._isAttackingB) {
this._isAttackingB = !0;
this._attackState = this._armature.animation.fadeIn("attack_01", -1, -1, 0, "attack", dragonBones.AnimationFadeOutMode.SameGroup);
this._attackState.resetToPose = !1;
this._attackState.autoFadeOutTime = this._attackState.fadeTotalTime;
}
}
});
var o = cc.Class({
name: "DragonBullet",
_speedX: 0,
_speedY: 0,
_armature: null,
_armatureDisplay: null,
_effect: null,
init: function(e, t, i, s, n, o) {
this._speedX = Math.cos(s) * n;
this._speedY = Math.sin(s) * n;
var a = e.convertToNodeSpaceAR(o);
t.playAnimation("idle");
var c = t.node;
c.setPosition(a);
c.angle = s * cc.macro.DEG;
this._armature = t;
if (i) {
this._effect = i;
var r = this._effect.node;
r.angle = s * cc.macro.DEG;
r.setPosition(a);
r.scaleX = 1 + 1 * Math.random();
r.scaleY = 1 + .5 * Math.random();
Math.random() < .5 && (r.scaleY *= -1);
this._effect.playAnimation("idle");
e.addChild(r);
}
e.addChild(c);
},
update: function() {
var e = this._armature.node;
e.x += this._speedX;
e.y += this._speedY;
var t = e.parent.convertToWorldSpaceAR(e.getPosition());
if (t.x < -100 || t.x >= cc.visibleRect.width + 100 || t.y < -100 || t.y >= cc.visibleRect.height + 100) {
this.doClean();
return !0;
}
return !1;
},
onDisable: function() {
this.doClean();
},
doClean: function() {
this._armature.node.removeFromParent();
this._effect && this._effect.node.removeFromParent();
}
});
}
cc._RF.pop();
}, {} ],
DragonBonesMode: [ function(e, t) {
"use strict";
cc._RF.push(t, "e8dc46nxuNKebKNWx98iFc4", "DragonBonesMode");
cc.Class({
extends: cc.Component,
properties: {
grayMaterial: cc.Material,
normalMaterial: cc.Material,
db0: dragonBones.ArmatureDisplay,
db1: dragonBones.ArmatureDisplay,
db2: dragonBones.ArmatureDisplay,
batchLabel: cc.Label,
cacheLabel: cc.Label,
matLabel: cc.Label
},
onGray: function() {
this.isGray = !this.isGray;
var e = "gray";
this.isGray && (e = "normal");
this.matLabel.string = e;
var t = this.grayMaterial;
this.isGray || (t = this.normalMaterial);
this.db0.setMaterial(0, t);
this.db0.markForRender(!0);
this.db1.setMaterial(0, t);
this.db1.markForRender(!0);
this.db2.setMaterial(0, t);
this.db2.markForRender(!0);
},
onBatch: function() {
this.isBatch = !this.isBatch;
var e = "batch";
this.isBatch && (e = "no batch");
this.batchLabel.string = e;
this.db0.enableBatch = this.isBatch;
this.db1.enableBatch = this.isBatch;
this.db2.enableBatch = this.isBatch;
},
onCache: function() {
this.isCache = !this.isCache;
var e = "cache";
this.isCache && (e = "no cache");
this.cacheLabel.string = e;
var t = dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE;
this.isCache || (t = dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
this.db0.setAnimationCacheMode(t);
this.db1.setAnimationCacheMode(t);
this.db2.setAnimationCacheMode(t);
}
});
cc._RF.pop();
}, {} ],
EditBoxEvent: [ function(e, t) {
"use strict";
cc._RF.push(t, "5984fyb0ONArqT4eV/OjCgP", "EditBoxEvent");
cc.Class({
extends: cc.Component,
properties: {
editBox: cc.EditBox,
eventDisplay: cc.Label,
_isEditingReturn: !1
},
editingDidBegan: function() {
this.eventDisplay.string = "editing did began";
},
textChanged: function(e) {
this.eventDisplay.string = "text changed: " + e;
},
editingDidEnded: function() {
if (this._isEditingReturn) {
this.eventDisplay.string = "editing returned and ended";
this._isEditingReturn = !1;
} else this.eventDisplay.string = "editing did ended";
},
editingReturn: function() {
this._isEditingReturn = !0;
}
});
cc._RF.pop();
}, {} ],
EditboxCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "dd654DFPoRNVKRWOuQdLiEE", "EditboxCtrl");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
singleLineText: {
default: null,
type: cc.EditBox
},
singleLinePassword: {
default: null,
type: cc.EditBox
},
multiLineText: {
default: null,
type: cc.EditBox
},
showEditorBoxLabel: {
default: null,
type: cc.Label
}
},
onLoad: function() {},
singleLineEditBoxDidBeginEditing: function(e) {
cc.log(e.node.name + " single line editBoxDidBeginEditing");
},
singleLineEditBoxDidChanged: function(e, t) {
cc.log(t.node.name + " single line editBoxDidChanged: " + e);
},
singleLineEditBoxDidEndEditing: function(e) {
cc.log(e.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
},
singleLinePasswordEditBoxDidBeginEditing: function(e) {
cc.log(e.node.name + " single line password editBoxDidBeginEditing");
},
singleLinePasswordEditBoxDidChanged: function(e, t) {
cc.log(t.node.name + " single line password editBoxDidChanged: " + e);
},
singleLinePasswordEditBoxDidEndEditing: function(e) {
cc.log(e.node.name + " single line password editBoxDidEndEditing: " + this.singleLinePassword.string);
},
multiLinePasswordEditBoxDidBeginEditing: function(e) {
cc.log(e.node.name + " multi line editBoxDidBeginEditing");
},
multiLinePasswordEditBoxDidChanged: function(e, t) {
cc.log(t.node.name + " multi line editBoxDidChanged: " + e);
},
multiLinePasswordEditBoxDidEndEditing: function(e) {
cc.log(e.node.name + " multi line editBoxDidEndEditing: " + this.multiLineText.string);
},
buttonClicked: function() {
cc.log("button Clicked!");
"" !== this.singleLineText.string ? this.showEditorBoxLabel.string = i.t("cases/02_ui/07_editBox/editbox.js.1") + this.singleLineText.string : this.showEditorBoxLabel.string = "";
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
Helpers: [ function(e, t) {
"use strict";
cc._RF.push(t, "c8640M3ozRErrV/Go3uTknt", "Helpers");
if (cc.runtime) {
cc.LoaderLayer.setUseDefaultSource(!1);
cc.Dialog.setUseDefaultSource(!1);
}
t.exports = {
getRandomInt: function(e, t) {
return Math.floor(Math.random() * (t - e)) + e;
}
};
cc._RF.pop();
}, {} ],
HeroControl: [ function(e, t) {
"use strict";
cc._RF.push(t, "339d2dg1QpEKKxBJBzHiDJ0", "HeroControl");
cc.Class({
extends: cc.Component,
properties: {
speed: cc.v2(0, 0),
maxSpeed: cc.v2(2e3, 2e3),
gravity: -1e3,
drag: 1e3,
direction: 0,
jumpSpeed: 300,
_lastSpeedY: 0
},
onLoad: function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
this.collisionX = 0;
this.collisionY = 0;
this.jumping = !0;
this.prePosition = cc.v2();
this.preStep = cc.v2();
this.touchingNumber = 0;
},
onEnable: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !0;
},
onDisable: function() {
cc.director.getCollisionManager().enabled = !1;
cc.director.getCollisionManager().enabledDebugDraw = !1;
},
onKeyPressed: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.a:
case cc.macro.KEY.left:
this.direction = -1;
break;

case cc.macro.KEY.d:
case cc.macro.KEY.right:
this.direction = 1;
break;

case cc.macro.KEY.w:
case cc.macro.KEY.up:
if (!this.jumping) {
this.jumping = !0;
this.speed.y = this.jumpSpeed > this.maxSpeed.y ? this.maxSpeed.y : this.jumpSpeed;
this._lastSpeedY = this.jumpSpeed > this.maxSpeed.y ? this.maxSpeed.y : this.jumpSpeed;
}
}
},
onKeyReleased: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.a:
case cc.macro.KEY.left:
case cc.macro.KEY.d:
case cc.macro.KEY.right:
this.direction = 0;
}
},
onCollisionEnter: function(e, t) {
this.node.color = cc.Color.RED;
this.touchingNumber++;
var i = e.world.aabb, s = e.world.preAabb.clone(), n = t.world.aabb, o = t.world.preAabb.clone();
o.x = n.x;
s.x = i.x;
if (cc.Intersection.rectRect(o, s)) {
if (this.speed.x < 0 && o.xMax > s.xMax) {
this.node.x = s.xMax - this.node.parent.x;
this.collisionX = -1;
} else if (this.speed.x > 0 && o.xMin < s.xMin) {
this.node.x = s.xMin - o.width - this.node.parent.x;
this.collisionX = 1;
}
this.speed.x = 0;
e.touchingX = !0;
} else {
o.y = n.y;
s.y = i.y;
if (cc.Intersection.rectRect(o, s)) {
if (this.speed.y < 0 && o.yMax > s.yMax) {
this.node.y = s.yMax - this.node.parent.y;
this.jumping = !1;
this.collisionY = -1;
} else if (this.speed.y > 0 && o.yMin < s.yMin) {
this.node.y = s.yMin - o.height - this.node.parent.y;
this.collisionY = 1;
}
this.speed.y = 0;
this._lastSpeedY = 0;
e.touchingY = !0;
}
}
},
onCollisionStay: function(e) {
if (-1 === this.collisionY && "Platform" === e.node.group) {
var t = e.node.getComponent("PlatformMotion");
t && (this.node.x += t._movedDiff);
}
},
onCollisionExit: function(e) {
this.touchingNumber--;
0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
if (e.touchingX) {
this.collisionX = 0;
e.touchingX = !1;
} else if (e.touchingY) {
e.touchingY = !1;
this.collisionY = 0;
this.jumping = !0;
}
},
update: function(e) {
if (this.jumping) {
this.speed.y += this.gravity * e;
Math.abs(this.speed.y) > this.maxSpeed.y && (this.speed.y = this.speed.y > 0 ? this.maxSpeed.y : -this.maxSpeed.y);
}
if (0 === this.direction) {
if (this.speed.x > 0) {
this.speed.x -= this.drag * e;
this.speed.x <= 0 && (this.speed.x = 0);
} else if (this.speed.x < 0) {
this.speed.x += this.drag * e;
this.speed.x >= 0 && (this.speed.x = 0);
}
} else {
this.speed.x += (this.direction > 0 ? 1 : -1) * this.drag * e;
Math.abs(this.speed.x) > this.maxSpeed.x && (this.speed.x = this.speed.x > 0 ? this.maxSpeed.x : -this.maxSpeed.x);
}
this.speed.x * this.collisionX > 0 && (this.speed.x = 0);
this.prePosition.x = this.node.x;
this.prePosition.y = this.node.y;
this.preStep.x = this.speed.x * e;
this.preStep.y = this.speed.y * e;
this.node.x += this.speed.x * e;
0 === this._lastSpeedY || 0 === this.speed.y || this._lastSpeedY / Math.abs(this._lastSpeedY) == this.speed.y / Math.abs(this.speed.y) ? this.node.y += (this._lastSpeedY + this.speed.y) * e / 2 : this.node.y += -this._lastSpeedY / this.gravity / 2 * this._lastSpeedY + this.speed.y / this.gravity / 2 * this.speed.y;
this._lastSpeedY = this.speed.y;
}
});
cc._RF.pop();
}, {} ],
Hittest: [ function(e, t) {
"use strict";
cc._RF.push(t, "49ade5wuu9ILKDuwPmdIALx", "Hittest");
cc.Class({
extends: cc.Component,
properties: {
collider: {
default: null,
type: cc.PolygonCollider
},
title: {
default: null,
type: cc.Label
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !0;
this.title.string = "normal";
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
var t = e.getLocation();
cc.Intersection.pointInPolygon(t, this.collider.world.points) ? this.title.string = "Hit" : this.title.string = "Not hit";
}, this);
},
onDisable: function() {
cc.director.getCollisionManager().enabled = !1;
cc.director.getCollisionManager().enabledDebugDraw = !1;
this.node.off(cc.Node.EventType.TOUCH_START);
}
});
cc._RF.pop();
}, {} ],
InitData: [ function(e, t) {
"use strict";
cc._RF.push(t, "3ae4cUsGcBIE4q7Ksp4ZX/H", "InitData");
t.exports = {
monsterInfo: {
name: "Slime",
hp: 100,
lv: 1,
atk: 10,
defense: 5,
imageUrl: "test_assets/PurpleMonster"
}
};
cc._RF.pop();
}, {} ],
Instruction: [ function(e, t) {
"use strict";
cc._RF.push(t, "6a871gy73FDLap3Eje/2h6i", "Instruction");
cc.Class({
extends: cc.Component,
properties: {
text: {
default: "",
multiline: !0
}
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
Item: [ function(e, t) {
"use strict";
cc._RF.push(t, "920c8a5MahAhbCTSvmQvaB+", "Item");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
tmplID: 0,
itemID: 0
},
onLoad: function() {
this.node.on("touchend", function() {
console.log("Item " + this.itemID + " clicked");
}, this);
},
initItem: function(e, t) {
this.tmplID = e;
this.itemID = t;
this.label.textKey = i.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + " Item#" + this.itemID;
},
updateItem: function(e) {
this.itemID = e;
this.label.textKey = i.t("cases/02_ui/05_scrollView/Item.js.1") + this.tmplID + " Item#" + this.itemID;
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
LabelAttributes: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8aafeSxy+BNZ54pjtkdkRxp", "LabelAttributes");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label_size = null;
t.label_color = null;
t.label_align = null;
t.label_lineheight = null;
t.label_effects = null;
t.label_overflow = null;
t.text = "hello";
return t;
}
t.prototype.schedule_attributes = function(e, t, i) {
var s = this;
"undefined" == typeof i && (i = 0);
if (t.list[i]) {
var n = t.list[i];
if ("step" in n) {
for (var o = function(t) {
var i = n.duration * (t - n.from) / (n.to - n.from);
a.scheduleOnce(function() {
n.attr && (e[n.attr] = t);
}, i);
}, a = this, c = n.from; c < n.to; c += n.step) o(c);
var r = n.to;
this.scheduleOnce(function() {
n.attr && (e[n.attr] = r);
}, n.duration);
this.scheduleOnce(function() {
t.loop ? i = (i + 1) % t.list.length : i += 1;
s.schedule_attributes(e, t, i);
}, n.duration + n.step);
} else if ("values" in n) {
for (var l = n.duration / n.values.length, u = n.values, d = n.callback, p = function(t) {
h.scheduleOnce(function() {
n.attr && (e[n.attr] = u[t]);
d && d(u[t]);
}, t * l);
}, h = this, f = 0; f < n.values.length; f++) p(f);
this.scheduleOnce(function() {
n.attr && (e[n.attr] = u[u.length - 1]);
d && d(u[u.length - 1]);
}, n.duration);
this.scheduleOnce(function() {
t.loop ? i = (i + 1) % t.list.length : i += 1;
s.schedule_attributes(e, t, i);
}, n.duration + n.stay);
} else if ("update" in n) {
if (null == n._time && n.before) {
var _ = n.before(n.from, n.to);
null != _ && n.attr && (e[n.attr] = _);
n._time = 1;
}
var g = Math.floor(n.duration / n.interval), m = 0, y = n.update, b = n.from, v = n.to, C = n.after;
this.schedule(function() {
var t = y(m / g, b, v);
null != t && n.attr && (e[n.attr] = t);
if ((m += 1) >= g) {
C && C(b, v);
delete n._time;
}
}, n.interval, g, 0);
this.scheduleOnce(function() {
t.loop ? i = (i + 1) % t.list.length : i += 1;
s.schedule_attributes(e, t, i);
}, n.duration + n.stay);
}
}
};
t.prototype.start = function() {
this.setup_fontsize();
this.setup_font_color();
this.setup_label_align();
this.setup_line_height();
this.setup_label_decoration();
this.setup_label_overflow();
};
t.prototype.setup_fontsize = function() {
var e = "Update FontSize/Anchor";
this.label_size.string = e;
var t = this.label_size;
this.schedule_attributes(this.label_size, {
loop: !0,
list: [ {
attr: "fontSize",
values: [ 25, 10, 30, 22 ],
duration: 3,
stay: 1
}, {
from: new cc.Vec2(0, 0),
to: new cc.Vec2(1, 1),
update: function(e, i, s) {
var n = i.x * (1 - e) + e * s.y, o = i.y * (1 - e) + e * s.y;
t.node.setAnchorPoint(n, o);
t.string = "Update Node Anchor: " + n.toFixed(2) + ", " + o.toFixed(2);
},
duration: 3,
stay: 1,
interval: .2,
before: function() {
t.string = "Update Node Anchor";
},
after: function() {
t.string = e;
t.node.setAnchorPoint(.5, .5);
}
} ]
});
};
t.prototype.setup_font_color = function() {
this.label_color.string = "Update Font Color";
var e = this.label_color, t = e.node.color;
this.schedule_attributes(this.label_color, {
loop: !0,
list: [ {
from: new cc.Color(255, 0, 0),
to: new cc.Color(255, 255, 0),
update: function(t, i, s) {
var n = i.getR() * (1 - t) + t * s.getR(), o = i.getG() * (1 - t) + t * s.getG(), a = i.getB() * (1 - t) + t * s.getB(), c = new cc.Color(n, o, a);
e.node.color = c;
},
duration: 3,
stay: 1,
interval: .1,
before: function() {
e.string = "Update Node Color";
e.node.color = t;
e.node.opacity = 255;
},
after: function() {
e.node.color = t;
}
}, {
from: 0,
to: 255,
update: function(t, i, s) {
e.node.opacity = (1 - t) * i + s * t;
},
duration: 3,
stay: 1,
interval: .1,
before: function() {
e.string = "Update Node Alpha";
e.node.opacity = 255;
},
after: function() {
e.node.opacity = 255;
}
} ]
});
};
t.prototype.setup_label_align = function() {
this.label_align.string = "Update Label \nParamaters\nLines";
var e = this.label_align;
this.schedule_attributes(e, {
loop: !0,
list: [ {
attr: "horizontalAlign",
values: [ 0, 1, 2 ],
duration: 3,
stay: 1
}, {
attr: "verticalAlign",
values: [ 0, 1, 2 ],
duration: 3,
stay: 1
} ]
});
};
t.prototype.setup_line_height = function() {
this.label_lineheight.string = "Update Label Line Height\nSpaceing x";
var e = this.label_lineheight;
this.schedule_attributes(e, {
loop: !0,
list: [ {
attr: "lineHeight",
values: [ 10, 20, 30 ],
duration: 3,
stay: 1
}, {
attr: "spacingX",
from: 0,
to: 10,
update: function(e, t, i) {
return (1 - e) * t + e * i;
},
duration: 3,
stay: 1,
interval: .1,
after: function() {
e.spacingX = 0;
}
} ]
});
};
t.prototype.setup_label_decoration = function() {
this.label_effects.string = "Update Label LDecoration";
var e = this.label_effects;
e.fontSize = 20;
e.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
for (var t = [], i = 0; i <= 4; i++) t.push({
enableItalic: 1 == (i >> 0 & 1),
enableUnderline: 1 == (i >> 1 & 1)
});
this.schedule_attributes(e, {
loop: !0,
list: [ {
values: t,
duration: 8,
stay: 1,
callback: function(t) {
e.enableBold = t.enableBold;
e.enableUnderline = t.enableUnderline;
var i = [];
for (var s in t) i.push(s + ": " + t[s]);
e.string = i.join("\n");
}
} ]
});
};
t.prototype.setup_label_overflow = function() {
var e = "Update Label \nOverFlow\nLong Line Text\n";
this.label_overflow.string = e;
var t = this.label_overflow;
t.fontSize = 40;
var i = [ cc.Label.Overflow.NONE, cc.Label.Overflow.CLAMP, cc.Label.Overflow.RESIZE_HEIGHT, cc.Label.Overflow.SHRINK ];
this.schedule_attributes(t, {
loop: !0,
list: [ {
attr: "overflow",
values: i,
duration: 4,
stay: 1,
callback: function(i) {
t.string = e + i;
}
} ]
});
};
o([ r(cc.Label) ], t.prototype, "label_size", void 0);
o([ r(cc.Label) ], t.prototype, "label_color", void 0);
o([ r(cc.Label) ], t.prototype, "label_align", void 0);
o([ r(cc.Label) ], t.prototype, "label_lineheight", void 0);
o([ r(cc.Label) ], t.prototype, "label_effects", void 0);
o([ r(cc.Label) ], t.prototype, "label_overflow", void 0);
o([ r ], t.prototype, "text", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
LabelLocalized: [ function(e, t) {
"use strict";
cc._RF.push(t, "e4f88adp3hERoJ48DZ2PSAl", "LabelLocalized");
var i = e("i18n");
cc.Class({
extends: cc.Label,
properties: {
textKey: {
default: "TEXT_KEY",
multiline: !0,
tooltip: "Enter i18n key here",
notify: function() {
this.string = this.localizedString;
}
},
localizedString: {
override: !0,
tooltip: "Here shows the localized string of Text Key",
get: function() {
return i.t(this.textKey);
},
set: function(e) {
this.textKey = e;
}
}
},
onLoad: function() {
this._super();
this.localizedString && (this.string = this.localizedString);
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
LayoutResizeContainerCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "2bbedtV3blCVJbmf2E9h/0V", "LayoutResizeContainerCtrl");
var i = cc.Class({
name: "info",
properties: {
target: cc.Node,
num: 0
}
});
cc.Class({
extends: cc.Component,
properties: {
itemTemp: {
default: null,
type: cc.Prefab
},
targetAry: {
default: [],
type: [ i ]
}
},
onLoad: function() {
this._curTime = 0;
this._curIndex = 0;
},
_createItem: function(e, t) {
var i = cc.instantiate(this.itemTemp);
i.getComponentInChildren(cc.Label).string = t;
i.parent = e;
},
update: function(e) {
this._curTime += e;
if (this._curTime >= 1) {
this._curTime = 0;
for (var t = 0; t < this.targetAry.length; ++t) {
var i = this.targetAry[t].num, s = this.targetAry[t].target;
s && this._curIndex < i && this._createItem(s, this._curIndex);
}
this._curIndex++;
}
}
});
cc._RF.pop();
}, {} ],
ListItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "aa63bWNE8hBf4P4Sp0X2uT0", "ListItem");
var i = e("TipsManager");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
url: "",
bg: cc.Sprite,
btn: cc.Button
},
init: function(e) {
this.index = -1;
this.__name = "";
this.menu = e;
},
loadExample: function() {
this.url && i.hasSupport(this.__name) && this.menu.loadScene(this.url);
},
updateItem: function(e, t, i, s) {
var n = !s;
this.index = e;
this.node.y = t;
this.node.x = n ? 50 : 100;
this.label.string = this.__name = i;
this.url = s;
this.bg.enabled = !n;
this.btn.interactable = !n;
}
});
cc._RF.pop();
}, {
TipsManager: "TipsManager"
} ],
ListViewCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "e6458+hf5VAnIXocmvhggqC", "ListViewCtrl");
cc.Class({
extends: cc.Component,
properties: {
itemTemplate: {
default: null,
type: cc.Node
},
scrollView: {
default: null,
type: cc.ScrollView
},
spawnCount: 0,
totalCount: 0,
spacing: 0,
bufferZone: 0,
lblScrollEvent: cc.Label,
btnAddItem: cc.Button,
btnRemoveItem: cc.Button,
btnJumpToPosition: cc.Button,
lblJumpPosition: cc.Label,
lblTotalItems: cc.Label
},
onLoad: function() {
this.content = this.scrollView.content;
this.items = [];
this.initialize();
this.updateTimer = 0;
this.updateInterval = .2;
this.lastContentPosY = 0;
},
initialize: function() {
this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var e = 0; e < this.spawnCount; ++e) {
var t = cc.instantiate(this.itemTemplate);
this.content.addChild(t);
t.setPosition(0, -t.height * (.5 + e) - this.spacing * (e + 1));
t.getComponent("Item").initItem(e, e);
this.items.push(t);
}
},
getPositionInView: function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, s = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * t.length, o = 0; o < t.length; ++o) {
var a = this.getPositionInView(t[o]);
if (s) {
if (a.y < -i && t[o].y + n < 0) {
t[o].y = t[o].y + n;
var c = t[o].getComponent("Item"), r = c.itemID - t.length;
c.updateItem(r);
}
} else if (a.y > i && t[o].y - n > -this.content.height) {
t[o].y = t[o].y - n;
var l = t[o].getComponent("Item"), u = l.itemID + t.length;
l.updateItem(u);
}
}
this.lastContentPosY = this.scrollView.content.y;
this.lblTotalItems.textKey = "Total Items: " + this.totalCount;
}
},
scrollEvent: function(e, t) {
switch (t) {
case 0:
this.lblScrollEvent.string = "Scroll to Top";
break;

case 1:
this.lblScrollEvent.string = "Scroll to Bottom";
break;

case 2:
this.lblScrollEvent.string = "Scroll to Left";
break;

case 3:
this.lblScrollEvent.string = "Scroll to Right";
break;

case 4:
this.lblScrollEvent.string = "Scrolling";
break;

case 5:
this.lblScrollEvent.string = "Bounce Top";
break;

case 6:
this.lblScrollEvent.string = "Bounce bottom";
break;

case 7:
this.lblScrollEvent.string = "Bounce left";
break;

case 8:
this.lblScrollEvent.string = "Bounce right";
break;

case 9:
this.lblScrollEvent.string = "Auto scroll ended";
}
},
addItem: function() {
this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing;
this.totalCount = this.totalCount + 1;
},
removeItem: function() {
if (this.totalCount - 1 < 30) cc.error("can't remove item less than 30!"); else {
this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing;
this.totalCount = this.totalCount - 1;
this.moveBottomItemToTop();
}
},
moveBottomItemToTop: function() {
var e = (this.itemTemplate.height + this.spacing) * this.items.length, t = this.items.length, i = this.getItemAtBottom();
if (i.y + e < 0) {
i.y = i.y + e;
var s = i.getComponent("Item"), n = s.itemID - t;
s.updateItem(n);
}
},
getItemAtBottom: function() {
for (var e = this.items[0], t = 1; t < this.items.length; ++t) e.y > this.items[t].y && (e = this.items[t]);
return e;
},
scrollToFixedPosition: function() {
this.scrollView.scrollToOffset(cc.v2(0, 500), 2);
}
});
cc._RF.pop();
}, {} ],
LoadLongText: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8f9ffOfy1FLq7R8nYvyayWd", "LoadLongText");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
return t;
}
t.prototype.start = function() {
var e = this;
this.label.string = "loading";
var t = "话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下。后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。桓帝禁锢善类，崇信宦官。及桓帝崩，灵帝即位，大将军窦武、太傅陈蕃，共相辅佐。时有宦官曹节等弄权，窦武、陈蕃谋诛之，作事不密，反为所害。中涓自此愈横。\n\n        建宁二年四月望日，帝御温德殿。方升座，殿角狂风骤起，只见一条大青蛇，从梁上飞将下来，蟠于椅上。帝惊倒，左右急救入宫，百官俱奔避。须臾，蛇不见了。忽然大雷大雨，加以冰雹，落到半夜方止，坏却房屋无数。建宁四年二月，洛阳地震；又海水泛溢，沿海居民，尽被大浪卷入海中。光和元年，雌鸡化雄。六月朔，黑气十余丈，飞入温德殿中。秋七月，有虹现于玉堂；五原山岸，尽皆崩裂。种种不祥，非止一端。帝下诏问群臣以灾异之由，议郎蔡邕上疏，以为霓堕鸡化，乃妇寺干政之所致，言颇切直。帝览奏叹息，因起更衣。曹节在后窃视，悉宣告左右；遂以他事陷邕于罪，放归田里。后张让、赵忠、封谞、段圭、曹节、侯览、蹇硕、程旷、夏恽、郭胜十人朋比为奸，号为“十常侍”。帝尊信张让，呼为“阿父”，朝政日非，以致天下人心思乱，盗贼蜂起。\n        \n        \n         \n        时巨鹿郡有兄弟三人：一名张角，一名张宝，一名张梁。那张角本是个不第秀才，因入山采药，遇一老人，碧眼童颜，手执藜杖，唤角至一洞中，以天书三卷授之曰：“此名太平要术。汝得之，当代天宣化，普救世人；若萌异心，必获恶报。”角拜问姓名。老人曰：“吾乃南华老仙也。”言讫，化阵清风而去。角得此书，晓夜攻习，能呼风唤雨，号为“太平道人”。中平元年正月内，疫气流行，张角散施符水，为人治病，自称“大贤良师”。角有徒弟五百余人，云游四方，皆能书符念咒。次后徒众日多，角乃立三十六方，大方万余人，小方六七千，各立渠帅，称为将军；讹言“苍天已死，黄天当立；岁在甲子，天下大吉”；令人各以白土，书 “甲子”二字于家中大门上。青、幽、徐、冀、荆、扬、兖、豫八州之人，家家侍奉大贤良师张角名字。角遣其党马元义，暗赍金帛，结交中涓封谞，以为内应。角与二弟商议曰：“至难得者，民心也。今民心已顺，若不乘势取天下，诚为可惜。”遂一面私造黄旗，约期举事；一面使弟子唐州，驰书报封谞。唐州乃径赴省中告变。帝召大将军何进调兵擒马元义，斩之；次收封谞等一干人下狱。张角闻知事露，星夜举兵，自称“天公将军”，张宝称“地公将军”，张梁称“人公将军”；申言于众曰：“今汉运将终，大圣人出。汝等皆宜顺天从正，以乐太平。”四方百姓，裹黄巾从张角反者四五十万。贼势浩大，官军望风而靡。何进奏帝火速降诏，令各处备御，讨贼立功；一面遣中郎将卢植、皇甫嵩、朱隽，各引精兵，分三路讨之。\n        \n        \n         \n        且说张角一军，前犯幽州界分。幽州太守刘焉，乃江夏竟陵人氏，汉鲁恭王之后也；当时闻得贼兵将至，召校尉邹靖计议。靖曰：“贼兵众，我兵寡，明公宜作速招军应敌。”刘焉然其说，随即出榜招募义兵。榜文行到涿县，引出涿县中一个英雄。那人不甚好读书；性宽和，寡言语，喜怒不形于色；素有大志，专好结交天下豪杰；生得身长七尺五寸，两耳垂肩，双手过膝，目能自顾其耳，面如冠玉，唇若涂脂；中山靖王刘胜之后，汉景帝阁下玄孙；姓刘，名备，字玄德。昔刘胜之子刘贞，汉武时封涿鹿亭侯，后坐酎金失侯，因此遗这一支在涿县。玄德祖刘雄，父刘弘。弘曾举孝廉，亦尝作吏，早丧。玄德幼孤，事母至孝；家贫，贩屦织席为业。家住本县楼桑村。其家之东南，有一大桑树，高五丈余，遥望之，童童如车盖。相者云：“此家必出贵人。”玄德幼时，与乡中小儿戏于树下，曰：“我为天子，当乘此车盖。”叔父刘元起奇其言，曰：“此儿非常人也！”因见玄德家贫，常资给之。年十五岁，母使游学，尝师事郑玄、卢植；与公孙瓒等为友。及刘焉发榜招军时，玄德年已二十八岁矣。\n        \n        当日见了榜文，慨然长叹。随后一人厉声言曰：“大丈夫不与国家出力，何故长叹？”玄德回视其人，身长八尺，豹头环眼，燕颔虎须，声若巨雷，势如奔马。玄德见其形貌异常，问其姓名。其人曰：“某姓张，名飞，字翼德。世居涿郡，颇有庄田，卖酒屠猪，专好结交天下豪杰。适才见公看榜而叹，故此相问。”玄德曰：“我本汉室宗亲，姓刘，名备。今闻黄巾倡乱，有志欲破贼安民，恨力不能，故长叹耳。”飞曰：“吾颇有资财，当招募乡勇，与公同举大事，如何？”玄德甚喜，遂与同入村店中饮酒。正饮间，见一大汉，推着一辆车子，到店门首歇了；入店坐下，便唤酒保：“快斟酒来吃，我待赶入城去投军。”玄德看其人，身长九尺，髯长二尺；面如重枣，唇若涂脂；丹凤眼，卧蚕眉；相貌堂堂，威风凛凛。玄德就邀他同坐，叩其姓名。其人曰：“吾姓关，名羽，字寿长，后改云长，河东解良人也。因本处势豪，倚势凌人，被吾杀了；逃难江湖，五六年矣。今闻此处招军破贼，特来应募。”玄德遂以己志告之。云长大喜，同到张飞庄上，共议大事。\n        \n        \n         \n        飞曰：“吾庄后有一桃园，花开正盛；明日当于园中祭告天地，我三人结为兄弟，协力同心，然后可图大事。”玄德、云长齐声应曰：“如此甚好。”次日，于桃园中，备下乌牛白马祭礼等项，三人焚香，再拜而说誓曰：“念刘备、关羽、张飞，虽然异姓，既结为兄弟，则同心协力，救困扶危；上报国家，下安黎庶；不求同年同月同日生，但愿同年同月同日死。皇天后土，实鉴此心。背义忘恩，天人共戮。”誓毕，拜玄德为兄，关羽次之，张飞为弟。祭罢天地，复宰牛设酒，聚乡中勇士，得三百余人，就桃园中痛饮一醉。来日收拾军器，但恨无马匹可乘。正思虑间，人报有两个客人，引一伙伴当，赶一群马，投庄上来。玄德曰：“此天佑我也！”三人出庄迎接。原来二客乃中山大商：一名张世平，一名苏双，每年往北贩马，近因寇发而回。玄德请二人到庄，置酒款待，诉说欲讨贼安民之意。二客大喜，愿将良马五十匹相送；又赠金银五百两，镔铁一千斤，以资器用。玄德谢别二客，便命良匠打造双股剑。云长造青龙偃月刀，又名冷艳锯，重八十二斤。张飞造丈八点钢矛。各置全身铠甲。共聚乡勇五百余人，来见邹靖。邹靖引见太守刘焉。三人参见毕，各通姓名。玄德说起宗派，刘焉大喜，遂认玄德为侄。\n        \n        不数日，人报黄巾贼将程远志统兵五万来犯涿郡。刘焉令邹靖引玄德等三人，统兵五百，前去破敌。玄德等欣然领军前进，直至大兴山下，与贼相见。贼众皆披发，以黄巾抹额。当下两军相对，玄德出马，左有云长，右有翼德；扬鞭大骂：“反国逆贼，何不早降！”程远志大怒，遣副将邓茂出战。张飞挺丈八蛇矛直出，手起处，刺入邓茂心窝，翻身落马。程远志见折了邓茂，拍马舞刀，直取张飞。云长舞动大刀，纵马飞迎。程远志见了，早吃一惊；措手不及，被云长刀起处，挥为两段。后人有诗，赞二人曰：\n        \n        英雄露颖在今朝，一试矛兮一试刀。初出便将威力展，三分好把姓名标。\n        \n        众贼见程远志被斩，皆倒戈而走。玄德挥军追赶，投降者不计其数，大胜而回。刘焉亲自迎接，赏劳军士。次日，接得青州太守龚景牒文，言黄巾贼围城将陷，乞赐救援。刘焉与玄德商议。玄德曰：“备愿往救之。”刘焉令邹靖将兵五千，同玄德、关、张，投青州来。贼众见救军至，分兵混战。玄德兵寡不胜，退三十里下寨。玄德谓关、张曰：“贼众我寡，必出奇兵，方可取胜。”乃分关公引一千军伏山左，张飞引一千军伏山右，鸣金为号，齐出接应。次日，玄德与邹靖，引军鼓噪而进。贼众迎战，玄德引军便退。贼众乘势追赶，方过山岭，玄德军中一齐鸣金，左右两军齐出，玄德麾军回身复杀。三路夹攻，贼众大溃。直赶至青州城下，太守龚景亦率民兵出城助战。贼势大败，剿戮极多，遂解青州之围。后人有诗赞玄德曰：\n        \n        运筹决算有神功，二虎还须逊一龙。初出便能垂伟绩，自应分鼎在孤穷。\n        \n        龚景犒军毕，邹靖欲回，玄德曰：“近闻中郎将卢植与贼首张角战于广宗，备昔曾师事卢植，欲往助之。”于是邹靖引军自回，玄德与关、张引本部五百人投广宗来。至卢植军中，入帐施礼，具道来意。卢植大喜，留在帐前听调。\n        \n        时张角贼众十五万，植兵五万，相拒于广宗，未见胜负。植谓玄德曰：“我今围贼在此，贼弟张梁、张宝，在颍川与皇甫嵩、朱隽对垒。汝可引本部人马，我更助汝一千官军，前去颍川打探消息，约期剿捕。”玄德领命，引军星夜投颍川来。时皇甫嵩、朱隽领军拒贼，贼战不利，退入长社，依草结营。嵩与隽计曰：“贼依草结营，当用火攻之。”遂令军士，每人束草一把，暗地埋伏。其夜大风忽起。二更以后，一齐纵火，嵩与隽各引兵攻战，贼寨火焰张天。贼众惊慌，马不及鞍，人不及甲，四散奔走。\n        \n        \n         \n        杀到天明，张梁、张宝引败残军士，夺路而走。忽见一彪军马，尽打红旗，当头来到，截住去路。为首闪出一将，身长七尺，细眼长须；官拜骑都尉；沛国谯郡人也；姓曹，名操，字孟德。操父曹嵩，本姓夏侯氏；因为中常侍曹腾之养子，故冒姓曹。曹嵩生操，小字阿瞒，一名吉利。操幼时，好游猎，喜歌舞；有权谋，多机变。操有叔父，见操游荡无度，尝怒之，言于曹嵩。嵩责操，操忽心生一计：见叔父来，诈倒于地，作中风之状。叔父惊告嵩，嵩急视之，操故无恙。嵩曰：“叔言汝中风，今已愈乎？”操曰：“儿自来无此病；因失爱于叔父，故见罔耳。”嵩信其言。后叔父但言操过，嵩并不听。因此，操得恣意放荡。时人有桥玄者，谓操曰：“天下将乱，非命世之才不能济。能安之者，其在君乎？”南阳何颙见操，言：“汉室将亡，安天下者，必此人也。”汝南许劭，有知人之名。操往见之，问曰：“我何如人？”劭不答。又问，劭曰：“子治世之能臣，乱世之奸雄也。”操闻言大喜。年二十，举孝廉，为郎，除洛阳北都尉。初到任，即设五色棒十余条于县之四门。有犯禁者，不避豪贵，皆责之。中常侍蹇硕之叔，提刀夜行，操巡夜拏住，就棒责之。由是，内外莫敢犯者，威名颇震。后为顿丘令。因黄巾起，拜为骑都尉，引马步军五千，前来颍川助战。正值张梁、张宝败走，曹操拦住，大杀一阵，斩首万余级，夺得旗幡、金鼓、马匹极多。张梁、张宝死战得脱。操见过皇甫嵩、朱隽，随即引兵追袭张梁张宝去了。\n        \n        却说玄德引关、张来颍川，听得喊杀之声，又望见火光烛天，急引兵来时，贼已败散。玄德见皇甫嵩、朱隽，具道卢植之意。嵩曰：“张梁、张宝势穷力乏，必投广宗，去依张角。玄德可即星夜往助。”玄德领命，遂引兵复回。到得半路，只见一簇军马，护送一辆槛车；车中之囚，乃卢植也。玄德大惊，滚鞍下马，问其缘故。植曰：“我围张角，将次可破；因角用妖术，未能即胜。朝廷差黄门左丰前来打探，问我索取贿赂。我答曰：‘军粮尚缺，安有余钱奉承天使？’左丰挟恨，回奏朝廷，说我高垒不战，惰慢军心；因此朝廷震怒，遣中郎将董卓来代将我兵，取我回京问罪。”张飞听罢，大怒，要斩护送军人，以救卢植。玄德急止之曰：“朝廷自有公论，汝岂可造次？”军士簇拥卢植去了。\n        \n        关公曰：“卢中郎已被逮，别人领兵，我等去无所依，不如且回涿郡。”玄德从其言，遂引军北行。行无二日，忽闻山后喊声大震。玄德引关、张纵马上高冈望之，见汉军大败，后面漫山塞野，黄巾盖地而来，旗上大书“天公将军”。玄德曰：“此张角也！可速战！”三人飞马引军而出。张角正杀败董卓，乘势赶来，忽遇三人冲杀；角军大乱，败走五十余里。三人救了董卓回寨。卓问三人现居何职。玄德曰：“白身。”卓甚轻之，不为礼。玄德出，张飞大怒曰：“我等亲赴血战，救了这厮，他却如此无礼；若不杀之，难消我气！”便要提刀入帐来杀董卓。\n        \n        正是：\n        \n        人情势利古犹今，谁识英雄是白身？安得快人如翼德，尽诛世上负心人！毕竟董卓性命如何，且听下文分解。";
t = t.split("\n").map(function(e) {
return e.trim();
}).filter(function(e) {
return e.length > 0;
}).map(function(t) {
return e.split_by_length(t, 40);
}).join("\n");
this.scheduleOnce(function() {
e.label.string = t;
}, 0);
};
t.prototype.split_by_length = function(e, t) {
for (var i = Array.from(e), s = 0, n = i.length, o = []; s < n; ) {
var a = Math.min(t, n - s);
if (!(a > 0)) break;
o.push(i.slice(s, a + s).join(""));
s += a;
}
return o.join("\n");
};
o([ r(cc.Label) ], t.prototype, "label", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
LoadModuleCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "9e702GubHpK+4vAb3yu2OW5", "LoadModuleCtrl");
cc.Class({
extends: cc.Component,
properties: {
monsterTemp: {
default: null,
type: cc.Prefab
},
btn_createMonster: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.btn_createMonster.on(cc.Node.EventType.TOUCH_END, this.createMoster.bind(this));
},
createMoster: function() {
var t = cc.instantiate(this.monsterTemp), i = e("Monster"), s = t.getComponent(i), n = e("InitData");
s.initInfo(n.monsterInfo);
t.parent = this.node;
t.setPosition(cc.v2(0, 0));
this.btn_createMonster.active = !1;
}
});
cc._RF.pop();
}, {
InitData: "InitData",
Monster: "Monster"
} ],
LoadRes_example: [ function(e, t) {
"use strict";
cc._RF.push(t, "d7c19DG8M5Dp7vHrQu5a8gK", "LoadRes_example");
cc.Class({
extends: cc.Component,
properties: {
content: cc.Node,
_url: [],
_assets: []
},
onLoad: function() {
this._url = [ "test_assets/atlas", "test_assets/prefab" ];
},
loadSpriteFrame: function() {
var e = this, t = this._url[0];
this._removeAllChildren();
cc.resources.load(t, cc.SpriteAtlas, function(t, i) {
e._assets.push(i.addRef());
e._removeAllChildren();
var s = new cc.Node();
e.content.addChild(s);
s.position = cc.v2(0, 0);
s.addComponent(cc.Sprite).spriteFrame = i.getSpriteFrame("sheep_run_0");
});
},
loadPrefab: function() {
var e = this, t = this._url[1];
this._removeAllChildren();
cc.resources.load(t, cc.Prefab, function(t, i) {
e._assets.push(i.addRef());
e._removeAllChildren();
var s = cc.instantiate(i);
e.content.addChild(s);
s.position = cc.v2(0, 0);
});
},
onDisable: function() {
this._assets.forEach(function(e) {
return e.decRef();
});
this._assets = null;
},
_removeAllChildren: function() {
this.content.removeAllChildren(!0);
}
});
cc._RF.pop();
}, {} ],
LoadSpine: [ function(e, t) {
"use strict";
cc._RF.push(t, "282b2tQFyZNyISOFPjrcQoM", "LoadSpine");
var i = e("i18n");
cc.Class({
extends: cc.Component,
editor: {
requireComponent: sp.Skeleton
},
properties: {
label: {
default: null,
type: cc.Label
}
},
start: function() {
cc.resources.load("loadSpine/alien-ess", sp.SkeletonData, this.onProcess.bind(this), this.onComplete.bind(this));
},
onProcess: function() {},
onComplete: function(e, t) {
if (e) {
this.label.textKey = i.t("sprite_loadRes_asset_failed");
cc.error(e);
}
var s = this.getComponent("sp.Skeleton");
s.skeletonData = t;
s.setAnimation(0, "run", !0);
this.label.textKey = i.t("sprite_loadRes_asset_success");
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
LoadingBarCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "102a9wU40RJd4SnQqQQzQT9", "LoadingBarCtrl");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
progressBar: {
default: null,
type: cc.ProgressBar
},
progressTips: {
default: null,
type: cc.Label
},
laodBg: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this._urls = [ "audio/ding", "audio/cheering", "audio/music_logo", "test_assets/audio", "loadingBar/font", "loadingBar/mikado_outline_shadow", "loadingBar/enligsh-chinese" ];
this.resource = null;
this.progressBar.progress = 0;
this._clearAll();
this.progressTips.textKey = i.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3");
this.node.on(cc.Node.EventType.TOUCH_START, function() {
this.resource || cc.resources.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
}, this);
},
_clearAll: function() {
for (var e = 0; e < this._urls.length; ++e) {
var t = this._urls[e];
cc.resources.release(t);
}
},
_progressCallback: function(e, t, i) {
this.progress = e / t;
this.resource = i;
this.completedCount = e;
this.totalCount = t;
},
_completeCallback: function() {},
update: function(e) {
if (this.resource) {
var t = this.progressBar.progress;
if (t >= 1) {
this.progressTips.textKey = i.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1");
this.laodBg.active = !1;
this.progressBar.node.active = !1;
this.enabled = !1;
} else {
t < this.progress && (t += e);
this.progressBar.progress = t;
this.progressTips.textKey = i.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2") + this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
}
}
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
MaskCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "c324aDRcOtM1oTGYSemsKTY", "MaskCtrl");
cc.Class({
extends: cc.Component,
properties: {
mask: cc.Mask,
slider: cc.Slider,
label: cc.Label
},
onLoad: function() {
this.slider.progress = this.mask.alphaThreshold;
},
update: function() {
cc.game.renderType, cc.game.RENDER_TYPE_WEBGL;
this.mask.alphaThreshold = this.slider.progress;
this.label.string = this.slider.progress.toFixed(1);
}
});
cc._RF.pop();
}, {} ],
Menu: [ function(e, t) {
"use strict";
cc._RF.push(t, "04525pyYBlN26SWawaUF3dA", "Menu");
var i = e("i18n"), s = e("SceneList"), n = e("TipsManager"), o = "TestList.fire";
cc.Class({
extends: cc.Component,
properties: {
text: cc.Label,
readme: cc.ScrollView,
btnInfo: cc.Button,
btnBack: cc.Button,
testList: cc.ScrollView,
uiCamera: cc.Camera,
sceneTitle: cc.Label,
searchBlock: cc.Node
},
onLoad: function() {
this._isLoadingScene = !1;
this.showDebugDraw = !1;
cc.game.addPersistRootNode(this.node);
this.currentSceneUrl = o;
this.contentPos = null;
this.btnBack.node.active = !1;
this.loadInstruction(this.currentSceneUrl);
this.storage = this.node.getComponent("StorageUtil");
cc.game.addPersistRootNode(this.searchBlock);
cc.game.addPersistRootNode(this.testList.node);
if (this.testList && this.testList.content) {
this.sceneList = this.testList.content.getComponent(s);
this.sceneList.init(this);
}
"undefined" != typeof cocosAnalytics && cocosAnalytics.isInited && cocosAnalytics.isInited() && cocosAnalytics.CAEvent.onEvent({
eventName: "打开范例"
});
cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this._onSceneLaunched, this);
var e = this.storage.getCurrentScene();
e && this.loadScene(e);
},
_onSceneLaunched: function() {
for (var e = cc.Camera.cameras, t = 0, i = e.length; t < i; t++) {
var s = e[t];
s === this.uiCamera ? s.cullingMask = 1 << this.node.groupIndex : s.cullingMask = s.cullingMask & ~(1 << this.node.groupIndex);
}
},
backToList: function() {
this.loadScene(o);
},
loadScene: function(e) {
if (!this._isLoadingScene) if (cc.director.loadScene(e, this.onLoadSceneFinish.bind(this))) {
this._isLoadingScene = !0;
this.showReadme(null, !1);
this.contentPos = this.testList.getContentPosition();
this.currentSceneUrl = e;
"undefined" != typeof cocosAnalytics && cocosAnalytics.isInited && cocosAnalytics.isInited() && cocosAnalytics.CALevels.begin({
level: e
});
} else this.storage.setCurrentScene("");
},
onLoadSceneFinish: function() {
var e = this.currentSceneUrl;
this.loadInstruction(e);
this.storage.setCurrentScene(e);
this.testList.node.active = !1;
var t = e.endsWith(o);
this.btnBack.node.active = this.sceneTitle.node.active = !t;
this.testList.node.active = t;
t ? this.contentPos && this.testList.setContentPosition(this.contentPos) : this.sceneTitle.string = e.replace("db://assets/cases/", "");
this._isLoadingScene = !1;
},
_getAdjacentScenes: function() {
var e = this, t = {
next: "",
prev: ""
}, i = this.sceneList.sceneList;
function s(e, t) {
for (var s = e; 0 <= s && s < i.length; s += t) {
var a = i[s].url;
if (a) {
var c = cc.path.basename(a, ".fire");
if (n.hasSupport(c, !0)) return a;
}
}
return o;
}
if (this.currentSceneUrl.endsWith(o)) {
t.next = s(0, 1);
t.prev = s(i.length - 1, -1);
} else {
var a = -1;
i.some(function(t, i) {
if (t.url === e.currentSceneUrl) {
a = i;
return !0;
}
return !1;
});
if (-1 !== a) {
t.next = s(a + 1, 1);
t.prev = s(a - 1, -1);
}
}
return t;
},
nextScene: function() {
var e = this._getAdjacentScenes().next;
e && this.loadScene(e);
},
prevScene: function() {
var e = this._getAdjacentScenes().prev;
e && this.loadScene(e);
},
loadInstruction: function(e) {
var t = this, s = e.split("/"), n = s[s.length - 1].replace(".fire", "");
cc.resources.load("readme/" + n, cc.TextAsset, function(e, s) {
t.text.string = e ? i.t("scripts/Global/Menu.js.1") : s.text;
});
},
showReadme: function(e, t) {
void 0 === t && (t = !this.readme.node.active);
this.readme.node.active = t;
t && this.readme.scrollToTop();
var i = cc.director.getCollisionManager().enabledDebugDraw;
if (this.readme.node.active) {
this.showDebugDraw = i;
cc.director.getCollisionManager().enabledDebugDraw = !1;
} else cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
var s = cc.find("Canvas/VideoPlayer");
s && (s.active = !this.readme.node.active);
},
restart: function() {
cc.game.restart();
},
gc: function() {
cc.sys.garbageCollect();
}
});
cc._RF.pop();
}, {
SceneList: "SceneList",
TipsManager: "TipsManager",
i18n: "i18n"
} ],
MonsterPrefab: [ function(e, t) {
"use strict";
cc._RF.push(t, "8cb4dm2QEpJ7pnaS/cjrvgF", "MonsterPrefab");
var i = e("Helpers");
cc.Class({
extends: cc.Component,
properties: {
spriteList: {
default: [],
type: [ cc.SpriteFrame ]
}
},
onLoad: function() {
var e = i.getRandomInt(0, this.spriteList.length);
this.getComponent(cc.Sprite).spriteFrame = this.spriteList[e];
}
});
cc._RF.pop();
}, {
Helpers: "Helpers"
} ],
Monster: [ function(e, t) {
"use strict";
cc._RF.push(t, "e31b0+PoDRJXIDHFxy60vEs", "Monster");
cc.Class({
extends: cc.Component,
properties: {
nickname: {
default: null,
type: cc.Label
},
lv: {
default: null,
type: cc.Label
},
hp: {
default: null,
type: cc.Label
},
atk: {
default: null,
type: cc.Label
},
defense: {
default: null,
type: cc.Label
},
image: {
default: null,
type: cc.Sprite
}
},
initInfo: function(e) {
this.nickname.string = e.name;
this.lv.string = e.lv;
this.hp.string = e.hp;
this.atk.string = e.atk;
this.defense.string = e.defense;
var t = this.image;
cc.resources.load(e.imageUrl, cc.SpriteFrame, function(e, i) {
e || (t.spriteFrame = i.addRef());
});
},
onDestroy: function() {
this.image.spriteFrame.decRef();
this.image.spriteFrame = null;
}
});
cc._RF.pop();
}, {} ],
MotionStreakCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "f7722zlKP5HoKMY5VvWPCON", "MotionStreakCtrl");
cc.Class({
extends: cc.Component,
properties: {
motionStreak: cc.MotionStreak,
newTexture: {
default: null,
type: cc.Texture2D
}
},
onLoad: function() {
this._changed = !0;
this.oldTexture = this.motionStreak.texture;
this.animationCom = this.motionStreak.node.getComponent(cc.Animation);
},
onClick: function() {
this._changed ? this.setMotionStreak(2, 3, 20, this.newTexture) : this.setMotionStreak(.5, 1, 30, this.oldTexture);
this._changed = !this._changed;
},
setMotionStreak: function(e, t, i, s) {
this.motionStreak.fadeTime = e;
this.motionStreak.minSeg = t;
this.motionStreak.stroke = i;
this.motionStreak.texture = s;
},
lateUpdate: function() {
this.animationCom.getAnimationState("move_around").isPlaying || this.animationCom.play();
},
onDisable: function() {
this.motionStreak.node.getComponent(cc.Animation).stop();
}
});
cc._RF.pop();
}, {} ],
MouseDragger: [ function(e, t) {
"use strict";
cc._RF.push(t, "2412ev9NSRMeI28JHH2OS8r", "MouseDragger");
cc.Class({
extends: cc.Component,
properties: {
propagate: {
default: !1
}
},
onLoad: function() {
this._down = !1;
this.node.opacity = 160;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function(e) {
cc.log("Drag stated ...");
this.node.opacity = 255;
this._down = !0;
this.propagate || e.stopPropagation();
}, this);
this.node.on(cc.Node.EventType.MOUSE_MOVE, function(e) {
if (this._down) {
this.node.opacity = 255;
var t = e.getDelta();
this.node.x += t.x;
this.node.y += t.y;
this.propagate || e.stopPropagation();
} else e.stopPropagation();
}, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function(e) {
if (this._down) {
this.node.opacity = 160;
cc.log("Drag leave ...");
this._down = !1;
} else e.stopPropagation();
}, this);
this.node.on(cc.Node.EventType.MOUSE_UP, function(e) {
if (this._down) {
cc.log("Drag done ...");
this.node.opacity = 160;
this._down = !1;
} else e.stopPropagation();
}, this);
}
});
cc._RF.pop();
}, {} ],
MouseEvent: [ function(e, t) {
"use strict";
cc._RF.push(t, "6df0ft1jy5Jg4cQ039jt8jC", "MouseEvent");
cc.Class({
extends: cc.Component,
move: function(e) {
this.node.x += e.getDeltaX();
this.node.y += e.getDeltaY();
},
onLoad: function() {
this.scroll = 0;
this.node.opacity = 50;
this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
this.node.opacity = 255;
this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
}, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.opacity = 160;
}, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.opacity = 50;
this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
}, this);
this.node.on(cc.Node.EventType.MOUSE_UP, function() {
this.node.opacity = 50;
this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
this._callback && this._callback();
}, this);
this.node.on(cc.Node.EventType.MOUSE_WHEEL, function(e) {
this.scroll += e.getScrollY();
var t = this.node.height;
this.scroll = cc.misc.clampf(this.scroll, -2 * t, .7 * t);
this.node.scale = 1 - this.scroll / t;
}, this);
}
});
cc._RF.pop();
}, {} ],
MoveAction: [ function(e, t) {
"use strict";
cc._RF.push(t, "ddd4eaLxVZFlZbzaPaqdL9D", "MoveAction");
cc.Class({
extends: cc.Component,
properties: {
moveTo: cc.Node,
moveBy: cc.Node
},
onLoad: function() {
var e = cc.moveTo(.5, cc.v2(0, 0)), t = cc.moveBy(.5, cc.v2(100, 100));
this.moveTo.runAction(e);
this.moveBy.runAction(t);
}
});
cc._RF.pop();
}, {} ],
MoveAnimationCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "1dc95dq3mVI658br0l2Zbi0", "MoveAnimationCtrl");
cc.Class({
extends: cc.Component,
properties: {
target: {
default: null,
type: cc.Animation
},
nodes: {
default: [],
type: cc.Node
}
},
onLoad: function() {
this.onRegisteredEvent();
},
onRegisteredEvent: function() {
for (var e = 0; e < this.nodes.length; ++e) this.nodes[e].on(cc.Node.EventType.TOUCH_END, this.onPlayAnimation.bind(this));
},
onPlayAnimation: function(e) {
this.target.stop();
switch (e.target._name) {
case "Linear":
this.target.play("linear");
break;

case "CaseIn_Expo":
this.target.play("caseIn-expo");
break;

case "CaseOut_Expo":
this.target.play("caseOut-expo");
break;

case "CaseInOut_Expo":
this.target.play("caseInOut-expo");
break;

case "Back_Forward":
this.target.play("back-forward");
}
}
});
cc._RF.pop();
}, {} ],
MyCustomComponent: [ function(e, t) {
"use strict";
cc._RF.push(t, "6b8baEpLuxACIMNlIL2vw2W", "MyCustomComponent");
cc.Class({
extends: cc.Component,
properties: {
power: 10
},
getPower: function() {
return this.power;
}
});
cc._RF.pop();
}, {} ],
NativeCallCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "5245dIEBoFFB4RdXwoJQM2G", "NativeCallCtrl");
var i = null;
cc.TestNativeCallJS = function() {
i.string = "The test was successful...";
};
cc.Class({
extends: cc.Component,
properties: {
button: cc.Node
},
start: function() {
var e = cc.find("Canvas/New Label");
(i = e.getComponent(cc.Label)).string = "Native Call Test";
},
onClick: function() {
cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "Title", "Native Call Test") : cc.sys.os !== cc.sys.OS_IOS && cc.sys.os !== cc.sys.OS_OSX || jsb.reflection.callStaticMethod("AppController", "showAlertDialog:withMessage:", "Title", "Native Call Test");
}
});
cc._RF.pop();
}, {} ],
NetworkCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "10908h1aHRPPowxQQzUCVMD", "NetworkCtrl");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
xhr: cc.Label,
xhrAB: cc.Label,
xhrTimeout: cc.Label,
websocket: cc.Label,
socketIO: cc.Label,
xhrResp: cc.Label,
xhrABResp: cc.Label,
xhrTimeoutResp: cc.Label,
websocketResp: cc.Label,
socketIOResp: cc.Label,
wssCacert: {
type: cc.Asset,
default: null
},
_reconnectCount: 0
},
onLoad: function() {
this._wsiSendBinary = null;
this._xhrXHR = null;
this._xhrHRAB = null;
this._xhrXHRTimeout = null;
this.xhrResp.string = i.t("cases/05_scripting/11_network/NetworkCtrl.js.1");
this.xhrABResp.string = i.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
this.xhrTimeoutResp.string = i.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
this.websocketResp.string = i.t("cases/05_scripting/11_network/NetworkCtrl.js.3");
this.socketIOResp.string = i.t("cases/05_scripting/11_network/NetworkCtrl.js.4");
this.sendXHR();
this.sendXHRAB();
this.sendXHRTimeout();
this.prepareWebSocket();
this.sendSocketIO();
},
onDisable: function() {
var e = this._wsiSendBinary;
if (e) {
e.onopen = null;
e.onmessage = null;
e.onerror = null;
e.onclose = null;
e.close();
}
this.rmXhrEventListener(this._xhrXHR);
this.rmXhrEventListener(this._xhrHRAB);
this.rmXhrEventListener(this._xhrXHRTimeout);
},
sendXHR: function() {
var e = new XMLHttpRequest();
this.streamXHREventsToLabel(e, this.xhr, this.xhrResp, "GET");
e.open("GET", "https://httpbin.org/get?show_env=1", !0);
cc.sys.isNative && e.setRequestHeader("Accept-Encoding", "gzip,deflate");
e.timeout = 1e4;
e.send();
this._xhrXHR = e;
},
sendXHRAB: function() {
var e = new XMLHttpRequest();
this.streamXHREventsToLabel(e, this.xhrAB, this.xhrABResp, "POST");
e.open("POST", "https://httpbin.org/post");
e.setRequestHeader("Content-Type", "text/plain");
e.send(new Uint8Array([ 1, 2, 3, 4, 5 ]));
this._xhrHRAB = e;
},
sendXHRTimeout: function() {
var e = new XMLHttpRequest();
this.streamXHREventsToLabel(e, this.xhrTimeout, this.xhrTimeoutResp, "GET");
e.open("GET", "https://192.168.22.222", !0);
e.timeout = 5e3;
e.send();
this._xhrXHRTimeout = e;
},
prepareWebSocket: function() {
var e = this, t = this.websocket, s = this.websocketResp;
this._wsiSendBinary = new WebSocket("wss://echo.websocket.org", [], this.wssCacert.nativeUrl);
this._wsiSendBinary.binaryType = "arraybuffer";
this._wsiSendBinary.onopen = function() {
t.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.5");
s.string = "Opened!";
};
this._wsiSendBinary.onmessage = function(e) {
for (var n = new Uint16Array(e.data), o = "response bin msg: ", a = "", c = 0; c < n.length; c++) if (0 === n[c]) a += "'\\0'"; else {
var r = "0x" + n[c].toString("16").toUpperCase();
a += String.fromCharCode(r);
}
o += a;
s.string = o;
t.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.6");
};
this._wsiSendBinary.onerror = function() {
t.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.7");
s.string = "Error!";
};
this._wsiSendBinary.onclose = function() {
t.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.8");
e._wsiSendBinary = null;
s.string = "Close!";
};
this.scheduleOnce(this.sendWebSocketBinary, 1);
},
sendWebSocketBinary: function() {
if (this._wsiSendBinary) if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
this.websocket.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.9");
for (var e = "Hello WebSocket中文,\0 I'm\0 a\0 binary\0 message\0.", t = new Uint16Array(e.length), s = 0; s < e.length; s++) t[s] = e.charCodeAt(s);
this._wsiSendBinary.send(t.buffer);
} else {
this.websocket.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.10") + "send binary websocket instance wasn't ready...";
this.scheduleOnce(function() {
this.sendWebSocketBinary();
}, 1);
}
},
testevent: function(e) {
if (this.socketIO) {
var t = this.tag + " says 'testevent' with data: " + e;
this.socketIO.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.11") + t;
}
},
message: function(e) {
if (this.socketIO) {
var t = this.tag + " received message: " + e;
this.socketIOResp.string = t;
}
},
disconnection: function() {
if (this.socketIO) {
var e = this.tag + " disconnected!";
this.socketIO.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.12") + e;
this.socketIOResp.string = e;
}
},
reconnecting: function() {
if (this.socketIO) {
this._reconnectCount++;
var e = this.tag + " is reconnecting(" + this._reconnectCount + ")";
this.socketIO.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.12") + e;
this.socketIOResp.string = "Reconnecting...";
}
},
sendSocketIO: function() {
var e = this;
if ("undefined" != typeof io) {
var t = io.connect("ws://tools.itharbors.com:4000", {
"force new connection": !0
});
this._sioClient = t;
this.tag = t.tag = "Test Client";
t.on("connect", function() {
if (e.socketIO) {
var s = t.tag + " Connected!";
e.socketIO.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.13") + s;
e._sioClient.send("Hello Socket.IO!");
}
});
t.on("message", this.message.bind(this));
t.on("echotest", function(t) {
if (e.socketIO) {
cc.log("echotest 'on' callback fired!");
var s = e.tag + " says 'echotest' with data: " + t;
e.socketIO.textKey = i.t("cases/05_scripting/11_network/NetworkCtrl.js.14") + s;
}
});
t.on("testevent", this.testevent.bind(this));
t.on("disconnect", this.disconnection.bind(this));
t.on("reconnecting", this.reconnecting.bind(this));
} else cc.error("You should import the socket.io.js as a plugin!");
},
streamXHREventsToLabel: function(e, t, i, s, n) {
var o = n || function(e) {
return s + " Response (30 chars): " + e.substring(0, 30) + "...";
}, a = t.string;
[ "loadstart", "abort", "error", "load", "loadend", "timeout" ].forEach(function(s) {
e["on" + s] = function() {
t.string = a + "\nEvent : " + s;
"timeout" === s ? i.string += "(timeout)" : "loadend" === s && "(timeout)" !== s && (i.string += "...loadend!");
};
});
e.onreadystatechange = function() {
4 === e.readyState && e.status >= 200 ? i.string = o(e.responseText) : 404 === e.status ? i.string = "404 page not found!" : 3 === e.readyState ? i.string = "Request dealing!" : 2 === e.readyState ? i.string = "Request received!" : 1 === e.readyState ? i.string = "Server connection established! Request hasn't been received" : 0 === e.readyState && (i.string = "Request hasn't been initiated!");
};
},
rmXhrEventListener: function(e) {
if (e) {
[ "loadstart", "abort", "error", "load", "loadend", "timeout" ].forEach(function(t) {
e["on" + t] = null;
});
e.onreadystatechange = null;
}
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
NodeGenerator: [ function(e, t) {
"use strict";
cc._RF.push(t, "c2149G/5j1JIKd2GGzQfS72", "NodeGenerator");
cc.Class({
extends: cc.Component,
properties: {
prefab: cc.Prefab,
hint: cc.Label,
regionOrigin: cc.Vec2,
regionSize: cc.Size
},
onLoad: function() {
this.schedule(this.generateNode, 2);
this._pool = new cc.NodePool("PoolHandler");
this._count = 0;
},
generateNode: function() {
var e = this._pool.get();
if (!e) {
e = cc.instantiate(this.prefab);
this._count++;
this.hint.string = "Node Created: " + this._count;
e.addComponent("PoolHandler");
}
e.x = this.regionOrigin.x + Math.floor(Math.random() * this.regionSize.width);
e.y = this.regionOrigin.y + Math.floor(Math.random() * this.regionSize.height);
var t = Math.random() * Math.PI * 2, i = 500 * Math.cos(t), s = 500 * Math.sin(t);
e.runAction(cc.sequence(cc.moveBy(5, i, s), cc.callFunc(this.removeNode, this, e)));
this.node.addChild(e);
},
removeNode: function(e, t) {
this._pool.put(t);
}
});
cc._RF.pop();
}, {} ],
NodeGroupControl: [ function(e, t) {
"use strict";
cc._RF.push(t, "bd4a2+britAlof0UdMCVB8c", "NodeGroupControl");
cc.Class({
extends: cc.Component,
properties: {
nodeList: {
default: [],
type: [ cc.Node ]
}
},
onLoad: function() {
var e = this;
this.inervalId = setInterval(function() {
e.toggleNodesVisibility();
}, 1e3);
},
onDestroy: function() {
clearInterval(this.inervalId);
},
toggleNodesVisibility: function() {
console.log("toggle visibility");
for (var e = 0; e < this.nodeList.length; ++e) this.nodeList[e].active = !this.nodeList[e].active;
}
});
cc._RF.pop();
}, {} ],
ObjectGroupImage: [ function(e, t) {
"use strict";
cc._RF.push(t, "9277fnpG9BFd6uvLH0LCrFA", "ObjectGroupImage");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
cc.director.getCollisionManager().enabled = !0;
this._speed = 1e3;
cc.find("Canvas/tiledmap/game/img58").active = !1;
var e = cc.find("Canvas/tiledmap");
this.node.parent = e;
},
update: function(e) {
this.node.x += e * this._speed;
},
onCollisionEnter: function(e) {
switch (e.node.name) {
case "to-right":
this._speed = 1e3;
this.node.scaleX = 1.3;
break;

case "to-index-1":
this.node.setSiblingIndex(1);
break;

case "to-left":
this._speed = -1e3;
this.node.scaleX = -1.3;
break;

case "to-index-4":
this.node.setSiblingIndex(6);
}
}
});
cc._RF.pop();
}, {} ],
OnMultiTouchCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "53fc1wMwRRPOYCB8ko36drD", "OnMultiTouchCtrl");
var i = e("../../../../scripts/Tips/TipsManager");
cc.Class({
extends: cc.Component,
properties: {
canvas: cc.Node,
target: cc.Node
},
onLoad: function() {
i.init();
var e = this, t = this.node.parent;
e.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(i) {
var s = i.getTouches();
if (s.length >= 2) {
var n, o = s[0], a = s[1], c = o.getDelta(), r = a.getDelta(), l = t.convertToNodeSpaceAR(o.getLocation()), u = t.convertToNodeSpaceAR(a.getLocation()), d = l.sub(u), p = c.sub(r);
n = Math.abs(d.x) > Math.abs(d.y) ? (d.x + p.x) / d.x * e.target.scale : (d.y + p.y) / d.y * e.target.scale;
e.target.scale = n < .1 ? .1 : n;
}
}, e.node);
},
onEnable: function() {
cc.sys.browserType === cc.sys.BROWSER_TYPE_UC && cc.screen.fullScreen() && i.createTips("Can't support UC mobile browser, please touch screen go back");
}
});
cc._RF.pop();
}, {
"../../../../scripts/Tips/TipsManager": "TipsManager"
} ],
OnTouchCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "f9b352jbGtMIqjEuud60Wpx", "OnTouchCtrl");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
canvas: cc.Node,
touchLocationDisplay: {
default: null,
type: cc.Label
},
follower: {
default: null,
type: cc.Node
},
followSpeed: 200
},
onLoad: function() {
var e = this;
e.moveToPos = cc.v2(0, 0);
e.isMoving = !1;
e.canvas.on(cc.Node.EventType.TOUCH_START, function(t) {
var s = t.getTouches()[0].getLocation();
e.isMoving = !0;
e.moveToPos = e.follower.parent.convertToNodeSpaceAR(s);
e.touchLocationDisplay.textKey = i.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(s.x) + ", " + Math.floor(s.y) + ")";
}, e.node);
e.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
var s = t.getTouches()[0].getLocation();
e.moveToPos = e.follower.parent.convertToNodeSpaceAR(s);
e.touchLocationDisplay.textKey = i.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(s.x) + ", " + Math.floor(s.y) + ")";
}, e.node);
e.canvas.on(cc.Node.EventType.TOUCH_END, function() {
e.isMoving = !1;
}, e.node);
},
update: function(e) {
if (this.isMoving) {
var t = this.follower.position, i = this.moveToPos.sub(t).normalize(), s = t.add(i.mul(this.followSpeed * e));
this.follower.setPosition(s);
}
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
OrderSwitcher: [ function(e, t) {
"use strict";
cc._RF.push(t, "385fbE9eghB1IwH34WHGHmk", "OrderSwitcher");
cc.Class({
extends: cc.Component,
properties: {
container: cc.Node
},
switch: function() {
var e = this.container.children, t = e.length;
if (t > 1) {
var i = Math.floor(Math.random() * t), s = i === t - 1 ? 0 : i + 1;
e[i].setSiblingIndex(s);
}
}
});
cc._RF.pop();
}, {} ],
PageViewCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "becf9ZpBi5KG43ard9opUPT", "PageViewCtrl");
cc.Class({
extends: cc.Component,
properties: {
curNum: 3,
curTotal: 10,
pageTeample: cc.Prefab,
target: cc.PageView,
label: cc.Label
},
_createPage: function() {
var e = cc.instantiate(this.pageTeample);
e.position = new cc.v2(0, 0);
var t = new cc.Color();
t.r = Math.floor(255 * Math.random());
t.g = Math.floor(255 * Math.random());
t.b = Math.floor(255 * Math.random());
e.color = t;
return e;
},
onLoad: function() {
this.target.setCurrentPageIndex(0);
},
update: function() {
this.label.string = "第" + (this.target.getCurrentPageIndex() + 1) + "页";
},
onJumpHome: function() {
this.target.scrollToPage(0);
},
plusPage: function(e) {
if (!(this.curNum > this.curTotal)) {
this.curNum++;
e && e();
}
},
lessPageNum: function(e) {
if (!(this.curNum <= 0)) {
this.curNum--;
e && e();
}
},
onAddPage: function() {
var e = this;
this.plusPage(function() {
e.target.addPage(e._createPage());
});
},
onInsertPage: function() {
var e = this;
this.plusPage(function() {
e.target.insertPage(e._createPage(), e.target.getCurrentPageIndex());
});
},
onRemovePage: function() {
var e = this;
this.lessPageNum(function() {
var t = e.target.getPages();
e.target.removePage(t[t.length - 1]);
});
},
onRemovePageAtIndex: function() {
var e = this;
this.lessPageNum(function() {
e.target.removePageAtIndex(e.target.getCurrentPageIndex());
});
},
onRemoveAllPage: function() {
this.target.removeAllPages();
this.curNum = 0;
},
onPageEvent: function(e, t) {
t === cc.PageView.EventType.PAGE_TURNING && console.log("当前所在的页面索引:" + e.getCurrentPageIndex());
}
});
cc._RF.pop();
}, {} ],
ParticleControl: [ function(e, t) {
"use strict";
cc._RF.push(t, "79ae3hiP+JAhIKehaWyiKuh", "ParticleControl");
cc.Class({
extends: cc.Component,
properties: {
particle: cc.ParticleSystem
},
toggleParticlePlay: function() {
var e = this.particle;
e.particleCount > 0 ? e.stopSystem() : e.resetSystem();
}
});
cc._RF.pop();
}, {} ],
PlatformMotion: [ function(e, t) {
"use strict";
cc._RF.push(t, "0f761EZmKhNLKJpUXTrb4fF", "PlatformMotion");
cc.Class({
extends: cc.Component,
properties: {
speed: 10,
distance: 200
},
onLoad: function() {
this._movedDistance = this.distance / 2;
this._direction = 1;
this._movedDiff = 0;
},
update: function(e) {
var t = this.speed * this._direction * e;
this._movedDistance += Math.abs(t);
if (this._movedDistance > this.distance) {
t = this.distance - this._movedDistance;
this._movedDistance = 0;
this._direction *= -1;
}
this.node.x += t;
this._movedDiff = t;
}
});
cc._RF.pop();
}, {} ],
PoolHandler: [ function(e, t) {
"use strict";
cc._RF.push(t, "ea9ac+t92JFY6hOUuiIHUAT", "PoolHandler");
var i = 0;
function s() {
var e = Date.now();
if (e - i < 300) {
this.stopAllActions();
var t = this.getComponent("PoolHandler")._pool;
t ? t.put(this) : this.removeFromParent(!0);
} else {
this.paused ? cc.director.getActionManager().resumeTarget(this) : cc.director.getActionManager().pauseTarget(this);
this.paused = !this.paused;
}
i = e;
}
cc.Class({
extends: cc.Component,
properties: {
_pool: null
},
onLoad: function() {
this.reuse();
},
unuse: function() {
this.node.off(cc.Node.EventType.TOUCH_END, s, this.node);
},
reuse: function() {
this.node.paused = !1;
this.node.on(cc.Node.EventType.TOUCH_END, s, this.node);
}
});
cc._RF.pop();
}, {} ],
PopulatePrefab: [ function(e, t) {
"use strict";
cc._RF.push(t, "75518I0ImJHXqWNNGRIOmJg", "PopulatePrefab");
cc.Class({
extends: cc.Component,
properties: {
root: {
default: null,
type: cc.Node
},
prefab: {
default: null,
type: cc.Prefab
},
canvas: {
default: null,
type: cc.Canvas
},
numberToSpawn: 0,
spawnInterval: 0
},
addSpawn: function() {
if (this.spawnCount >= this.numberToSpawn) this.clearRepeater(); else {
var e = cc.instantiate(this.prefab);
e.parent = this.root;
e.position = this.getRandomPosition();
this.spawnCount++;
}
},
onLoad: function() {
this.randomRange = cc.v2(300, 200);
this.spawnCount = 0;
this.schedule(this.addSpawn, this.spawnInterval);
},
getRandomPosition: function() {
return cc.v2(2 * (Math.random() - .5) * this.randomRange.x, 2 * (Math.random() - .5) * this.randomRange.y);
},
clearRepeater: function() {
this.unschedule(this.addSpawn);
}
});
cc._RF.pop();
}, {} ],
PreloadAssets: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "96285lXeytOt5O96qg4Yw+j", "PreloadAssets");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = e("../../../../i18n/i18n"), u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadTips = null;
t.showWindow = null;
t.loadAnimTestPrefab = null;
t.loadList = [];
t._curType = "";
t._lastType = "";
t._btnLabel = null;
t._audioSource = null;
t._isLoading = !1;
t._urls = null;
t._assets = [];
return t;
}
t.prototype.onLoad = function() {
this._urls = {
Audio: "test_assets/audio",
Txt: "test_assets/text",
Texture: "test_assets/PurpleMonster",
Font: "test_assets/font",
Plist: "test_assets/atom",
SpriteFrame: "test_assets/image",
Prefab: "test_assets/prefab",
Animation: "test_assets/sprite-anim",
Scene: "test_assets/preloadscene",
Spine: "spineboy/spineboy",
Dir: "audio"
};
this._onRegisteredEvent();
};
t.prototype._onRegisteredEvent = function() {
for (var e = 0; e < this.loadList.length; ++e) this.loadList[e].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
};
t.prototype._onClick = function(e) {
if (!this._isLoading) {
this._onClear();
this._curType = e.target.name.split("_")[1];
if ("" === this._lastType || this._curType !== this._lastType) {
this._btnLabel && (this._btnLabel.textKey = l.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.1") + this._lastType);
this._lastType = this._curType;
this._btnLabel = e.target.getChildByName("Label").getComponent("cc.Label");
this.loadTips.textKey = this._curType + " Loading....";
this._isLoading = !0;
this._load();
} else this._onShowResClick(e);
}
};
t.prototype._load = function() {
var e = this._urls[this._curType], t = this._loadCallBack.bind(this);
switch (this._curType) {
case "SpriteFrame":
cc.resources.preload(e, cc.SpriteFrame, t);
break;

case "Spine":
cc.resources.preload(e, sp.SkeletonData, t);
break;

case "Font":
cc.resources.preload(e, cc.Font, t);
break;

case "Plist":
cc.resources.preload(e, cc.ParticleAsset, t);
break;

case "Animation":
case "Prefab":
case "Texture":
case "Txt":
case "Audio":
cc.resources.preload(e, t);
break;

case "Scene":
cc.resources.preloadScene(e, t);
break;

case "Dir":
cc.resources.preloadDir(e, t);
}
};
t.prototype._loadCallBack = function(e) {
this._isLoading = !1;
if (e) cc.log("Error url [" + e + "]"); else {
"Audio" === this._curType ? this._btnLabel.textKey = l.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.2") : this._btnLabel.textKey = l.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.3");
this._btnLabel.textKey += this._curType;
this.loadTips.textKey = this._curType + " preloaded Successfully!";
}
};
t.prototype._onClear = function() {
this.showWindow.removeAllChildren(!0);
this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
};
t.prototype._onShowResClick = function() {
var e = this, t = this._urls[this._curType];
switch (this._curType) {
case "SpriteFrame":
cc.resources.load(t, cc.SpriteFrame, function(t, i) {
e._assets.push(i.addRef());
e._createNode(e._curType, i);
});
break;

case "Spine":
cc.resources.load(t, sp.SkeletonData, function(t, i) {
e._assets.push(i.addRef());
e._createNode(e._curType, i);
});
break;

case "Font":
cc.resources.load(t, cc.Font, function(t, i) {
e._assets.push(i.addRef());
e._createNode(e._curType, i);
});
break;

case "Plist":
cc.resources.load(t, cc.ParticleAsset, function(t, i) {
e._assets.push(i.addRef());
e._createNode(e._curType, i);
});
break;

case "Animation":
case "Prefab":
case "Texture":
case "Txt":
case "Audio":
cc.resources.load(t, function(t, i) {
e._assets.push(i.addRef());
e._createNode(e._curType, i);
});
break;

case "Scene":
cc.resources.loadScene(t, function(e, t) {
cc.director.runScene(t);
});
break;

case "Dir":
cc.resources.loadDir(t, function(t, i) {
e.loadTips.textKey = "The asset loaded: ";
i.forEach(function(t) {
e._assets.push(t.addRef());
e.loadTips.textKey += t.name + ";";
});
});
}
};
t.prototype._createNode = function(e, t) {
this.loadTips.textKey = "";
var i = new cc.Node("New " + e);
i.setPosition(0, 0);
var s = null;
switch (this._curType) {
case "SpriteFrame":
(s = i.addComponent(cc.Sprite)).spriteFrame = t;
break;

case "Texture":
case "CORS":
(s = i.addComponent(cc.Sprite)).spriteFrame = new cc.SpriteFrame(t);
break;

case "Audio":
(s = i.addComponent(cc.AudioSource)).clip = t;
s.play();
this._audioSource = s;
this.loadTips.textKey = l.t("cases/05_scripting/07_asset_loading/PreloadAssets.js.4");
break;

case "Txt":
(s = i.addComponent(cc.Label)).lineHeight = 40;
s.string = t;
break;

case "Font":
(s = i.addComponent(cc.Label)).font = t;
s.lineHeight = 40;
s.string = "This is BitmapFont!";
break;

case "Plist":
(s = i.addComponent(cc.ParticleSystem)).file = t;
s.resetSystem();
break;

case "Prefab":
var n = cc.instantiate(t);
n.parent = i;
n.setPosition(0, 0);
break;

case "Animation":
var o = cc.instantiate(this.loadAnimTestPrefab);
o.parent = i;
o.setPosition(0, 0);
var a = o.getComponent(cc.Animation);
a.addClip(t);
a.play(t.name);
break;

case "Spine":
(s = i.addComponent(sp.Skeleton)).skeletonData = t;
s.animation = "walk";
i.y = -248;
}
this.showWindow.addChild(i);
};
t.prototype.onDestroy = function() {
this._assets.forEach(function(e) {
return e.decRef();
});
this._assets = null;
};
o([ r(cc.Label) ], t.prototype, "loadTips", void 0);
o([ r(cc.Node) ], t.prototype, "showWindow", void 0);
o([ r(cc.Prefab) ], t.prototype, "loadAnimTestPrefab", void 0);
o([ r({
type: [ cc.Node ]
}) ], t.prototype, "loadList", void 0);
return o([ c ], t);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../../../../i18n/i18n": "i18n"
} ],
ProgressBarCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "84a43yb9OxBX6HMQxPzHQyz", "ProgressBarCtrl");
cc.Class({
extends: cc.Component,
properties: {
speed: 10,
horizontalBar: {
type: cc.ProgressBar,
default: null
},
horizontalBarReverse: {
type: cc.ProgressBar,
default: null
},
verticalBar: {
type: cc.ProgressBar,
default: null
},
verticalBarReverse: {
type: cc.ProgressBar,
default: null
}
},
onLoad: function() {
this._pingpong = !0;
this.verticalBar.progress = 0;
this.horizontalBar.progress = 0;
this.verticalBarReverse.progress = 0;
this.horizontalBarReverse.progress = 0;
},
update: function(e) {
this._updateProgressBar(this.verticalBar, e);
this._updateProgressBar(this.horizontalBar, e);
this._updateProgressBar(this.verticalBarReverse, e);
this._updateProgressBar(this.horizontalBarReverse, e);
},
_updateProgressBar: function(e, t) {
var i = e.progress;
if (i < 1 && this._pingpong) i += t * this.speed; else {
i -= t * this.speed;
this._pingpong = i <= 0;
}
e.progress = i;
}
});
cc._RF.pop();
}, {} ],
Puzzle: [ function(e, t) {
"use strict";
cc._RF.push(t, "6289cZl6zJEcLVQd60JnAzW", "Puzzle");
var i = cc.Enum({
NONE: 0,
UP: 1,
DOWN: 2,
LEFT: 3,
RIGHT: 4
});
cc.Class({
extends: cc.Component,
editor: {
requireComponent: cc.TiledMap
},
properties: {
_touchStartPos: {
default: null,
serializable: !1
},
_touching: {
default: !1,
serializable: !1
},
_isMapLoaded: {
default: !1,
serializable: !1
},
floorLayerName: {
default: "floor"
},
barrierLayerName: {
default: "barrier"
},
objectGroupName: {
default: "players"
},
startObjectName: {
default: "SpawnPoint"
},
successObjectName: {
default: "SuccessPoint"
}
},
onLoad: function() {
var e = this;
this._player = this.node.getChildByName("player");
this._isMapLoaded || (this._player.active = !1);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyPressed, this);
this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
e._touching = !0;
e._touchStartPos = t.touch.getLocation();
});
this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
if (e._touching && e._isMapLoaded && !e._succeedLayer.active) {
e._touching = !1;
var s = t.touch.getLocation(), n = s.x - e._touchStartPos.x, o = s.y - e._touchStartPos.y, a = Math.abs(n), c = Math.abs(o);
if (!(a < 50 && c < 50)) {
var r = cc.v2(e._curTile.x, e._curTile.y), l = i.NONE;
if (a >= c) if (n > 0) {
r.x += 1;
l = i.LEFT;
} else {
r.x -= 1;
l = i.RIGHT;
} else if (o > 0) {
r.y -= 1;
l = i.DOWN;
} else {
r.y += 1;
l = i.UP;
}
e._tryMoveToNewTile(r, l);
}
}
});
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this._onKeyPressed, this);
},
restartGame: function() {
this._succeedLayer.active = !1;
this._initMapPos();
this._curTile = this._startTile;
this._updatePlayerPos();
},
start: function(e) {
if (!e) {
this._initMapPos();
this._succeedLayer = this.node.getParent().getChildByName("succeedLayer");
this._succeedLayer.active = !1;
this._tiledMap = this.node.getComponent("cc.TiledMap");
var t = this._tiledMap.getObjectGroup(this.objectGroupName);
if (t) {
var i = t.getObject(this.startObjectName), s = t.getObject(this.successObjectName);
if (i && s) {
var n = cc.v2(i.x, i.y), o = cc.v2(s.x, s.y);
this._layerFloor = this._tiledMap.getLayer(this.floorLayerName);
this._layerBarrier = this._tiledMap.getLayer(this.barrierLayerName);
if (this._layerFloor && this._layerBarrier) {
this._curTile = this._startTile = this._getTilePos(n);
this._endTile = this._getTilePos(o);
if (this._player) {
this._updatePlayerPos();
this._player.active = !0;
}
this._isMapLoaded = !0;
}
}
}
}
},
_initMapPos: function() {
this.node.setPosition(cc.visibleRect.bottomLeft);
},
_updatePlayerPos: function() {
var e = this._layerFloor.getPositionAt(this._curTile);
this._player.setPosition(e);
},
_getTilePos: function(e) {
var t = this.node.getContentSize(), i = this._tiledMap.getTileSize(), s = Math.floor(e.x / i.width), n = Math.floor((t.height - e.y) / i.height);
return cc.v2(s, n);
},
_onKeyPressed: function(e) {
if (this._isMapLoaded && !this._succeedLayer.active) {
var t = cc.v2(this._curTile.x, this._curTile.y), s = i.NONE;
switch (e.keyCode) {
case cc.macro.KEY.up:
t.y -= 1;
s = i.DOWN;
break;

case cc.macro.KEY.down:
t.y += 1;
s = i.UP;
break;

case cc.macro.KEY.left:
t.x -= 1;
s = i.RIGHT;
break;

case cc.macro.KEY.right:
t.x += 1;
s = i.LEFT;
break;

default:
return;
}
this._tryMoveToNewTile(t, s);
}
},
_tryMoveToNewTile: function(e, t) {
var i = this._tiledMap.getMapSize();
if (!(e.x < 0 || e.x >= i.width || e.y < 0 || e.y >= i.height)) {
if (this._layerBarrier.getTileGIDAt(e)) {
cc.log("This way is blocked!");
return !1;
}
this._curTile = e;
this._updatePlayerPos();
this._tryMoveMap(t);
if (this._curTile.equals(this._endTile)) {
cc.log("succeed");
this._succeedLayer.active = !0;
}
}
},
_tryMoveMap: function(e) {
var t, s = this.node.getContentSize(), n = this.node.getPosition(), o = this._player.getPosition(), a = cc.size(cc.visibleRect.width, cc.visibleRect.height), c = this._tiledMap.getTileSize(), r = 2 * c.width, l = 2 * c.height, u = o.x + n.x, d = o.y + n.y;
switch (e) {
case i.UP:
d < l && (t = cc.v2(n.x, n.y + 1 * c.height));
break;

case i.DOWN:
a.height - d - c.height < l && (t = cc.v2(n.x, n.y - 1 * c.height));
break;

case i.LEFT:
a.width - u - c.width < r && (t = cc.v2(n.x - 1 * c.width, n.y));
break;

case i.RIGHT:
u < r && (t = cc.v2(n.x + 1 * c.width, n.y));
break;

default:
return;
}
if (t) {
var p = a.width - s.width - cc.visibleRect.left, h = cc.visibleRect.left.x, f = a.height - s.height - cc.visibleRect.bottom, _ = cc.visibleRect.bottom.y;
t.x < p && (t.x = p);
t.x > h && (t.x = h);
t.y < f && (t.y = f);
t.y > _ && (t.y = _);
if (!t.equals(n)) {
cc.log("Move the map to new position: ", t);
this.node.setPosition(t);
}
}
}
});
cc._RF.pop();
}, {} ],
ReferenceTypeProperties: [ function(e, t) {
"use strict";
cc._RF.push(t, "9341f3fDdBMjJLKh4D+kJJK", "ReferenceTypeProperties");
var i = e("MyCustomComponent");
cc.Class({
extends: cc.Component,
properties: {
myNode: {
default: null,
type: cc.Node
},
mySprite: {
default: null,
type: cc.Sprite
},
myLabel: {
default: null,
type: cc.Label
},
myComponent: {
default: null,
type: i
},
mySpriteFrame: {
default: null,
type: cc.SpriteFrame
},
myAtlas: {
default: null,
type: cc.SpriteAtlas
},
myPrefab: {
default: null,
type: cc.Prefab
},
myAudioClip: {
default: null,
type: cc.AudioClip
}
},
onLoad: function() {
this.myLabel.string = this.myComponent.getPower().toString();
},
update: function() {}
});
cc._RF.pop();
}, {
MyCustomComponent: "MyCustomComponent"
} ],
RepeatAction: [ function(e, t) {
"use strict";
cc._RF.push(t, "66d74aG3cdDq4lLyUUjOCk/", "RepeatAction");
cc.Class({
extends: cc.Component,
properties: {
tips: cc.Label
},
onLoad: function() {
var e = this;
this.setTips(0);
var t = 0, i = cc.delayTime(1), s = cc.callFunc(function() {
t++;
e.setTips(t);
}, this);
this.node.runAction(cc.repeat(cc.sequence(i, s), 5));
},
setTips: function(e) {
this.tips.string = "repeat count: 5 / value".replace(/value/, e);
}
});
cc._RF.pop();
}, {} ],
ReplaceSlotDisplay: [ function(e, t) {
"use strict";
cc._RF.push(t, "972e5Ii4p5AYa4e91UP427+", "ReplaceSlotDisplay");
cc.Class({
extends: cc.Component,
properties: {
armatureDisplay: {
type: dragonBones.ArmatureDisplay,
default: null
},
replaceArmatureDisplay: {
type: dragonBones.ArmatureDisplay,
default: null
}
},
start: function() {
this.replaceArmatureDisplay.node.active = !1;
this._leftWeaponIndex = 0;
this._rightDisplayIndex = 0;
this._rightDisplayNames = [ "weapon_1004_r", "weapon_1004d_r" ];
this._rightDisplayOffset = [ {
x: 0,
y: 0
}, {
x: -60,
y: 100
} ];
},
left: function() {
var e = this.armatureDisplay.armature().getSlot("weapon_hand_l");
e.displayIndex = 0 == e.displayIndex ? 4 : 0;
},
right: function() {
this._rightDisplayIndex++;
this._rightDisplayIndex %= this._rightDisplayNames.length;
var e = this.armatureDisplay.armature(), t = e.getSlot("weapon_hand_r"), i = this._rightDisplayNames[this._rightDisplayIndex];
dragonBones.CCFactory.getInstance().replaceSlotDisplay(this.replaceArmatureDisplay.getArmatureKey(), "weapon", "weapon_r", i, t);
var s = this._rightDisplayOffset[this._rightDisplayIndex];
t.parent.offset.x = s.x;
t.parent.offset.y = s.y;
e.invalidUpdate();
}
});
cc._RF.pop();
}, {} ],
RichText: [ function(e, t) {
"use strict";
cc._RF.push(t, "ce4b5HKaNtMU4kQr7fbr5VH", "RichText");
cc.Class({
extends: cc.Component,
properties: {
positionMessage: cc.Label
},
clickme: function(e) {
var t = e.touch.getLocation();
this.positionMessage.string = "Clicked at: x = " + parseInt(parseFloat(t.x)) + ", y = " + parseInt(parseFloat(t.y));
}
});
cc._RF.pop();
}, {} ],
RotationCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "325ba8DYO5K6Yfgi5UmP4+L", "RotationCtrl");
cc.Class({
extends: cc.Component,
properties: {
rotationToNode: cc.Node,
rotateByNode: cc.Node
},
onToClick: function() {
var e = cc.rotateTo(1, 90);
this.rotationToNode.runAction(e);
},
onReverseToClick: function() {
var e = cc.rotateTo(1, 180);
this.rotationToNode.runAction(e);
},
onToRecoverClick: function() {
this.rotationToNode.angle = 0;
},
onByClick: function() {
var e = cc.rotateBy(1, 90);
this.rotateByNode.runAction(e);
},
onReverseByClick: function() {
var e = cc.rotateBy(1, 180);
this.rotateByNode.runAction(e);
},
onByRecoverClick: function() {
this.rotateByNode.angle = 0;
}
});
cc._RF.pop();
}, {} ],
RuntimeLabel: [ function(e, t) {
"use strict";
cc._RF.push(t, "5530cLc2wJFVpWkBxALC33G", "RuntimeLabel");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
"undefined" != typeof runtime || (this.node.active = !1);
}
});
cc._RF.pop();
}, {} ],
SceneList: [ function(e, t) {
"use strict";
cc._RF.push(t, "473b8wxs55OsJvoxVdYCzTF", "SceneList");
var i = e("TipsManager");
cc.Class({
extends: cc.Component,
properties: {
itemPrefab: {
default: null,
type: cc.Prefab
},
initItemCount: 0,
scrollView: cc.ScrollView,
bufferZone: 0,
searchBlock: cc.Node
},
createItem: function(e, t, i, s) {
var n = cc.instantiate(this.itemPrefab), o = n.getComponent("ListItem");
o.label.string = i;
s && (o.url = s);
n.x = e;
n.y = t;
this.node.addChild(n);
return n;
},
init: function(e) {
this.menu = e;
this.sceneList = [];
this.itemList = [];
this.updateTimer = 0;
this.updateInterval = .2;
this.lastContentPosY = 0;
i.init();
this.initList();
},
initList: function() {
var e = cc.game._sceneInfos, t = {};
if (e) for (var i = 0; i < e.length; ++i) {
var s = e[i].url;
if (s.startsWith("db://assets/cases/")) {
var n = cc.path.dirname(s).replace("db://assets/cases/", ""), o = cc.path.basename(s, ".fire");
n || (n = "_root");
t[n] || (t[n] = {});
t[n][o] = s;
}
} else cc.error("failed to get scene list!");
var a = Object.keys(t);
a.sort();
for (var c = 0; c < a.length; ++c) {
this.sceneList.push({
name: a[c],
url: null
});
var r = Object.keys(t[a[c]]);
r.sort();
for (var l = 0; l < r.length; ++l) {
var u = r[l], d = t[a[c]][u];
this.sceneList.push({
name: u,
url: d
});
}
}
var p = 0;
this.node.height = 50 * (this.sceneList.length + 1);
for (var h = Math.min(this.initItemCount, this.sceneList.length), f = 0; f < h; ++f) {
var _ = cc.instantiate(this.itemPrefab).getComponent("ListItem"), g = this.sceneList[f];
_.init(this.menu);
this.node.addChild(_.node);
p -= 50;
_.updateItem(f, p, g.name, g.url);
this.itemList.push(_);
}
var m = this.searchBlock.getComponent("SearchBlock");
m.init(this.menu);
m.setItemList(this.sceneList);
},
getPositionInView: function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.itemList, i = this.bufferZone, s = this.node.y < this.lastContentPosY, n = this.itemList.length, o = 50 * n, a = 0; a < n; ++a) {
var c = t[a], r = c.node, l = this.getPositionInView(r);
if (s) {
if (l.y < -i && r.y + o < 0) {
var u = c.index - n, d = this.sceneList[u];
c.updateItem(u, r.y + o, d.name, d.url);
}
} else if (l.y > i && r.y - o > -this.node.height) {
var p = c.index + n, h = this.sceneList[p];
c.updateItem(p, r.y - o, h.name, h.url);
}
}
this.lastContentPosY = this.node.y;
}
}
});
cc._RF.pop();
}, {
TipsManager: "TipsManager"
} ],
SearchBlock: [ function(e, t) {
"use strict";
cc._RF.push(t, "5fac7sHbOhNlpzkn8js40Bz", "SearchBlock");
var i = e("TipsManager");
cc.Class({
extends: cc.Component,
properties: {
editBox: cc.EditBox,
_itemList: [],
_isShow: !1
},
init: function(e) {
this.menu = e;
},
setItemList: function(e) {
this._itemList = e;
},
loadExample: function() {
var e = this.editBox.string, t = this.findItemUrl(e);
if (t) {
if (i.hasSupport(e)) {
this.showSearchBlock();
this.editBox.string = "";
this.menu.loadScene(t);
}
} else i.createTips("Doesn't find that scene.");
},
findItemUrl: function(e) {
for (var t = 0; t < this._itemList.length; t++) {
var i = this._itemList[t];
if (i.name === e) return i.url;
}
},
showSearchBlock: function() {
this._isShow = !this._isShow;
var e;
e = this._isShow ? cc.moveBy(.5, cc.v2(0, -48)) : cc.moveBy(.5, cc.v2(0, 48));
this.node.runAction(e);
}
});
cc._RF.pop();
}, {
TipsManager: "TipsManager"
} ],
SequenceAction: [ function(e, t) {
"use strict";
cc._RF.push(t, "9f1d440juJBgqdwVALTCD4k", "SequenceAction");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
}
},
start: function() {
var e = this, t = 0, i = cc.sequence(cc.moveBy(.5, cc.v2(0, -300)), cc.moveBy(.25, cc.v2(0, 300))).repeat(2), s = cc.sequence(cc.moveBy(.5, cc.v2(0, -200)), cc.moveBy(.5, cc.v2(0, 200))).repeat(2);
this.node.runAction(cc.sequence(cc.callFunc(function() {
t = Date.now();
}), i, s, cc.callFunc(function() {
var i = Math.abs(Date.now() - t) / 1e3;
if (i - 3.5 >= .05) {
e.label.string = "Failed - ElapseTime: " + i.toFixed(1);
e.label.node.color = cc.color(255, 0, 0);
} else {
e.label.string = "Succeed - ElapseTime: " + i.toFixed(1);
e.label.node.color = cc.color(0, 255, 0);
}
})));
}
});
cc._RF.pop();
}, {} ],
SheepAnimationCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "ae6fcR8cuFGRYHW525VJD/k", "SheepAnimationCtrl");
cc.Class({
extends: cc.Component,
properties: {
sheepAnim: {
default: null,
type: cc.Animation
}
},
onLoad: function() {
var e = this.sheepAnim;
this._playAnimCallback = function() {
e.play("sheep_jump");
};
this.scheduleOnce(this._playAnimCallback, 2);
},
update: function() {}
});
cc._RF.pop();
}, {} ],
ShieldNode: [ function(e, t) {
"use strict";
cc._RF.push(t, "11d749OX3BDRqOfPVpy+u7u", "ShieldNode");
cc.Class({
extends: cc.Component,
properties: {
tiledLayer: {
type: cc.TiledLayer,
default: null
}
},
onLoad: function() {
cc.resources.load("tilemap/shieldNode", function(e, t) {
e ? cc.error("tilemap/shieldNode resources load failed") : this.initScene(t);
}.bind(this));
},
initScene: function(e) {
for (var t = this, i = [ cc.v2(-249, 96), cc.v2(-150, 76), cc.v2(-60, 54), cc.v2(-248, -144), cc.v2(-89, -34) ], s = function(s) {
var n = cc.instantiate(e);
n.x = i[s].x;
n.y = i[s].y;
t.tiledLayer.addUserNode(n);
n.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var t = e.getLocation().sub(e.getPreviousLocation());
n.x += t.x;
n.y += t.y;
});
}, n = 0; n < i.length; n++) s(n);
}
});
cc._RF.pop();
}, {} ],
Shooter: [ function(e, t) {
"use strict";
cc._RF.push(t, "092a3wYF7pBULdP9SLwGUBQ", "Shooter");
cc.Class({
extends: cc.Component,
properties: {
bullet: {
default: null,
type: cc.Node
}
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !0;
cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
},
onTouchBegan: function(e) {
var t = cc.director.getScene(), i = e.touch.getLocation(), s = cc.instantiate(this.bullet);
s.position = i;
s.active = !0;
t.addChild(s);
},
onDisable: function() {
cc.director.getCollisionManager().enabled = !1;
cc.director.getCollisionManager().enabledDebugDraw = !1;
}
});
cc._RF.pop();
}, {} ],
ShowCollider: [ function(e, t) {
"use strict";
cc._RF.push(t, "5a6dfRzhTBMp5U3il8DJmBZ", "ShowCollider");
cc.Class({
extends: cc.Component,
onLoad: function() {},
onBtnClick: function(e) {
var t = e.target, i = "cc." + t.name + "Collider", s = "Canvas/root/" + t.parent.name, n = cc.find(s).getComponent(i);
n.enabled = !n.enabled;
var o = t.getChildByName("Label").getComponent(cc.Label);
n.enabled ? o.string = o.string.replace("Show", "Hide") : o.string = o.string.replace("Hide", "Show");
}
});
cc._RF.pop();
}, {} ],
ShowSubMenu: [ function(e, t) {
"use strict";
cc._RF.push(t, "19224TiKDhPbZ8/hTkQA7ey", "ShowSubMenu");
cc.Class({
extends: cc.Component,
toggle: function() {
var e = this.node.y < 0;
this.getComponent(cc.Animation).play(e ? "hide menu" : "show menu");
}
});
cc._RF.pop();
}, {} ],
ShowTips: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b71d3yctLlH0bVfbZXKVJIY", "ShowTips");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = (a.property, function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.tips = null;
t.ifshow = !1;
return t;
}
t.prototype.showtip = function() {
this.tips.active = !this.tips.active;
};
t.prototype.start = function() {
this.tips = this.node.getChildByName("tips");
};
return o([ c ], t);
}(cc.Component));
i.default = r;
cc._RF.pop();
}, {} ],
SimpleAction: [ function(e, t) {
"use strict";
cc._RF.push(t, "b6067a1+J5FW4G30nmVLU/d", "SimpleAction");
cc.Class({
extends: cc.Component,
properties: {
jumper: {
default: null,
type: cc.Node
},
colorNode: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.squashAction = cc.scaleTo(.2, 1, .6);
this.stretchAction = cc.scaleTo(.2, 1, 1.2);
this.scaleBackAction = cc.scaleTo(.1, 1, 1);
this.moveUpAction = cc.moveBy(1, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
this.moveDownAction = cc.moveBy(1, cc.v2(0, -200)).easing(cc.easeCubicActionIn());
var e = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction, cc.callFunc(this.callback.bind(this)));
this.jumper.runAction(e);
this.colorNode.runAction(cc.sequence(cc.tintTo(2, 255, 0, 0), cc.delayTime(.5), cc.fadeOut(1), cc.delayTime(.5), cc.fadeIn(1), cc.delayTime(.5), cc.tintTo(2, 255, 255, 255)).repeat(2));
},
callback: function() {
this.node.removeFromParent();
}
});
cc._RF.pop();
}, {} ],
SimpleButtonCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "68675KwfElAdaumPl1byNh7", "SimpleButtonCtrl");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
buttonLeft: cc.Button,
buttonRight: cc.Button,
display: cc.Label
},
onBtnLeftClicked: function() {
console.log("Left button clicked!");
this.display.textKey = i.t("cases/02_ui/03_button/SimpleButton.js.1");
},
onBtnRightClicked: function() {
console.log("Right button clicked!");
this.display.textKey = i.t("cases/02_ui/03_button/SimpleButton.js.2");
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
SimpleKeyboardMovement: [ function(e, t) {
"use strict";
cc._RF.push(t, "c3f971iyCdIh6xdaO49XP0F", "SimpleKeyboardMovement");
cc.Class({
extends: cc.Component,
properties: {
sheep: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.turnRight();
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
},
onKeyDown: function(e) {
var t = cc.macro;
switch (e.keyCode) {
case t.KEY.a:
case t.KEY.left:
console.log("turn left");
this.turnLeft();
break;

case t.KEY.d:
case t.KEY.right:
console.log("turn right");
this.turnRight();
}
},
update: function(e) {
this.sheep.x += this.speed * e;
},
turnLeft: function() {
this.speed = -100;
this.sheep.scaleX = 1;
},
turnRight: function() {
this.speed = 100;
this.sheep.scaleX = -1;
}
});
cc._RF.pop();
}, {} ],
SimpleMotion: [ function(e, t) {
"use strict";
cc._RF.push(t, "fde33rWt81MvZWO7QQ3jv3j", "SimpleMotion");
cc.Class({
extends: cc.Component,
properties: {
moveSpeed: 100,
rotationSpeed: 90
},
onLoad: function() {},
update: function(e) {
this.node.x += e * this.moveSpeed;
this.node.angle += e * this.rotationSpeed;
}
});
cc._RF.pop();
}, {} ],
SingletonCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "fcfefvjPgdGEKnfOwuoIVJD", "SingletonCtrl");
var i = e("Singleton");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = new cc.Node("Monster");
e.addComponent(cc.Sprite).spriteFrame = i.instance.monsterIcon;
e.parent = this.node;
}
});
cc._RF.pop();
}, {
Singleton: "Singleton"
} ],
Singleton: [ function(e, t) {
"use strict";
cc._RF.push(t, "379d2K4GUtCv7pB9+wuz4Lb", "Singleton");
var i = cc.Class({
extends: cc.Component,
properties: {
monsterIcon: {
default: null,
type: cc.SpriteFrame
}
},
statics: {
instance: null
},
onLoad: function() {
i.instance = this;
}
});
cc._RF.pop();
}, {} ],
SliderCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "051d5Epx65ARZ9itjsuO9NL", "SliderCtrl");
cc.Class({
extends: cc.Component,
properties: {
image: cc.Node,
music: cc.AudioSource,
slider_h: cc.Slider,
slider_v: cc.Slider
},
onLoad: function() {
this.slider_v.progress = .5;
this.slider_h.progress = .5;
this._updateImageOpacity(this.slider_v.progress);
this._updateMusicVolume(this.slider_h.progress);
},
_updateImageOpacity: function(e) {
this.image.opacity = 255 * e;
},
_updateMusicVolume: function(e) {
this.music.volume = e;
},
onSliderVEvent: function(e) {
this._updateImageOpacity(e.progress);
},
onSliderHEvent: function(e) {
this._updateMusicVolume(e.progress);
}
});
cc._RF.pop();
}, {} ],
SpineAttach: [ function(e, t) {
"use strict";
cc._RF.push(t, "d2104r6tvhC7qEefqkgfYyg", "SpineAttach");
cc.Class({
extends: cc.Component,
properties: {
skeleton: {
type: sp.Skeleton,
default: null
},
targetPrefab: {
type: cc.Prefab,
default: null
},
modeLabel: {
type: cc.Label,
default: null
},
redBoneName: "",
greenBoneName: "",
blueBoneName: ""
},
generateAllNodes: function() {
var e = this.skeleton.attachUtil;
e.generateAllAttachedNodes();
var t = e.getAttachedNodes(this.redBoneName), i = t[0];
if (i) {
var s = cc.instantiate(this.targetPrefab);
s.color = cc.color(255, 0, 0);
i.addChild(s);
}
if (i = (t = e.getAttachedNodes(this.blueBoneName))[0]) {
var n = cc.instantiate(this.targetPrefab);
n.color = cc.color(0, 0, 255);
i.addChild(n);
}
},
destroyAllNodes: function() {
this.skeleton.attachUtil.destroyAllAttachedNodes();
},
destroyUnusual: function() {
var e = this.skeleton.attachUtil.getAttachedNodes("root")[0];
e && e.destroy();
},
generateSomeNodes: function() {
var e = this.skeleton.attachUtil.generateAttachedNodes(this.greenBoneName)[0];
if (e) {
var t = cc.instantiate(this.targetPrefab);
t.color = cc.color(0, 255, 0);
e.addChild(t);
}
},
destroySomeNodes: function() {
this.skeleton.attachUtil.destroyAttachedNodes(this.greenBoneName);
},
changeMode: function() {
if (this.skeleton.isAnimationCached()) {
this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
this.modeLabel.string = "cache";
} else {
this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
this.modeLabel.string = "realtime";
}
}
});
cc._RF.pop();
}, {} ],
SpineCollider: [ function(e, t) {
"use strict";
cc._RF.push(t, "318b3Y0citJN6RZS4dOnAn0", "SpineCollider");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.collisionManager = cc.director.getCollisionManager();
this.collisionManager.enabled = !0;
this.collisionManager.enabledDebugDraw = !1;
cc.director.once(cc.Director.EVENT_AFTER_DRAW, function() {
this.collisionManager.enabledDebugDraw = !0;
}.bind(this));
this.stayCount = 0;
},
onDestroy: function() {
this.collisionManager.enabledDebugDraw = !1;
},
onCollisionEnter: function() {
this.stayCount++;
},
onCollisionExit: function() {
this.stayCount--;
},
update: function() {
this.stayCount > 0 ? this.node.color = cc.color(0, 200, 200) : this.node.color = cc.color(255, 255, 255);
}
});
cc._RF.pop();
}, {} ],
SpineCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "91115OWZ9hJkIXaqCNRUsZC", "SpineCtrl");
cc.Class({
extends: cc.Component,
editor: {
requireComponent: sp.Skeleton
},
properties: {
mixTime: .2
},
onLoad: function() {
var e = this, t = this.spine = this.getComponent("sp.Skeleton");
this._setMix("walk", "run");
this._setMix("run", "jump");
this._setMix("walk", "jump");
t.setStartListener(function(e) {
var t = e.animation ? e.animation.name : "";
cc.log("[track %s][animation %s] start.", e.trackIndex, t);
});
t.setInterruptListener(function(e) {
var t = e.animation ? e.animation.name : "";
cc.log("[track %s][animation %s] interrupt.", e.trackIndex, t);
});
t.setEndListener(function(e) {
var t = e.animation ? e.animation.name : "";
cc.log("[track %s][animation %s] end.", e.trackIndex, t);
});
t.setDisposeListener(function(e) {
var t = e.animation ? e.animation.name : "";
cc.log("[track %s][animation %s] will be disposed.", e.trackIndex, t);
});
t.setCompleteListener(function(t) {
var i = t.animation ? t.animation.name : "";
"shoot" === i && e.spine.clearTrack(1);
var s = Math.floor(t.trackTime / t.animationEnd);
cc.log("[track %s][animation %s] complete: %s", t.trackIndex, i, s);
});
t.setEventListener(function(e, t) {
var i = e.animation ? e.animation.name : "";
cc.log("[track %s][animation %s] event: %s, %s, %s, %s", e.trackIndex, i, t.data.name, t.intValue, t.floatValue, t.stringValue);
});
this._hasStop = !1;
},
toggleDebugSlots: function() {
this.spine.debugSlots = !this.spine.debugSlots;
},
toggleDebugBones: function() {
this.spine.debugBones = !this.spine.debugBones;
},
toggleTimeScale: function() {
1 === this.spine.timeScale ? this.spine.timeScale = .3 : this.spine.timeScale = 1;
},
stop: function() {
this.spine.clearTrack(0);
this._hasStop = !0;
},
walk: function() {
this.spine.setAnimation(0, "walk", !0);
this._hasStop = !1;
},
run: function() {
this.spine.setAnimation(0, "run", !0);
this._hasStop = !1;
},
jump: function() {
var e = this.spine.animation;
this.spine.setAnimation(0, "jump", !1);
e && !this._hasStop && this.spine.addAnimation(0, "run" === e ? "run" : "walk", !0, 0);
},
shoot: function() {
this.spine.setAnimation(1, "shoot", !1);
},
_setMix: function(e, t) {
this.spine.setMix(e, t, this.mixTime);
this.spine.setMix(t, e, this.mixTime);
}
});
cc._RF.pop();
}, {} ],
SpineMode: [ function(e, t) {
"use strict";
cc._RF.push(t, "7fa3163/tVA2oO0IuiaM79C", "SpineMode");
cc.Class({
extends: cc.Component,
properties: {
grayMaterial: cc.Material,
normalMaterial: cc.Material,
sp0: sp.Skeleton,
sp1: sp.Skeleton,
sp2: sp.Skeleton,
batchLabel: cc.Label,
cacheLabel: cc.Label,
matLabel: cc.Label,
tintLabel: cc.Label
},
onGray: function() {
this.isGray = !this.isGray;
var e = "gray";
this.isGray && (e = "normal");
this.matLabel.string = e;
var t = this.grayMaterial;
this.isGray || (t = this.normalMaterial);
this.sp0.setMaterial(0, t);
this.sp0.markForRender(!0);
this.sp1.setMaterial(0, t);
this.sp1.markForRender(!0);
this.sp2.setMaterial(0, t);
this.sp2.markForRender(!0);
},
onBatch: function() {
this.isBatch = !this.isBatch;
var e = "batch";
this.isBatch && (e = "no batch");
this.batchLabel.string = e;
this.sp0.enableBatch = this.isBatch;
this.sp1.enableBatch = this.isBatch;
this.sp2.enableBatch = this.isBatch;
},
onCache: function() {
this.isCache = !this.isCache;
var e = "cache";
this.isCache && (e = "no cache");
this.cacheLabel.string = e;
var t = dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE;
this.isCache || (t = dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
this.sp0.setAnimationCacheMode(t);
this.sp1.setAnimationCacheMode(t);
this.sp2.setAnimationCacheMode(t);
},
onTint: function() {
this.isTint = !this.isTint;
var e = "tint";
this.isTint && (e = "no tint");
this.tintLabel.string = e;
this.sp0.useTint = this.isTint;
this.sp1.useTint = this.isTint;
this.sp2.useTint = this.isTint;
}
});
cc._RF.pop();
}, {} ],
SpineSkin: [ function(e, t) {
"use strict";
cc._RF.push(t, "9dc947ZsNtBXYqCPSgN0fAB", "SpineSkin");
cc.Class({
extends: cc.Component,
properties: {
goblin: {
type: sp.Skeleton,
default: null
},
goblingirl: {
type: sp.Skeleton,
default: null
}
},
start: function() {
this._skinIdx = 0;
this.parts = [ "left-arm", "left-hand", "left-shoulder" ];
},
change: function() {
if (0 == this._skinIdx) {
this._skinIdx = 1;
for (var e = 0; e < this.parts.length; e++) {
var t = this.goblin.findSlot(this.parts[e]), i = this.goblingirl.findSlot(this.parts[e]).getAttachment();
t.setAttachment(i);
}
} else if (1 == this._skinIdx) {
this._skinIdx = 0;
this.goblin.setSkin("goblin");
this.goblin.setSlotsToSetupPose();
}
}
});
cc._RF.pop();
}, {} ],
StorageUtil: [ function(e, t) {
"use strict";
cc._RF.push(t, "9bf9cWgTmNAapAWiQT08YdJ", "StorageUtil");
cc.Class({
extends: cc.Component,
setCurrentScene: function() {},
getCurrentScene: function() {},
clearStorage: function() {
cc.sys.localStorage.clear();
}
});
cc._RF.pop();
}, {} ],
TagColliderListener: [ function(e, t) {
"use strict";
cc._RF.push(t, "cc2a1tfAtlEWoLmkfLbgQS3", "TagColliderListener");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
}
},
onEnable: function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !0;
},
onDisable: function() {
cc.director.getCollisionManager().enabled = !1;
cc.director.getCollisionManager().enabledDebugDraw = !1;
},
onCollisionEnter: function(e, t) {
this.label.string = "Collision on tag : " + t.tag;
}
});
cc._RF.pop();
}, {} ],
TiledTile: [ function(e, t) {
"use strict";
cc._RF.push(t, "f47ccRZveFP2o2cCRmfZTTo", "TiledTile");
cc.Class({
extends: cc.Component,
start: function() {
this.getComponent(cc.TiledLayer).getTiledTileAt(0, 22, !0).node.runAction(cc.spawn(cc.scaleTo(2, 3, 3), cc.rotateTo(2, 90), cc.moveTo(2, 600, 300)));
}
});
cc._RF.pop();
}, {} ],
TipsCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "8ae30fCf3BOT5yZGmirBXJi", "TipsCtrl");
cc.Class({
extends: cc.Component,
properties: {
content: e("LabelLocalized")
},
onDestroySelf: function() {
this.node.destroy();
},
setContent: function(e) {
e && (this.content.textKey = e);
}
});
cc._RF.pop();
}, {
LabelLocalized: "LabelLocalized"
} ],
TipsManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "6c9bezFtu5AHZUcydh+6QJj", "TipsManager");
var i = cc.sys.platform === cc.sys.ANDROID, s = cc.sys.isNative, n = s && cc.sys.os === cc.sys.OS_WINDOWS, o = s && cc.sys.os === cc.sys.OS_OSX, a = cc.sys.isBrowser, c = cc.sys.isMobile, r = cc.sys.platform === cc.sys.IPHONE, l = cc.sys.platform === cc.sys.DESKTOP_BROWSER, u = cc.sys.platform === cc.sys.WECHAT_GAME, d = cc.sys.platform === cc.sys.QQ_PLAY, p = cc.sys.platform === cc.sys.BAIDU_GAME, h = cc.sys.platform === cc.sys.VIVO_GAME, f = cc.sys.platform === cc.sys.OPPO_GAME, _ = cc.sys.platform === cc.sys.XIAOMI_GAME, g = cc.sys.platform === cc.sys.HUAWEI_GAME, m = (cc.sys.platform, 
cc.sys.JKW_GAME, cc.sys.platform === cc.sys.ALIPAY_GAME);
t.exports = {
tispPrefab: null,
SupportConfig: function(e) {
console.log(e);
switch (e) {
case "downloader-web":
return !s;

case "EditBoxTabIndex":
return !s && !m;

case "EditBox":
case "EditBoxEvent":
return !m;

case "OnMultiTouchInput":
return c;

case "webp-test":
return cc.sys.capabilities.webp;

case "DeviceMotion":
return c && !d && !h;

case "Native_Call":
return c && (i || r) && !0;

case "TTFFontLabel":
return !d;

case "MousePropagation":
return s && !c && !u && !d && !_ && !g && !m || l;

case "downloader-native":
return s && !0;

case "capture_to_native":
return s && !h && !f;

case "SafeArea":
return (r || i) && s;

case "capture_to_wechat":
return u;

case "capture_to_web":
case "ShadowLabel":
case "videoPlayer-stayOnBottom":
return a;

case "MotionStreak":
case "Mask_IMAGE_STENCIL":
case "Mask_NESTED":
return cc.game.renderType === cc.game.RENDER_TYPE_WEBGL;

case "KeyboardInput":
case "platform":
return !(c || p || _ || g || m);

case "videoPlayer":
return !(n || o || d || p || _ || g || m);

case "webview":
return (c || a) && !d && !u && !p && !_ && !g && !m;

case "mesh":
return !h && !f;
}
},
init: function() {
var e = this;
this.tipsPrefab || cc.resources.load("tips/Tips", function(t, i) {
e.tipsPrefab = i;
});
},
createTips: function(e) {
var t = cc.instantiate(this.tipsPrefab), i = t.getComponent("TipsCtrl");
e && i.setContent(e);
t.parent = cc.director.getScene();
},
hasSupport: function(e, t) {
var i = this.SupportConfig(e);
if (!i && void 0 !== i) {
t || this.createTips();
return !1;
}
return !0;
}
};
cc._RF.pop();
}, {} ],
TouchDragger: [ function(e, t) {
"use strict";
cc._RF.push(t, "95021X5KjxP369OONe316sH", "TouchDragger");
var i = cc.Class({
extends: cc.Component,
properties: {
propagate: {
default: !1
}
},
onLoad: function() {
this.node.opacity = 160;
this.node.on(cc.Node.EventType.TOUCH_START, function() {
cc.log("Drag stated ...");
this.opacity = 255;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
this.opacity = 255;
var t = e.touch.getDelta();
this.x += t.x;
this.y += t.y;
this.getComponent(i).propagate && e.stopPropagation();
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 160;
}, this.node);
}
});
cc._RF.pop();
}, {} ],
TouchEvent: [ function(e, t) {
"use strict";
cc._RF.push(t, "a14bfaD+gRJKrTVjKwitc53", "TouchEvent");
cc.Class({
extends: cc.Component,
_callback: null,
onLoad: function() {
this.node.opacity = 100;
this.node.on(cc.Node.EventType.TOUCH_START, function() {
this.node.opacity = 255;
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.node.opacity = 100;
this._callback && this._callback();
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
this.node.opacity = 100;
}, this);
}
});
cc._RF.pop();
}, {} ],
TransformController: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "cd33cZWBSxM+52OyVSI00UY", "TransformController");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = cc.Node, u = cc.Vec3, d = 0, p = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.particle1 = null;
t.particle2 = null;
t.particle3 = null;
t.particle4 = null;
t.check1 = null;
t.check2 = null;
t.check3 = null;
t.check4 = null;
t._translate = new u();
t._rotate = new u();
return t;
}
t.prototype.start = function() {};
t.prototype.onTranslateChanged = function(e) {
this._translate.set(cc.v3(0, 0, 10 * e.progress - d));
d = 10 * e.progress;
if (this.check1.isChecked) {
this.particle1.x += this._translate.x;
this.particle1.y += this._translate.y;
this.particle1.z += this._translate.z;
}
if (this.check2.isChecked) {
this.particle2.x += this._translate.x;
this.particle2.y += this._translate.y;
this.particle2.z += this._translate.z;
}
if (this.check3.isChecked) {
this.particle3.x += this._translate.x;
this.particle4.y += this._translate.y;
this.particle3.z += this._translate.z;
}
if (this.check4.isChecked) {
this.particle4.x += this._translate.x;
this.particle4.y += this._translate.y;
this.particle4.z += this._translate.z;
}
};
t.prototype.onRotateChanged = function(e) {
this._rotate.set(cc.v3(90 * e.progress, 0, 0));
this.check1.isChecked && (this.particle1.eulerAngles = cc.v3(0, this._rotate.x, 0));
this.check2.isChecked && (this.particle2.eulerAngles = cc.v3(0, this._rotate.x, 0));
this.check3.isChecked && (this.particle3.eulerAngles = cc.v3(0, this._rotate.x, 0));
this.check4.isChecked && (this.particle4.eulerAngles = cc.v3(0, this._rotate.x, 0));
};
o([ r({
type: l
}) ], t.prototype, "particle1", void 0);
o([ r({
type: l
}) ], t.prototype, "particle2", void 0);
o([ r({
type: l
}) ], t.prototype, "particle3", void 0);
o([ r({
type: l
}) ], t.prototype, "particle4", void 0);
o([ r({
type: cc.Toggle
}) ], t.prototype, "check1", void 0);
o([ r({
type: cc.Toggle
}) ], t.prototype, "check2", void 0);
o([ r({
type: cc.Toggle
}) ], t.prototype, "check3", void 0);
o([ r({
type: cc.Toggle
}) ], t.prototype, "check4", void 0);
return o([ c ], t);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {} ],
ValueTypeProperties: [ function(e, t) {
"use strict";
cc._RF.push(t, "d9bf6bFb+tF779stLEmjzTV", "ValueTypeProperties");
cc.Class({
extends: cc.Component,
properties: {
myNumber: {
default: 0,
type: cc.Integer
},
myString: {
default: "default text"
},
myVec2: {
default: cc.Vec2.ZERO
},
myColor: {
default: cc.Color.WHITE
},
myOtherNumber: 0,
myOtherString: "no type definition",
myOtherVec2: cc.Vec2.ONE,
myOtherColor: cc.Color.BLACK
},
onLoad: function() {},
update: function() {}
});
cc._RF.pop();
}, {} ],
VertexEffect: [ function(e, t) {
"use strict";
cc._RF.push(t, "b1897ILwdBEsoce3TaJvAgZ", "VertexEffect");
cc.Class({
extends: cc.Component,
properties: {
skeleton: {
type: sp.Skeleton,
default: null
}
},
start: function() {
this._swirlTime = 0;
this._maxEffect = 3;
this._index = 0;
this._bound = cc.size(this.skeleton.node.width, this.skeleton.node.height);
this._swirlEffect = new sp.VertexEffectDelegate();
this._swirlEffect.initSwirlWithPowOut(0, 2);
this._jitterEffect = new sp.VertexEffectDelegate();
this._jitterEffect.initJitter(20, 20);
},
switchEffect: function() {
this._index++;
this._index >= this._maxEffect && (this._index = 0);
switch (this._index) {
case 0:
this.skeleton.setVertexEffectDelegate(null);
break;

case 1:
this.skeleton.setVertexEffectDelegate(this._jitterEffect);
break;

case 2:
this.skeleton.setVertexEffectDelegate(this._swirlEffect);
}
},
update: function(e) {
if (2 == this._index) {
this._swirlTime += e;
var t = this._swirlTime % 2;
t > 1 && (t = 1 - (t - 1));
var i = this._bound, s = this._swirlEffect.getSwirlVertexEffect();
s.angle = 360 * t;
s.centerX = .5 * i.width;
s.centerY = .5 * i.height;
s.radius = t * Math.sqrt(i.width * i.width + i.height * i.height);
}
}
});
cc._RF.pop();
}, {} ],
VideoPlayerCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "100b5UtyNJLNaih42ednEgN", "VideoPlayerCtrl");
var i = e("i18n"), s = e("TipsManager");
function n(e) {
switch (e) {
case cc.VideoPlayer.EventType.PLAYING:
return "PLAYING";

case cc.VideoPlayer.EventType.PAUSED:
return "PAUSED";

case cc.VideoPlayer.EventType.STOPPED:
return "STOPPED";

case cc.VideoPlayer.EventType.COMPLETED:
return "COMPLETED";

case cc.VideoPlayer.EventType.META_LOADED:
return "META_LOADED";

case cc.VideoPlayer.EventType.CLICKED:
return "CLICKED";

case cc.VideoPlayer.EventType.READY_TO_PLAY:
return "READY_TO_PLAY";

default:
return "NONE";
}
}
cc.Class({
extends: cc.Component,
properties: {
videoPlayer: cc.VideoPlayer,
statusLabel: cc.Label,
currentTime: cc.Label,
resSwitchBtnLabel: cc.Label,
controlButtons: cc.Node,
keep_Ratio_Switch: cc.Node,
playVideoArea: cc.Node,
visibility: cc.Label
},
start: function() {
var e = this;
s.init();
this.controlButtons.active = !1;
this.keep_Ratio_Switch.active = !(cc.sys.isBrowser || cc.sys.platform === cc.sys.WECHAT_GAME);
this.playVideoArea.on("touchend", function() {
e.videoPlayer.play();
});
},
onVideoPlayerEvent: function(e, t) {
this.statusLabel.string = "Status: " + n(t);
if (t === cc.VideoPlayer.EventType.CLICKED) this.videoPlayer.isPlaying() ? this.videoPlayer.pause() : this.videoPlayer.play(); else if (t === cc.VideoPlayer.EventType.READY_TO_PLAY || t === cc.VideoPlayer.EventType.META_LOADED) {
this.controlButtons.active = !0;
this.playVideoArea.active = !0;
} else t === cc.VideoPlayer.EventType.PLAYING && (this.playVideoArea.active = !1);
},
toggleFullscreen: function() {
if (cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ && cc.sys.browserVersion <= 7.2 && /Nexus 6/.test(navigator.userAgent)) {
s.createTips(i.t("cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen"));
return cc.log("May be crash, so prohibit full screen");
}
this.videoPlayer.isFullscreen = !0;
},
toggleVisibility: function() {
this.videoPlayer.node.active = !this.videoPlayer.node.active;
this.playVideoArea.active = this.videoPlayer.node.active;
this.visibility.string = "Visibility: " + this.videoPlayer.node.active;
},
keepRatioSwitch: function() {
this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
},
switchOnlineVideo: function() {
this.videoPlayer.remoteURL = "https://www.w3school.com.cn/i/movie.mp4";
this.videoPlayer.resourceType = cc.VideoPlayer.ResourceType.REMOTE;
this.playVideoArea.active = !0;
},
switchLoaclVide: function() {
this.videoPlayer.resourceType = cc.VideoPlayer.ResourceType.LOCAL;
this.playVideoArea.active = !0;
},
play: function() {
this.videoPlayer.play();
this.playVideoArea.active = !1;
},
pause: function() {
this.videoPlayer.pause();
},
stop: function() {
this.videoPlayer.stop();
},
update: function() {
this.currentTime && this.videoPlayer.currentTime >= 0 && (this.currentTime.string = this.videoPlayer.currentTime.toFixed(2) + " / " + this.videoPlayer.getDuration().toFixed(2));
}
});
cc._RF.pop();
}, {
TipsManager: "TipsManager",
i18n: "i18n"
} ],
Wall: [ function(e, t) {
"use strict";
cc._RF.push(t, "1a279oXNoxFFI516fswAbVo", "Wall");
var i = cc.Enum({
Left: 0,
Right: 1,
Top: 2,
Bottom: 3
});
cc.Class({
extends: cc.Component,
properties: {
type: {
default: i.Left,
type: i
},
width: 5
},
start: function() {
var e = this.getComponent(cc.BoxCollider);
if (e) {
var t = this.node, s = this.type, n = cc.winSize.width, o = cc.winSize.height, a = this.width;
if (s === i.Left) {
t.height = o;
t.width = a;
t.x = 0;
t.y = o / 2;
} else if (s === i.Right) {
t.height = o;
t.width = a;
t.x = n;
t.y = o / 2;
} else if (s === i.Top) {
t.width = n;
t.height = a;
t.x = n / 2;
t.y = o;
} else if (s === i.Bottom) {
t.width = n;
t.height = a;
t.x = n / 2;
t.y = 0;
}
e.size = t.getContentSize();
}
}
});
cc._RF.pop();
}, {} ],
WebviewCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "f8de1gmPM1CLoiv+P/T9HnJ", "WebviewCtrl");
cc.Class({
extends: cc.Component,
properties: {
labelStatus: cc.Label,
webview: cc.WebView,
url: cc.EditBox
},
onWebFinishLoad: function(e, t) {
var i = "";
t === cc.WebView.EventType.LOADED ? i = " is loaded!" : t === cc.WebView.EventType.LOADING ? i = " is loading!" : t === cc.WebView.EventType.ERROR && (i = " load error!");
this.labelStatus.string = this.webview.url + i;
},
visitURL: function() {
this.webview.url = this.url.string;
}
});
cc._RF.pop();
}, {} ],
arc: [ function(e, t) {
"use strict";
cc._RF.push(t, "a556aaUmwpNjJWPRek7CPtI", "arc");
cc.Class({
extends: cc.Component,
onLoad: function() {
var e = this.getComponent(cc.Graphics);
e.lineWidth = 5;
e.fillColor.fromHEX("#ff0000");
e.arc(0, 0, 100, Math.PI / 2, Math.PI, !1);
e.lineTo(0, 0);
e.close();
e.stroke();
e.fill();
e.fillColor.fromHEX("#00ff00");
e.arc(-10, 10, 100, Math.PI / 2, Math.PI, !0);
e.lineTo(-10, 10);
e.close();
e.stroke();
e.fill();
}
});
cc._RF.pop();
}, {} ],
"asset-bundle": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "a1593ZAlz9Fk4nHnFYUp3O+", "asset-bundle");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = e("../../i18n/i18n"), u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadTips = null;
t.showWindow = null;
t.labels = [];
t._audioSource = null;
t._isLoading = !1;
return t;
}
t.prototype.onLoad = function() {
cc.assetManager.getBundle("TestBundle") && (this.labels[0].textKey = l.t("cases/AssetBundle.12"));
};
t.prototype.onClickBundle = function() {
var e = this;
if (!cc.assetManager.getBundle("TestBundle") && !this._isLoading) {
this._onClear();
this._isLoading = !0;
this.loadTips.textKey = "Bundle Loading....";
cc.assetManager.loadBundle("TestBundle", function(t) {
if (t) cc.log("Error url [" + t + "]"); else {
e._isLoading = !1;
e.loadTips.textKey = "Bundle loaded Successfully!";
e.labels[0].textKey = l.t("cases/AssetBundle.12");
}
});
}
};
t.prototype.onClickTexture = function() {
var e = this;
if (!this._isLoading) {
var t = cc.assetManager.getBundle("TestBundle");
if (t) {
this._onClear();
this._isLoading = !0;
this.loadTips.textKey = "Texture Loading....";
t.load("gold", function(t, i) {
if (t) cc.log("Error url [" + t + "]"); else {
e._isLoading = !1;
e.loadTips.textKey = "";
var s = new cc.Node("New Node");
s.setPosition(0, 0);
s.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i);
e.labels[1].textKey = l.t("cases/AssetBundle.12");
e.showWindow.addChild(s);
}
});
} else this.loadTips.textKey = "cases/AssetBundle.9";
}
};
t.prototype.onClickAudio = function() {
var e = this;
if (!this._isLoading) {
var t = cc.assetManager.getBundle("TestBundle");
if (t) {
this._onClear();
this._isLoading = !0;
this.loadTips.textKey = "Audio Loading....";
t.load("ss", function(t, i) {
if (t) cc.log("Error url [" + t + "]"); else {
e._isLoading = !1;
e.loadTips.textKey = "";
var s = new cc.Node("New Node");
s.setPosition(0, 0);
var n = s.addComponent(cc.AudioSource);
n.clip = i;
n.play();
e._audioSource = n;
e.loadTips.textKey = "cases/AssetBundle.15";
e.labels[2].textKey = l.t("cases/AssetBundle.12");
e.showWindow.addChild(s);
}
});
} else this.loadTips.textKey = "cases/AssetBundle.9";
}
};
t.prototype.onClickScene = function() {
var e = this;
if (!this._isLoading) {
var t = cc.assetManager.getBundle("TestBundle");
if (t) {
this._onClear();
this._isLoading = !0;
this.loadTips.textKey = "Scene Loading....";
t.loadScene("sub-scene", function(t, i) {
if (t) cc.log("Error url [" + t + "]"); else {
e._isLoading = !1;
e.loadTips.textKey = "";
cc.director.runScene(i);
}
});
} else this.loadTips.textKey = "cases/AssetBundle.9";
}
};
t.prototype.onClickDestroy = function() {
if (!this._isLoading) {
var e = cc.assetManager.getBundle("TestBundle");
if (e) {
this._onClear();
cc.assetManager.removeBundle(e);
this.loadTips.textKey = "cases/AssetBundle.17";
this.labels[0].textKey = "cases/AssetBundle.2";
this.labels[1].textKey = "cases/AssetBundle.4";
this.labels[2].textKey = "cases/AssetBundle.3";
this.labels[3].textKey = "cases/AssetBundle.5";
} else this.loadTips.textKey = "cases/AssetBundle.9";
}
};
t.prototype.onClickRelease = function() {
if (!this._isLoading) {
var e = cc.assetManager.getBundle("TestBundle");
if (e) {
this._onClear();
e.releaseAll();
this.loadTips.textKey = "cases/AssetBundle.16";
this.labels[1].textKey = "cases/AssetBundle.4";
this.labels[2].textKey = "cases/AssetBundle.3";
this.labels[3].textKey = "cases/AssetBundle.5";
} else this.loadTips.textKey = "cases/AssetBundle.9";
}
};
t.prototype._onClear = function() {
this.showWindow.removeAllChildren(!0);
this._audioSource && this._audioSource instanceof cc.AudioSource && this._audioSource.stop();
};
o([ r(cc.Label) ], t.prototype, "loadTips", void 0);
o([ r(cc.Node) ], t.prototype, "showWindow", void 0);
o([ r({
type: [ cc.Label ]
}) ], t.prototype, "labels", void 0);
return o([ c ], t);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../../i18n/i18n": "i18n"
} ],
born: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e5090+j3atD2ZM4RN9dA8qa", "born");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.ball = null;
t.checkNode = null;
t.box = null;
return t;
}
t.prototype.start = function() {
this.checkNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.rotate();
};
t.prototype.rotate = function() {
this.box.runAction(cc.repeatForever(cc.sequence(cc.rotate3DTo(1, 1, 0, 20), cc.rotate3DTo(1, 1, 0, -20))));
};
t.prototype.onTouchStart = function() {
var e = cc.instantiate(this.ball);
e.active = !0;
this.node.addChild(e);
};
o([ r({
type: cc.Node
}) ], t.prototype, "ball", void 0);
o([ r({
type: cc.Node
}) ], t.prototype, "checkNode", void 0);
o([ r({
type: cc.Node
}) ], t.prototype, "box", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
capture_to_native: [ function(e, t) {
"use strict";
cc._RF.push(t, "c1a65pebNpA27eOgsyL77g/", "capture_to_native");
cc.Class({
extends: e("./textureRenderUtils"),
properties: {
_width: 0,
_height: 0
},
start: function() {
var e = this;
this.init();
this.camera.enabled = !0;
this.schedule(function() {
var t = e.initImage();
e.createCanvas(t);
e.label.string = "Showing the capture";
e.saveFile(t);
e.camera.enabled = !1;
}, 1, 0);
},
initImage: function() {
var e = this.texture.readPixels();
this._width = this.texture.width;
this._height = this.texture.height;
return this.filpYImage(e, this._width, this._height);
},
createCanvas: function(e) {
var t = this, i = new cc.Texture2D();
i.initWithData(e, 32, this._width, this._height);
var s = new cc.SpriteFrame();
s.setTexture(i);
var n = new cc.Node();
n.addComponent(cc.Sprite).spriteFrame = s;
n.zIndex = cc.macro.MAX_ZINDEX;
n.parent = cc.director.getScene();
var o = cc.winSize.width, a = cc.winSize.height;
n.x = o / 2;
n.y = a / 2;
n.on(cc.Node.EventType.TOUCH_START, function() {
n.parent = null;
t.label.string = "";
n.destroy();
});
this.captureAction(n, o, a);
},
saveFile: function(e) {
var t = jsb.fileUtils.getWritablePath() + "render_to_sprite_image.png";
jsb.saveImageData(e, this._width, this._height, t) ? cc.log("save image data success, file: " + t) : cc.error("save image data failed!");
},
filpYImage: function(e, t, i) {
for (var s = new Uint8Array(t * i * 4), n = 4 * t, o = 0; o < i; o++) for (var a = (i - 1 - o) * t * 4, c = o * t * 4, r = 0; r < n; r++) s[c + r] = e[a + r];
return s;
}
});
cc._RF.pop();
}, {
"./textureRenderUtils": "textureRenderUtils"
} ],
capture_to_web: [ function(e, t) {
"use strict";
cc._RF.push(t, "5ac74J4RCNKq6XeV8GboJXx", "capture_to_web");
cc.Class({
extends: e("./textureRenderUtils"),
start: function() {
var e = this;
this.init();
this.createCanvas();
var t = this.createImg();
this.scheduleOnce(function() {
e.showImage(t);
e.label.string = "Showing the capture";
}, 1);
}
});
cc._RF.pop();
}, {
"./textureRenderUtils": "textureRenderUtils"
} ],
capture_to_wechat: [ function(e, t) {
"use strict";
cc._RF.push(t, "0ed55wVxhhB5p1/Ob9bQHCL", "capture_to_wechat");
cc.Class({
extends: e("./textureRenderUtils"),
start: function() {
var e = this;
this.init();
this.scheduleOnce(function() {
var t = e.createCanvas();
e.createImg();
e.saveFile(t);
}, 1);
},
saveFile: function(e) {
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
var t = this, i = {
x: 0,
y: 0,
width: canvas.width,
height: canvas.height,
destWidth: canvas.width,
destHeight: canvas.height,
fileType: "png",
quality: 1
}, s = e.toTempFilePathSync(i);
cc.log("Capture file success!" + s);
t.label.string = "图片加载完成，等待本地预览";
wx.previewImage({
urls: [ s ],
success: function() {
cc.log("Preview image success.");
t.label.string = "";
}
});
} else {
this.label.string = "该样例只支持微信小游戏平台";
cc.log("该样例只支持微信小游戏平台");
}
}
});
cc._RF.pop();
}, {
"./textureRenderUtils": "textureRenderUtils"
} ],
checkbox: [ function(e, t) {
"use strict";
cc._RF.push(t, "ca244RHY8xLbprnCDD9dH+B", "checkbox");
cc.Class({
extends: cc.Component,
properties: {
checkbox: {
default: null,
type: cc.Toggle
},
checkBoxEventString: {
default: null,
type: cc.Label
},
radioButtonEventString: {
default: null,
type: cc.Label
},
radioButton: {
default: [],
type: cc.Toggle
}
},
onLoad: function() {
this.checkbox && this._updateToggleEventString("CheckBox", this.checkBoxEventString, this.checkbox);
},
_updateToggleEventString: function(e, t, i) {
i.isChecked ? t.string = e + " is checked." : t.string = e + " is unchecked.";
},
radioButtonClicked: function(e) {
var t = "RadioButton";
switch (this.radioButton.indexOf(e)) {
case 0:
t += "1";
break;

case 1:
t += "2";
break;

case 2:
t += "3";
}
this._updateToggleEventString(t, this.radioButtonEventString, e);
},
checkBoxClicked: function(e) {
this._updateToggleEventString("CheckBox", this.checkBoxEventString, e);
}
});
cc._RF.pop();
}, {} ],
chroma: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "72facZSAJZETLpI+W596C1k", "chroma");
(function() {
var e, s, n, o, a, c, r, l, u, d, p, h, f, _, g, m, y, b, v, C, w, x, T, A, S, L, R, E, k, P, M, B, N, O, F, D, I, j, U, V, z, H, W, K, G, Y, q, X, J, Z, Q, $, ee, te, ie, se, ne, oe, ae, ce, re, le, ue, de, pe, he, fe, _e, ge, ye, be, ve, Ce, we, xe, Te, Ae, Se, Le, Re, Ee = [].slice;
Te = function() {
var e, t, i, s, n;
for (e = {}, s = 0, t = (n = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length; s < t; s++) i = n[s], 
e["[object " + i + "]"] = i.toLowerCase();
return function(t) {
var i;
return i = Object.prototype.toString.call(t), e[i] || "object";
};
}(), q = function(e, t, i) {
return null == t && (t = 0), null == i && (i = 1), e < t && (e = t), e > i && (e = i), 
e;
}, Ae = function(e) {
return e.length >= 3 ? Array.prototype.slice.call(e) : e[0];
}, w = function(e) {
var t, i;
for (e._clipped = !1, e._unclipped = e.slice(0), t = i = 0; i < 3; t = ++i) t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), 
e[t] < 0 && (e[t] = 0), e[t] > 255 && (e[t] = 255)) : 3 === t && (e[t] < 0 && (e[t] = 0), 
e[t] > 1 && (e[t] = 1));
return e._clipped || delete e._unclipped, e;
}, o = Math.PI, be = Math.round, T = Math.cos, E = Math.floor, ie = Math.pow, X = Math.log, 
Ce = Math.sin, we = Math.sqrt, _ = Math.atan2, Q = Math.max, f = Math.abs, r = 2 * o, 
a = o / 3, s = o / 180, c = 180 / o, (C = function() {
return arguments[0] instanceof e ? arguments[0] : function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, arguments, function() {});
}).default = C, h = [], "undefined" != typeof t && null !== t && null != t.exports && (t.exports = C), 
"function" == typeof define && define.amd ? define([], function() {
return C;
}) : ("undefined" != typeof i && null !== i ? i : this || window).chroma = C, C.version = "1.3.7", 
p = {}, u = [], d = !1, e = function() {
function e() {
var e, t, i, s, n, o, a, c, r;
for (o = this, t = [], c = 0, s = arguments.length; c < s; c++) null != (e = arguments[c]) && t.push(e);
if (t.length > 1 && (a = t[t.length - 1]), null != p[a]) o._rgb = w(p[a](Ae(t.slice(0, -1)))); else {
for (d || (u = u.sort(function(e, t) {
return t.p - e.p;
}), d = !0), r = 0, n = u.length; r < n && !(a = (i = u[r]).test.apply(i, t)); r++) ;
a && (o._rgb = w(p[a].apply(p, t)));
}
null == o._rgb && console.warn("unknown format: " + t), null == o._rgb && (o._rgb = [ 0, 0, 0 ]), 
3 === o._rgb.length && o._rgb.push(1);
}
return e.prototype.toString = function() {
return this.hex();
}, e.prototype.clone = function() {
return C(me._rgb);
}, e;
}(), C._input = p, C.brewer = b = {
OrRd: [ "#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000" ],
PuBu: [ "#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858" ],
BuPu: [ "#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b" ],
Oranges: [ "#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704" ],
BuGn: [ "#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b" ],
YlOrBr: [ "#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506" ],
YlGn: [ "#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529" ],
Reds: [ "#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d" ],
RdPu: [ "#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a" ],
Greens: [ "#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b" ],
YlGnBu: [ "#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58" ],
Purples: [ "#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d" ],
GnBu: [ "#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081" ],
Greys: [ "#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000" ],
YlOrRd: [ "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026" ],
PuRd: [ "#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f" ],
Blues: [ "#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b" ],
PuBuGn: [ "#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636" ],
Viridis: [ "#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825" ],
Spectral: [ "#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2" ],
RdYlGn: [ "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837" ],
RdBu: [ "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061" ],
PiYG: [ "#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419" ],
PRGn: [ "#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b" ],
RdYlBu: [ "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695" ],
BrBG: [ "#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30" ],
RdGy: [ "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a" ],
PuOr: [ "#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b" ],
Set2: [ "#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3" ],
Accent: [ "#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666" ],
Set1: [ "#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999" ],
Set3: [ "#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f" ],
Dark2: [ "#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666" ],
Paired: [ "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928" ],
Pastel2: [ "#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc" ],
Pastel1: [ "#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2" ]
}, function() {
var e, t;
t = [];
for (e in b) t.push(b[e.toLowerCase()] = b[e]);
}(), C.colors = Se = {
aliceblue: "#f0f8ff",
antiquewhite: "#faebd7",
aqua: "#00ffff",
aquamarine: "#7fffd4",
azure: "#f0ffff",
beige: "#f5f5dc",
bisque: "#ffe4c4",
black: "#000000",
blanchedalmond: "#ffebcd",
blue: "#0000ff",
blueviolet: "#8a2be2",
brown: "#a52a2a",
burlywood: "#deb887",
cadetblue: "#5f9ea0",
chartreuse: "#7fff00",
chocolate: "#d2691e",
coral: "#ff7f50",
cornflower: "#6495ed",
cornflowerblue: "#6495ed",
cornsilk: "#fff8dc",
crimson: "#dc143c",
cyan: "#00ffff",
darkblue: "#00008b",
darkcyan: "#008b8b",
darkgoldenrod: "#b8860b",
darkgray: "#a9a9a9",
darkgreen: "#006400",
darkgrey: "#a9a9a9",
darkkhaki: "#bdb76b",
darkmagenta: "#8b008b",
darkolivegreen: "#556b2f",
darkorange: "#ff8c00",
darkorchid: "#9932cc",
darkred: "#8b0000",
darksalmon: "#e9967a",
darkseagreen: "#8fbc8f",
darkslateblue: "#483d8b",
darkslategray: "#2f4f4f",
darkslategrey: "#2f4f4f",
darkturquoise: "#00ced1",
darkviolet: "#9400d3",
deeppink: "#ff1493",
deepskyblue: "#00bfff",
dimgray: "#696969",
dimgrey: "#696969",
dodgerblue: "#1e90ff",
firebrick: "#b22222",
floralwhite: "#fffaf0",
forestgreen: "#228b22",
fuchsia: "#ff00ff",
gainsboro: "#dcdcdc",
ghostwhite: "#f8f8ff",
gold: "#ffd700",
goldenrod: "#daa520",
gray: "#808080",
green: "#008000",
greenyellow: "#adff2f",
grey: "#808080",
honeydew: "#f0fff0",
hotpink: "#ff69b4",
indianred: "#cd5c5c",
indigo: "#4b0082",
ivory: "#fffff0",
khaki: "#f0e68c",
laserlemon: "#ffff54",
lavender: "#e6e6fa",
lavenderblush: "#fff0f5",
lawngreen: "#7cfc00",
lemonchiffon: "#fffacd",
lightblue: "#add8e6",
lightcoral: "#f08080",
lightcyan: "#e0ffff",
lightgoldenrod: "#fafad2",
lightgoldenrodyellow: "#fafad2",
lightgray: "#d3d3d3",
lightgreen: "#90ee90",
lightgrey: "#d3d3d3",
lightpink: "#ffb6c1",
lightsalmon: "#ffa07a",
lightseagreen: "#20b2aa",
lightskyblue: "#87cefa",
lightslategray: "#778899",
lightslategrey: "#778899",
lightsteelblue: "#b0c4de",
lightyellow: "#ffffe0",
lime: "#00ff00",
limegreen: "#32cd32",
linen: "#faf0e6",
magenta: "#ff00ff",
maroon: "#800000",
maroon2: "#7f0000",
maroon3: "#b03060",
mediumaquamarine: "#66cdaa",
mediumblue: "#0000cd",
mediumorchid: "#ba55d3",
mediumpurple: "#9370db",
mediumseagreen: "#3cb371",
mediumslateblue: "#7b68ee",
mediumspringgreen: "#00fa9a",
mediumturquoise: "#48d1cc",
mediumvioletred: "#c71585",
midnightblue: "#191970",
mintcream: "#f5fffa",
mistyrose: "#ffe4e1",
moccasin: "#ffe4b5",
navajowhite: "#ffdead",
navy: "#000080",
oldlace: "#fdf5e6",
olive: "#808000",
olivedrab: "#6b8e23",
orange: "#ffa500",
orangered: "#ff4500",
orchid: "#da70d6",
palegoldenrod: "#eee8aa",
palegreen: "#98fb98",
paleturquoise: "#afeeee",
palevioletred: "#db7093",
papayawhip: "#ffefd5",
peachpuff: "#ffdab9",
peru: "#cd853f",
pink: "#ffc0cb",
plum: "#dda0dd",
powderblue: "#b0e0e6",
purple: "#800080",
purple2: "#7f007f",
purple3: "#a020f0",
rebeccapurple: "#663399",
red: "#ff0000",
rosybrown: "#bc8f8f",
royalblue: "#4169e1",
saddlebrown: "#8b4513",
salmon: "#fa8072",
sandybrown: "#f4a460",
seagreen: "#2e8b57",
seashell: "#fff5ee",
sienna: "#a0522d",
silver: "#c0c0c0",
skyblue: "#87ceeb",
slateblue: "#6a5acd",
slategray: "#708090",
slategrey: "#708090",
snow: "#fffafa",
springgreen: "#00ff7f",
steelblue: "#4682b4",
tan: "#d2b48c",
teal: "#008080",
thistle: "#d8bfd8",
tomato: "#ff6347",
turquoise: "#40e0d0",
violet: "#ee82ee",
wheat: "#f5deb3",
white: "#ffffff",
whitesmoke: "#f5f5f5",
yellow: "#ffff00",
yellowgreen: "#9acd32"
}, H = function() {
var e, t, i, s, o, a, c;
return s = (t = Ae(arguments))[0], e = t[1], i = t[2], a = (s + 16) / 116, o = isNaN(e) ? a : a + e / 500, 
c = isNaN(i) ? a : a - i / 200, a = n.Yn * W(a), o = n.Xn * W(o), c = n.Zn * W(c), 
[ Re(3.2404542 * o - 1.5371385 * a - .4985314 * c), Re(-.969266 * o + 1.8760108 * a + .041556 * c), i = Re(.0556434 * o - .2040259 * a + 1.0572252 * c), t.length > 3 ? t[3] : 1 ];
}, Re = function(e) {
return 255 * (e <= .00304 ? 12.92 * e : 1.055 * ie(e, 1 / 2.4) - .055);
}, W = function(e) {
return e > n.t1 ? e * e * e : n.t2 * (e - n.t0);
}, n = {
Kn: 18,
Xn: .95047,
Yn: 1,
Zn: 1.08883,
t0: .137931034,
t1: .206896552,
t2: .12841855,
t3: .008856452
}, ue = function() {
var e, t, i, s, n, o, a;
return i = (s = Ae(arguments))[0], t = s[1], e = s[2], o = (n = _e(i, t, e))[0], 
[ 116 * (a = n[1]) - 16, 500 * (o - a), 200 * (a - n[2]) ];
}, ge = function(e) {
return (e /= 255) <= .04045 ? e / 12.92 : ie((e + .055) / 1.055, 2.4);
}, Le = function(e) {
return e > n.t3 ? ie(e, 1 / 3) : e / n.t2 + n.t0;
}, _e = function() {
var e, t, i, s;
return i = (s = Ae(arguments))[0], t = s[1], e = s[2], i = ge(i), t = ge(t), e = ge(e), 
[ Le((.4124564 * i + .3575761 * t + .1804375 * e) / n.Xn), Le((.2126729 * i + .7151522 * t + .072175 * e) / n.Yn), Le((.0193339 * i + .119192 * t + .9503041 * e) / n.Zn) ];
}, C.lab = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "lab" ]), function() {});
}, p.lab = H, e.prototype.lab = function() {
return ue(this._rgb);
}, g = function(e) {
var t, i, s, n, o, a, c, r, l, u, d;
return 2 === (e = function() {
var t, i, s;
for (s = [], i = 0, t = e.length; i < t; i++) n = e[i], s.push(C(n));
return s;
}()).length ? (l = function() {
var t, i, s;
for (s = [], i = 0, t = e.length; i < t; i++) n = e[i], s.push(n.lab());
return s;
}(), o = l[0], a = l[1], t = function(e) {
var t, i;
return i = function() {
var i, s;
for (s = [], t = i = 0; i <= 2; t = ++i) s.push(o[t] + e * (a[t] - o[t]));
return s;
}(), C.lab.apply(C, i);
}) : 3 === e.length ? (u = function() {
var t, i, s;
for (s = [], i = 0, t = e.length; i < t; i++) n = e[i], s.push(n.lab());
return s;
}(), o = u[0], a = u[1], c = u[2], t = function(e) {
var t, i;
return i = function() {
var i, s;
for (s = [], t = i = 0; i <= 2; t = ++i) s.push((1 - e) * (1 - e) * o[t] + 2 * (1 - e) * e * a[t] + e * e * c[t]);
return s;
}(), C.lab.apply(C, i);
}) : 4 === e.length ? (d = function() {
var t, i, s;
for (s = [], i = 0, t = e.length; i < t; i++) n = e[i], s.push(n.lab());
return s;
}(), o = d[0], a = d[1], c = d[2], r = d[3], t = function(e) {
var t, i;
return i = function() {
var i, s;
for (s = [], t = i = 0; i <= 2; t = ++i) s.push((1 - e) * (1 - e) * (1 - e) * o[t] + 3 * (1 - e) * (1 - e) * e * a[t] + 3 * (1 - e) * e * e * c[t] + e * e * e * r[t]);
return s;
}(), C.lab.apply(C, i);
}) : 5 === e.length && (i = g(e.slice(0, 3)), s = g(e.slice(2, 5)), t = function(e) {
return e < .5 ? i(2 * e) : s(2 * (e - .5));
}), t;
}, C.bezier = function(e) {
var t;
return (t = g(e)).scale = function() {
return C.scale(t);
}, t;
}, C.cubehelix = function(e, t, i, s, n) {
var o, a, c;
return null == e && (e = 300), null == t && (t = -1.5), null == i && (i = 1), null == s && (s = 1), 
null == n && (n = [ 0, 1 ]), o = 0, "array" === Te(n) ? a = n[1] - n[0] : (a = 0, 
n = [ n, n ]), (c = function(c) {
var l, u, d, p, h;
return l = r * ((e + 120) / 360 + t * c), p = ie(n[0] + a * c, s), u = (0 !== o ? i[0] + c * o : i) * p * (1 - p) / 2, 
d = T(l), h = Ce(l), C(w([ 255 * (p + u * (-.14861 * d + 1.78277 * h)), 255 * (p + u * (-.29227 * d - .90649 * h)), 255 * (p + 1.97294 * u * d) ]));
}).start = function(t) {
return null == t ? e : (e = t, c);
}, c.rotations = function(e) {
return null == e ? t : (t = e, c);
}, c.gamma = function(e) {
return null == e ? s : (s = e, c);
}, c.hue = function(e) {
return null == e ? i : ("array" === Te(i = e) ? 0 == (o = i[1] - i[0]) && (i = i[1]) : o = 0, 
c);
}, c.lightness = function(e) {
return null == e ? n : ("array" === Te(e) ? (n = e, a = e[1] - e[0]) : (n = [ e, e ], 
a = 0), c);
}, c.scale = function() {
return C.scale(c);
}, c.hue(i), c;
}, C.random = function() {
var t, i;
for (t = "#", i = 0; i < 6; ++i) t += "0123456789abcdef".charAt(E(16 * Math.random()));
return new e(t);
}, h = [], F = function(e, t, i, s) {
var n, o, a, c;
for (null == i && (i = .5), null == s && (s = "rgb"), "object" !== Te(e) && (e = C(e)), 
"object" !== Te(t) && (t = C(t)), a = 0, o = h.length; a < o; a++) if (s === (n = h[a])[0]) {
c = n[1](e, t, i, s);
break;
}
if (null == c) throw "color mode " + s + " is not supported";
return c.alpha(e.alpha() + i * (t.alpha() - e.alpha()));
}, C.interpolate = F, e.prototype.interpolate = function(e, t, i) {
return F(this, e, t, i);
}, C.mix = F, e.prototype.mix = e.prototype.interpolate, p.rgb = function() {
var e, t, i, s;
t = Ae(arguments), i = [];
for (e in t) s = t[e], i.push(s);
return i;
}, C.rgb = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "rgb" ]), function() {});
}, e.prototype.rgb = function(e) {
return null == e && (e = !0), e ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3);
}, e.prototype.rgba = function(e) {
return null == e && (e = !0), e ? [ Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3] ] : this._rgb.slice(0);
}, u.push({
p: 3,
test: function(e) {
var t;
return t = Ae(arguments), "array" === Te(t) && 3 === t.length ? "rgb" : 4 === t.length && "number" === Te(t[3]) && t[3] >= 0 && t[3] <= 1 ? "rgb" : void 0;
}
}), p.lrgb = p.rgb, j = function(t, i, s, n) {
var o, a;
return o = t._rgb, a = i._rgb, new e(we(ie(o[0], 2) * (1 - s) + ie(a[0], 2) * s), we(ie(o[1], 2) * (1 - s) + ie(a[1], 2) * s), we(ie(o[2], 2) * (1 - s) + ie(a[2], 2) * s), n);
}, l = function(t) {
var i, s, n, o, a;
for (i = 1 / t.length, a = [ 0, 0, 0, 0 ], n = 0, s = t.length; n < s; n++) o = t[n]._rgb, 
a[0] += ie(o[0], 2) * i, a[1] += ie(o[1], 2) * i, a[2] += ie(o[2], 2) * i, a[3] += o[3] * i;
return a[0] = we(a[0]), a[1] = we(a[1]), a[2] = we(a[2]), new e(a);
}, h.push([ "lrgb", j ]), C.average = function(e, t) {
var i, s, n, a, c, r, u, d, p, h, f, g, m;
if (null == t && (t = "rgb"), p = e.length, u = (e = e.map(function(e) {
return C(e);
})).splice(0, 1)[0], "lrgb" === t) return l(e);
g = u.get(t), a = [], c = 0, r = 0;
for (d in g) g[d] = g[d] || 0, a.push(isNaN(g[d]) ? 0 : 1), "h" !== t.charAt(d) || isNaN(g[d]) || (i = g[d] / 180 * o, 
c += T(i), r += Ce(i));
for (s = u.alpha(), f = 0, h = e.length; f < h; f++) {
m = (n = e[f]).get(t), s += n.alpha();
for (d in g) isNaN(m[d]) || (a[d] += 1, "h" === t.charAt(d) ? (i = m[d] / 180 * o, 
c += T(i), r += Ce(i)) : g[d] += m[d]);
}
for (d in g) if ("h" === t.charAt(d)) {
for (i = _(r / a[d], c / a[d]) / o * 180; i < 0; ) i += 360;
for (;i >= 360; ) i -= 360;
g[d] = i;
} else g[d] = g[d] / a[d];
return C(g, t).alpha(s / p);
}, P = function(e) {
var t, i;
if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return 4 !== e.length && 7 !== e.length || (e = e.substr(1)), 
3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), 
[ (i = parseInt(e, 16)) >> 16, i >> 8 & 255, 255 & i, 1 ];
if (e.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === e.length && (e = e.substr(1)), 
[ (i = parseInt(e, 16)) >> 24 & 255, i >> 16 & 255, i >> 8 & 255, be((255 & i) / 255 * 100) / 100 ];
if (null != p.css && (t = p.css(e))) return t;
throw "unknown color: " + e;
}, ae = function(e, t) {
var i, s, n, o, a, c;
return null == t && (t = "rgb"), a = e[0], n = e[1], s = e[2], i = e[3], a = Math.round(a), 
n = Math.round(n), s = Math.round(s), c = (c = "000000" + (a << 16 | n << 8 | s).toString(16)).substr(c.length - 6), 
o = (o = "0" + be(255 * i).toString(16)).substr(o.length - 2), "#" + function() {
switch (t.toLowerCase()) {
case "rgba":
return c + o;

case "argb":
return o + c;

default:
return c;
}
}();
}, p.hex = function(e) {
return P(e);
}, C.hex = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "hex" ]), function() {});
}, e.prototype.hex = function(e) {
return null == e && (e = "rgb"), ae(this._rgb, e);
}, u.push({
p: 4,
test: function(e) {
if (1 === arguments.length && "string" === Te(e)) return "hex";
}
}), N = function() {
var e, t, i, s, n, o, a, c, r, l, u, d, p, h;
if (n = (e = Ae(arguments))[0], u = e[1], a = e[2], 0 === u) r = s = t = 255 * a; else {
for (i = [ 0, 0, 0 ], d = 2 * a - (p = a < .5 ? a * (1 + u) : a + u - a * u), (h = [ 0, 0, 0 ])[0] = (n /= 360) + 1 / 3, 
h[1] = n, h[2] = n - 1 / 3, o = c = 0; c <= 2; o = ++c) h[o] < 0 && (h[o] += 1), 
h[o] > 1 && (h[o] -= 1), 6 * h[o] < 1 ? i[o] = d + 6 * (p - d) * h[o] : 2 * h[o] < 1 ? i[o] = p : 3 * h[o] < 2 ? i[o] = d + (p - d) * (2 / 3 - h[o]) * 6 : i[o] = d;
r = (l = [ be(255 * i[0]), be(255 * i[1]), be(255 * i[2]) ])[0], s = l[1], t = l[2];
}
return e.length > 3 ? [ r, s, t, e[3] ] : [ r, s, t ];
}, re = function(e, t, i) {
var s, n, o, a, c;
return void 0 !== e && e.length >= 3 && (e = (a = e)[0], t = a[1], i = a[2]), e /= 255, 
t /= 255, i /= 255, o = Math.min(e, t, i), n = ((Q = Math.max(e, t, i)) + o) / 2, 
Q === o ? (c = 0, s = Number.NaN) : c = n < .5 ? (Q - o) / (Q + o) : (Q - o) / (2 - Q - o), 
e === Q ? s = (t - i) / (Q - o) : t === Q ? s = 2 + (i - e) / (Q - o) : i === Q && (s = 4 + (e - t) / (Q - o)), 
(s *= 60) < 0 && (s += 360), [ s, c, n ];
}, C.hsl = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "hsl" ]), function() {});
}, p.hsl = N, e.prototype.hsl = function() {
return re(this._rgb);
}, O = function() {
var e, t, i, s, n, o, a, c, r, l, u, d, p, h, f, _, g, m;
if (n = (e = Ae(arguments))[0], _ = e[1], m = e[2], m *= 255, 0 === _) r = s = t = m; else switch (360 === n && (n = 0), 
n > 360 && (n -= 360), n < 0 && (n += 360), n /= 60, o = E(n), i = n - o, a = m * (1 - _), 
c = m * (1 - _ * i), g = m * (1 - _ * (1 - i)), o) {
case 0:
r = (l = [ m, g, a ])[0], s = l[1], t = l[2];
break;

case 1:
r = (u = [ c, m, a ])[0], s = u[1], t = u[2];
break;

case 2:
r = (d = [ a, m, g ])[0], s = d[1], t = d[2];
break;

case 3:
r = (p = [ a, c, m ])[0], s = p[1], t = p[2];
break;

case 4:
r = (h = [ g, a, m ])[0], s = h[1], t = h[2];
break;

case 5:
r = (f = [ m, a, c ])[0], s = f[1], t = f[2];
}
return [ r, s, t, e.length > 3 ? e[3] : 1 ];
}, le = function() {
var e, t, i, s, n, o, a, c, r;
return o = (a = Ae(arguments))[0], i = a[1], e = a[2], n = Math.min(o, i, e), t = (Q = Math.max(o, i, e)) - n, 
r = Q / 255, 0 === Q ? (s = Number.NaN, c = 0) : (c = t / Q, o === Q && (s = (i - e) / t), 
i === Q && (s = 2 + (e - o) / t), e === Q && (s = 4 + (o - i) / t), (s *= 60) < 0 && (s += 360)), 
[ s, c, r ];
}, C.hsv = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "hsv" ]), function() {});
}, p.hsv = O, e.prototype.hsv = function() {
return le(this._rgb);
}, ee = function(e) {
return "number" === Te(e) && e >= 0 && e <= 16777215 ? [ e >> 16, e >> 8 & 255, 255 & e, 1 ] : (console.warn("unknown num color: " + e), 
[ 0, 0, 0, 1 ]);
}, he = function() {
var e;
return ((e = Ae(arguments))[0] << 16) + (e[1] << 8) + e[2];
}, C.num = function(t) {
return new e(t, "num");
}, e.prototype.num = function(e) {
return null == e && (e = "rgb"), he(this._rgb, e);
}, p.num = ee, u.push({
p: 1,
test: function(e) {
if (1 === arguments.length && "number" === Te(e) && e >= 0 && e <= 16777215) return "num";
}
}), k = function() {
var e, t, i, s, n, o, a, c, r, l, u, d, p, h, f, _, g, m, y, b;
if (c = (i = Ae(arguments))[0], n = i[1], t = i[2], a = a / 100 * 255, e = 255 * (n /= 100), 
0 === n) d = a = s = t; else switch (360 === c && (c = 0), c > 360 && (c -= 360), 
c < 0 && (c += 360), c /= 60, r = E(c), o = c - r, l = t * (1 - n), u = l + e * (1 - o), 
y = l + e * o, b = l + e, r) {
case 0:
d = (p = [ b, y, l ])[0], a = p[1], s = p[2];
break;

case 1:
d = (h = [ u, b, l ])[0], a = h[1], s = h[2];
break;

case 2:
d = (f = [ l, b, y ])[0], a = f[1], s = f[2];
break;

case 3:
d = (_ = [ l, u, b ])[0], a = _[1], s = _[2];
break;

case 4:
d = (g = [ y, l, b ])[0], a = g[1], s = g[2];
break;

case 5:
d = (m = [ b, l, u ])[0], a = m[1], s = m[2];
}
return [ d, a, s, i.length > 3 ? i[3] : 1 ];
}, oe = function() {
var e, t, i, s, n, o, a, c, r;
return c = (r = Ae(arguments))[0], n = r[1], t = r[2], a = Math.min(c, n, t), i = 100 * (s = (Q = Math.max(c, n, t)) - a) / 255, 
e = a / (255 - s) * 100, 0 === s ? o = Number.NaN : (c === Q && (o = (n - t) / s), 
n === Q && (o = 2 + (t - c) / s), t === Q && (o = 4 + (c - n) / s), (o *= 60) < 0 && (o += 360)), 
[ o, i, e ];
}, C.hcg = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "hcg" ]), function() {});
}, p.hcg = k, e.prototype.hcg = function() {
return oe(this._rgb);
}, A = function(e) {
var t, i, s, n, o, a, c, r;
if (e = e.toLowerCase(), null != C.colors && C.colors[e]) return P(C.colors[e]);
if (o = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
for (c = o.slice(1, 4), n = a = 0; a <= 2; n = ++a) c[n] = +c[n];
c[3] = 1;
} else if (o = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for (c = o.slice(1, 5), 
n = r = 0; r <= 3; n = ++r) c[n] = +c[n]; else if (o = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
for (c = o.slice(1, 4), n = t = 0; t <= 2; n = ++t) c[n] = be(2.55 * c[n]);
c[3] = 1;
} else if (o = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
for (c = o.slice(1, 5), n = i = 0; i <= 2; n = ++i) c[n] = be(2.55 * c[n]);
c[3] = +c[3];
} else (o = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? ((s = o.slice(1, 4))[1] *= .01, 
s[2] *= .01, (c = N(s))[3] = 1) : (o = e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && ((s = o.slice(1, 4))[1] *= .01, 
s[2] *= .01, (c = N(s))[3] = +o[4]);
return c;
}, ne = function(e) {
var t;
return "rgb" == (t = e[3] < 1 ? "rgba" : "rgb") ? t + "(" + e.slice(0, 3).map(be).join(",") + ")" : "rgba" === t ? t + "(" + e.slice(0, 3).map(be).join(",") + "," + e[3] + ")" : void 0;
}, ye = function(e) {
return be(100 * e) / 100;
}, B = function(e, t) {
var i;
return i = t < 1 ? "hsla" : "hsl", e[0] = ye(e[0] || 0), e[1] = ye(100 * e[1]) + "%", 
e[2] = ye(100 * e[2]) + "%", "hsla" === i && (e[3] = t), i + "(" + e.join(",") + ")";
}, p.css = function(e) {
return A(e);
}, C.css = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "css" ]), function() {});
}, e.prototype.css = function(e) {
return null == e && (e = "rgb"), "rgb" === e.slice(0, 3) ? ne(this._rgb) : "hsl" === e.slice(0, 3) ? B(this.hsl(), this.alpha()) : void 0;
}, p.named = function(e) {
return P(Se[e]);
}, u.push({
p: 5,
test: function(e) {
if (1 === arguments.length && null != Se[e]) return "named";
}
}), e.prototype.name = function(e) {
var t, i;
arguments.length && (Se[e] && (this._rgb = P(Se[e])), this._rgb[3] = 1), t = this.hex();
for (i in Se) if (t === Se[i]) return i;
return t;
}, K = function() {
var e, t, i, n;
return i = (n = Ae(arguments))[0], e = n[1], t = n[2], [ i, T(t *= s) * e, Ce(t) * e ];
}, G = function() {
var e, t, i, s, n, o, a, c, r;
return a = (i = Ae(arguments))[0], n = i[1], o = i[2], e = (c = K(a, n, o))[0], 
t = c[1], s = c[2], [ (r = H(e, t, s))[0], r[1], s = r[2], i.length > 3 ? i[3] : 1 ];
}, z = function() {
var e, t, i, s, n, o;
return n = (o = Ae(arguments))[0], e = o[1], t = o[2], i = we(e * e + t * t), s = (_(t, e) * c + 360) % 360, 
0 === be(1e4 * i) && (s = Number.NaN), [ n, i, s ];
}, de = function() {
var e, t, i, s, n, o, a;
return n = (o = Ae(arguments))[0], i = o[1], t = o[2], s = (a = ue(n, i, t))[0], 
e = a[1], t = a[2], z(s, e, t);
}, C.lch = function() {
var t;
return t = Ae(arguments), new e(t, "lch");
}, C.hcl = function() {
var t;
return t = Ae(arguments), new e(t, "hcl");
}, p.lch = G, p.hcl = function() {
var e, t, i, s;
return t = (s = Ae(arguments))[0], e = s[1], i = s[2], G([ i, e, t ]);
}, e.prototype.lch = function() {
return de(this._rgb);
}, e.prototype.hcl = function() {
return de(this._rgb).reverse();
}, se = function(e) {
var t, i, s, n, o, a;
return null == e && (e = "rgb"), o = (a = Ae(arguments))[0], s = a[1], t = a[2], 
s /= 255, t /= 255, [ (1 - (o /= 255) - (n = 1 - Math.max(o, Math.max(s, t)))) * (i = n < 1 ? 1 / (1 - n) : 0), (1 - s - n) * i, (1 - t - n) * i, n ];
}, x = function() {
var e, t, i, s, n, o;
return i = (t = Ae(arguments))[0], n = t[1], o = t[2], s = t[3], e = t.length > 4 ? t[4] : 1, 
1 === s ? [ 0, 0, 0, e ] : [ i >= 1 ? 0 : 255 * (1 - i) * (1 - s), n >= 1 ? 0 : 255 * (1 - n) * (1 - s), o >= 1 ? 0 : 255 * (1 - o) * (1 - s), e ];
}, p.cmyk = function() {
return x(Ae(arguments));
}, C.cmyk = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "cmyk" ]), function() {});
}, e.prototype.cmyk = function() {
return se(this._rgb);
}, p.gl = function() {
var e, t, i, s, n;
for (s = function() {
var e, i;
e = Ae(arguments), i = [];
for (t in e) n = e[t], i.push(n);
return i;
}.apply(this, arguments), e = i = 0; i <= 2; e = ++i) s[e] *= 255;
return s;
}, C.gl = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "gl" ]), function() {});
}, e.prototype.gl = function() {
var e;
return [ (e = this._rgb)[0] / 255, e[1] / 255, e[2] / 255, e[3] ];
}, pe = function(e, t, i) {
var s;
return e = (s = Ae(arguments))[0], t = s[1], i = s[2], .2126 * (e = J(e)) + .7152 * (t = J(t)) + .0722 * J(i);
}, J = function(e) {
return (e /= 255) <= .03928 ? e / 12.92 : ie((e + .055) / 1.055, 2.4);
}, V = function(t, i, s, n) {
var o, a;
return o = t._rgb, a = i._rgb, new e(o[0] + s * (a[0] - o[0]), o[1] + s * (a[1] - o[1]), o[2] + s * (a[2] - o[2]), n);
}, h.push([ "rgb", V ]), e.prototype.luminance = function(e, t) {
var i, s, n, o, a;
return null == t && (t = "rgb"), arguments.length ? (o = this._rgb, 0 === e ? o = [ 0, 0, 0, this._rgb[3] ] : 1 === e ? o = [ 255, 255, 255, this[3] ] : (i = pe(this._rgb), 
s = 1e-7, n = 20, a = function(i, o) {
var c, r;
return c = (r = i.interpolate(o, .5, t)).luminance(), Math.abs(e - c) < s || !n-- ? r : c > e ? a(i, r) : a(r, o);
}, o = i > e ? a(C("black"), this).rgba() : a(this, C("white")).rgba()), C(o).alpha(this.alpha())) : pe(this._rgb);
}, xe = function(e) {
var t, i, s, n;
return (n = e / 100) < 66 ? (s = 255, i = -155.25485562709179 - .44596950469579133 * (i = n - 2) + 104.49216199393888 * X(i), 
t = n < 20 ? 0 : .8274096064007395 * (t = n - 10) - 254.76935184120902 + 115.67994401066147 * X(t)) : (s = 351.97690566805693 + .114206453784165 * (s = n - 55) - 40.25366309332127 * X(s), 
i = 325.4494125711974 + .07943456536662342 * (i = n - 50) - 28.0852963507957 * X(i), 
t = 255), [ s, i, t ];
}, fe = function() {
var e, t, i, s, n, o, a, c;
for (n = (o = Ae(arguments))[0], o[1], e = o[2], s = 1e3, i = 4e4, t = .4; i - s > t; ) (a = xe(c = .5 * (i + s)))[2] / a[0] >= e / n ? i = c : s = c;
return be(c);
}, C.temperature = C.kelvin = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "temperature" ]), function() {});
}, p.temperature = p.kelvin = p.K = xe, e.prototype.temperature = function() {
return fe(this._rgb);
}, e.prototype.kelvin = e.prototype.temperature, C.contrast = function(t, i) {
var s, n, o, a;
return "string" !== (o = Te(t)) && "number" !== o || (t = new e(t)), "string" !== (a = Te(i)) && "number" !== a || (i = new e(i)), 
(s = t.luminance()) > (n = i.luminance()) ? (s + .05) / (n + .05) : (n + .05) / (s + .05);
}, C.distance = function(t, i, s) {
var n, o, a, c, r, l, u;
null == s && (s = "lab"), "string" !== (r = Te(t)) && "number" !== r || (t = new e(t)), 
"string" !== (l = Te(i)) && "number" !== l || (i = new e(i)), a = t.get(s), c = i.get(s), 
u = 0;
for (o in a) u += (n = (a[o] || 0) - (c[o] || 0)) * n;
return Math.sqrt(u);
}, C.deltaE = function(t, i, s, n) {
var a, c, r, l, u, d, p, h, g, m, y, b, v, C, w, x, A, S, L, R, E, k, P, M;
for (null == s && (s = 1), null == n && (n = 1), "string" !== (w = Te(t)) && "number" !== w || (t = new e(t)), 
"string" !== (x = Te(i)) && "number" !== x || (i = new e(i)), a = (A = t.lab())[0], 
r = A[1], u = A[2], c = (S = i.lab())[0], l = S[1], d = S[2], p = we(r * r + u * u), 
h = we(l * l + d * d), R = a < 16 ? .511 : .040975 * a / (1 + .01765 * a), L = .0638 * p / (1 + .0131 * p) + .638, 
C = p < 1e-6 ? 0 : 180 * _(u, r) / o; C < 0; ) C += 360;
for (;C >= 360; ) C -= 360;
return E = C >= 164 && C <= 345 ? .56 + f(.2 * T(o * (C + 168) / 180)) : .36 + f(.4 * T(o * (C + 35) / 180)), 
v = we((g = p * p * p * p) / (g + 1900)), we((k = (a - c) / (s * R)) * k + (P = (b = p - h) / (n * L)) * P + ((m = r - l) * m + (y = u - d) * y - b * b) / ((M = L * (v * E + 1 - v)) * M));
}, e.prototype.get = function(e) {
var t, i, s, n, o;
return s = (n = e.split("."))[0], t = n[1], o = this[s](), t ? (i = s.indexOf(t)) > -1 ? o[i] : console.warn("unknown channel " + t + " in mode " + s) : o;
}, e.prototype.set = function(e, t) {
var i, s, n, o, a;
if (n = (o = e.split("."))[0], i = o[1]) if (a = this[n](), (s = n.indexOf(i)) > -1) if ("string" === Te(t)) switch (t.charAt(0)) {
case "+":
case "-":
a[s] += +t;
break;

case "*":
a[s] *= +t.substr(1);
break;

case "/":
a[s] /= +t.substr(1);
break;

default:
a[s] = +t;
} else a[s] = t; else console.warn("unknown channel " + i + " in mode " + n); else a = t;
return C(a, n).alpha(this.alpha());
}, e.prototype.clipped = function() {
return this._rgb._clipped || !1;
}, e.prototype.alpha = function(e) {
return arguments.length ? C.rgb([ this._rgb[0], this._rgb[1], this._rgb[2], e ]) : this._rgb[3];
}, e.prototype.darken = function(e) {
var t;
return null == e && (e = 1), (t = this.lab())[0] -= n.Kn * e, C.lab(t).alpha(this.alpha());
}, e.prototype.brighten = function(e) {
return null == e && (e = 1), this.darken(-e);
}, e.prototype.darker = e.prototype.darken, e.prototype.brighter = e.prototype.brighten, 
e.prototype.saturate = function(e) {
var t;
return null == e && (e = 1), (t = this.lch())[1] += e * n.Kn, t[1] < 0 && (t[1] = 0), 
C.lch(t).alpha(this.alpha());
}, e.prototype.desaturate = function(e) {
return null == e && (e = 1), this.saturate(-e);
}, e.prototype.premultiply = function() {
var e, t;
return t = this.rgb(), e = this.alpha(), C(t[0] * e, t[1] * e, t[2] * e, e);
}, $ = function(e, t) {
return e * t / 255;
}, S = function(e, t) {
return e > t ? t : e;
}, Y = function(e, t) {
return e > t ? e : t;
}, ve = function(e, t) {
return 255 * (1 - (1 - e / 255) * (1 - t / 255));
}, te = function(e, t) {
return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
}, v = function(e, t) {
return 255 * (1 - (1 - t / 255) / (e / 255));
}, L = function(e, t) {
return 255 === e ? 255 : (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e;
}, (m = function(e, t, i) {
if (!m[i]) throw "unknown blend mode " + i;
return m[i](e, t);
}).normal = (y = function(e) {
return function(t, i) {
var s, n;
return s = C(i).rgb(), n = C(t).rgb(), C(e(s, n), "rgb");
};
})((R = function(e) {
return function(t, i) {
var s, n, o;
for (o = [], s = n = 0; n <= 3; s = ++n) o[s] = e(t[s], i[s]);
return o;
};
})(function(e) {
return e;
})), m.multiply = y(R($)), m.screen = y(R(ve)), m.overlay = y(R(te)), m.darken = y(R(S)), 
m.lighten = y(R(Y)), m.dodge = y(R(L)), m.burn = y(R(v)), C.blend = m, C.analyze = function(e) {
var t, i, s, n;
for (s = {
min: Number.MAX_VALUE,
max: -1 * Number.MAX_VALUE,
sum: 0,
values: [],
count: 0
}, i = 0, t = e.length; i < t; i++) null == (n = e[i]) || isNaN(n) || (s.values.push(n), 
s.sum += n, n < s.min && (s.min = n), n > s.max && (s.max = n), s.count += 1);
return s.domain = [ s.min, s.max ], s.limits = function(e, t) {
return C.limits(s, e, t);
}, s;
}, C.scale = function(e) {
var t, i, s, n, o, a, c, r, l, u, d, p, h, f, _, g, m, y, b, v, w;
return l = "rgb", u = C("#ccc"), f = 0, o = [ 0, 1 ], h = [], p = [ 0, 0 ], t = !1, 
s = [], d = !1, r = 0, c = 1, n = !1, i = {}, _ = !0, a = 1, v = function(e) {
var t, i, n, o, a, c;
if (null == e && (e = [ "#fff", "#000" ]), null != e && "string" === Te(e) && null != C.brewer && (e = C.brewer[e] || C.brewer[e.toLowerCase()] || e), 
"array" === Te(e)) {
for (t = n = 0, o = (e = e.slice(0)).length - 1; 0 <= o ? n <= o : n >= o; t = 0 <= o ? ++n : --n) i = e[t], 
"string" === Te(i) && (e[t] = C(i));
for (h.length = 0, t = c = 0, a = e.length - 1; 0 <= a ? c <= a : c >= a; t = 0 <= a ? ++c : --c) h.push(t / (e.length - 1));
}
return b(), s = e;
}, m = function(e) {
var i, s;
if (null != t) {
for (s = t.length - 1, i = 0; i < s && e >= t[i]; ) i++;
return i - 1;
}
return 0;
}, w = function(e) {
return e;
}, y = function(e, n) {
var o, d, f, g, y, b, v;
if (null == n && (n = !1), isNaN(e)) return u;
if (v = n ? e : t && t.length > 2 ? m(e) / (t.length - 2) : c !== r ? (e - r) / (c - r) : 1, 
n || (v = w(v)), 1 !== a && (v = ie(v, a)), v = p[0] + v * (1 - p[0] - p[1]), v = Math.min(1, Math.max(0, v)), 
f = Math.floor(1e4 * v), _ && i[f]) o = i[f]; else {
if ("array" === Te(s)) for (d = g = 0, b = h.length - 1; 0 <= b ? g <= b : g >= b; d = 0 <= b ? ++g : --g) {
if (v <= (y = h[d])) {
o = s[d];
break;
}
if (v >= y && d === h.length - 1) {
o = s[d];
break;
}
if (v > y && v < h[d + 1]) {
v = (v - y) / (h[d + 1] - y), o = C.interpolate(s[d], s[d + 1], v, l);
break;
}
} else "function" === Te(s) && (o = s(v));
_ && (i[f] = o);
}
return o;
}, b = function() {
return i = {};
}, v(e), (g = function(e) {
var t;
return t = C(y(e)), d && t[d] ? t[d]() : t;
}).classes = function(e) {
var i;
return null != e ? ("array" === Te(e) ? (t = e, o = [ e[0], e[e.length - 1] ]) : (i = C.analyze(o), 
t = 0 === e ? [ i.min, i.max ] : C.limits(i, "e", e)), g) : t;
}, g.domain = function(e) {
var t, i, n, a, l, u, d;
if (!arguments.length) return o;
if (r = e[0], c = e[e.length - 1], h = [], n = s.length, e.length === n && r !== c) for (l = 0, 
a = e.length; l < a; l++) i = e[l], h.push((i - r) / (c - r)); else for (t = d = 0, 
u = n - 1; 0 <= u ? d <= u : d >= u; t = 0 <= u ? ++d : --d) h.push(t / (n - 1));
return o = [ r, c ], g;
}, g.mode = function(e) {
return arguments.length ? (l = e, b(), g) : l;
}, g.range = function(e) {
return v(e), g;
}, g.out = function(e) {
return d = e, g;
}, g.spread = function(e) {
return arguments.length ? (f = e, g) : f;
}, g.correctLightness = function(e) {
return null == e && (e = !0), n = e, b(), w = n ? function(e) {
var t, i, s, n, o, a, c, r;
for (a = (t = y(0, !0).lab()[0]) > (i = y(1, !0).lab()[0]), s = y(e, !0).lab()[0] - (n = t + (i - t) * e), 
c = 0, r = 1, o = 20; Math.abs(s) > .01 && o-- > 0; ) a && (s *= -1), s < 0 ? (c = e, 
e += .5 * (r - e)) : (r = e, e += .5 * (c - e)), s = y(e, !0).lab()[0] - n;
return e;
} : function(e) {
return e;
}, g;
}, g.padding = function(e) {
return null != e ? ("number" === Te(e) && (e = [ e, e ]), p = e, g) : p;
}, g.colors = function(i, n) {
var a, c, r, l, u, d, p, h;
if (arguments.length < 2 && (n = "hex"), u = [], 0 === arguments.length) u = s.slice(0); else if (1 === i) u = [ g(.5) ]; else if (i > 1) c = o[0], 
a = o[1] - c, u = function() {
d = [];
for (var e = 0; 0 <= i ? e < i : e > i; 0 <= i ? e++ : e--) d.push(e);
return d;
}.apply(this).map(function(e) {
return g(c + e / (i - 1) * a);
}); else {
if (e = [], p = [], t && t.length > 2) for (r = h = 1, l = t.length; 1 <= l ? h < l : h > l; r = 1 <= l ? ++h : --h) p.push(.5 * (t[r - 1] + t[r])); else p = o;
u = p.map(function(e) {
return g(e);
});
}
return C[n] && (u = u.map(function(e) {
return e[n]();
})), u;
}, g.cache = function(e) {
return null != e ? (_ = e, g) : _;
}, g.gamma = function(e) {
return null != e ? (a = e, g) : a;
}, g;
}, null == C.scales && (C.scales = {}), C.scales.cool = function() {
return C.scale([ C.hsl(180, 1, .9), C.hsl(250, .7, .4) ]);
}, C.scales.hot = function() {
return C.scale([ "#000", "#f00", "#ff0", "#fff" ], [ 0, .25, .75, 1 ]).mode("rgb");
}, C.analyze = function(e, t, i) {
var s, n, o, a, c, r;
if (c = {
min: Number.MAX_VALUE,
max: -1 * Number.MAX_VALUE,
sum: 0,
values: [],
count: 0
}, null == i && (i = function() {
return !0;
}), s = function(e) {
null == e || isNaN(e) || (c.values.push(e), c.sum += e, e < c.min && (c.min = e), 
e > c.max && (c.max = e), c.count += 1);
}, r = function(e, n) {
if (i(e, n)) return s(null != t && "function" === Te(t) ? t(e) : null != t && "string" === Te(t) || "number" === Te(t) ? e[t] : e);
}, "array" === Te(e)) for (a = 0, o = e.length; a < o; a++) r(e[a]); else for (n in e) r(e[n], n);
return c.domain = [ c.min, c.max ], c.limits = function(e, t) {
return C.limits(c, e, t);
}, c;
}, C.limits = function(e, t, i) {
var s, n, o, a, c, r, l, u, d, p, h, _, g, m, y, b, v, w, x, T, A, S, L, R, k, P, M, B, N, O, F, D, I, j, U, V, z, H, W, K, G, Y, q, J, Z, $, ee, te, se, ne, oe, ae, ce, re, le;
if (null == t && (t = "equal"), null == i && (i = 7), "array" === Te(e) && (e = C.analyze(e)), 
k = e.min, Q = e.max, e.sum, re = e.values.sort(function(e, t) {
return e - t;
}), 1 === i) return [ k, Q ];
if (L = [], "c" === t.substr(0, 1) && (L.push(k), L.push(Q)), "e" === t.substr(0, 1)) {
for (L.push(k), T = F = 1, U = i - 1; 1 <= U ? F <= U : F >= U; T = 1 <= U ? ++F : --F) L.push(k + T / i * (Q - k));
L.push(Q);
} else if ("l" === t.substr(0, 1)) {
if (k <= 0) throw "Logarithmic scales are only possible for values > 0";
for (P = Math.LOG10E * X(k), R = Math.LOG10E * X(Q), L.push(k), T = le = 1, V = i - 1; 1 <= V ? le <= V : le >= V; T = 1 <= V ? ++le : --le) L.push(ie(10, P + T / i * (R - P)));
L.push(Q);
} else if ("q" === t.substr(0, 1)) {
for (L.push(k), T = s = 1, Y = i - 1; 1 <= Y ? s <= Y : s >= Y; T = 1 <= Y ? ++s : --s) D = (re.length - 1) * T / i, 
(I = E(D)) === D ? L.push(re[I]) : (j = D - I, L.push(re[I] * (1 - j) + re[I + 1] * j));
L.push(Q);
} else if ("k" === t.substr(0, 1)) {
for (B = re.length, m = new Array(B), w = new Array(i), ne = !0, N = 0, b = null, 
(b = []).push(k), T = n = 1, q = i - 1; 1 <= q ? n <= q : n >= q; T = 1 <= q ? ++n : --n) b.push(k + T / i * (Q - k));
for (b.push(Q); ne; ) {
for (A = o = 0, J = i - 1; 0 <= J ? o <= J : o >= J; A = 0 <= J ? ++o : --o) w[A] = 0;
for (T = a = 0, Z = B - 1; 0 <= Z ? a <= Z : a >= Z; T = 0 <= Z ? ++a : --a) {
for (ce = re[T], M = Number.MAX_VALUE, A = c = 0, $ = i - 1; 0 <= $ ? c <= $ : c >= $; A = 0 <= $ ? ++c : --c) (x = f(b[A] - ce)) < M && (M = x, 
y = A);
w[y]++, m[T] = y;
}
for (O = new Array(i), A = r = 0, ee = i - 1; 0 <= ee ? r <= ee : r >= ee; A = 0 <= ee ? ++r : --r) O[A] = null;
for (T = l = 0, te = B - 1; 0 <= te ? l <= te : l >= te; T = 0 <= te ? ++l : --l) null === O[v = m[T]] ? O[v] = re[T] : O[v] += re[T];
for (A = u = 0, se = i - 1; 0 <= se ? u <= se : u >= se; A = 0 <= se ? ++u : --u) O[A] *= 1 / w[A];
for (ne = !1, A = d = 0, z = i - 1; 0 <= z ? d <= z : d >= z; A = 0 <= z ? ++d : --d) if (O[A] !== b[T]) {
ne = !0;
break;
}
b = O, ++N > 200 && (ne = !1);
}
for (S = {}, A = p = 0, H = i - 1; 0 <= H ? p <= H : p >= H; A = 0 <= H ? ++p : --p) S[A] = [];
for (T = h = 0, W = B - 1; 0 <= W ? h <= W : h >= W; T = 0 <= W ? ++h : --h) S[v = m[T]].push(re[T]);
for (oe = [], A = _ = 0, K = i - 1; 0 <= K ? _ <= K : _ >= K; A = 0 <= K ? ++_ : --_) oe.push(S[A][0]), 
oe.push(S[A][S[A].length - 1]);
for (oe = oe.sort(function(e, t) {
return e - t;
}), L.push(oe[0]), T = g = 1, G = oe.length - 1; g <= G; T = g += 2) ae = oe[T], 
isNaN(ae) || -1 !== L.indexOf(ae) || L.push(ae);
}
return L;
}, M = function(e, t, i) {
var s, n, o, c;
return e = (s = Ae(arguments))[0], t = s[1], i = s[2], isNaN(e) && (e = 0), (e /= 360) < 1 / 3 ? o = 1 - ((n = (1 - t) / 3) + (c = (1 + t * T(r * e) / T(a - r * e)) / 3)) : e < 2 / 3 ? n = 1 - ((c = (1 - t) / 3) + (o = (1 + t * T(r * (e -= 1 / 3)) / T(a - r * e)) / 3)) : c = 1 - ((o = (1 - t) / 3) + (n = (1 + t * T(r * (e -= 2 / 3)) / T(a - r * e)) / 3)), 
[ 255 * (c = q(i * c * 3)), 255 * (o = q(i * o * 3)), 255 * (n = q(i * n * 3)), s.length > 3 ? s[3] : 1 ];
}, ce = function() {
var e, t, i, s, n, o, a;
return n = (o = Ae(arguments))[0], t = o[1], e = o[2], r = 2 * Math.PI, n /= 255, 
t /= 255, e /= 255, 0 == (a = 1 - Math.min(n, t, e) / (s = (n + t + e) / 3)) ? i = 0 : (i = (n - t + (n - e)) / 2, 
i /= Math.sqrt((n - t) * (n - t) + (n - e) * (t - e)), i = Math.acos(i), e > t && (i = r - i), 
i /= r), [ 360 * i, a, s ];
}, C.hsi = function() {
return function(e, t, i) {
i.prototype = e.prototype;
var s = new i(), n = e.apply(s, t);
return Object(n) === n ? n : s;
}(e, Ee.call(arguments).concat([ "hsi" ]), function() {});
}, p.hsi = M, e.prototype.hsi = function() {
return ce(this._rgb);
}, D = function(e, t, i, s) {
var n, o, a, c, r, l, u, d, p, h;
return "hsl" === s ? (p = e.hsl(), h = t.hsl()) : "hsv" === s ? (p = e.hsv(), h = t.hsv()) : "hcg" === s ? (p = e.hcg(), 
h = t.hcg()) : "hsi" === s ? (p = e.hsi(), h = t.hsi()) : "lch" !== s && "hcl" !== s || (s = "hcl", 
p = e.hcl(), h = t.hcl()), "h" === s.substr(0, 1) && (o = p[0], u = p[1], c = p[2], 
a = h[0], d = h[1], r = h[2]), isNaN(o) || isNaN(a) ? isNaN(o) ? isNaN(a) ? n = Number.NaN : (n = a, 
1 !== c && 0 !== c || "hsv" === s || (l = d)) : (n = o, 1 !== r && 0 !== r || "hsv" === s || (l = u)) : n = o + i * (a > o && a - o > 180 ? a - (o + 360) : a < o && o - a > 180 ? a + 360 - o : a - o), 
null == l && (l = u + i * (d - u)), C[s](n, l, c + i * (r - c));
}, U = function(e, t, i) {
var s, n;
return s = e.num(), n = t.num(), C.num(s + (n - s) * i, "num");
}, (h = h.concat(function() {
var e, t, i, s;
for (s = [], t = 0, e = (i = [ "hsv", "hsl", "hsi", "hcl", "lch", "hcg" ]).length; t < e; t++) Z = i[t], 
s.push([ Z, D ]);
return s;
}())).push([ "num", U ]), I = function(t, i, s, n) {
var o, a;
return o = t.lab(), a = i.lab(), new e(o[0] + s * (a[0] - o[0]), o[1] + s * (a[1] - o[1]), o[2] + s * (a[2] - o[2]), n);
}, h.push([ "lab", I ]);
}).call(void 0);
cc._RF.pop();
}, {} ],
custom_material: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf55fSDhJtE4YLQLmUchrgd", "custom_material");
cc.Class({
extends: cc.Component,
properties: {
backgroud: cc.Sprite,
content: cc.Sprite,
customEffects: [ cc.EffectAsset ],
contentTexture: {
default: null,
type: cc.Texture2D
},
gold: {
default: null,
type: cc.Texture2D
},
speed: .1,
_effectIndex: 0
},
onEnable: function() {
this.originState = cc.dynamicAtlasManager.enabled;
cc.dynamicAtlasManager.enabled = !1;
},
onDisable: function() {
cc.dynamicAtlasManager.enabled = this.originState;
},
start: function() {
this.time = 0;
this.bgSpriteMaterial = this.backgroud.getMaterial(0);
this.contentSpriteMaterial = this.content.getMaterial(0);
},
changeEffect: function() {
this.time = 0;
this._effectIndex >= this.customEffects.length && (this._effectIndex = 0);
this.newMaterial = new cc.Material();
var e = this.customEffects[this._effectIndex];
this._effectIndex++;
this.newMaterial.effectAsset = e;
this.newMaterial.name = e.name;
if ("custom_material" === e.name) {
this.newMaterial.setProperty("texture", this.contentTexture);
this.newMaterial.setProperty("texture2", this.gold);
}
this.content.setMaterial(0, this.newMaterial);
},
update: function(e) {
if (this.bgSpriteMaterial && this.contentSpriteMaterial) {
this.time += e * this.speed;
this.newMaterial ? this.newMaterial.setProperty("time", this.time) : this.contentSpriteMaterial.setProperty("time", this.time);
this.bgSpriteMaterial.setProperty("time", 10 * this.time);
}
}
});
cc._RF.pop();
}, {} ],
doodle: [ function(e, t) {
"use strict";
cc._RF.push(t, "136e6rUnNlCbZ7UezYhQDoQ", "doodle");
cc.Class({
extends: cc.Component,
properties: {
reactivity: .5,
debug: !1
},
onEnable: function() {
this.graphics = this.getComponent(cc.Graphics);
this.nodes = [];
this.ripples = [];
this.mouse = {
x: 0,
y: 0
};
this.color = {
r: 0,
g: 0,
b: 0,
a: 255
};
this.cycle = 90;
this.createBezierNodes();
var e = cc.find("Canvas");
e.on(cc.Node.EventType.TOUCH_START, function(e) {
this.mouse = e.getLocation();
this.addRipple();
}, this);
e.on(cc.Node.EventType.TOUCH_END, function() {
this.input = !1;
}, this);
},
createBezierNodes: function() {
this.updateColorCycle();
for (var e = 0; e < 6; e++) {
var t = 2 * Math.PI * e / 6, i = .5 * cc.winSize.width + 0 * Math.cos(t), s = .5 * cc.winSize.height + 0 * Math.sin(t);
this.nodes.push({
x: i,
y: s,
vx: 0,
vy: 0,
lastX: i,
lastY: s,
min: 150,
max: 250,
disturb: 150,
orbit: 20,
angle: Math.random() * Math.PI * 2,
speed: .05 + .05 * Math.random(),
theta: t
});
}
},
addRipple: function() {
this.input = !0;
if (0 === this.ripples.length) {
this.updateColorCycle();
this.ripples.push({
x: this.mouse.x,
y: this.mouse.y,
reactivity: 0,
fade: 1
});
}
},
updateColorCycle: function() {
this.cycle = 100 !== Math.min(this.cycle + this.reactivity + .3, 100) ? this.cycle += this.reactivity + .3 : 0;
var e = this.color;
e.r = ~~(127 * Math.sin(.3 * this.cycle + 0) + 128);
e.g = ~~(127 * Math.sin(.3 * this.cycle + 2) + 128);
e.b = ~~(127 * Math.sin(.3 * this.cycle + 4) + 128);
},
update: function() {
for (var e = this, t = this.nodes, i = this.ripples, s = 0; s < i.length; s++) {
var n = i[s];
n.reactivity += 5;
n.fade -= .05;
n.fade <= 0 && i.splice(s, 1);
}
[].forEach.call(t, function(t) {
t.lastX += .08 * (.5 * cc.winSize.width + t.disturb * Math.cos(t.theta) - t.lastX);
t.lastY += .08 * (.5 * cc.winSize.height + t.disturb * Math.sin(t.theta) - t.lastY);
t.x += .08 * (t.lastX + Math.cos(t.angle) * t.orbit - t.x);
t.y += .08 * (t.lastY + Math.sin(t.angle) * t.orbit - t.y);
t.vx += .01 * (t.min - t.disturb);
t.vx *= .98;
t.disturb += t.vx;
e.input && (t.disturb += (t.max - t.disturb) * e.reactivity);
t.angle += t.speed;
});
this.render();
},
render: function() {
var e, t, i, s, n = this, o = this.nodes, a = this.ripples, c = this.graphics, r = this.color;
r.a = this.debug ? 255 : 127.5;
c.clear();
[].forEach.call(o, function() {
e = o[o.length - 1];
t = o[0];
i = e.x + .5 * (t.x - e.x);
s = e.y + .5 * (t.y - e.y);
var a = cc.color().fromHEX(n.debug ? "#a9a9a9" : "#e5e5e5");
a.a = n.debug ? 255 : 127.5;
c.strokeColor = a;
c.fillColor = r;
c.lineWidth = n.debug ? 1 : 5;
c.moveTo(i, s);
for (var l = 0; l < o.length; l++) {
e = o[l];
t = l + 1 > o.length - 1 ? o[l - o.length + 1] : o[l + 1];
i = e.x + .5 * (t.x - e.x);
s = e.y + .5 * (t.y - e.y);
c.quadraticCurveTo(e.x, e.y, i, s);
}
!n.debug && c.fill();
c.stroke();
c.lineWidth = 1;
c.lineCap = cc.Graphics.LineCap.ROUND;
c.lineJoin = cc.Graphics.LineJoin.ROUND;
c.strokeColor.fromHEX("#a9a9a9");
c.fillColor.fromHEX("#a9a9a9");
for (l = 0; l < o.length; l++) {
e = o[l];
t = l + 1 > o.length - 1 ? o[l - o.length + 1] : o[l + 1];
i = e.x + .8 * (t.x - e.x);
s = e.y + .8 * (t.y - e.y);
c.moveTo(i, s);
e = t;
t = l + 2 > o.length - 1 ? o[l - o.length + 2] : o[l + 2];
i = e.x + .2 * (t.x - e.x);
s = e.y + .2 * (t.y - e.y);
c.lineTo(i, s);
c.stroke();
e = o[l];
t = l + 1 > o.length - 1 ? o[l - o.length + 1] : o[l + 1];
i = e.x + .8 * (t.x - e.x);
s = e.y + .8 * (t.y - e.y);
c.circle(i, s, 2);
c.fill();
e = t;
t = l + 2 > o.length - 1 ? o[l - o.length + 2] : o[l + 2];
i = e.x + .2 * (t.x - e.x);
s = e.y + .2 * (t.y - e.y);
c.circle(i, s, 2);
c.fill();
}
});
for (var l = 0; l < a.length; l++) {
var u = a[l], d = cc.color().fromHEX("#ffffff");
d.a = 255 * u.fade;
c.fillColor = d;
c.circle(u.x, u.y, u.reactivity);
c.fill();
}
}
});
cc._RF.pop();
}, {} ],
"downloader-audio": [ function(e, t) {
"use strict";
cc._RF.push(t, "0c2cc2alblHzIYTnubkC9U7", "downloader-audio");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
remindLabel: {
default: null,
type: cc.Label
},
inputUrlBox: {
default: null,
type: cc.EditBox
},
_audioPlayer: null,
_audioUrl: "http://tools.itharbors.com/christmas/res/sounds/ss.mp3"
},
onLoad: function() {
this.remindLabel.textKey = "";
this._audioPlayer = this.node.getComponent("AudioCtrl");
},
startLoad: function() {
this._audioUrl = this.inputUrlBox.string;
if (this._audioUrl) {
cc.assetManager.loadRemote(this._audioUrl, this.audioLoadComplete.bind(this));
this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.2");
} else this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.10");
},
audioLoadComplete: function(e, t) {
if (!e && t) {
this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.4.1");
this._audioPlayer.setAudioTask(t);
} else {
console.log(e);
this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.5.1");
}
},
update: function() {
this._audioPlayer.currentTime();
},
onDisable: function() {
this._audioPlayer.stopAllAudio();
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
"downloader-picture": [ function(e, t) {
"use strict";
cc._RF.push(t, "3d00dQT3HNGKavyQVCwTT1h", "downloader-picture");
var i = e("i18n");
cc.Class({
extends: cc.Component,
properties: {
remindLabel: {
default: null,
type: cc.Label
},
inputUrlBox: {
default: null,
type: cc.EditBox
},
picNode: {
default: null,
type: cc.Sprite
},
_picUrl: "http://tools.itharbors.com/christmas/res/tree.png"
},
onLoad: function() {
this.remindLabel.textKey = "";
},
startLoad: function() {
this._picUrl = this.inputUrlBox.string;
if (this._picUrl) {
cc.assetManager.loadRemote(this._picUrl, this.picLoadComplete.bind(this));
this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.2");
} else this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.10");
},
picLoadComplete: function(e, t) {
if (!e && t) {
this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.4.2");
var s = new cc.SpriteFrame(t);
this.picNode.spriteFrame = s;
this.picNode.node.active = !0;
} else {
console.log(e);
this.remindLabel.textKey = i.t("cases/05_scripting/11_network/download-web.fire.5.2");
}
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
"draw-line": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "9956e8stcdOCqj54TY/HidB", "draw-line");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = (a.property, function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.touches = [];
t.graphics = null;
return t;
}
t.prototype.start = function() {
var e = cc.find("Canvas");
e.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.graphics = this.getComponent(cc.Graphics);
this.graphics.moveTo(0, 0);
this.graphics.lineTo(.1, 0);
this.graphics.lineTo(-.11, 0);
this.graphics.stroke();
};
t.prototype.onTouchStart = function(e) {
this.touches.length = 0;
this.touches.push(e.touch.getLocation());
};
t.prototype.onTouchMove = function(e) {
var t = this.touches;
t.push(e.touch.getLocation());
this.graphics.clear();
var i = this.node.convertToWorldSpaceAR(cc.v2());
this.graphics.moveTo(t[0].x - i.x, t[0].y - i.y);
for (var s = 0, n = 1, o = t.length; n < o; n++) if (!(t[n].sub(t[s]).mag() < 2)) {
s = n;
this.graphics.lineTo(t[n].x - i.x, t[n].y - i.y);
}
this.graphics.stroke();
};
t.prototype.onTouchEnd = function() {};
return o([ c ], t);
}(cc.Component));
i.default = r;
cc._RF.pop();
}, {} ],
"dynamic-load-material": [ function(e, t) {
"use strict";
cc._RF.push(t, "93268zvFsZAKpSHQw+2ixa3", "dynamic-load-material");
cc.Class({
extends: cc.Component,
properties: {
meshRenderer: cc.MeshRenderer,
_material: cc.Material
},
start: function() {
var e = this;
this.scheduleOnce(function() {
cc.resources.load("materials/dynamic-load-material", cc.Material, function(t, i) {
if (t) cc.error(t); else {
e._material = i.addRef();
e.meshRenderer.setMaterial(0, i);
}
});
}, 1);
},
onDestroy: function() {
this._material && this._material.decRef();
this._material = null;
}
});
cc._RF.pop();
}, {} ],
"dynamic-tiledmap": [ function(e, t) {
"use strict";
cc._RF.push(t, "cad2cnE69BPqr+Aejz96TlC", "dynamic-tiledmap");
cc.Class({
extends: cc.Component,
properties: {
map_root: cc.Node
},
onLoadTileMap: function(e) {
var t = this;
cc.resources.load(e, cc.TiledMapAsset, function(e, i) {
e ? cc.error(e) : t.onCreateTileMap(i);
});
},
onCreateTileMap: function(e) {
this.map_root.destroyAllChildren();
var t = new cc.Node();
this.map_root.addChild(t);
t.addComponent(cc.TiledMap).tmxAsset = e;
},
onBtnCreateTileMap: function() {
this.onLoadTileMap("tilemap/tile_iso_offset");
},
onBtnCreateTileMapWithTsx: function() {
this.onLoadTileMap("tilemap/tile_iso_offset_with_tsx");
}
});
cc._RF.pop();
}, {} ],
ellipse: [ function(e, t) {
"use strict";
cc._RF.push(t, "c7e65GQDltH+6fpuWTVubaZ", "ellipse");
cc.Class({
extends: cc.Component,
onLoad: function() {
var e = this.getComponent(cc.Graphics);
e.lineWidth = 10;
e.fillColor.fromHEX("#ff0000");
e.circle(150, 0, 100);
e.ellipse(-150, 0, 100, 70);
e.stroke();
e.fill();
}
});
cc._RF.pop();
}, {} ],
"enable-physics3d": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c4021KQFRRMpq8Rl1Z07uGF", "enable-physics3d");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.needPhysics = !1;
t.needPhysicsWord = null;
return t;
}
t.prototype.onLoad = function() {
cc.director.getPhysics3DManager().enabled = !0;
var e = this.needPhysics && !1;
this.needPhysicsWord && (this.needPhysicsWord.active = e);
};
o([ r ], t.prototype, "needPhysics", void 0);
o([ r({
type: cc.Node
}) ], t.prototype, "needPhysicsWord", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
"enable-rigidbody": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "d459cABJ6ZF6J+hdiAOrLd4", "enable-rigidbody");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.toState = null;
t.rigidBody = null;
return t;
}
t.prototype.switchState = function() {
if ("disable" == this.toState.string) {
this.disableRigidBody();
this.toState.string = "enable";
} else {
this.enableRigidBody();
this.toState.string = "disable";
}
};
t.prototype.enableRigidBody = function() {
this.rigidBody.enabled = !0;
};
t.prototype.disableRigidBody = function() {
this.rigidBody.enabled = !1;
};
o([ r(cc.Label) ], t.prototype, "toState", void 0);
o([ r(cc.RigidBody3D) ], t.prototype, "rigidBody", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
"enable-shape": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c372auEmopBg5i6QilLDSVd", "enable-shape");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.toState = null;
return t;
}
t.prototype.start = function() {};
t.prototype.switchState = function() {
if ("disable" == this.toState.string) {
this.disableAllShape();
this.toState.string = "enable";
} else {
this.enableAllShape();
this.toState.string = "disable";
}
};
t.prototype.enableAllShape = function() {
for (var e = this.node.children, t = 0; t < e.length; t++) e[t].getComponent(cc.Collider3D).enabled = !0;
};
t.prototype.disableAllShape = function() {
for (var e = this.node.children, t = 0; t < e.length; t++) e[t].getComponent(cc.Collider3D).enabled = !1;
};
o([ r({
type: cc.Label
}) ], t.prototype, "toState", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
en: [ function(e, t) {
"use strict";
cc._RF.push(t, "920c5VLzJxKjYCAoIUwUHym", "en");
t.exports = {
example_case_tips_content: "The example case not support the current platform",
example_case_nonsupport_native_desktop_tips: "The example case nonsupport the Mac platform and Windows platform",
example_case_nonsupport_runtime_tips: "The example case does not support the runtime platform",
example_case_nonsupport_mobile_tips: "The example case nonsupport mobile platforms",
example_case_nonsupport_web_canvas_tips: "The example case nonsupport Canvas mode",
example_case_support_webGl_tips: "The example case only supports WebGL mode",
example_case_support_mobile_tips: "The example case only supports mobile platforms",
example_case_support_mobile_android_tips: "The example case only supports Android mobile platform",
example_case_support_native_chrome_tips: "The example case only supports Chrome browser (Native)",
example_case_support_native_desktop_tips: "The example case only supports the Mac platform and Windows platform",
example_case_nonsupport_preview_tips: "The example case nonsupport Preview",
example_case_nonsupport_qqplay_tips: "The example case nonsupport QQplay",
example_case_nonsupport_Wechatgame_tips: "The example case nonsupport Wechatgame",
"cases/01_graphics/01_sprite/AtlasSprite.fire.7": "This is Spirte Single.",
"cases/01_graphics/01_sprite/AtlasSprite.fire.11": "This is Spirte From Atlas.",
"cases/01_graphics/01_sprite/FilledSprite.fire.9": "Fill Type: HORIZONTAL",
"cases/01_graphics/01_sprite/FilledSprite.fire.15": "Fill Type: VERTICAL",
"cases/01_graphics/01_sprite/FilledSprite.fire.23": "FILL Type: RADIAL",
"cases/01_graphics/01_sprite/SimpleSprite.fire.7": "This is Simple Sprite.",
"cases/01_graphics/01_sprite/SlicedSprite.fire.7": "This is Sliced Sprite.",
"cases/01_graphics/01_sprite/TiledSprite.fire.6": "This is Tiled Sprite.",
"cases/01_graphics/01_sprite/ChangeColor.fire.1": "Draw Call will be changed when change color.",
"cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "TRIMMED ",
"cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "No TRIMMED",
"cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": 'Particle 1\n"Auto Remove On Finish" disabled',
"cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": 'Particle 2\n"Auto Remove On Finish" enabled',
"cases/01_graphics/02_particle/ToggleParticle.fire.6": 'Press "Button" to toggle particle play',
"cases/02_ui/01_widget/AdvancedWidget.fire.7": "Top Left",
"cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.14": "Top Left",
"cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
"cases/02_ui/01_widget/AdvancedWidget.fire.21": "Top Right",
"cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.28": "Left",
"cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
"cases/02_ui/01_widget/AdvancedWidget.fire.35": "Right",
"cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
"cases/02_ui/01_widget/AdvancedWidget.fire.42": "Bottom Left",
"cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.49": "Bottom",
"cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
"cases/02_ui/01_widget/AdvancedWidget.fire.56": "Bottom Right",
"cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.63": "This is Advanced WIdget.",
"cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne is false, It is always aligns",
"cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne is true, It aligns only once",
"cases/02_ui/01_widget/AnimatedWidget.fire.9": "This is Animation Widget.",
"cases/02_ui/01_widget/AutoResize.fire.13": "This is Widget Auto Resize.",
"cases/02_ui/01_widget/WidgetAlign.fire.18": "This is Widget Align.",
"cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
"cases/02_ui/02_label/AlignFontLabel.fire.6": "Align Label",
"cases/02_ui/02_label/AlignFontLabel.fire.9": "Horizontal Align",
"cases/02_ui/02_label/AlignFontLabel.fire.14": "Hello! \nWelcome Come To \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.16": "Align: LEFT",
"cases/02_ui/02_label/AlignFontLabel.fire.21": "Hello! \nWelcome Come To \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.23": "Align: CENTER",
"cases/02_ui/02_label/AlignFontLabel.fire.28": "Hello! \nWelcome Come To \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.30": "Align: RIGHT",
"cases/02_ui/02_label/AlignFontLabel.fire.33": "Vertical Align",
"cases/02_ui/02_label/AlignFontLabel.fire.38": "Welcome Come To \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.40": "Align: TOP",
"cases/02_ui/02_label/AlignFontLabel.fire.45": "Welcome Come To \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.47": "Align: CENTER",
"cases/02_ui/02_label/AlignFontLabel.fire.52": "Welcome Come To \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.54": "Align: BOTTOM",
"cases/02_ui/02_label/SystemFontLabel.fire.6": "System Font",
"cases/02_ui/02_label/SystemFontLabel.fire.9": "Wrap",
"cases/02_ui/02_label/SystemFontLabel.fire.14": "This is System Font",
"cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
"cases/02_ui/02_label/SystemFontLabel.fire.21": "This is System Font",
"cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
"cases/02_ui/02_label/SystemFontLabel.fire.26": "No Wrap",
"cases/02_ui/02_label/SystemFontLabel.fire.31": "This is System Font",
"cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
"cases/02_ui/02_label/SystemFontLabel.fire.38": "This is System Font",
"cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
"cases/02_ui/02_label/SystemFontLabel.fire.45": "Hello! Welcome Come To Cocos Creator",
"cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
"cases/02_ui/03_button/ButtonInScroll.js.1": "Top button clicked!",
"cases/02_ui/03_button/ButtonInScroll.js.2": "Bottom button clicked!",
"cases/02_ui/03_button/ButtonInScroll.fire.21": "Which button is clicked?",
"cases/02_ui/03_button/ButtonInScroll.fire.27": "drag to reveal more buttons",
"cases/02_ui/03_button/SimpleButton.js.1": "Left button clicked!",
"cases/02_ui/03_button/SimpleButton.js.2": "Right button clicked!",
"cases/02_ui/03_button/ButtonInteractable.fire.7": "PLAY",
"cases/02_ui/03_button/ButtonInteractable.fire.16": "STOP",
"cases/02_ui/03_button/ButtonInteractable.fire.21": "interactable: true",
"cases/02_ui/03_button/ButtonInteractable.fire.23": "interactable: false",
"cases/02_ui/03_button/ButtonInteractable.js.1": "interactable: ",
"cases/02_ui/03_button/ButtonInteractable.js.2": "interactable: ",
"cases/02_ui/03_button/ButtonSizeMode.fire": "Buttons with different hit areas",
"cases/02_ui/03_button/SimpleButton.fire.6": "Which button is clicked?",
"cases/02_ui/04_progressbar/progressbar.fire.7": "Horizontal bar with progress 0.3",
"cases/02_ui/04_progressbar/progressbar.fire.11": "Horizontal bar reverse with progress 1.0",
"cases/02_ui/04_progressbar/progressbar.fire.15": "Vertical bar \nfrom bottom",
"cases/02_ui/04_progressbar/progressbar.fire.19": "Vertical bar \nfrom top",
"cases/02_ui/04_progressbar/progressbar.fire.23": "Progress bar with sprite",
"cases/02_ui/04_progressbar/progressbar.fire.28": "Progress bar with child sprite",
"cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
"cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
"cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview full functionality",
"cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview without inertia",
"cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview without elastic",
"cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview horizontal scroll only",
"cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview vertical only",
"cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview no scrollbar",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "Basic",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "Horizontal",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "Vertical",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "Grid Layout Axis horizontal",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "Grid Layout Axis vertical",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "Horizontal layout none",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "Vertical layout none",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "Grid start axis horizontal none",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "Grid start axis vertical none",
"cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView with vertical  layout",
"cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView with horizontal layout",
"cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView with Grid Layout\nstart axis: horizontal ",
"cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView with Grid Layout\nstart axis: vertical ",
"cases/02_ui/06_layout/LayoutNone.fire.6": "Basic layout, Type: None\nResize container",
"cases/02_ui/06_layout/LayoutNone.fire.35": "Horizontal layout None\nNo resize",
"cases/02_ui/06_layout/LayoutNone.fire.60": "Vertical layout, Type: None\nNo resize",
"cases/02_ui/06_layout/LayoutNone.fire.77": "Grid start axis: horizontal, Type: None\nNo resize",
"cases/02_ui/06_layout/LayoutNone.fire.142": "Grid start axis: vertical, Type: None\nNo resize",
"cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
"cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
"cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
"cases/02_ui/07_editBox/editbox.js.1": "Enter Text: ",
"cases/02_ui/07_editBox/EditBox.fire.25": "Single Line Password:",
"cases/02_ui/07_editBox/EditBox.fire.27": "Single Line Text:",
"cases/02_ui/07_editBox/EditBox.fire.29": "Mutiple Line Text:",
"cases/02_ui/07_editBox/EditBox.fire.32": "Click",
"cases/02_ui/07_editBox/EditBox.fire.38": "Button must be on top of EditBox, \nand it should enable click.",
"cases/02_ui/09_videoplayer/fullscreenVideo.fire": "When you touch the screen, video will be played. \n It will be removed when video complete.",
"cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen": "currect device does nonsupport fullscreen.",
"cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "Press 'A' or 'D' to control sheep",
"cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
"cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "Try touching anywhere.",
"cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "The sample can only be effective on mobile platforms!",
"cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21": "Use your fingers to zoom image!",
"cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1": "Open Accelerometer",
"cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2": "Close Accelerometer",
"cases/03_gameplay/02_actions/SimpleAction.fire.13": "This is Simple Action.",
"cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
"cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "This is Animate Custom Property.",
"cases/03_gameplay/03_animation/AnimationEvent.fire.6": "Start the first animation",
"cases/03_gameplay/03_animation/AnimationEvent.fire.14": "This is Animation Event.",
"cases/03_gameplay/03_animation/AnimationEvent.js.1": "Start the",
"cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
"cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
"cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
"cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
"cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
"cases/03_gameplay/03_animation/MoveAnimation.fire.41": "This is Move Animation.",
"cases/03_gameplay/03_animation/CurveAnimation.fire.42": "This is Curve Animation.",
"cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "This is SprieFrame Animation.",
"cases/03_gameplay/03_animation/CreateClip.fire.1": "Dynamic Creating AnimationClip",
"cases/04_audio/SimpleAudio.fire.6": "Enjoy the music!",
"cases/05_scripting/01_properties/NodeArray.fire.14": "This is Node Array.",
"cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
"cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
"cases/05_scripting/01_properties/NonSerialized.fire.10": "This is Non Serialized.",
"cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
"cases/05_scripting/01_properties/ReferenceType.fire.11": "This example does not include the runtime demonstration",
"cases/05_scripting/01_properties/ValueType.fire.6": "This example does not include the runtime demonstration",
"cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "This is Instantiate Prefab.",
"cases/05_scripting/03_events/EventInMask.fire.23": "Change order of nodes",
"cases/05_scripting/03_events/SimpleEvent.fire.19": "Touch event can support click",
"cases/05_scripting/03_events/SimpleEvent.fire.21": "Mouse event can support click, hover, wheel",
"cases/05_scripting/03_events/SimpleEvent.fire.23": "Custom event can be triggered manually\n(Click button above)",
"cases/05_scripting/03_events/SimpleEvent.fire.25": "This is Simple Event.",
"cases/05_scripting/03_events/TouchPropagation.fire.15": "This is Touch Propagation.",
"cases/05_scripting/03_events/MousePropagation.fire.1": "This is Mouse Propagation.",
"cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
"cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
"cases/05_scripting/04_scheduler/scheduler.fire.12": "Repeat Schedule",
"cases/05_scripting/04_scheduler/scheduler.fire.18": "Cancel Schedules",
"cases/05_scripting/04_scheduler/scheduler.fire.24": "Schedule Once",
"cases/05_scripting/04_scheduler/scheduler.fire.29": "Counter use update function to change string value each frame",
"cases/05_scripting/04_scheduler/scheduler.fire.31": "This is Scheduler.",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.0": "Click button to start recursive tasks, you should see task2 invoked at last.",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.1": "Task1 invoked",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.2": "Task2 invoked",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.3": "Start tasks",
"cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
"cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
"cases/05_scripting/05_cross_reference/CrossReference.fire.14": "This is Cross Reference.",
"cases/05_scripting/06_life_cycle/life_cycle.fire.6": "This is Life cycle.",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "Asset Loading",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "Load SpriteFrame",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "Load Texture",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "Load Audio",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "Load Txt",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "Load Font",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "Load Plist",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "Load Prefab",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "Load Scene",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "Load Animation",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "Load Spine",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "Not currently loaded Entity.",
"cases/05_scripting/07_asset_loading/AssetLoading.js.1": "Loaded ",
"cases/05_scripting/07_asset_loading/AssetLoading.js.2": "Play ",
"cases/05_scripting/07_asset_loading/AssetLoading.js.3": "Create ",
"cases/05_scripting/07_asset_loading/AssetLoading.js.4": "Playing Music.",
"cases/05_scripting/07_asset_loading/AssetLoading.js.5": "This is Font!",
"cases/05_scripting/07_asset_loading/LoadRes.fire.7": "By Type",
"cases/05_scripting/07_asset_loading/LoadRes.fire.10": "Load SpriteFrame",
"cases/05_scripting/07_asset_loading/LoadRes.fire.17": "By Url",
"cases/05_scripting/07_asset_loading/LoadRes.fire.20": "Load Prefab",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "LoadResDir",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "Load All",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "Load SpriteFrame All",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "Clear All",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.1": "Preload Assets",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.2": "PreLoad SpriteFrame",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.3": "Preload Texture",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.4": "Preload Audio",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.5": "Preload Txt",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.6": "Preload Font",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.7": "Preload Plist",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.8": "Preload Prefab",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.9": "Preload Scene",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.10": "Preload Animation",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.11": "Preload Spine",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.12": "Not currently preloaded Entity.",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.13": "Preload Dir",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.1": "Loaded ",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.2": "Play ",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.3": "Create ",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.4": "Playing Music.",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.5": "This is Font!",
"cases/05_scripting/07_asset_loading/DeferredLoading.fire.1": "Deferred Loading",
"cases/05_scripting/08_module/load_module.fire.6": "Load Module",
"cases/05_scripting/08_module/load_module.fire.10": "Create Monster",
"cases/05_scripting/09_singleton/Singleton.fire.6": "This example does not include the runtime demonstration",
"cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "download complete!!",
"cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "dowloading: ",
"cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "click anywhere to download...",
"cases/05_scripting/10_loadingBar/loadingBar.fire.7": "Loading Completed",
"cases/05_scripting/10_loadingBar/loadingBar.fire.18": "Dowloading",
"cases/05_scripting/11_network/NetworkCtrl.js.1": "waiting...",
"cases/05_scripting/11_network/NetworkCtrl.js.2": "waiting...",
"cases/05_scripting/11_network/NetworkCtrl.js.3": "waiting...",
"cases/05_scripting/11_network/NetworkCtrl.js.4": "waiting...",
"cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\\nSend Binary WS was opened.",
"cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\\nResponse get.",
"cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\\nsendBinary Error was fired.",
"cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\\nwebsocket instance closed.",
"cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\\nSend Binary WS is waiting...",
"cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\\n",
"cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\\n",
"cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\\n",
"cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\\n",
"cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\\n",
"cases/05_scripting/11_network/network.fire.7": "Label",
"cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
"cases/05_scripting/11_network/network.fire.11": "Label",
"cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
"cases/05_scripting/11_network/network.fire.15": "Label",
"cases/05_scripting/11_network/network.fire.14": "WebSocket",
"cases/05_scripting/11_network/network.fire.19": "Label",
"cases/05_scripting/11_network/network.fire.18": "SocketIO",
"cases/05_scripting/11_network/download-web.fire.1.1": "Remote Audio DownLoad",
"cases/05_scripting/11_network/download-web.fire.1.2": "Remote Picture DownLoad",
"cases/05_scripting/11_network/download-web.fire.2": "Wait For DownLoading...",
"cases/05_scripting/11_network/download-web.fire.3": "DownLoad Process：",
"cases/05_scripting/11_network/download-web.fire.4.1": "Audio DownLoad Completed",
"cases/05_scripting/11_network/download-web.fire.4.2": "Picture DownLoad Completed",
"cases/05_scripting/11_network/download-web.fire.5.1": "Audio DownLoad Failed",
"cases/05_scripting/11_network/download-web.fire.5.2": "Picture DownLoad Failed",
"cases/05_scripting/11_network/download-web.fire.6": "Remote Url:",
"cases/05_scripting/11_network/download-web.fire.7": "download",
"cases/05_scripting/11_network/download-web.fire.8": "SlideToNext",
"cases/05_scripting/11_network/download-web.fire.9": "SlideToPreview",
"cases/05_scripting/11_network/download-web.fire.10": "Url Is Unavailable",
"cases/native_call/native_call.fire.1": "JS to JAVA reflection only works Android mobile platform!",
"cases/native_call/native_call.fire.2": "Click on the button calls the static method!",
"cases/native_call/native_call.fire.3": "Click",
"cases/collider/Category.fire.3": "Group: Collider",
"cases/collider/Category.fire.5": "Group: Collider",
"cases/collider/Category.fire.7": "Group: Collider",
"cases/collider/Category.fire.9": "Group: Default",
"cases/collider/Shape.fire.20": "Show Polygon",
"cases/collider/Shape.fire.27": "Show Circle",
"cases/collider/Shape.fire.34": "Show Box",
"cases/collider/Shape.fire.43": "Show Polygon",
"cases/collider/Shape.fire.50": "Show Circle",
"cases/collider/Shape.fire.57": "Show Box",
"cases/motionStreak/MotionStreak.fire.1": "Change MotionStreak",
"cases/spine/SpineBoy.fire.11": "Debug Slots",
"cases/spine/SpineBoy.fire.18": "Debug Bones",
"cases/spine/SpineBoy.fire.25": "Time Scale",
"cases/spine/SpineBoy.fire.36": "Stop",
"cases/spine/SpineBoy.fire.43": "Walk",
"cases/spine/SpineBoy.fire.50": "Run",
"cases/spine/SpineBoy.fire.58": "Jump",
"cases/spine/SpineBoy.fire.65": "Shoot",
"cases/tiledmap/Puzzle.fire.18": "You Win",
"cases/tiledmap/Puzzle.fire.21": "Restart",
"cases/tiledmap/Dynamic-Tiledmap.fire.22": "Dynamically created TiledMap",
"res/prefabs/ListItem.prefab.2": "Label ssss",
"res/prefabs/Monster.prefab.3": "Name:",
"res/prefabs/Monster.prefab.11": "Level :",
"res/prefabs/Monster.prefab.19": "Hp :",
"res/prefabs/Monster.prefab.27": "Attack :",
"res/prefabs/Monster.prefab.35": "Defense :",
"res/prefabs/loadItem.prefab.1": "Label",
"resources/test_assets/prefab.prefab.2": "This is Prefab",
"resources/test_assets/scene.fire.3": "Return Asset Loading Scene",
"resources/test_assets/preloadscene.fire.3": "Return Preloading Scene",
"resources/test_assets/scene.fire.6": "Return",
"scripts/Global/Menu.js.1": "Temporary lack of introduction",
"cases/AssetBundle.1": "Asset Bundle",
"cases/AssetBundle.2": "Load Bundle",
"cases/AssetBundle.3": "Load Audio",
"cases/AssetBundle.4": "Load Texture",
"cases/AssetBundle.5": "Load Scene",
"cases/AssetBundle.6": "Release Assets",
"cases/AssetBundle.7": "Destroy Bundle",
"cases/AssetBundle.8": "Enterred",
"cases/AssetBundle.9": "Failed, Please load bundle first",
"cases/AssetBundle.10": "Back to Asset Bundle",
"cases/AssetBundle.11": "Nothing loaded",
"cases/AssetBundle.12": "Loaded ",
"cases/AssetBundle.13": "Play ",
"cases/AssetBundle.14": "Create ",
"cases/AssetBundle.15": "Playing Music",
"cases/AssetBundle.16": "Assets are released",
"cases/AssetBundle.17": "Asset Bundle is destroyed",
"scripts/AudioCtrl_Play": "Play",
"scripts/AUdioCtrl_Stop": "Stop",
"scripts/AUdioCtrl_Pause": "Pause",
"scripts/AUdioCtrl_Resume": "Resume",
"scripts/AUdioCtrl_StopAll": "StopAll",
"scripts/AUdioCtrl_PauseAll": "PauseAll",
"scripts/AUdioCtrl_ResumeAll": "ResumeAll",
sprite_loadRes_asset_success: "Load Success",
sprite_loadRes_asset_failed: "Load Failed",
"cases/particle3d.color": "Left one: a single color \n Left two: a gradient color \n Left three: several single color variations \n Left four: two gradient colors \n Left five: random colors",
"cases/particle3d.force.transform": "Transform",
"cases/particle3d.force.rotate": "Rotate",
"cases/particle3d.main": "1. Left one, left two are contrasts, the effect is the same \n2. Left three, left five particles are doubled, and the center distance between particles is doubled.\n3.Left four left six particles are doubled, the center distance between the particles is not changed\n4. The left seventh generates two particles every five seconds, and the time interval between the two particles is 0.5 seconds \n5. The left eight can be viewed in the scene editor. Each particle is dragged to generate a particle.",
"cases/particle3d.renderer": "Left one: Particles always face the camera. \nLeft Two: Particles always remain horizontal. \nLeft three: Particles always remain vertical and face the camera.\nLeft four: Particles always remain vertical and face the camera, but are stretched.\nLeft five: Particle is a model",
"cases/particle3d.rotation": "Particles rotate according to the set curve",
"cases/particle3d.shape": "          Particle emitter shape    Particle generation position\nLeft one          Cube                 Internal\nLeft two          Cube                 Frame\nLeft three          Cube                 Surface\nLeft four              Circle             Along a circle\nLeft five              Circle             Generate particles in a circle\n                                      Cycle direction is the same\nLeft six              Circle             Generate particles in a circle\n                                      Cycles in opposite directions\nLeft seven            Cone                   Internal\nLeft eight            Cone                Cone bottom circle\nLeft nine            Cone                    Surface\nLeft ten            Cone               Cone bottom circumference\nLeft eleven       Cone       Cone-bottom circular circulation generates particles\n                                 Particles move obliquely upward\nLeft twelve        Sphere                     Internal\nLeft thirteen        Sphere                     Surface\nLeft fourteen      Hemisphere                    Internal\nLeft fifteen      Hemisphere                    Surface",
"cases/particle3d.size": "The particle size changes according to the set curve."
};
cc._RF.pop();
}, {} ],
follow: [ function(e, t) {
"use strict";
cc._RF.push(t, "d96400vNFFPIpzg48kPuXVc", "follow");
cc.Class({
extends: cc.Component,
properties: {
target: {
default: null,
type: cc.Node
}
},
onLoad: function() {
this.node.active = !cc.sys.isMobile;
if (this.target) {
var e = cc.follow(this.target, cc.rect(0, 0, 2e3, 2e3));
this.node.runAction(e);
}
}
});
cc._RF.pop();
}, {} ],
i18n: [ function(e, t) {
"use strict";
cc._RF.push(t, "93789C/shtIL6entYsZPjee", "i18n");
var i = e("polyglot"), s = "zh" === cc.sys.language ? e("zh") : e("en"), n = new i({
phrases: s,
allowMissing: !0
});
t.exports = {
init: function(t) {
lang = t;
s = e("zh" === t ? "zh" : "en");
n.replace(s);
},
t: function(e, t) {
return n.t(e, t);
}
};
cc._RF.pop();
}, {
en: "en",
polyglot: "polyglot",
zh: "zh"
} ],
impulse: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c86d9dH8xxCO5ledaP2gIZs", "impulse");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.impulse = new cc.Vec3();
t.worldPoint = new cc.Vec3();
t.localPoint = new cc.Vec3();
return t;
}
t.prototype.start = function() {};
t.prototype.onWorldImpulse = function() {
var e = this.getComponent(cc.RigidBody3D);
e && e.applyImpulse(this.impulse, this.worldPoint);
};
t.prototype.onLocalImpulse = function() {
var e = this.getComponent(cc.RigidBody3D);
e && e.applyLocalImpulse(this.impulse, this.localPoint);
};
o([ r ], t.prototype, "impulse", void 0);
o([ r ], t.prototype, "worldPoint", void 0);
o([ r ], t.prototype, "localPoint", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
lineTo: [ function(e, t) {
"use strict";
cc._RF.push(t, "3ed7bVI5mxF+I75PHb0k24q", "lineTo");
cc.Class({
extends: cc.Component,
onLoad: function() {
var e = this.getComponent(cc.Graphics);
e.lineWidth = 10;
e.fillColor.fromHEX("#ff0000");
e.moveTo(-20, 0);
e.lineTo(0, -100);
e.lineTo(20, 0);
e.lineTo(0, 100);
e.close();
e.stroke();
e.fill();
}
});
cc._RF.pop();
}, {} ],
linejoin: [ function(e, t) {
"use strict";
cc._RF.push(t, "23e05St68tC7aM880aEaUaS", "linejoin");
var i = cc.Graphics.LineJoin, s = cc.Graphics.LineCap;
cc.Class({
extends: cc.Component,
onLoad: function() {
this.graphics = this.getComponent(cc.Graphics);
this.graphics.lineWidth = 20;
this.time = 0;
this.radius = 100;
this.draw();
},
update: function(e) {
this.time += .5 * e;
this.draw();
},
draw: function() {
var e = this.graphics;
e.clear();
var t = this.radius * Math.sin(this.time), n = -this.radius * Math.cos(this.time);
e.lineCap = s.BUTT;
e.lineJoin = i.BEVEL;
this.drawLine(-200, 0, t, n);
e.lineJoin = i.MITER;
this.drawLine(0, 0, t, n);
e.lineJoin = i.ROUND;
this.drawLine(200, 0, t, n);
e.lineJoin = i.MITER;
e.lineCap = s.BUTT;
this.drawLine(0, -125, t, n);
e.lineCap = s.SQUARE;
this.drawLine(-200, -125, t, n);
e.lineCap = s.ROUND;
this.drawLine(200, -125, t, n);
},
drawLine: function(e, t, i, s) {
var n = this.graphics;
n.moveTo(e + i, t + s);
n.lineTo(e, t);
n.lineTo(e - i, t + s);
n.stroke();
}
});
cc._RF.pop();
}, {} ],
loadDragonBonesCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "a9c63c/3U5Gv7w0rm3g5wvj", "loadDragonBonesCtrl");
cc.Class({
extends: cc.Component,
properties: {
dragonBone: {
default: null,
type: dragonBones.ArmatureDisplay
}
},
dynamicCreate: function() {
var e = this;
this.dragonBone.dragonAtlasAsset || cc.resources.load("dragonBones/NewDragonTest", dragonBones.DragonBonesAsset, function(t, i) {
t && cc.error(t);
e.dragonBone.dragonAsset = i;
cc.resources.load("dragonBones/texture", dragonBones.DragonBonesAtlasAsset, e.onComplete.bind(e));
});
},
onComplete: function(e, t) {
e && cc.error(e);
this.dragonBone.dragonAtlasAsset = t;
this.dragonBone.armatureName = "armatureName";
this.dragonBone.playAnimation("stand", 0);
}
});
cc._RF.pop();
}, {} ],
loadResDir_example: [ function(e, t) {
"use strict";
cc._RF.push(t, "fee3dcLoaZCvrJ9FZrBngbb", "loadResDir_example");
cc.Class({
extends: cc.Component,
properties: {
btnClearAll: cc.Node,
label: cc.Prefab,
scrollView: cc.ScrollView
},
_init: function() {
this._assets = [];
this._hasLoading = !1;
this.scrollView.content.height = 0;
this.btnClearAll.active = !1;
},
onLoad: function() {
this._init();
},
_createLabel: function(e) {
var t = cc.instantiate(this.label);
t.getComponent(cc.Label).textKey = e;
this.scrollView.content.addChild(t);
},
_clear: function() {
this.scrollView.content.removeAllChildren(!0);
for (var e = 0; e < this._assets.length; ++e) {
var t = this._assets[e];
cc.assetManager.releaseAsset(t);
}
},
onClearAll: function() {
this.scrollView.content.height = 0;
this.btnClearAll.active = !1;
this._clear();
},
onLoadAll: function() {
var e = this;
if (!this._hasLoading) {
this._hasLoading = !0;
this._clear();
this._createLabel("Load All Assets");
this.scrollView.scrollToTop();
this.btnClearAll.active = !1;
cc.resources.loadDir("test_assets", function(t, i) {
if (e.isValid) {
e._assets = i;
for (var s = 0; s < i.length; ++s) {
var n = i[s], o = n.toString();
o || (o = n instanceof cc.JsonAsset ? JSON.stringify(n.json, null, 4) : o || n.name || cc.js.getClassName(n));
e._createLabel(o);
}
e._hasLoading = !1;
e.btnClearAll.active = !0;
}
});
}
},
onLoadSpriteFrameAll: function() {
var e = this;
if (!this._hasLoading) {
this._hasLoading = !0;
this._clear();
this._createLabel("Load All Sprite Frame");
this.scrollView.scrollToTop();
this.btnClearAll.active = !1;
cc.resources.loadDir("test_assets", cc.SpriteFrame, function(t, i) {
if (e.isValid) {
e._assets = i;
for (var s = 0; s < i.length; ++s) {
var n = i[s];
e._createLabel(n.name);
}
e._hasLoading = !1;
e.btnClearAll.active = !0;
}
});
}
}
});
cc._RF.pop();
}, {} ],
"mesh-texture": [ function(e, t) {
"use strict";
cc._RF.push(t, "95a3dIihBlE1bM4psBuANTA", "mesh-texture");
var i = cc.gfx;
cc.Class({
extends: cc.Component,
editor: {
executeInEditMode: !0
},
properties: {
speed: 50
},
start: function() {
var e = new i.VertexFormat([ {
name: i.ATTR_POSITION,
type: i.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: i.ATTR_UV0,
type: i.ATTR_TYPE_FLOAT32,
num: 2
} ]), t = new cc.Mesh();
t.init(e, 9, !0);
this.mesh = t;
this.vertexes = [ cc.v2(-100, 100), cc.v2(0, 100), cc.v2(100, 100), cc.v2(-100, 0), cc.v2(0, 0), cc.v2(100, 0), cc.v2(-100, -100), cc.v2(0, -100), cc.v2(100, -100) ];
t.setVertices(i.ATTR_POSITION, this.vertexes);
t.setVertices(i.ATTR_UV0, [ cc.v2(0, 0), cc.v2(.5, 0), cc.v2(1, 0), cc.v2(0, .5), cc.v2(.5, .5), cc.v2(1, .5), cc.v2(0, 1), cc.v2(.5, 1), cc.v2(1, 1) ]);
t.setIndices([ 0, 1, 3, 1, 4, 3, 1, 2, 4, 2, 5, 4, 3, 4, 6, 4, 7, 6, 4, 5, 7, 5, 8, 7 ]);
var s = this.node.getComponent(cc.MeshRenderer);
s || (s = this.node.addComponent(cc.MeshRenderer));
s.mesh = t;
this.mesh = t;
},
update: function(e) {
var t = this.vertexes[3], s = this.vertexes[5];
(t.x < -200 && this.speed < 0 || t.x > 0 && this.speed > 0) && (this.speed *= -1);
t.x += e * this.speed;
s.x += -e * this.speed;
this.mesh.setVertices(i.ATTR_POSITION, this.vertexes);
}
});
cc._RF.pop();
}, {} ],
mesh: [ function(e, t) {
"use strict";
cc._RF.push(t, "85b7cwUbltFwab1+S5HCilZ", "mesh");
var i = e("chroma"), s = cc.gfx;
cc.Class({
extends: cc.Component,
editor: {
executeInEditMode: !0
},
properties: {},
start: function() {
this.lighten = 0;
this.lightenDirection = 1;
this.c1 = cc.color();
this.c2 = cc.color();
var e = new s.VertexFormat([ {
name: s.ATTR_POSITION,
type: s.ATTR_TYPE_FLOAT32,
num: 3
}, {
name: s.ATTR_COLOR,
type: s.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
} ]), t = new cc.Mesh();
t.init(e, 8, !0);
this.mesh = t;
t.setVertices(s.ATTR_POSITION, [ cc.v3(-100, 100, 100), cc.v3(-100, -100, 100), cc.v3(100, 100, 100), cc.v3(100, -100, 100), cc.v3(-100, 100, -100), cc.v3(-100, -100, -100), cc.v3(100, 100, -100), cc.v3(100, -100, -100) ]);
t._minPos = cc.v3(-100, -100, -100);
t._maxPos = cc.v3(100, 100, 100);
this.updateColor(cc.Color.RED, cc.Color.BLUE);
t.setIndices([ 0, 1, 2, 1, 3, 2, 0, 6, 4, 0, 2, 6, 2, 7, 6, 2, 3, 7, 0, 5, 4, 0, 1, 5, 1, 7, 5, 1, 3, 7, 4, 5, 6, 5, 7, 6 ]);
var i = this.node.getComponent(cc.MeshRenderer);
i || (i = this.node.addComponent(cc.MeshRenderer));
i.mesh = t;
},
updateColor: function(e, t) {
this.mesh.setVertices(s.ATTR_COLOR, [ e, e, e, e, t, t, t, t ]);
},
update: function(e) {
var t = i.hsl(330, 1, this.lighten), s = i.hsl(100, 1, 1 - this.lighten);
this.lighten += .1 * e * this.lightenDirection;
(this.lighten > 1 && this.lightenDirection > 0 || this.lighten < 0 && this.lightenDirection < 0) && (this.lightenDirection *= -1);
this.c1.fromHEX(t.toString());
this.c2.fromHEX(s.toString());
this.updateColor(this.c1, this.c2);
}
});
cc._RF.pop();
}, {
chroma: "chroma"
} ],
"minimap-with-camera-rect": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "1cac6uuFWFDhbIanRytsZ2s", "minimap-with-camera-rect");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = a.executeInEditMode, u = 100, d = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.target = null;
t.miniMapCamera = null;
t.cameraInfo = null;
t.cameraPos = cc.v3(0, 0, u);
t.cameraOrthoSize = 1;
t._tweens = [];
return t;
}
t.prototype.start = function() {
var e = cc.tween(this.target).by(6, {
angle: 360
}).repeatForever().start();
this._tweens.push(e);
e = cc.tween(this).set({
cameraPos: cc.v3(0, 0, u),
cameraOrthoSize: cc.Canvas.instance.node.height / 2
}).to(6, {
cameraOrthoSize: this.target.width / 2
}).delay(1).to(3, {
cameraPos: cc.v3(100, 0, u)
}).union().repeatForever().start();
this._tweens.push(e);
};
t.prototype.onDestroy = function() {
this._tweens.forEach(function(e) {
e.stop();
});
};
t.prototype.update = function() {
var e = cc.Canvas.instance.node, t = e.width, i = e.height;
t = cc.game.canvas.width / cc.view._scaleX;
i = cc.game.canvas.height / cc.view._scaleY;
var s = this.cameraOrthoSize, n = s * (t / i), o = this.miniMapCamera.rect;
this.cameraInfo.clear();
this.cameraInfo.rect((o.x - .5) * t, (o.y - .5) * i, o.width * t, o.height * i);
this.cameraInfo.strokeColor = cc.Color.YELLOW;
this.cameraInfo.stroke();
this.cameraInfo.rect(this.cameraPos.x - n, this.cameraPos.y - s, 2 * n, 2 * s);
this.cameraInfo.strokeColor = cc.Color.BLUE;
this.cameraInfo.stroke();
this.miniMapCamera.node.position = this.cameraPos;
this.miniMapCamera.orthoSize = this.cameraOrthoSize;
};
o([ r(cc.Node) ], t.prototype, "target", void 0);
o([ r(cc.Camera) ], t.prototype, "miniMapCamera", void 0);
o([ r(cc.Graphics) ], t.prototype, "cameraInfo", void 0);
return o([ c, l ], t);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {} ],
"minimap-with-rendertexture": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "98c5bSgS09EEplaizshzGVD", "minimap-with-rendertexture");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = a.executeInEditMode, u = 100, d = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.target = null;
t.miniMapCamera = null;
t.cameraInfo = null;
t.renderTextureSprite = null;
t.cameraPos = cc.v3(0, 0, u);
t.cameraOrthoSize = 1;
t._renderTexture = new cc.RenderTexture();
t._tweens = [];
return t;
}
t.prototype.onEnable = function() {
cc.view.on("design-resolution-changed", this._delayInitRenderTexture, this);
};
t.prototype.onDisable = function() {
cc.view.off("design-resolution-changed", this._delayInitRenderTexture, this);
};
t.prototype._delayInitRenderTexture = function() {
this.scheduleOnce(this._initRenderTexture.bind(this), .1);
};
t.prototype._initRenderTexture = function() {
var e = cc.Canvas.instance.node, t = e.width, i = e.height, s = .2 * t, n = .2 * i;
this._renderTexture.initWithSize(s, n);
this.miniMapCamera.targetTexture = this._renderTexture;
var o = new cc.SpriteFrame();
o.setTexture(this._renderTexture);
this.renderTextureSprite.spriteFrame = o;
var a, c;
a = cc.game.canvas.width / cc.view._scaleX;
c = cc.game.canvas.height / cc.view._scaleY;
var r = this.renderTextureSprite.node;
r.x = a / 2 - s / 2;
r.y = c / 2 - n / 2;
r.width = s;
r.height = n;
};
t.prototype.start = function() {
this._initRenderTexture();
var e = cc.tween(this.target).by(6, {
angle: 360
}).repeatForever().start();
this._tweens.push(e);
e = cc.tween(this).set({
cameraPos: cc.v3(0, 0, u),
cameraOrthoSize: cc.Canvas.instance.node.height / 2
}).to(6, {
cameraOrthoSize: this.target.width / 2
}).delay(1).to(3, {
cameraPos: cc.v3(100, 0, u)
}).union().repeatForever().start();
this._tweens.push(e);
};
t.prototype.onDestroy = function() {
this._tweens.forEach(function(e) {
e.stop();
});
};
t.prototype.update = function() {
var e = this.cameraOrthoSize, t = e * (this._renderTexture.width / this._renderTexture.height);
this.cameraInfo.clear();
var i = this.renderTextureSprite.node;
this.cameraInfo.rect(i.x - i.width / 2, i.y - i.height / 2, i.width, i.height);
this.cameraInfo.strokeColor = cc.Color.YELLOW;
this.cameraInfo.stroke();
this.cameraInfo.rect(this.cameraPos.x - t, this.cameraPos.y - e, 2 * t, 2 * e);
this.cameraInfo.strokeColor = cc.Color.BLUE;
this.cameraInfo.stroke();
this.miniMapCamera.node.position = this.cameraPos;
this.miniMapCamera.orthoSize = this.cameraOrthoSize;
};
o([ r(cc.Node) ], t.prototype, "target", void 0);
o([ r(cc.Camera) ], t.prototype, "miniMapCamera", void 0);
o([ r(cc.Graphics) ], t.prototype, "cameraInfo", void 0);
o([ r(cc.Sprite) ], t.prototype, "renderTextureSprite", void 0);
return o([ c, l ], t);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {} ],
move: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "862fcTVf5BPxrSAyb+WPVzB", "move");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mx = !0;
t.my = !0;
t.mz = !0;
t.originPos = new cc.Vec3();
t.nowPos = new cc.Vec3();
t.speed = 1;
t.dis = 30;
return t;
}
t.prototype.start = function() {
this.nowPos.x = this.originPos.x = this.node.x;
this.nowPos.y = this.originPos.y = this.node.y;
this.nowPos.z = this.originPos.z = this.node.z;
Math.random() > .5 && (this.speed *= -1);
};
t.prototype.update = function() {
cc.Vec3.distance(this.originPos, this.nowPos) > this.dis && (this.speed *= -1);
if (this.mx) {
this.nowPos.x += this.speed;
this.node.x = this.nowPos.x;
}
if (this.my) {
this.nowPos.y += this.speed;
this.node.y = this.nowPos.y;
}
if (this.mz) {
this.nowPos.z += this.speed;
this.node.z = this.nowPos.z;
}
};
o([ r ], t.prototype, "mx", void 0);
o([ r ], t.prototype, "my", void 0);
o([ r ], t.prototype, "mz", void 0);
o([ r ], t.prototype, "speed", void 0);
o([ r ], t.prototype, "dis", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
"moving-objects": [ function(e, t) {
"use strict";
cc._RF.push(t, "6d056HwAmhA7ZTa6tqf8K23", "moving-objects");
cc.Class({
extends: cc.Component,
properties: {
tempPrefab: {
default: null,
type: cc.Node
},
camera: {
default: null,
type: cc.Node
},
root: {
default: null,
type: cc.Node
},
moveSpeed: 100,
nodeCount: 2e3,
_useCamera: !0,
useCamera: {
get: function() {
return this._useCamera;
},
set: function(e) {
if (this._useCamera !== e) {
this._useCamera = e;
if (this.movingNode) {
this.movingNode = e ? this.camera : this.root;
this.camera.x = this.root.x = 0;
this.moveSpeed = -this.moveSpeed;
}
}
}
}
},
onEnable: function() {},
onDisable: function() {},
onLoad: function() {
console.time("move-objects : onLoad");
for (var e = 0; e < this.nodeCount; e++) {
var t = cc.instantiate(this.tempPrefab);
t.x = 960 * (Math.random() - .5);
t.y = 640 * (Math.random() - .5);
t.parent = this.root;
}
this.movingNode = this._useCamera ? this.camera : this.root;
console.timeEnd("move-objects : onLoad");
},
update: function(e) {
this.movingNode.x += this.moveSpeed * e;
(this.moveSpeed > 0 && this.movingNode.x > 900 || this.moveSpeed < 0 && this.movingNode.x < -900) && (this.moveSpeed *= -1);
},
useCameraChanged: function(e) {
this.useCamera = e.isChecked;
this.root.group = this.useCamera ? "Actor" : "Default";
}
});
cc._RF.pop();
}, {} ],
polyglot: [ function(e, t, i) {
(function(e) {
"use strict";
cc._RF.push(t, "69decSgpRlE1rzEKp0RzG3V", "polyglot");
(function(e, s) {
"function" == typeof define && define.amd ? define([], function() {
return s(e);
}) : "object" == typeof i ? t.exports = s(e) : e.Polyglot = s(e);
})("undefined" != typeof e ? e : void 0, function(e) {
var t = String.prototype.replace;
function i(e) {
e = e || {};
this.phrases = {};
this.extend(e.phrases || {});
this.currentLocale = e.locale || "en";
this.allowMissing = !!e.allowMissing;
this.warn = e.warn || f;
}
i.VERSION = "1.0.0";
i.prototype.locale = function(e) {
e && (this.currentLocale = e);
return this.currentLocale;
};
i.prototype.extend = function(e, t) {
var i;
for (var s in e) if (e.hasOwnProperty(s)) {
i = e[s];
t && (s = t + "." + s);
"object" == typeof i ? this.extend(i, s) : this.phrases[s] = i;
}
};
i.prototype.unset = function(e, t) {
var i;
if ("string" == typeof e) delete this.phrases[e]; else for (var s in e) if (e.hasOwnProperty(s)) {
i = e[s];
t && (s = t + "." + s);
"object" == typeof i ? this.unset(i, s) : delete this.phrases[s];
}
};
i.prototype.clear = function() {
this.phrases = {};
};
i.prototype.replace = function(e) {
this.clear();
this.extend(e);
};
i.prototype.t = function(e, t) {
var i, s;
"number" == typeof (t = null == t ? {} : t) && (t = {
smart_count: t
});
if ("string" == typeof this.phrases[e]) i = this.phrases[e]; else if ("string" == typeof t._) i = t._; else if (this.allowMissing) i = e; else {
this.warn('Missing translation for key: "' + e + '"');
s = e;
}
if ("string" == typeof i) {
t = _(t);
s = h(s = r(i, this.currentLocale, t.smart_count), t);
}
return s;
};
i.prototype.has = function(e) {
return e in this.phrases;
};
var s = "||||", n = {
chinese: function() {
return 0;
},
german: function(e) {
return 1 !== e ? 1 : 0;
},
french: function(e) {
return e > 1 ? 1 : 0;
},
russian: function(e) {
return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
czech: function(e) {
return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
},
polish: function(e) {
return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
icelandic: function(e) {
return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
}
}, o = {
chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
french: [ "fr", "tl", "pt-br" ],
russian: [ "hr", "ru" ],
czech: [ "cs", "sk" ],
polish: [ "pl" ],
icelandic: [ "is" ]
};
function a(e) {
var t, i, s, n = {};
for (t in e) if (e.hasOwnProperty(t)) {
i = e[t];
for (s in i) n[i[s]] = t;
}
return n;
}
var c = /^\s+|\s+$/g;
function r(e, i, n) {
var o, a;
return null != n && e ? (a = (o = e.split(s))[u(i, n)] || o[0], t.call(a, c, "")) : e;
}
function l(e) {
var t = a(o);
return t[e] || t.en;
}
function u(e, t) {
return n[l(e)](t);
}
var d = /\$/g, p = "$$$$";
function h(e, i) {
for (var s in i) if ("_" !== s && i.hasOwnProperty(s)) {
var n = i[s];
"string" == typeof n && (n = t.call(i[s], d, p));
e = t.call(e, new RegExp("%\\{" + s + "\\}", "g"), n);
}
return e;
}
function f(t) {
e.console && e.console.warn && e.console.warn("WARNING: " + t);
}
function _(e) {
var t = {};
for (var i in e) t[i] = e[i];
return t;
}
return i;
});
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
raycast: [ function(e, t) {
"use strict";
cc._RF.push(t, "99487EWEA1JVpLMAPptRiG6", "raycast");
cc.Color.WHITE;
cc.Class({
extends: cc.Component,
properties: {
mesh: cc.Node
},
start: function() {
var e = cc.find("Canvas");
e.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.touchPos = null;
this.results = [];
},
onTouchStart: function(e) {
this.touchPos = e.touch.getLocation();
},
onTouchMove: function(e) {
this.touchPos = e.touch.getLocation();
},
onTouchEnd: function() {
this.touchPos = null;
},
raycast: function(e) {
var t = cc.Camera.main.getRay(e);
return cc.geomUtils.intersect.raycast(this.node, t);
},
update: function() {
for (var e = 0; e < this.results.length; e++) this.results[e].node.opacity = 255;
this.results.length = 0;
if (this.touchPos) {
var t = cc.Camera.main.getRay(this.touchPos), i = cc.geomUtils.intersect.raycast(this.node, t);
if (i.length > 0) {
var s = i[0].distance, n = cc.vmath.vec3.normalize(cc.v3(), t.d), o = cc.vmath.vec3.scaleAndAdd(cc.v3(), t.o, n, s);
this.mesh.position = o;
}
this.results = i;
}
}
});
cc._RF.pop();
}, {} ],
raytest: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "938eaQ89X9EKrhzOMm1ufOB", "raytest");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a, c = cc._decorator, r = c.ccclass, l = c.property;
(function(e) {
e[e.ALL = 0] = "ALL";
e[e.CLOSEST = 1] = "CLOSEST";
})(a || (a = {}));
var u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.defaultMaterial = null;
t.rayMaterial = null;
t.rayState = null;
t._raycastType = a.ALL;
t._maxDistance = 1e5;
t._rayTool = null;
return t;
}
t.prototype.start = function() {
this._rayTool = cc.director.getPhysics3DManager();
cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.switchRay = function() {
if (this._raycastType == a.ALL) {
this._raycastType = a.CLOSEST;
this.rayState.string = "ray close";
} else {
this._raycastType = a.ALL;
this.rayState.string = "ray all";
}
};
t.prototype.onTouchStart = function(e) {
this.resetAll();
var t = e.touch.getLocation(), i = cc.Camera.main.getRay(t);
switch (this._raycastType) {
case a.ALL:
var s = this._rayTool.raycast(i, "Ball", this._maxDistance);
if (s) for (var n = 0; n < s.length; n++) {
(c = s[n].collider.node.getComponent(cc.MeshRenderer)).setMaterial(0, this.rayMaterial);
c.markForRender(!0);
}
break;

case a.CLOSEST:
var o = this._rayTool.raycastClosest(i, "Ball", this._maxDistance);
if (o) {
var c;
(c = o.collider.node.getComponent(cc.MeshRenderer)).setMaterial(0, this.rayMaterial);
c.markForRender(!0);
}
}
};
t.prototype.resetAll = function() {
for (var e = 0; e < this.node.children.length; e++) if ("Sphere2" != this.node.children[e].name) {
var t = this.node.children[e].getComponent(cc.MeshRenderer);
t.setMaterial(0, this.defaultMaterial);
t.markForRender(!0);
}
};
o([ l({
type: cc.Material
}) ], t.prototype, "defaultMaterial", void 0);
o([ l({
type: cc.Material
}) ], t.prototype, "rayMaterial", void 0);
o([ l({
type: cc.Label
}) ], t.prototype, "rayState", void 0);
return o([ r ], t);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
rect: [ function(e, t) {
"use strict";
cc._RF.push(t, "2a7cahCMIJCaZpdzIZPkHsp", "rect");
cc.Class({
extends: cc.Component,
onLoad: function() {
var e = this.getComponent(cc.Graphics);
e.lineWidth = 10;
e.fillColor.fromHEX("#ff0000");
e.rect(-250, 0, 200, 100);
e.roundRect(50, 0, 200, 100, 20);
e.stroke();
e.fill();
}
});
cc._RF.pop();
}, {} ],
recursiveTask: [ function(e, t) {
"use strict";
cc._RF.push(t, "1bdf4Sc2zlNZI/eLikUgkJ3", "recursiveTask");
cc.Class({
extends: cc.Component,
properties: {
label: e("LabelLocalized")
},
run: function() {
this.schedule(this.task1, 1, 0, 1);
},
task1: function() {
this.unschedule(this.task1);
this.label.textKey = "cases/05_scripting/04_scheduler/recursiveScheduler.fire.1";
this.schedule(this.task2, 1, 0, 1);
},
task2: function() {
this.label.textKey = "cases/05_scripting/04_scheduler/recursiveScheduler.fire.2";
}
});
cc._RF.pop();
}, {
LabelLocalized: "LabelLocalized"
} ],
rotatetest: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "1483bYge1xKMZsPxGtmoqbR", "rotatetest");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mx = !0;
t.my = !0;
t.mz = !0;
t.speed = 1;
t.tempAngle = new cc.Vec3();
return t;
}
t.prototype.start = function() {
Math.random() > .5 && (this.speed *= -1);
cc.Vec3.copy(this.tempAngle, this.node.eulerAngles);
};
t.prototype.update = function() {
var e = this.tempAngle;
this.mx && (e.x += this.speed);
this.my && (e.y += this.speed);
this.mz && (e.z += this.speed);
Math.abs(e.x - 90) < .001 && (e.x = 0);
Math.abs(e.y - 90) < .001 && (e.y = 0);
Math.abs(e.z - 90) < .001 && (e.z = 0);
this.node.eulerAngles = e;
};
o([ r ], t.prototype, "mx", void 0);
o([ r ], t.prototype, "my", void 0);
o([ r ], t.prototype, "mz", void 0);
o([ r ], t.prototype, "speed", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
rotate: [ function(e, t) {
"use strict";
cc._RF.push(t, "b8182lpDXBKXKHB4KDgd7AY", "rotate");
cc.Class({
extends: cc.Component,
update: function() {
this.node.eulerAngles = cc.v3(0, Date.now() / 10, 0);
}
});
cc._RF.pop();
}, {} ],
scale: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "a8f60b0mmhIS4jYmUffQjsT", "scale");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mx = !0;
t.my = !0;
t.mz = !0;
t.speed = .001;
t.originScale = new cc.Vec3(1, 1, 1);
t.tempScale = new cc.Vec3(1, 1, 1);
return t;
}
t.prototype.start = function() {
this.originScale.x = this.node.scaleX;
this.originScale.y = this.node.scaleY;
this.originScale.z = this.node.scaleZ;
cc.Vec3.copy(this.tempScale, this.originScale);
};
t.prototype.update = function() {
var e = this.tempScale;
this.mx && (e.x += this.speed);
this.my && (e.y += this.speed);
this.mz && (e.z += this.speed);
(e.x - this.originScale.x > 200 || e.x - this.originScale.x < 0 || e.y - this.originScale.y > 200 || e.y - this.originScale.y < 0 || e.z - this.originScale.z > 200 || e.z - this.originScale.z < 0) && (this.speed *= -1);
this.node.scaleX = e.x;
this.node.scaleY = e.y;
this.node.scaleZ = e.z;
};
o([ r ], t.prototype, "mx", void 0);
o([ r ], t.prototype, "my", void 0);
o([ r ], t.prototype, "mz", void 0);
o([ r ], t.prototype, "speed", void 0);
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
scheduleCallbacks: [ function(e, t) {
"use strict";
cc._RF.push(t, "930deImxoZIkp6ugjMU5ULW", "scheduleCallbacks");
cc.Class({
extends: cc.Component,
properties: {
time: {
default: 5
},
counter: cc.Label
},
_callback: function() {
this.node.stopAllActions();
this.node.runAction(this.seq);
this.repeat ? this.counting = !0 : this.counting = !1;
this.time = 5;
this.counter.string = this.time.toFixed(2) + " s";
},
onLoad: function() {
var e = cc.scaleTo(.2, 1, .6), t = cc.scaleTo(.2, 1, 1.2), i = cc.scaleTo(.1, 1, 1), s = cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeCubicActionOut()), n = cc.moveBy(1, cc.v2(0, -100)).easing(cc.easeCubicActionIn());
this.seq = cc.sequence(e, t, s, i, n, e, i);
this.counter.string = this.time.toFixed(2) + " s";
this.counting = !1;
this.repeat = !1;
},
update: function(e) {
if (this.counting) {
this.time -= e;
this.counter.string = this.time.toFixed(2) + " s";
}
},
stopCounting: function() {
this.unscheduleAllCallbacks();
this.counting = !1;
this.time = 5;
this.counter.string = this.time.toFixed(2) + " s";
},
repeatSchedule: function() {
this.stopCounting();
this.schedule(this._callback, 5);
this.repeat = !0;
this.counting = !0;
},
oneSchedule: function() {
this.stopCounting();
this.scheduleOnce(this._callback, 5);
this.repeat = !1;
this.counting = !0;
},
cancelSchedules: function() {
this.repeat = !1;
this.stopCounting();
}
});
cc._RF.pop();
}, {} ],
"screen-to-world-point": [ function(e, t) {
"use strict";
cc._RF.push(t, "ca9ec5p7O9EHYbE772Zf4dj", "screen-to-world-point");
cc.Color.WHITE;
cc.Class({
extends: cc.Component,
properties: {
box: cc.Node,
distanceLabel: cc.Label
},
start: function() {
var e = cc.find("Canvas");
e.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.distance = .5;
},
onTouchStart: function(e) {
this.moveBox(e.touch.getLocation());
},
onTouchMove: function(e) {
this.moveBox(e.touch.getLocation());
},
moveBox: function(e) {
var t = cc.Camera.findCamera(this.box).getScreenToWorldPoint(cc.v3(e.x, e.y, this.distance));
this.box.position = this.box.parent.convertToNodeSpaceAR(t);
},
distanceChanged: function(e) {
this.distance = parseFloat(e.progress.toFixed(2));
this.distanceLabel.string = "distance : " + this.distance;
}
});
cc._RF.pop();
}, {} ],
"sine-waves": [ function(e, t) {
"use strict";
cc._RF.push(t, "65147r484dHPoeDmtu3n5DT", "sine-waves");
Math.PI;
var i = 2 * Math.PI, s = Math.PI / 2, n = {
linear: function(e, t) {
return t;
},
sinein: function(e, t) {
return t * (Math.sin(e * Math.PI - s) + 1) * .5;
},
sineout: function(e, t) {
return t * (Math.sin(e * Math.PI + s) + 1) * .5;
},
sineinout: function(e, t) {
return t * (Math.sin(e * i - s) + 1) * .5;
}
}, o = {};
for (var a in n) o[a] = -1;
n.Enum = cc.Enum(o);
var c = {
sine: function(e) {
return Math.sin(e);
},
sign: function(e) {
return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1;
},
square: function(e) {
return c.sign(Math.sin(e * i));
},
sawtooth: function(e) {
return 2 * (e - Math.floor(e + .5));
},
triangle: function(e) {
return Math.abs(c.sawtooth(e));
}
}, r = {};
for (var l in c) r[l] = -1;
c.Enum = cc.Enum(r);
var u = cc.Class({
name: "Wave",
properties: {
timeModifier: 1,
amplitude: 50,
wavelength: 50,
segmentLength: 10,
lineWidth: 1,
waveType: {
default: c.Enum.sine,
type: c.Enum
},
easeType: {
default: n.Enum.sinein,
type: n.Enum
},
strokeColor: cc.color(255, 255, 255, 100)
}
}), d = cc.Class({
extends: cc.Component,
properties: {
speed: 1,
waves: {
default: function() {
return [ new u() ];
},
type: [ u ]
}
},
onLoad: function() {
this.time = 0;
this.ctx = this.getComponent(cc.Graphics);
this.ctx.lineCap = cc.Graphics.LineCap.BUTT;
this.ctx.lineJoin = cc.Graphics.LineJoin.ROUND;
for (var e = this.waves, t = 0, i = e.length; t < i; t++) {
e[t].waveFn = c[c.Enum[e[t].waveType]].bind(c);
e[t].easeFn = n[n.Enum[e[t].easeType]].bind(n);
}
},
update: function(e) {
this.ctx.clear();
this.yAxis = cc.visibleRect.height / 2;
this.width = cc.visibleRect.width;
this.waveWidth = .95 * this.width;
this.waveLeft = .25 * this.width;
this.time += e;
for (var t = this.waves, i = 0, s = t.length; i < s; i++) {
var n = this.waves[i].timeModifier || 1;
this.drawWave(this.time * n, t[i]);
}
},
drawWave: function(e, t) {
this.ctx.lineWidth = t.lineWidth;
this.ctx.strokeColor = t.strokeColor;
this.ctx.moveTo(0, this.yAxis);
this.ctx.lineTo(this.waveLeft, this.yAxis);
for (var i = 0; i < this.waveWidth; i += t.segmentLength) {
var s = this.getPoint(e, i, t);
this.ctx.lineTo(s.x, s.y);
}
this.ctx.lineTo(this.width, this.yAxis);
this.ctx.stroke();
},
getPoint: function(e, t, i) {
var s = e * this.speed + (-this.yAxis + t) / i.wavelength, n = i.waveFn(s), o = i.easeFn(t / this.waveWidth, i.amplitude);
return {
x: s = t + this.waveLeft,
y: n = o * n + this.yAxis
};
}
});
t.exports = d;
cc._RF.pop();
}, {} ],
stayOnBottomCtrl: [ function(e, t) {
"use strict";
cc._RF.push(t, "fd033SfPFpNVpqiToS/UUHg", "stayOnBottomCtrl");
cc.macro.ENABLE_TRANSPARENT_CANVAS = !0;
function i(e, t) {
return Math.random() * (t - e + 1) + e;
}
var s = [ "这个是一个范例，该范例是让用户知道如何把 UI 渲染到 VideoPlayer 上", "UI 渲染到 VideoPlayer 上只需三个步骤：1。创建代码开启 cc.macro.ENABLE_TRANSPARENT_CANVAS 2。设置摄像机的背景颜色的透明度为零 3。勾选 VideoPlayer 组件上的 stayOnBottom 属性 -- 就 OK 了", "UI 居然可以显示在 VidePlayer 上面了，👍👍👍👍👍", "哇，可以做弹幕功能了... 💐💐💐💐💐", "哇，可以做约会游戏了... 💐💐💐💐💐", "注意：该功能只支持 web 平台", "注意：该功能的效果在各个浏览器的限制下不能保持效果一致", "我是打酱油的...", "Cococs Creator 是最棒的，不接收反驳...", "前面的说的对...", "其实我也不知道要说什么，反正只是为了充数用而已" ];
cc.Class({
extends: cc.Component,
properties: {
tempBarrage: cc.Prefab,
videoPlayer: cc.VideoPlayer,
barrageRoot: cc.Node,
tips: cc.Node
},
start: function() {
this.__id = 0;
this._animList = [];
var e = cc.find("Canvas/Play");
this.btnPlay = e.getComponent(cc.Button);
this.btnPlay.interactable = !0;
e = cc.find("Canvas/Pause");
this.btnPause = e.getComponent(cc.Button);
this.btnPause.interactable = !1;
e = cc.find("Canvas/Stop");
this.btnStop = e.getComponent(cc.Button);
this.btnStop.interactable = !1;
},
onCreateBarrage: function() {
var e = this, t = cc.instantiate(this.tempBarrage);
++this.__id;
t.___id = this.__id;
t.y = i(300, -120);
t.parent = this.node;
var n = i(0, 255), o = i(0, 255), a = i(0, 255);
t.color = cc.color(n, o, a);
var c = t.getComponent(cc.Label), r = Math.floor(i(0, s.length - 1));
c.string = s[r];
var l = t.getComponent(cc.Animation);
l.on("stop", function() {
delete e._animList[t.___id];
t.destroy();
});
this._animList[this.__id] = l;
},
onClearBarrages: function() {
this._intervalID && clearInterval(this._intervalID);
for (var e = Object.keys(this._animList), t = 0, i = e.length; t < i; ++t) {
var s = e[t];
this._animList[s].node.destroy();
}
this._animList.length = 0;
},
onOpenBarrages: function() {
var e = this;
this._intervalID = setInterval(function() {
e.onCreateBarrage();
}, 1e3);
this.onPlayAnim();
},
onCloseBarrages: function() {
this._intervalID && clearInterval(this._intervalID);
this.onPauseAnim();
},
onPlayAnim: function() {
for (var e = Object.keys(this._animList), t = 0, i = e.length; t < i; ++t) {
var s = e[t], n = this._animList[s];
n.getAnimationState("barrage-animClip").isPaused ? n.resume() : n.play();
}
},
onPauseAnim: function() {
for (var e in this._animList) this._animList[e].pause();
},
play: function() {
this.tips.active = !1;
this.btnPlay.interactable = !1;
this.btnPause.interactable = !0;
this.btnStop.interactable = !0;
this.videoPlayer.play();
this.onOpenBarrages();
},
pause: function() {
this.btnPlay.interactable = !0;
this.btnPause.interactable = !1;
this.btnStop.interactable = !0;
this.videoPlayer.pause();
this.onCloseBarrages();
},
stop: function() {
this.tips.active = !0;
this.btnPlay.interactable = !0;
this.btnPause.interactable = !1;
this.btnStop.interactable = !1;
this.videoPlayer.stop();
this.onClearBarrages();
}
});
cc._RF.pop();
}, {} ],
textureRenderUtils: [ function(e, t) {
"use strict";
cc._RF.push(t, "a886773x+pEaJGtwGtEiE9q", "textureRenderUtils");
cc.Class({
extends: cc.Component,
properties: {
camera: cc.Camera,
label: cc.Label,
_canvas: null
},
init: function() {
this.label.string = "";
var e = new cc.RenderTexture();
e.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8);
this.camera.targetTexture = e;
this.texture = e;
},
createImg: function() {
var e = this._canvas.toDataURL("image/png"), t = document.createElement("img");
t.src = e;
return t;
},
createCanvas: function() {
var e = this.texture.width, t = this.texture.height;
if (this._canvas) this.clearCanvas(); else {
this._canvas = document.createElement("canvas");
this._canvas.width = e;
this._canvas.height = t;
}
var i = this._canvas.getContext("2d");
this.camera.render();
for (var s = this.texture.readPixels(), n = 4 * e, o = 0; o < t; o++) {
for (var a = t - 1 - o, c = i.createImageData(e, 1), r = a * e * 4, l = 0; l < n; l++) c.data[l] = s[r + l];
i.putImageData(c, 0, o);
}
return this._canvas;
},
showImage: function(e) {
var t = this, i = new cc.Texture2D();
i.initWithElement(e);
var s = new cc.SpriteFrame();
s.setTexture(i);
var n = new cc.Node();
n.addComponent(cc.Sprite).spriteFrame = s;
n.zIndex = cc.macro.MAX_ZINDEX;
n.parent = cc.director.getScene();
var o = cc.winSize.width, a = cc.winSize.height;
n.x = o / 2;
n.y = a / 2;
n.on(cc.Node.EventType.TOUCH_START, function() {
n.parent = null;
t.label.string = "";
n.destroy();
});
this.captureAction(n, o, a);
},
captureAction: function(e, t, i) {
var s = cc.scaleTo(1, .3), n = cc.v2(t - t / 6, i / 4), o = cc.moveTo(1, n), a = cc.spawn(s, o);
e.runAction(a);
var c = cc.blink(.1, 1);
this.node.runAction(c);
},
clearCanvas: function() {
this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height);
}
});
cc._RF.pop();
}, {} ],
"trigger-testing": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c094fuCuPBLNLvV8sYgZ74l", "trigger-testing");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.triggertesting = void 0;
var a = cc._decorator, c = a.ccclass, r = a.property, l = function(e) {
n(t, e);
function t() {
var t = e.call(this) || this;
t._prev = [];
t.colliderMaterial = null;
t.unColliderMaterial = null;
t._colliderCount = 0;
t._enterType = "collision-enter";
t._stayType = "collision-stay";
t._exitType = "collision-exit";
t.isTrigger = !1;
t.id = i._idCounter++;
return t;
}
i = t;
t.prototype.start = function() {
if (this.isTrigger) {
this._enterType = "trigger-enter";
this._stayType = "trigger-stay";
this._exitType = "trigger-exit";
}
var e = this.getComponent(cc.Collider3D);
if (e) {
e.on(this._enterType, this.onTrigger, this);
e.on(this._stayType, this.onTrigger, this);
e.on(this._exitType, this.onTrigger, this);
}
};
t.prototype.onTrigger = function(e) {
if (e.type == this._enterType) this._colliderCount++; else if (e.type == this._stayType) {
if (this._prev[e.otherCollider._id]) return;
this._prev[e.otherCollider._id] = !0;
} else if (e.type == this._exitType) {
this._prev[e.otherCollider._id] = !1;
this._colliderCount--;
}
var t = this.node.getComponent(cc.MeshRenderer);
if (this._colliderCount > 0) {
t.setMaterial(0, this.colliderMaterial);
t.markForRender(!0);
} else {
t.setMaterial(0, this.unColliderMaterial);
t.markForRender(!0);
}
};
var i;
t._idCounter = 0;
o([ r({
type: cc.Material
}) ], t.prototype, "colliderMaterial", void 0);
o([ r({
type: cc.Material
}) ], t.prototype, "unColliderMaterial", void 0);
o([ r ], t.prototype, "isTrigger", void 0);
return i = o([ c ], t);
}(cc.Component);
i.triggertesting = l;
cc._RF.pop();
}, {} ],
"tween-demo": [ function(e, t) {
"use strict";
cc._RF.push(t, "1ad8dW61zxGsrp51I5maibs", "tween-demo");
var i = cc.tween;
cc.Class({
extends: cc.Component,
properties: {
nodes: [ cc.Node ]
},
start: function() {
for (var e = this.nodes, t = 0; t < e.length; t++) {
var s = e[t];
i(s).delay(.5 + .2 * t).repeat(1e3, i().set({
opacity: 0,
scale: 10,
x: 0,
rotation: 0
}).parallel(i().to(1, {
opacity: 255,
scale: 1
}, {
easing: "quintInOut"
}), i().to(2.5, {
x: s.x
}, {
easing: "backOut"
})).delay(.5).to(.8, {
rotation: 360
}, {
easing: "cubicInOut"
}).delay(1).to(.3, {
opacity: 0,
scale: 3
}, {
easing: "quintIn"
}).delay(1)).start();
}
}
});
cc._RF.pop();
}, {} ],
use_reversed_rotateBy: [ function(e, t) {
"use strict";
cc._RF.push(t, "044f7WaJ39MCa3IgkcqHzgT", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ],
velocity: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "aba27g6ntRDMpLd693yFPdQ", "velocity");
var s, n = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
s(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, s) {
var n, o = arguments.length, a = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, s); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, r = (a.property, new cc.Vec3()), l = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {};
t.prototype.rotate = function() {
var e = this.node.getComponent(cc.RigidBody3D);
if (e) {
e.isSleeping && e.wakeUp();
r.x = 0;
r.y = 10;
r.z = 0;
e.setAngularVelocity(r);
}
};
t.prototype.jump = function() {
var e = this.node.getComponent(cc.RigidBody3D);
if (e) {
e.isSleeping && e.wakeUp();
r.x = 0;
r.y = 10;
r.z = 0;
e.setLinearVelocity(r);
}
};
return o([ c ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
zh: [ function(e, t) {
"use strict";
cc._RF.push(t, "87f1fs0gohHDIfNg4aePXbt", "zh");
t.exports = {
example_case_tips_content: "该测试用例不支持当前平台",
example_case_nonsupport_native_desktop_tips: "该测试用例不支持 Mac 平台和 Windows 平台",
example_case_nonsupport_runtime_tips: "该测试用例不支持 Runtime 平台",
example_case_nonsupport_mobile_tips: "该测试用例不支持移动平台",
example_case_nonsupport_web_canvas_tips: "该测试用例不支持 Canvas 模式",
example_case_nonsupport_wechat_game_tips: "该测试用例不支持 wechatGame 平台",
example_case_support_webGl_tips: "该测试用例只支持 WebGL 模式",
example_case_support_mobile_tips: "该测试用例只支持移动平台",
example_case_support_mobile_android_tips: "该测试用例只支持 Android 移动平台",
example_case_support_native_chrome_tips: "该测试用例只支持 PC 平台上的 Chrome 浏览器",
example_case_support_native_desktop_tips: "该测试用例只支持 Mac 平台和 Windows 平台",
example_case_support_wechat_game_tips: "该测试用例支持 wechatGame 平台",
example_case_nonsupport_qqplay_tips: "该测试用例不支持 QQplay 平台",
example_case_nonsupport_Wechatgame_tips: "该测试用例不支持 Wechatgame 平台",
"cases/01_graphics/01_sprite/AtlasSprite.fire.7": "这个精灵来自单张图片",
"cases/01_graphics/01_sprite/AtlasSprite.fire.11": "这个精灵来自图集",
"cases/01_graphics/01_sprite/FilledSprite.fire.9": "填充类型：水平",
"cases/01_graphics/01_sprite/FilledSprite.fire.15": "填充类型：垂直",
"cases/01_graphics/01_sprite/FilledSprite.fire.23": "填充类型：圆形",
"cases/01_graphics/01_sprite/SimpleSprite.fire.7": "这是普通精灵",
"cases/01_graphics/01_sprite/SlicedSprite.fire.7": "这是九宫格精灵",
"cases/01_graphics/01_sprite/TiledSprite.fire.6": "这是平铺精灵",
"cases/01_graphics/01_sprite/ChangeColor.fire.1": "改变颜色 Draw Call 的值不发生改变",
"cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "自动剪裁 ",
"cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "未自动剪裁",
"cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": '粒子 1\n"完成时自动移除" 禁止',
"cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": '粒子 2\n"完成时自动移除" 开启',
"cases/01_graphics/02_particle/ToggleParticle.fire.6": '按 "按钮" 进行开关粒子播放',
"cases/02_ui/01_widget/AdvancedWidget.fire.7": "左上",
"cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.14": "上",
"cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
"cases/02_ui/01_widget/AdvancedWidget.fire.21": "右上",
"cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.28": "左",
"cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
"cases/02_ui/01_widget/AdvancedWidget.fire.35": "右",
"cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
"cases/02_ui/01_widget/AdvancedWidget.fire.42": "左下",
"cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.49": "下",
"cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
"cases/02_ui/01_widget/AdvancedWidget.fire.56": "右下",
"cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
"cases/02_ui/01_widget/AdvancedWidget.fire.63": "高级挂件",
"cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne 为 false 时，会一直保持对齐",
"cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne 为 true 时，只在 Widget 生效时对齐一次",
"cases/02_ui/01_widget/AnimatedWidget.fire.9": "动画挂件。",
"cases/02_ui/01_widget/WidgetAlign.fire.18": "挂件对齐方式。",
"cases/02_ui/01_widget/AutoResize.fire.13": "挂件自动调整大小。",
"cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
"cases/02_ui/02_label/AlignFontLabel.fire.6": "文本对齐",
"cases/02_ui/02_label/AlignFontLabel.fire.9": "水平对齐",
"cases/02_ui/02_label/AlignFontLabel.fire.14": "哈啰！\n欢迎使用 \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.16": "对齐: 靠左",
"cases/02_ui/02_label/AlignFontLabel.fire.21": "哈啰！\n欢迎使用 \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.23": "对齐: 居中",
"cases/02_ui/02_label/AlignFontLabel.fire.28": "哈啰！\n欢迎使用 \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.30": "对齐: 靠右",
"cases/02_ui/02_label/AlignFontLabel.fire.33": "垂直对齐",
"cases/02_ui/02_label/AlignFontLabel.fire.38": "欢迎使用 \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.40": "对齐: 顶部",
"cases/02_ui/02_label/AlignFontLabel.fire.45": "欢迎使用 \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.47": "对齐: 居中",
"cases/02_ui/02_label/AlignFontLabel.fire.52": "欢迎使用 \nCocos Creator",
"cases/02_ui/02_label/AlignFontLabel.fire.54": "对齐: 底部",
"cases/02_ui/02_label/SystemFontLabel.fire.6": "系统字体",
"cases/02_ui/02_label/SystemFontLabel.fire.9": "换行",
"cases/02_ui/02_label/SystemFontLabel.fire.14": "这是系统默认字体",
"cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
"cases/02_ui/02_label/SystemFontLabel.fire.21": "这是系统默认字体",
"cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
"cases/02_ui/02_label/SystemFontLabel.fire.26": "不换行",
"cases/02_ui/02_label/SystemFontLabel.fire.31": "这是系统默认字体",
"cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
"cases/02_ui/02_label/SystemFontLabel.fire.38": "这是系统默认字体",
"cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
"cases/02_ui/02_label/SystemFontLabel.fire.45": "哈喽! 欢迎使用 Cocos Creator",
"cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
"cases/02_ui/03_button/ButtonInScroll.js.1": "顶部按钮被点击！",
"cases/02_ui/03_button/ButtonInScroll.js.2": "底部按钮被点击！",
"cases/02_ui/03_button/ButtonInScroll.fire.21": "哪个按钮被点击？",
"cases/02_ui/03_button/ButtonInScroll.fire.27": "拖动显示更多按钮",
"cases/02_ui/03_button/SimpleButton.js.1": "左边的按钮被点击！",
"cases/02_ui/03_button/SimpleButton.js.2": "右边的按钮被点击！",
"cases/02_ui/03_button/ButtonInteractable.fire.7": "播放",
"cases/02_ui/03_button/ButtonInteractable.fire.16": "停止",
"cases/02_ui/03_button/ButtonInteractable.fire.21": "交互(interactable): true",
"cases/02_ui/03_button/ButtonInteractable.fire.23": "交互(interactable): false",
"cases/02_ui/03_button/ButtonInteractable.js.1": "交互(interactable): ",
"cases/02_ui/03_button/ButtonInteractable.js.2": "交互(interactable): ",
"cases/02_ui/03_button/ButtonSizeMode.fire": "不同的按钮的响应区域",
"cases/02_ui/03_button/SimpleButton.fire.6": "哪个按钮被点击？",
"cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
"cases/02_ui/04_progressbar/progressbar.fire.7": "水平进度条，进度 0.3",
"cases/02_ui/04_progressbar/progressbar.fire.11": "反向水平进度条，进度 1.0",
"cases/02_ui/04_progressbar/progressbar.fire.15": "垂直进度条 \n从下向上",
"cases/02_ui/04_progressbar/progressbar.fire.19": "垂直进度条 \n从上向下",
"cases/02_ui/04_progressbar/progressbar.fire.23": "设置了精灵的进度条",
"cases/02_ui/04_progressbar/progressbar.fire.28": "设置了精灵（子控件）的进度条",
"cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
"cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview 完整功能",
"cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview 没有惯性",
"cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview 没有弹性",
"cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview 只能水平滚动",
"cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview 只能垂直滚动",
"cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview 没有滚动条",
"cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView 和垂直布局容器",
"cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView 和水平布局容器",
"cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView 和横向网格布局容器 ",
"cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView 和纵向网格布局容器 ",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "水平布局容器",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "垂直布局容器",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "横向网格布局容器",
"cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "纵向网格布局容器",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "基本",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "水平",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "垂直",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "横向网格布局容器",
"cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "纵向网格布局容器",
"cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
"cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
"cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
"cases/02_ui/07_editBox/editbox.js.1": "输入文本: ",
"cases/02_ui/06_layout/LayoutNone.fire.6": "基本布局容器, 类型: None\n自动调整大小",
"cases/02_ui/06_layout/LayoutNone.fire.35": "水平布局容器，类型: None\n不自动调整大小",
"cases/02_ui/06_layout/LayoutNone.fire.60": "垂直布局容器，类型: None\n不自动调整大小",
"cases/02_ui/06_layout/LayoutNone.fire.77": "横向网格布局容器，类型: None\n不自动调整大小",
"cases/02_ui/06_layout/LayoutNone.fire.142": "纵向网格布局容器，类型: None\n不自动调整大小",
"cases/02_ui/07_editBox/EditBox.fire.25": "单行密码框:",
"cases/02_ui/07_editBox/EditBox.fire.27": "单行文本框:",
"cases/02_ui/07_editBox/EditBox.fire.29": "多行文本框:",
"cases/02_ui/07_editBox/EditBox.fire.32": "点击",
"cases/02_ui/07_editBox/EditBox.fire.38": "按钮必须在 EditBox 的上面, \n并且它应该允许点击.",
"cases/02_ui/09_videoplayer/fullscreenVideo.fire": "当您触摸屏幕时，将播放视频。\n 视频完成后，它将被删除。",
"cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen": "当前设备不支持全屏播放",
"cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "按 'A' 或 'D' 键控制小绵羊",
"cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
"cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "请触摸任意位置试试",
"cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "用你的手指放缩图片！",
"cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1": "开启 重力感应",
"cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2": "关闭 重力感应",
"cases/03_gameplay/02_actions/SimpleAction.fire.13": "简单的动作",
"cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
"cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "自定义动画属性",
"cases/03_gameplay/03_animation/AnimationEvent.js.1": "开始第",
"cases/03_gameplay/03_animation/AnimationEvent.fire.6": "开始第1个动画",
"cases/03_gameplay/03_animation/AnimationEvent.fire.14": "动画事件",
"cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
"cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
"cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
"cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
"cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
"cases/03_gameplay/03_animation/MoveAnimation.fire.41": "这是一个移动动画。",
"cases/03_gameplay/03_animation/CurveAnimation.fire.42": "这是一个曲线动画。",
"cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "这是精灵帧动画",
"cases/03_gameplay/03_animation/CreateClip.fire.1": "动态创建动画剪辑",
"cases/04_audio/SimpleAudio.fire.6": "享受音乐!",
"cases/05_scripting/01_properties/NodeArray.fire.14": "这是节点数组",
"cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
"cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
"cases/05_scripting/01_properties/NonSerialized.fire.10": "这是非序列化",
"cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
"cases/05_scripting/01_properties/ReferenceType.fire.11": "这个例子不包括运行时演示",
"cases/05_scripting/01_properties/ValueType.fire.6": "这个例子不包括运行时演示",
"cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "实例化预制资源",
"cases/05_scripting/03_events/EventInMask.fire.23": "更改节点排序",
"cases/05_scripting/03_events/SimpleEvent.fire.19": "触摸事件可以支持点击",
"cases/05_scripting/03_events/SimpleEvent.fire.21": "鼠标事件可以支持单击、悬停、滚轮",
"cases/05_scripting/03_events/SimpleEvent.fire.23": "自定义事件可以手动触发\n(点击上面的按钮)",
"cases/05_scripting/03_events/SimpleEvent.fire.25": "基本事件",
"cases/05_scripting/03_events/TouchPropagation.fire.15": "触摸事件冒泡",
"cases/05_scripting/03_events/MousePropagation.fire.1": "鼠标事件冒泡",
"cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
"cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
"cases/05_scripting/04_scheduler/scheduler.fire.12": "重复定时器",
"cases/05_scripting/04_scheduler/scheduler.fire.18": "取消定时器",
"cases/05_scripting/04_scheduler/scheduler.fire.24": "定时执行1次",
"cases/05_scripting/04_scheduler/scheduler.fire.29": "使用 update 函数每帧更新计数",
"cases/05_scripting/04_scheduler/scheduler.fire.31": "定时器",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.0": "点击按钮开始执行递归任务，你最终应该看到'任务2执行完成'",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.1": "任务 1 执行完成",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.2": "任务 2 执行完成",
"cases/05_scripting/04_scheduler/recursiveScheduler.fire.3": "开始任务",
"cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
"cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
"cases/05_scripting/05_cross_reference/CrossReference.fire.14": "交叉引用",
"cases/05_scripting/06_life_cycle/life_cycle.fire.6": "生命周期",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "资源加载",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "加载 SpriteFrame",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "加载 Texture",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "加载 Audio",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "加载 Txt",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "加载 Font",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "加载 Plist",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "加载 Prefab",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "加载 Scene",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "加载 Animation",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "加载 Spine",
"cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "当前尚无加载。",
"cases/05_scripting/07_asset_loading/AssetLoading.js.1": "已加载 ",
"cases/05_scripting/07_asset_loading/AssetLoading.js.2": "播放 ",
"cases/05_scripting/07_asset_loading/AssetLoading.js.3": "创建 ",
"cases/05_scripting/07_asset_loading/AssetLoading.js.4": "播放音乐。",
"cases/05_scripting/07_asset_loading/AssetLoading.js.5": "这是字体！",
"cases/05_scripting/07_asset_loading/LoadRes.fire.7": "按类型",
"cases/05_scripting/07_asset_loading/LoadRes.fire.10": "加载 SpriteFrame",
"cases/05_scripting/07_asset_loading/LoadRes.fire.17": "按 Url",
"cases/05_scripting/07_asset_loading/LoadRes.fire.20": "加载预制资源",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "这个例子不包括运行时演示",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "全部加载",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "加载全部的SpriteFrame",
"cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "清空",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.1": "预加载资源",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.2": "预加载 SpriteFrame",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.3": "预加载 Texture",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.4": "预加载 Audio",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.5": "预加载 Txt",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.6": "预加载 Font",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.7": "预加载 Plist",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.8": "预加载 Prefab",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.9": "预加载 Scene",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.10": "预加载 Animation",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.11": "预加载 Spine",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.12": "当前尚无预加载",
"cases/05_scripting/07_asset_loading/PreloadAssets.fire.13": "预加载文件夹",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.1": "已加载 ",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.2": "播放 ",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.3": "创建 ",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.4": "播放音乐。",
"cases/05_scripting/07_asset_loading/PreloadAssets.js.5": "这是字体！",
"cases/05_scripting/07_asset_loading/DeferredLoading.fire.1": "延迟加载",
"cases/05_scripting/08_module/load_module.fire.6": "加载模块",
"cases/05_scripting/08_module/load_module.fire.10": "创建怪物",
"cases/05_scripting/09_singleton/Singleton.fire.6": "这例子不包含运行时演示",
"cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "下载完成!!",
"cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "正在下载: ",
"cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3": "点击任意地方进行下载...",
"cases/05_scripting/10_loadingBar/loadingBar.fire.7": "加载完成",
"cases/05_scripting/10_loadingBar/loadingBar.fire.18": "正在下载",
"cases/05_scripting/11_network/NetworkCtrl.js.1": "请稍等...",
"cases/05_scripting/11_network/NetworkCtrl.js.2": "请稍等...",
"cases/05_scripting/11_network/NetworkCtrl.js.3": "请稍等...",
"cases/05_scripting/11_network/NetworkCtrl.js.4": "请稍等...",
"cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\n发送二进制WS已打开.",
"cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\n收到响应.",
"cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\n发送二进制遇到错误.",
"cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\nwebsocket 实例已关闭.",
"cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\n发送二进制WS等待中...",
"cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\n",
"cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\n",
"cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\n",
"cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\n",
"cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\n",
"cases/05_scripting/11_network/network.fire.7": "Label",
"cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
"cases/05_scripting/11_network/network.fire.11": "Label",
"cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
"cases/05_scripting/11_network/network.fire.15": "Label",
"cases/05_scripting/11_network/network.fire.14": "WebSocket",
"cases/05_scripting/11_network/network.fire.19": "Label",
"cases/05_scripting/11_network/network.fire.18": "SocketIO",
"cases/05_scripting/11_network/download-web.fire.1.1": "远程音频资源下载",
"cases/05_scripting/11_network/download-web.fire.1.2": "远程图片资源下载",
"cases/05_scripting/11_network/download-web.fire.2": "等待下载中...",
"cases/05_scripting/11_network/download-web.fire.3": "下载进度：",
"cases/05_scripting/11_network/download-web.fire.4.1": "远程音频资源下载完成",
"cases/05_scripting/11_network/download-web.fire.4.2": "远程图片资源下载完成",
"cases/05_scripting/11_network/download-web.fire.5.1": "远程音频资源下载失败",
"cases/05_scripting/11_network/download-web.fire.5.2": "远程图片资源下载失败",
"cases/05_scripting/11_network/download-web.fire.6": "资源地址：",
"cases/05_scripting/11_network/download-web.fire.7": "下载",
"cases/05_scripting/11_network/download-web.fire.8": "滑动到下一页",
"cases/05_scripting/11_network/download-web.fire.9": "滑动到上一页",
"cases/05_scripting/11_network/download-web.fire.10": "加载地址无效",
"cases/native_call/native_call.fire.1": "点击按钮调用静态方法！",
"cases/native_call/native_call.fire.2": "点击",
"cases/collider/Category.fire.3": "组: 碰撞",
"cases/collider/Category.fire.5": "组: 碰撞",
"cases/collider/Category.fire.7": "组: 碰撞",
"cases/collider/Category.fire.9": "组: 默认",
"cases/collider/Shape.fire.20": "显示多边形",
"cases/collider/Shape.fire.27": "显示圆",
"cases/collider/Shape.fire.34": "显示盒子",
"cases/collider/Shape.fire.43": "显示多边形",
"cases/collider/Shape.fire.50": "显示圆",
"cases/collider/Shape.fire.57": "显示盒子",
"cases/motionStreak/MotionStreak.fire.1": "改变拖尾",
"cases/spine/SpineBoy.fire.11": "调试插槽",
"cases/spine/SpineBoy.fire.18": "调试关节",
"cases/spine/SpineBoy.fire.25": "时间缩放",
"cases/spine/SpineBoy.fire.36": "停止",
"cases/spine/SpineBoy.fire.43": "走",
"cases/spine/SpineBoy.fire.50": "跑",
"cases/spine/SpineBoy.fire.58": "跳",
"cases/spine/SpineBoy.fire.65": "射击",
"cases/tiledmap/Puzzle.fire.18": "你赢了",
"cases/tiledmap/Puzzle.fire.21": "重新开始",
"cases/tiledmap/Dynamic-Tiledmap.fire.22": "动态创建 TiledMap",
"res/prefabs/ListItem.prefab.2": "Label ssss",
"res/prefabs/Monster.prefab.3": "名字:",
"res/prefabs/Monster.prefab.11": "等级 :",
"res/prefabs/Monster.prefab.19": "血量 :",
"res/prefabs/Monster.prefab.27": "攻击 :",
"res/prefabs/Monster.prefab.35": "防御 :",
"res/prefabs/loadItem.prefab.1": "Label",
"resources/test_assets/prefab.prefab.2": "这是一个预制",
"resources/test_assets/scene.fire.3": "返回资源加载场景",
"resources/test_assets/scene.fire.6": "返回",
"resources/test_assets/preloadscene.fire.3": "返回预加载场景",
"scripts/Global/Menu.js.1": "说明暂缺",
"cases/AssetBundle.1": "资源分包",
"cases/AssetBundle.2": "加载 Asset Bundle",
"cases/AssetBundle.3": "加载 Audio",
"cases/AssetBundle.4": "加载 Texture",
"cases/AssetBundle.5": "加载 Scene",
"cases/AssetBundle.6": "释放分包资源",
"cases/AssetBundle.7": "销毁分包",
"cases/AssetBundle.8": "进入分包场景",
"cases/AssetBundle.9": "操作失败，请先加载 Asset Bundle",
"cases/AssetBundle.10": "返回加载分包场景",
"cases/AssetBundle.11": "当前尚无加载",
"cases/AssetBundle.12": "已加载 ",
"cases/AssetBundle.13": "播放 ",
"cases/AssetBundle.14": "创建 ",
"cases/AssetBundle.15": "播放音乐",
"cases/AssetBundle.16": "资源已被释放",
"cases/AssetBundle.17": "分包已被销毁",
"scripts/AudioCtrl_Play": "播放",
"scripts/AUdioCtrl_Stop": "停止",
"scripts/AUdioCtrl_Pause": "暂停",
"scripts/AUdioCtrl_Resume": "恢复",
"scripts/AUdioCtrl_StopAll": "停止所有",
"scripts/AUdioCtrl_PauseAll": "暂停所有",
"scripts/AUdioCtrl_ResumeAll": "恢复所有",
sprite_loadRes_asset_success: "资源加载成功",
sprite_loadRes_asset_failed: "资源加载失败",
"cases/particle3d.color": "左一：一种单一颜色\n左二：一种渐变色\n左三：几种单一颜色变化\n左四：两种渐变色\n左五：随机颜色",
"cases/particle3d.force.transform": "平移",
"cases/particle3d.force.rotate": "旋转",
"cases/particle3d.main": "1.左一左二为对比，效果相同\n2.左三左五粒子放大两倍，粒子与粒子的中心间隔放大两倍\n3.左四左六粒子放大两倍，粒子与粒子的中心间隔没变\n4.左七每五秒产生两个粒子，两个粒子产生的时间间隔为0.5秒\n5.左八可在场景编辑器查看效果，每拖动一单位距离产生一个粒子",
"cases/particle3d.renderer": "左一：粒子始终面朝摄像机\n左二：粒子始终保持水平\n左三：粒子始终保持竖直并朝向摄像机方向\n左四：粒子始终保持竖直，朝向摄像机方向，但被拉伸\n左五：粒子为一个模型",
"cases/particle3d.rotation": "粒子按照设定曲线旋转",
"cases/particle3d.shape": "          粒子发射器形状    粒子产生位置\n左一          正方体                 内部\n左二          正方体                 边框\n左三          正方体                 表面\n左四              圆             沿圆内的一圈\n左五              圆             沿圆周循环产生粒子\n                                      循环方向相同\n左六              圆             沿圆周循环产生粒子\n                                      循环方向相反\n左七            圆锥                   内部\n左八            圆锥                锥底的圆\n左九            圆锥                    表面\n左十            圆锥               锥底的圆周\n左十一        圆锥       锥底圆周循环产生粒子\n                                 粒子斜向上移动\n左十二        球体                     内部\n左十三        球体                     表面\n左十四      半球体                    内部\n左十五      半球体                    表面",
"cases/particle3d.size": "粒子大小按照设定曲线变化"
};
cc._RF.pop();
}, {} ]
}, {}, [ "ParticleControl", "LabelAttributes", "LoadLongText", "ButtonTransition", "SimpleButtonCtrl", "ProgressBarCtrl", "Item", "ListViewCtrl", "LayoutResizeContainerCtrl", "EditBoxEvent", "EditboxCtrl", "stayOnBottomCtrl", "VideoPlayerCtrl", "WebviewCtrl", "RichText", "SliderCtrl", "checkbox", "PageViewCtrl", "MaskCtrl", "DeviceMotionCtrl", "SimpleKeyboardMovement", "OnMultiTouchCtrl", "OnTouchCtrl", "MoveAction", "RepeatAction", "RotationCtrl", "SequenceAction", "SimpleAction", "AnimateCustomPropertyCtrl", "AnimationCallback", "AnimationEvent", "CreateClipCtrl", "CurveAnimation", "MoveAnimationCtrl", "SheepAnimationCtrl", "tween-demo", "AudioEngineControl", "AudioSourceControl", "MyCustomComponent", "NodeGroupControl", "ReferenceTypeProperties", "ValueTypeProperties", "MonsterPrefab", "PopulatePrefab", "ActionCallback", "BasicEventCtrl", "CustomEvent", "MouseDragger", "MouseEvent", "OrderSwitcher", "TouchDragger", "TouchEvent", "recursiveTask", "scheduleCallbacks", "DestroySelf", "AssetLoading", "ComeBackToAssetLoad", "DeferredLoading", "LoadRes_example", "loadResDir_example", "BackToPreloadAssets", "PreloadAssets", "InitData", "LoadModuleCtrl", "Monster", "Singleton", "SingletonCtrl", "LoadingBarCtrl", "NetworkCtrl", "DownloaderCtrl", "downloader-audio", "downloader-picture", "NodeGenerator", "PoolHandler", "custom_material", "capture_to_native", "capture_to_web", "capture_to_wechat", "textureRenderUtils", "CameraController", "ShowTips", "TransformController", "3d-model", "3d-support-info", "dynamic-load-material", "mesh-texture", "mesh", "raycast", "rotate", "screen-to-world-point", "born", "enable-physics3d", "enable-rigidbody", "enable-shape", "impulse", "move", "raytest", "rotatetest", "scale", "trigger-testing", "velocity", "asset-bundle", "minimap-with-camera-rect", "minimap-with-rendertexture", "moving-objects", "ColliderListener", "Hittest", "HeroControl", "follow", "ShowCollider", "Bullet", "Shooter", "TagColliderListener", "PlatformMotion", "SimpleMotion", "Wall", "DragonBonesAttach", "DragonBonesCollider", "DragonBonesCtrl", "DragonBonesMode", "ReplaceSlotDisplay", "loadDragonBonesCtrl", "RuntimeLabel", "doodle", "draw-line", "sine-waves", "arc", "ellipse", "lineTo", "linejoin", "rect", "MotionStreakCtrl", "NativeCallCtrl", "LoadSpine", "SpineAttach", "SpineCollider", "SpineCtrl", "SpineMode", "SpineSkin", "VertexEffect", "ObjectGroupImage", "Puzzle", "ShieldNode", "TiledTile", "dynamic-tiledmap", "LabelLocalized", "en", "zh", "i18n", "polyglot", "chroma", "Menu", "ShowSubMenu", "StorageUtil", "use_reversed_rotateBy", "AudioCtrl", "SearchBlock", "AdaptiveSprite", "Helpers", "Instruction", "ListItem", "SceneList", "TipsCtrl", "TipsManager" ]);