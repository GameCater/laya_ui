import { Scene5RTBase } from "./Scene5RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene5RT extends Scene5RTBase {

    private blinkDelay: number = 500;
    private wordGap: number = 38;
    private tip: string = '这是一段默认的提示文字，用来给用户指示某处按钮等图形元素的作用';
    private labels: Laya.Label[] = [];
    private hovered: boolean = false;
    
    constructor() {
        super();
    }

    onAwake(): void {
        this.blinkAni(this.Label_blink);

        let len = this.tip.length;
        for (let i = 0; i < len; i ++) {
            let label = this.createLabel(this.tip[i], i * this.wordGap);
            this.labels.push(label);
        }

        this.Label_blink.left = 0;
        this.Image_bg.width = this.Label_blink.width + 50;

        // Laya.stage.on(Laya.Event.CLICK, this, this.onClick);
        this.Button_test.on(Laya.Event.MOUSE_MOVE, this, () => {
            if (this.hovered) return;

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

    private onClick(): void {
        this.delayShow();
    }

    // 每个提示文字都创建一个label
    private createLabel(txt: string, x: number): Laya.Label {
        let label = new Laya.Label(txt);
        label.top = label.bottom = 0;
        label.color = '#000';
        label.fontSize = 36;
        label.valign = 'middle';
        label.left = x;
        label.alpha = 0;
        this.Box_words.addChild(label);

        return label;
    }

    // 复原
    private recover() {
        this.labels.forEach(l => {
            Laya.Tween.clearAll(l);
            l.alpha = 0;
        });

        this.Label_blink.left = 0;
        this.Image_bg.width = this.Label_blink.width + 50;

        // TODO bug 修复用户短时间间隔下hover时提示显示问题
        for (let i = 0, len = this.tip.length; i < len; i ++) {
            
            Laya.timer.clear(this, this.delayShowCallback);
        }
        // Laya.timer.clearAll(this)
    }

    // 提示文字延迟显示
    private delayShow() {
       
        let len = this.labels.length;
        let showDelay: number = 60;

        for (let i = 0; i < len; i ++) {
            Laya.timer.once(showDelay * i, this, this.delayShowCallback, [i], false);
        }
    }

    private delayShowCallback(i: number) {
        Laya.Tween.to(this.labels[i], { alpha: 1 }, 10, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            this.Label_blink.left += this.wordGap;
            this.Image_bg.width += this.wordGap;
        }, null, false));
    }

    // 闪烁的竖线
    private blinkAni(target: Laya.Sprite) {
        let isShow = 0;
        Laya.timer.loop(this.blinkDelay, this, () => {
            isShow = isShow ^ 1;
            Laya.Tween.to(target, { alpha: isShow }, this.blinkDelay, Laya.Ease.linearIn);
        })
    }
}