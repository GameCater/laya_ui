
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

  // E:/projects/laya3/ui_test/src/Main.ts
  var __decorate = __$decorate("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts");
  var { regClass, property } = Laya;
  var Main = /* @__PURE__ */ __name(class Main2 extends Laya.Script {
    onStart() {
    }
  }, "Main");
  Main = __decorate([
    regClass()
  ], Main);

  // E:/projects/laya3/ui_test/src/MainRT.generated.ts
  var MainRTBase = class extends Laya.Scene {
  };
  __name(MainRTBase, "MainRTBase");

  // E:/projects/laya3/ui_test/src/MainRT.ts
  var __decorate2 = __$decorate("c0f62c61-5b94-4de9-be7b-91abb62a01b0", "../src/MainRT.ts");
  var { regClass: regClass2, property: property2 } = Laya;
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
  MainRT = __decorate2([
    regClass2()
  ], MainRT);
})();
//# sourceMappingURL=bundle.js.map
