
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (let i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(k, v);
    }
}

var _regClass = window._regClass;
var _dummyRegClass = Laya.regClass();
function __$decorate(assetId, codePath) {
    return function(...args) {
        let i = args[0].indexOf(_dummyRegClass);
        if (i != -1) {
            if (_regClass)
                args[0][i] = _regClass(assetId, codePath);
            else
                args[0][i] = function(constructor) { Laya.ClassUtils.regClass(assetId, constructor); };
        }
        return __decorate(...args);
    }
}

(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // E:/projects/laya3/ui_test/src/MainRT.generated.ts
  var MainRTBase = class extends Laya.Scene {
  };
  __name(MainRTBase, "MainRTBase");

  // E:/projects/laya3/ui_test/src/MainRT.ts
  var __decorate = __$decorate("c0f62c61-5b94-4de9-be7b-91abb62a01b0", "../src/MainRT.ts");
  var { regClass, property } = Laya;
  var MainRT = /* @__PURE__ */ __name(class MainRT2 extends MainRTBase {
    onEnable() {
      let data = [
        { title: "space1", color: "", visible: false },
        { title: "btn2", color: "#222", visible: true },
        { title: "btn3", color: "#333", visible: true },
        { title: "btn4", color: "#444", visible: true },
        { title: "btn5", color: "#555", visible: true },
        { title: "space2", color: "", visible: false }
      ];
      this.List.array = data;
      this.List.scrollBar.mouseWheelEnable = false;
      this.List.scrollBar.touchScrollEnable = false;
      this.List.cacheContent = true;
      this.List.renderHandler = Laya.Handler.create(this, (cell, index) => {
        let btn = cell.getChildAt(0);
        btn.label = cell.dataSource.title;
        btn.visible = true;
        if (!cell.dataSource.visible && cell.dataSource.title.startsWith("space")) {
          btn.visible = false;
        }
        btn.on(Laya.Event.CLICK, this, this.onBtnClick1, [btn, index]);
      }, null, false);
    }
    onBtnClick1(btn, index) {
      if (this.lastClickedBtn && btn !== this.lastClickedBtn) {
        Laya.Tween.to(this.lastClickedBtn, { y: 450 }, 200, Laya.Ease.linearIn);
        this.lastClickedBtn.offAll(Laya.Event.CLICK);
      }
      this.lastClickedBtn = btn;
      this.List.scrollTo(index - 1);
      Laya.Tween.to(btn, { y: 0 }, 200, Laya.Ease.linearOut, Laya.Handler.create(this, this.onClick1Completed, [btn]));
    }
    onClick1Completed(btn) {
      btn.off(Laya.Event.CLICK, this, this.onBtnClick2);
      btn.on(Laya.Event.CLICK, this, this.onBtnClick2);
    }
    onBtnClick2(e) {
      console.log("click2" + e.target.label);
    }
  }, "MainRT");
  MainRT = __decorate([
    regClass()
  ], MainRT);

  // E:/projects/laya3/ui_test/src/Scene2RT.generated.ts
  var Scene2RTBase = class extends Laya.Scene {
  };
  __name(Scene2RTBase, "Scene2RTBase");

  // E:/projects/laya3/ui_test/src/Scene2RT.ts
  var __decorate2 = __$decorate("f85c40d7-ff15-42f0-b068-854f7b7c805a", "../src/Scene2RT.ts");
  var { regClass: regClass2, property: property2 } = Laya;
  var Scene2RT = /* @__PURE__ */ __name(class Scene2RT2 extends Scene2RTBase {
    constructor() {
      super(...arguments);
      this.closed = true;
    }
    onAwake() {
      this.Button_toggle.on(Laya.Event.CLICK, this, this.onClick);
    }
    onClick() {
      this.closed = !this.closed;
      if (!this.closed) {
        this.TextArea.visible = true;
        this.TextArea.editable = false;
        Laya.Tween.to(this.TextArea, { width: this.TextArea.parent.width }, 200, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
          this.TextArea.editable = true;
          this.TextArea.prompt = "\u8BF7\u8F93\u5165\u5185\u5BB9\u3002\u3002\u3002";
        }));
      } else {
        this.TextArea.editable = false;
        this.TextArea.prompt = "";
        this.TextArea.changeText("");
        Laya.Tween.to(this.TextArea, { width: 25 }, 200, Laya.Ease.cubicIn, Laya.Handler.create(this, () => {
          this.TextArea.visible = false;
        }));
      }
    }
  }, "Scene2RT");
  Scene2RT = __decorate2([
    regClass2()
  ], Scene2RT);

  // E:/projects/laya3/ui_test/src/Scene3RT.generated.ts
  var Scene3RTBase = class extends Laya.Scene {
  };
  __name(Scene3RTBase, "Scene3RTBase");

  // E:/projects/laya3/ui_test/src/Scene3RT.ts
  var __decorate3 = __$decorate("aa79c441-4d85-4fb5-8958-e2557fbd7b72", "../src/Scene3RT.ts");
  var { regClass: regClass3, property: property3 } = Laya;
  var Scene3RT = /* @__PURE__ */ __name(class Scene3RT2 extends Scene3RTBase {
    constructor() {
      super(...arguments);
      this.cards = [];
      this.moveSpeed = 2;
      this.selectedGroup = 1;
    }
    onAwake() {
      for (let i = 0; i < 8; i++) {
        let card = new Laya.VBox();
        card.width = 320;
        card.height = 600;
        card.pivot(card.width / 2, card.height / 2);
        card.bgColor = "#fff";
        card.visible = false;
        card.pos(this.Box.width >> 1, this.Box.height >> 1);
        let label = new Laya.Label(`card${i}`);
        card.addChild(label);
        label.width = label.parent.width;
        label.height = label.parent.height;
        label.pos(0, 0);
        label.align = "center";
        label.valign = "middle";
        label.fontSize = 100;
        this.Box.addChild(card);
        this.cards.push(card);
      }
      this.space = (this.Box.width - this.cards[0].width * 4) / 3;
      Laya.stage.on(Laya.Event.CLICK, this, this.animate, [this.selectedGroup]);
      this.Button_left.on(Laya.Event.CLICK, this, () => {
        console.log("left button clicked");
        this.selectedGroup = this.selectedGroup - 1 < 1 ? 1 : this.selectedGroup - 1;
        this.hideAllCards();
        this.animate(this.selectedGroup);
      });
      this.Button_right.on(Laya.Event.CLICK, this, () => {
        console.log("right button clicked");
        this.selectedGroup = this.selectedGroup + 1 > Math.floor(this.cards.length / 4) ? Math.floor(this.cards.length / 4) : this.selectedGroup + 1;
        this.hideAllCards();
        this.animate(this.selectedGroup);
      });
    }
    hideAllCards() {
      this.cards.forEach((c) => {
        c.visible = false;
        c.pos(this.Box.width >> 1, this.Box.height >> 1);
      });
    }
    animate(group) {
      let start = (group - 1) * 4;
      for (let i = start, j = 0; i < start + 4; i++, j++) {
        let card = this.cards[i];
        card.visible = true;
        let duration = card.x / this.moveSpeed;
        Laya.Tween.to(card, { x: (card.width + this.space) * j + card.width / 2 }, duration, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
          if (j === 3) {
            Laya.Tween.to(this.HBox_btnList, { alpha: 1 }, 500, Laya.Ease.circIn);
            this.HBox_btnList.visible = true;
          }
        }));
        Laya.stage.offAll(Laya.Event.CLICK);
      }
    }
  }, "Scene3RT");
  Scene3RT = __decorate3([
    regClass3()
  ], Scene3RT);
})();
//# sourceMappingURL=bundle.js.map
