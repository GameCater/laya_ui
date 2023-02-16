const { regClass, property } = Laya;

@regClass()
export class FlipCard extends Laya.Script {

    @property()
    frontImg: Laya.Texture = null;
    @property()
    backImg: Laya.Texture = null;
    // 翻面耗时
    @property()
    public duration: number = 200;

    private card: Laya.Image;
    // 当前哪一面
    private isFront: boolean = true;
    // 用以节流
    private clicked: boolean = false;

    override onAwake(): void {
        this.card = this.owner as Laya.Image;
        this.card.skin = this.frontImg.url;
        // this.card.on(Laya.Event.CLICK, this, this.handleClick);
        this.card.on('awake', this, this.handleClick);
    }

    private handleClick(): void {
        if (this.clicked) return;
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
}