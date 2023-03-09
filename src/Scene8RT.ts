import { Scene8RTBase } from "./Scene8RT.generated";
import Point = Laya.Point;

const { regClass, property } = Laya;

@regClass()
export class Scene8RT extends Scene8RTBase  {

    private maskPressed: boolean = false;

    private maskLastX: number;
    private maskLastY: number;    
    
    onAwake(): void {
        this.Sprite_Mask.on(Laya.Event.MOUSE_DOWN, this, this.onMaskPressed);
        this.Sprite_Mask.on(Laya.Event.MOUSE_UP, this, this.onMaskLoosen);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMaskMove);

        // this.drawPrismatic();
    }

    private onMaskPressed(): void {

        let globalPosition: Point = Laya.stage.localToGlobal(new Point(this.Sprite_Mask.x, this.Sprite_Mask.y));
        this.maskLastX = globalPosition.x;
        this.maskLastY = globalPosition.y;
        
        this.maskPressed = !this.maskPressed;
        if (this.maskPressed) {
            Laya.Tween.to(this.Sprite_Mask, { scaleX: 1.5, scaleY: 1.5 }, 100, Laya.Ease.circIn);
        }
    }

    private onMaskLoosen(): void {
        this.maskPressed = !this.maskPressed;
        if (!this.maskPressed) {
            Laya.Tween.to(this.Sprite_Mask, { scaleX: 1, scaleY: 1 }, 100, Laya.Ease.circOut);
        }
    }

    private onMaskMove(e: Laya.Event): void {
        if (this.maskPressed) {
            let curPosition: Point = new Point(Laya.stage.mouseX, Laya.stage.mouseY);
            let curLocalPosition: Point = this.Sprite.globalToLocal(curPosition);
            this.Sprite_Mask.x = curLocalPosition.x;
            this.Sprite_Mask.y = curLocalPosition.y;
        }
    }

    /*
    private drawPrismatic(): void {
        let radiusX = 32 * Math.cos(Math.PI * 30 / 180);
        let radiusY = 32 * Math.sin(Math.PI * 30 / 180);
        var color: string = "#FF7F50";

        let sprite: Laya.Sprite;
        sprite = new Laya.Sprite();
        sprite.graphics.drawLine(0, 0, -radiusX, radiusY, color);
        sprite.graphics.drawLine(0, 0, radiusX, radiusY, color);
        sprite.graphics.drawLine(-radiusX, radiusY, 0, radiusY * 2, color);
        sprite.graphics.drawLine(radiusX, radiusY, 0, radiusY * 2, color);

        sprite.pos(Laya.Browser.clientWidth >> 1, Laya.Browser.clientHeight >> 1);
        Laya.stage.addChild(sprite);
    }
    */
}