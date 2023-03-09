
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

  // E:/projects/laya3/ui_test/src/FlipCard.ts
  var __decorate = __$decorate("62596c95-8da3-4c2b-aaa1-e86b72841f41", "../src/FlipCard.ts");
  var _a;
  var _b;
  var { regClass, property } = Laya;
  var FlipCard = /* @__PURE__ */ __name(class FlipCard2 extends Laya.Script {
    constructor() {
      super(...arguments);
      this.frontImg = null;
      this.backImg = null;
      this.duration = 200;
      this.isFront = true;
      this.clicked = false;
    }
    onAwake() {
      this.card = this.owner;
      this.card.skin = this.frontImg.url;
      this.card.on("awake", this, this.handleClick);
    }
    handleClick() {
      if (this.clicked)
        return;
      this.clicked = true;
      this.isFront = !this.isFront;
      if (this.isFront) {
        Laya.Tween.to(this.card, { scaleX: 0 }, this.duration, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
          this.card.skin = this.frontImg.url;
          Laya.Tween.to(this.card, { scaleX: 1 }, this.duration, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            this.clicked = false;
          }));
        }));
      } else {
        Laya.Tween.to(this.card, { scaleX: 0 }, this.duration, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
          this.card.skin = this.backImg.url;
          Laya.Tween.to(this.card, { scaleX: 1 }, this.duration, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            this.clicked = false;
          }));
        }));
      }
    }
  }, "FlipCard");
  __decorate([
    property(),
    __metadata("design:type", typeof (_a = typeof Laya !== "undefined" && Laya.Texture) === "function" ? _a : Object)
  ], FlipCard.prototype, "frontImg", void 0);
  __decorate([
    property(),
    __metadata("design:type", typeof (_b = typeof Laya !== "undefined" && Laya.Texture) === "function" ? _b : Object)
  ], FlipCard.prototype, "backImg", void 0);
  __decorate([
    property(),
    __metadata("design:type", Number)
  ], FlipCard.prototype, "duration", void 0);
  FlipCard = __decorate([
    regClass()
  ], FlipCard);

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

  // E:/projects/laya3/ui_test/src/Scene2RT.generated.ts
  var Scene2RTBase = class extends Laya.Scene {
  };
  __name(Scene2RTBase, "Scene2RTBase");

  // E:/projects/laya3/ui_test/src/Scene2RT.ts
  var __decorate3 = __$decorate("f85c40d7-ff15-42f0-b068-854f7b7c805a", "../src/Scene2RT.ts");
  var { regClass: regClass3, property: property3 } = Laya;
  var Scene2RT = /* @__PURE__ */ __name(class Scene2RT2 extends Scene2RTBase {
    constructor() {
      super(...arguments);
      this.closed = true;
    }
    onAwake() {
      this.Button_toggle.on(Laya.Event.CLICK, this, this.onClick);
      this.List_card.array = [
        "resources/card.png",
        "resources/card.png",
        "resources/card.png"
      ];
      this.List_card.repeatX = 3;
      this.List_card.repeatY = 1;
      this.List_card.renderHandler = Laya.Handler.create(this, (cell, index) => {
        let flip = cell.getComponent(Laya.Script);
        let duration = flip.duration;
        Laya.timer.once(duration * index, this, () => {
          flip.enabled = true;
          cell.event("awake");
        });
      }, null, false);
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
  Scene2RT = __decorate3([
    regClass3()
  ], Scene2RT);

  // E:/projects/laya3/ui_test/src/Scene3RT.generated.ts
  var Scene3RTBase = class extends Laya.Scene {
  };
  __name(Scene3RTBase, "Scene3RTBase");

  // E:/projects/laya3/ui_test/src/Scene3RT.ts
  var __decorate4 = __$decorate("aa79c441-4d85-4fb5-8958-e2557fbd7b72", "../src/Scene3RT.ts");
  var { regClass: regClass4, property: property4 } = Laya;
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
  Scene3RT = __decorate4([
    regClass4()
  ], Scene3RT);

  // E:/projects/laya3/ui_test/src/Scene4RT.generated.ts
  var Scene4RTBase = class extends Laya.Scene {
  };
  __name(Scene4RTBase, "Scene4RTBase");

  // E:/projects/laya3/ui_test/src/Scene4RT.ts
  var __decorate5 = __$decorate("273ead01-cee8-44dd-a807-4b58ea509ab0", "../src/Scene4RT.ts");
  var { regClass: regClass5, property: property5 } = Laya;
  var Scene4RT = /* @__PURE__ */ __name(class Scene4RT2 extends Scene4RTBase {
    constructor() {
      super(...arguments);
      this.selectedEquipment = null;
      this.clickedBar = null;
      this.defaultColor = "#b3b3b3";
      this.clickedColor = "#a2a2a2";
    }
    onAwake() {
      let data = [
        { color: "#FFE4C4", img: "A_Armour01", name: "\u76AE\u7532", num: 2, type: 1 },
        { color: "#FFE4C4", img: "A_Armour02", name: "\u94C1\u7532", num: 1, type: 1 },
        { color: "#FFE4C4", img: "A_Armour03", name: "\u91D1\u7532", num: 1, type: 1 },
        { color: "#FFE4C4", img: "A_Armour04", name: "\u94F6\u7532", num: 1, type: 1 },
        { color: "#BDB76B", img: "A_Shoes01", name: "\u76AE\u978B", num: 2, type: 3 },
        { color: "#BDB76B", img: "A_Shoes02", name: "\u8349\u978B", num: 1, type: 3 },
        { color: "#BDB76B", img: "A_Shoes03", name: "\u94C1\u978B", num: 1, type: 3 },
        { color: "#BDB76B", img: "A_Shoes04", name: "\u94F6\u978B", num: 1, type: 3 },
        { color: "#BDB76B", img: "A_Shoes05", name: "\u94BB\u77F3\u978B", num: 1, type: 3 },
        { color: "#48D1CC", img: "Ac_Gloves01", name: "\u76AE\u624B\u5957", num: 2, type: 2 },
        { color: "#48D1CC", img: "Ac_Gloves02", name: "\u8349\u624B\u5957", num: 1, type: 2 },
        { color: "#48D1CC", img: "Ac_Gloves03", name: "\u94C1\u624B\u5957", num: 1, type: 2 },
        { color: "#48D1CC", img: "Ac_Gloves04", name: "\u6BDB\u76AE\u624B\u5957", num: 1, type: 2 },
        { color: "#48D1CC", img: "Ac_Gloves05", name: "\u94BB\u77F3\u624B\u5957", num: 1, type: 2 },
        { color: "#DB7093", img: "C_Elm01", name: "\u76AE\u8D28\u5934\u76D4", num: 2, type: 0 },
        { color: "#DB7093", img: "C_Elm02", name: "\u94C1\u8D28\u5934\u76D4", num: 1, type: 0 },
        { color: "#DB7093", img: "C_Elm03", name: "\u94F6\u8D28\u5934\u76D4", num: 1, type: 0 },
        { color: "#DB7093", img: "C_Elm04", name: "\u6876\u76D4", num: 1, type: 0 }
      ];
      this.List_bag.array = data;
      this.List_bag.repeatY = Math.ceil(this.List_bag.array.length / this.List_bag.repeatX) - 1;
      this.List_bag.renderHandler = Laya.Handler.create(this, (cell) => {
        let board = cell.getChildByName("e_bg");
        board.graphics.drawRect(0, 0, board.width, board.height, cell.dataSource.color);
        let equipment = cell.getChildByName("e_img");
        equipment.skin = `resources/equipment/${cell.dataSource.img}.png`;
        let name = cell.getChildByName("e_name");
        name.changeText(cell.dataSource.name);
      }, null, false);
      this.bars = [
        { type: 0, clicked: false, location: this.Sprite_head },
        { type: 1, clicked: false, location: this.Sprite_body },
        { type: 2, clicked: false, location: this.Sprite_hand },
        { type: 3, clicked: false, location: this.Sprite_foot }
      ];
      for (let i = 0; i < this.bars.length; i++) {
        let bar = this.bars[i];
        this.bindClickAction(bar);
      }
      this.List_bag.selectHandler = Laya.Handler.create(this, (index) => {
        if (this.List_bag.selectedIndex == -1)
          return;
        this.List_bag.cells.forEach((c) => {
          c.filters = [];
        });
        let cell = this.List_bag.getCell(index);
        this.selectedEquipment = cell.dataSource;
        cell.dataSource.index = index;
        let glowFilter = new Laya.GlowFilter("#111", 2, 2, 2);
        cell.filters = [glowFilter];
        if (this.clickedBar !== null) {
          if (this.selectedEquipment.type === this.clickedBar.type) {
            let show = this.clickedBar.location.getChildAt(0);
            if (show.dataSource) {
              let exist = false;
              for (let i = 0; i < this.List_bag.cells.length; i++) {
                let cell2 = this.List_bag.cells[i];
                if (cell2.name === show.dataSource.name && cell2.dataSource) {
                  exist = true;
                  cell2.dataSource.num++;
                }
              }
              if (!exist) {
                show.dataSource.num++;
                this.List_bag.addItem(show.dataSource);
              }
            }
            this.selectedEquipment.num -= 1;
            if (this.selectedEquipment.num <= 0) {
              this.List_bag.deleteItem(index);
            }
            show.skin = `resources/equipment/${this.selectedEquipment.img}.png`;
            show.dataSource = this.selectedEquipment;
            this.clickedBar.clicked = false;
            this.changeShowColor(this.clickedBar.location, this.defaultColor);
            this.clickedBar = null;
            this.List_bag.selectedIndex = -1;
          }
        }
      }, null, false);
    }
    // 为所有装备栏注册点击事件
    bindClickAction(equipmentBar) {
      let sprite = equipmentBar.location;
      sprite.on(Laya.Event.CLICK, this, () => {
        equipmentBar.clicked = !equipmentBar.clicked;
        if (equipmentBar.clicked) {
          this.bars.forEach((bar) => {
            this.changeShowColor(bar.location, this.defaultColor);
            bar.clicked = false;
          });
          this.changeShowColor(sprite, this.clickedColor);
          this.clickedBar = equipmentBar;
          this.List_bag.selectedIndex = -1;
        } else {
          this.changeShowColor(sprite, this.defaultColor);
        }
      });
    }
    // 改变装备栏背景颜色
    changeShowColor(sprite, fillColor) {
      sprite.graphics.drawRect(0, 0, sprite.width, sprite.height, fillColor, "#373737", 2);
    }
  }, "Scene4RT");
  Scene4RT = __decorate5([
    regClass5()
  ], Scene4RT);

  // E:/projects/laya3/ui_test/src/Scene5RT.generated.ts
  var Scene5RTBase = class extends Laya.Scene {
  };
  __name(Scene5RTBase, "Scene5RTBase");

  // E:/projects/laya3/ui_test/src/Scene5RT.ts
  var __decorate6 = __$decorate("11932c2b-ca8c-4550-8fab-7b9ed0251bc7", "../src/Scene5RT.ts");
  var { regClass: regClass6, property: property6 } = Laya;
  var Scene5RT = /* @__PURE__ */ __name(class Scene5RT2 extends Scene5RTBase {
    constructor() {
      super();
      this.blinkDelay = 500;
      this.wordGap = 38;
      this.tip = "\u8FD9\u662F\u4E00\u6BB5\u9ED8\u8BA4\u7684\u63D0\u793A\u6587\u5B57\uFF0C\u7528\u6765\u7ED9\u7528\u6237\u6307\u793A\u67D0\u5904\u6309\u94AE\u7B49\u56FE\u5F62\u5143\u7D20\u7684\u4F5C\u7528";
      this.labels = [];
      this.hovered = false;
    }
    onAwake() {
      this.blinkAni(this.Label_blink);
      let len = this.tip.length;
      for (let i = 0; i < len; i++) {
        let label = this.createLabel(this.tip[i], i * this.wordGap);
        this.labels.push(label);
      }
      this.Label_blink.left = 0;
      this.Image_bg.width = this.Label_blink.width + 50;
      this.Button_test.on(Laya.Event.MOUSE_MOVE, this, () => {
        if (this.hovered)
          return;
        this.hovered = true;
        this.Image_bg.pos(this.Button_test.width + this.Button_test.x, this.Button_test.y - this.Image_bg.height);
        this.Image_bg.visible = true;
        this.delayShow();
      });
      this.Button_test.on(Laya.Event.MOUSE_OUT, this, () => {
        this.recover();
        this.hovered = false;
        this.Image_bg.visible = false;
      });
    }
    onClick() {
      this.delayShow();
    }
    // 每个提示文字都创建一个label
    createLabel(txt, x) {
      let label = new Laya.Label(txt);
      label.top = label.bottom = 0;
      label.color = "#000";
      label.fontSize = 36;
      label.valign = "middle";
      label.left = x;
      label.alpha = 0;
      this.Box_words.addChild(label);
      return label;
    }
    // 复原
    recover() {
      this.labels.forEach((l) => {
        Laya.Tween.clearAll(l);
        l.alpha = 0;
      });
      this.Label_blink.left = 0;
      this.Image_bg.width = this.Label_blink.width + 50;
      for (let i = 0, len = this.tip.length; i < len; i++) {
        Laya.timer.clear(this, this.delayShowCallback);
      }
    }
    // 提示文字延迟显示
    delayShow() {
      let len = this.labels.length;
      let showDelay = 60;
      for (let i = 0; i < len; i++) {
        Laya.timer.once(showDelay * i, this, this.delayShowCallback, [i], false);
      }
    }
    delayShowCallback(i) {
      Laya.Tween.to(this.labels[i], { alpha: 1 }, 10, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
        this.Label_blink.left += this.wordGap;
        this.Image_bg.width += this.wordGap;
      }, null, false));
    }
    // 闪烁的竖线
    blinkAni(target) {
      let isShow = 0;
      Laya.timer.loop(this.blinkDelay, this, () => {
        isShow = isShow ^ 1;
        Laya.Tween.to(target, { alpha: isShow }, this.blinkDelay, Laya.Ease.linearIn);
      });
    }
  }, "Scene5RT");
  Scene5RT = __decorate6([
    regClass6(),
    __metadata("design:paramtypes", [])
  ], Scene5RT);

  // E:/projects/laya3/ui_test/src/Scene6RT.generated.ts
  var Scene6RTBase = class extends Laya.Scene {
  };
  __name(Scene6RTBase, "Scene6RTBase");

  // E:/projects/laya3/ui_test/src/Scene6RT.ts
  var __decorate7 = __$decorate("e7b7ddee-f1cb-478c-a8e9-c867e94a1ff3", "../src/Scene6RT.ts");
  var { regClass: regClass7, property: property7 } = Laya;
  var Scene6RT = /* @__PURE__ */ __name(class Scene6RT2 extends Scene6RTBase {
    onAwake() {
      this.List_menu.itemRender = MenuItem;
      let data = [
        { name: "Start Game", pointer: true },
        { name: "Top Ranking", pointer: false },
        { name: "Setting", pointer: false },
        { name: "Exit Game", pointer: false }
      ];
      this.List_menu.array = data;
      this.List_menu.renderHandler = Laya.Handler.create(this, (cell, idx) => {
        cell.setLabelText(cell.dataSource.name);
        cell.setPointerVisible(cell.dataSource.pointer);
        if (cell.dataSource.pointer) {
          cell.executeAni();
        }
      }, null, false);
      this.List_menu.selectHandler = Laya.Handler.create(this, (idx) => {
        let cells = this.List_menu.cells, len = cells.length;
        cells.forEach((cell) => {
          cell.setPointerVisible(false);
          cell.recover();
        });
        let curCell = cells[idx];
        curCell.setPointerVisible(true);
        curCell.executeAni();
      }, null, false);
    }
  }, "Scene6RT");
  Scene6RT = __decorate7([
    regClass7()
  ], Scene6RT);
  var MenuItem = class extends Laya.Box {
    get dataSource() {
      return this._data;
    }
    set dataSource(value) {
      this._data = value;
    }
    constructor() {
      super();
      this._data = null;
      this.width = 500;
      this.height = 120;
      this.pointer = new Laya.Image("resources/equipment/Ac_Gloves04.png");
      let pointer = this.pointer;
      this.addChild(pointer);
      pointer.width = 50;
      pointer.height = 50;
      pointer.left = 0;
      pointer.top = 35;
      pointer.visible = true;
      this.label = new Laya.Label();
      let label = this.label;
      this.addChild(label);
      label.width = 398;
      label.height = 120;
      label.left = 70;
      label.fontSize = 50;
      label.align = "left";
      label.valign = "middle";
      label.color = "#fff";
    }
    setLabelText(text) {
      this.label.text = text;
    }
    setPointerVisible(visible) {
      this.dataSource.pointer = visible;
      this.pointer.visible = visible;
    }
    executeAni() {
      this.label.stroke = 10;
      this.label.strokeColor = "#aaa";
      Laya.timer.loop(1e3, this, () => {
        Laya.Tween.to(this.label, { scaleX: 1.2, scaleY: 1.2 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
          Laya.Tween.to(this.label, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.linearIn);
        }));
      });
    }
    recover() {
      this.label.stroke = 0;
      Laya.timer.clearAll(this);
      Laya.Tween.clearAll(this.label);
    }
  };
  __name(MenuItem, "MenuItem");

  // E:/projects/laya3/ui_test/src/Scene7RT.generated.ts
  var Scene7RTBase = class extends Laya.Scene {
  };
  __name(Scene7RTBase, "Scene7RTBase");

  // E:/projects/laya3/ui_test/src/Scene7RT.ts
  var __decorate8 = __$decorate("27acb450-db78-4dea-b13a-3f204f81546a", "../src/Scene7RT.ts");
  var { regClass: regClass8, property: property8 } = Laya;
  var Scene7RT = /* @__PURE__ */ __name(class Scene7RT2 extends Scene7RTBase {
    constructor() {
      super(...arguments);
      this.MESSAGE_SPACE = 10;
    }
    onAwake() {
      Laya.loader.load("prefabs/MessageVisual.lh").then((messagePrefab) => {
        this.messagePrefab = messagePrefab;
      });
      this.Panel_Content.vScrollBarSkin = "";
      this.Button_Send.on(Laya.Event.CLICK, this, this.sendMessage);
    }
    sendMessage() {
      let message = {
        body: this.TextInput_Message.text,
        sender: { name: "alo", avatar: "C_Elm01" }
      };
      this.generateMessage(message);
      this.TextInput_Message.text = "";
      this.Panel_Content.scrollTo(0, this.getContentHeight());
    }
    getContentHeight() {
      let height = 0;
      for (let i = 0, len = this.Panel_Content.numChildren; i < len; i++) {
        let messageVisual = this.Panel_Content.getChildAt(i);
        height += messageVisual.height + this.MESSAGE_SPACE;
      }
      return height;
    }
    generateMessage(message) {
      let messageVisual = this.messagePrefab.create();
      let label = messageVisual.getChildByName("Label_Message");
      let head = messageVisual.getChildByName("Box_Head").getChildByName("Image_Avatar");
      label.text = message.body;
      head.skin = `resources/equipment/${message.sender.avatar}.png`;
      messageVisual.y = this.getContentHeight();
      this.Panel_Content.addChild(messageVisual);
    }
  }, "Scene7RT");
  Scene7RT = __decorate8([
    regClass8()
  ], Scene7RT);

  // E:/projects/laya3/ui_test/src/Scene8RT.generated.ts
  var Scene8RTBase = class extends Laya.Scene {
  };
  __name(Scene8RTBase, "Scene8RTBase");

  // E:/projects/laya3/ui_test/src/Scene8RT.ts
  var __decorate9 = __$decorate("29dc77df-b2e1-4c32-9b83-74f218849249", "../src/Scene8RT.ts");
  var Point = Laya.Point;
  var { regClass: regClass9, property: property9 } = Laya;
  var Scene8RT = /* @__PURE__ */ __name(class Scene8RT2 extends Scene8RTBase {
    constructor() {
      super(...arguments);
      this.maskPressed = false;
    }
    onAwake() {
      this.Sprite_Mask.on(Laya.Event.MOUSE_DOWN, this, this.onMaskPressed);
      this.Sprite_Mask.on(Laya.Event.MOUSE_UP, this, this.onMaskLoosen);
      Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMaskMove);
    }
    onMaskPressed() {
      let globalPosition = Laya.stage.localToGlobal(new Point(this.Sprite_Mask.x, this.Sprite_Mask.y));
      this.maskLastX = globalPosition.x;
      this.maskLastY = globalPosition.y;
      this.maskPressed = !this.maskPressed;
      if (this.maskPressed) {
        Laya.Tween.to(this.Sprite_Mask, { scaleX: 1.5, scaleY: 1.5 }, 100, Laya.Ease.circIn);
      }
    }
    onMaskLoosen() {
      this.maskPressed = !this.maskPressed;
      if (!this.maskPressed) {
        Laya.Tween.to(this.Sprite_Mask, { scaleX: 1, scaleY: 1 }, 100, Laya.Ease.circOut);
      }
    }
    onMaskMove(e) {
      if (this.maskPressed) {
        let curPosition = new Point(Laya.stage.mouseX, Laya.stage.mouseY);
        let curLocalPosition = this.Sprite.globalToLocal(curPosition);
        this.Sprite_Mask.x = curLocalPosition.x;
        this.Sprite_Mask.y = curLocalPosition.y;
      }
    }
  }, "Scene8RT");
  Scene8RT = __decorate9([
    regClass9()
  ], Scene8RT);
})();
//# sourceMappingURL=bundle.js.map
