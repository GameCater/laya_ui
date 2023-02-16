import { FlipCard } from "./FlipCard";
import { Scene2RTBase } from "./Scene2RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene2RT extends Scene2RTBase {

    private closed: boolean = true;
    onAwake(): void {
        this.Button_toggle.on(Laya.Event.CLICK, this, this.onClick);

        // 翻转列表
        this.List_card.array = [
            'resources/card.png',
            'resources/card.png',
            'resources/card.png',
        ]

        // 列表行列显示个数
        this.List_card.repeatX = 3;
        this.List_card.repeatY = 1;
        this.List_card.renderHandler = Laya.Handler.create(this, (cell: Laya.Image, index: number) => {
            let flip = cell.getComponent(Laya.Script) as FlipCard;
            let duration = flip.duration;

            // 依次隔duraion时间激活
            Laya.timer.once(duration * index, this, () => {
                flip.enabled = true;
                cell.event('awake');
            });
        }, null, false);
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