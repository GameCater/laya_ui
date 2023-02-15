import { Scene3RTBase } from "./Scene3RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene3RT extends Scene3RTBase {

    private cards: Laya.VBox[] = [];
    private space: number;
    private moveSpeed: number = 2;
    private selectedGroup: number = 1;

    onAwake(): void {
        for ( let i = 0; i < 8; i ++ ) {
            let card = new Laya.VBox();
            card.width = 320;
            card.height = 600;
            card.pivot( card.width/2, card.height/2 );
            card.bgColor = '#fff';
            card.visible = false;
            card.pos( this.Box.width >> 1, this.Box.height >> 1 );

            let label = new Laya.Label(`card${i}`);
            card.addChild(label);
            label.width = (label.parent as Laya.VBox).width;
            label.height = (label.parent as Laya.VBox).height;
            label.pos(0, 0);
            label.align = 'center';
            label.valign = 'middle';
            label.fontSize = 100;

            this.Box.addChild(card);
            this.cards.push(card);
        }

        this.space = ( this.Box.width - this.cards[0].width * 4 ) / 3;

        Laya.stage.on(Laya.Event.CLICK, this, this.animate, [ this.selectedGroup ]);

        this.Button_left.on( Laya.Event.CLICK, this, () => {
            console.log('left button clicked');
            this.selectedGroup = this.selectedGroup - 1 < 1 ? 1 : this.selectedGroup - 1;
            this.hideAllCards();
            this.animate(this.selectedGroup);
        } )

        this.Button_right.on( Laya.Event.CLICK, this, () => {
            console.log('right button clicked');
            this.selectedGroup = this.selectedGroup + 1 > Math.floor(this.cards.length / 4) ? Math.floor(this.cards.length / 4) : this.selectedGroup + 1;
            this.hideAllCards();
            this.animate(this.selectedGroup);
        } )
    }

    private hideAllCards(): void {
        this.cards.forEach( c => {
            // 隐藏并恢复初始位置
            c.visible = false;
            c.pos( this.Box.width >> 1, this.Box.height >> 1 );
        } )
    }
    

    private animate(group: number): void {

        // j 主要用来计算位置
        let start = ( group - 1 ) * 4;
        for (let i = start, j = 0; i < start + 4; i ++, j ++) {
            let card = this.cards[i];
            card.visible = true;
            // 1. card's width / 2
            // 2. card's width + space + card's width / 2
            // 3. card's width * 2 + space * 2 + card's width / 2
            // 4. card's width * 3 + space * 3 + card's width / 2
            // card.x = ( card.width + space ) * i + card.width / 2;
            let duration = card.x / this.moveSpeed;
            Laya.Tween.to( card,
                            { x: ( card.width + this.space ) * j + card.width / 2 },
                            duration,
                            Laya.Ease.linearOut,
                            Laya.Handler.create( this, () => {
                                if ( j === 3 ) {
                                    Laya.Tween.to( this.HBox_btnList, { alpha: 1 }, 500, Laya.Ease.circIn );
                                    this.HBox_btnList.visible = true;
                                }
                            } )
                            );

            Laya.stage.offAll(Laya.Event.CLICK);
        }
    }
}