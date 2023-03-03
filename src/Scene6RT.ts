import { Scene6RTBase } from "./Scene6RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene6RT extends Scene6RTBase {

    onAwake(): void {
        this.List_menu.itemRender = MenuItem;
        let data: menuInfo[] = [
            { name: 'Start Game', pointer: true },
            { name: 'Top Ranking', pointer: false },
            { name: 'Setting', pointer: false },
            { name: 'Exit Game', pointer: false }
        ];
        this.List_menu.array = data;
        this.List_menu.renderHandler = Laya.Handler.create(this, (cell: MenuItem, idx: number) => {
            cell.setLabelText(cell.dataSource.name);
            cell.setPointerVisible(cell.dataSource.pointer);
            if (cell.dataSource.pointer) {
                cell.executeAni();
            }
        }, null, false);

        this.List_menu.selectHandler = Laya.Handler.create(this, (idx: number) => {
            let cells = this.List_menu.cells as MenuItem[], len = cells.length;
            cells.forEach(cell => {
                cell.setPointerVisible(false);
                cell.recover();
            });
            let curCell = cells[idx];
            curCell.setPointerVisible(true);
            curCell.executeAni();
            
        }, null, false);
    }
}

class MenuItem extends Laya.Box {
    private _data: menuInfo = null;
    public get dataSource() {
        return this._data;
    }
    public set dataSource(value: menuInfo) {
        this._data = value;
    }

    private pointer: Laya.Image;
    private label: Laya.Label;

    constructor() {
        super();

        this.width = 500;
        this.height = 120;

        this.pointer = new Laya.Image('resources/equipment/Ac_Gloves04.png');
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
        label.align = 'left';
        label.valign = 'middle';
        label.color = '#fff';
    }

    public setLabelText(text: string) {
        this.label.text = text;
    }

    public setPointerVisible(visible: boolean) {
        this.dataSource.pointer = visible;
        this.pointer.visible = visible;
    }

    public executeAni() {
        this.label.stroke = 10;
        this.label.strokeColor = '#aaa';

        Laya.timer.loop(1000, this, () => {
            Laya.Tween.to(this.label, { scaleX: 1.2, scaleY: 1.2 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.label, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.linearIn);
            }));
        });
    }

    public recover() {
        this.label.stroke = 0;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.label);
    }
}

interface menuInfo {
    name: string;
    pointer: boolean;
}