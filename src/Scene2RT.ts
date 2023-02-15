import { Scene2RTBase } from "./Scene2RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene2RT extends Scene2RTBase {

    private closed: boolean = true;
    onAwake(): void {
        this.Button_toggle.on(Laya.Event.CLICK, this, this.onClick);
    }

    onClick() {
        this.closed = !this.closed;

        if (!this.closed) {
            this.TextArea.visible = true;
            this.TextArea.editable = false;
            Laya.Tween.to(this.TextArea, { width: (this.TextArea.parent as Laya.Box).width }, 200, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                this.TextArea.editable = true;
                this.TextArea.prompt = '请输入内容。。。';
            }));
        } else {
            this.TextArea.editable = false;
            // 清空内容
            this.TextArea.prompt = '';
            this.TextArea.changeText('');
            Laya.Tween.to(this.TextArea, { width: 25 }, 200, Laya.Ease.cubicIn, Laya.Handler.create(this, () => {
                this.TextArea.visible = false;
            }));
        }
    }
}