import { Scene4RTBase } from "./Scene4RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene4RT extends Scene4RTBase {

    // 背包中当前选中的装备
    private selectedEquipment: Equipment = null;
    // 当前选中的装备栏
    private clickedBar: EquipmentBar = null;
    // 所有装备栏
    private bars: EquipmentBar[];

    // 装备栏点选效果
    private defaultColor: string = '#b3b3b3';
    private clickedColor: string = '#a2a2a2';

    onAwake(): void {
        let data: Equipment[] = [
            { color: '#FFE4C4', img: 'A_Armour01', name: '皮甲', num: 2, type: 1 },
            { color: '#FFE4C4', img: 'A_Armour02', name: '铁甲', num: 1, type: 1 },
            { color: '#FFE4C4', img: 'A_Armour03', name: '金甲', num: 1, type: 1 },
            { color: '#FFE4C4', img: 'A_Armour04', name: '银甲', num: 1, type: 1 },
            { color: '#BDB76B', img: 'A_Shoes01', name: '皮鞋', num: 2, type: 3 },
            { color: '#BDB76B', img: 'A_Shoes02', name: '草鞋', num: 1, type: 3 },
            { color: '#BDB76B', img: 'A_Shoes03', name: '铁鞋', num: 1, type: 3 },
            { color: '#BDB76B', img: 'A_Shoes04', name: '银鞋', num: 1, type: 3 },
            { color: '#BDB76B', img: 'A_Shoes05', name: '钻石鞋', num: 1, type: 3 },
            { color: '#48D1CC', img: 'Ac_Gloves01', name: '皮手套', num: 2, type: 2 },
            { color: '#48D1CC', img: 'Ac_Gloves02', name: '草手套', num: 1, type: 2 },
            { color: '#48D1CC', img: 'Ac_Gloves03', name: '铁手套', num: 1, type: 2 },
            { color: '#48D1CC', img: 'Ac_Gloves04', name: '毛皮手套', num: 1, type: 2 },
            { color: '#48D1CC', img: 'Ac_Gloves05', name: '钻石手套', num: 1, type: 2 },
            { color: '#DB7093', img: 'C_Elm01', name: '皮质头盔', num: 2, type: 0 },
            { color: '#DB7093', img: 'C_Elm02', name: '铁质头盔', num: 1, type: 0 },
            { color: '#DB7093', img: 'C_Elm03', name: '银质头盔', num: 1, type: 0 },
            { color: '#DB7093', img: 'C_Elm04', name: '桶盔', num: 1, type: 0 }
        ];

        this.List_bag.array = data;
        this.List_bag.repeatY = Math.ceil(this.List_bag.array.length / this.List_bag.repeatX) - 1;
        this.List_bag.renderHandler = Laya.Handler.create(this, (cell: Laya.Box) => {

            // 背景
            let board = cell.getChildByName('e_bg') as Laya.Sprite;
            board.graphics.drawRect(0, 0, board.width, board.height, cell.dataSource.color);

            // 装备
            let equipment = cell.getChildByName('e_img') as Laya.Image;
            equipment.skin = `resources/equipment/${cell.dataSource.img}.png`;

            // 装备名
            let name = cell.getChildByName('e_name') as Laya.Label;
            name.changeText(cell.dataSource.name);
        }, null, false);

        // 装备栏数据
        this.bars = [
            { type: 0, clicked: false, location: this.Sprite_head },
            { type: 1, clicked: false, location: this.Sprite_body },
            { type: 2, clicked: false, location: this.Sprite_hand },
            { type: 3, clicked: false, location: this.Sprite_foot },
        ];

        // 为所有装备栏绑定点击事件
        for (let i = 0; i < this.bars.length; i ++) {
            let bar = this.bars[i];
            this.bindClickAction(bar);
        }

        // 背包列表点选效果
        this.List_bag.selectHandler = Laya.Handler.create(this, (index: number) => {
            if (this.List_bag.selectedIndex == -1) return;
            
            // 选中一项后取消其他选中项的效果
            this.List_bag.cells.forEach(c => {
                c.filters = [];
            });

            let cell = this.List_bag.getCell(index);
            this.selectedEquipment = cell.dataSource;
            cell.dataSource.index = index;
            
            // 为选中项添加选中效果
            let glowFilter: Laya.GlowFilter = new Laya.GlowFilter("#111", 2, 2, 2);
            cell.filters = [ glowFilter ];

            if (this.clickedBar !== null) {
                // 只有装备栏与背包列表选中项装备类型一致时
                if (this.selectedEquipment.type === this.clickedBar.type) {
                    
                    let show = this.clickedBar.location.getChildAt(0) as Laya.Image;
                    // 装备栏中之前的装备返回背包
                    if (show.dataSource) {
                        let exist: boolean = false;
                        for (let i = 0; i < this.List_bag.cells.length; i ++) {
                            let cell = this.List_bag.cells[i];
                            // 背包栏里存在
                            if (cell.name === show.dataSource.name && cell.dataSource) {
                                exist = true;
                                cell.dataSource.num ++;
                            }
                        }
                        // 不存在，只有一个
                        if (!exist) {
                            show.dataSource.num ++;
                            this.List_bag.addItem(show.dataSource);
                        }
                    }

                    this.selectedEquipment.num -= 1;
                    // 该装备只有一套
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
    private bindClickAction(equipmentBar: EquipmentBar): void {
        let sprite = equipmentBar.location;
        sprite.on(Laya.Event.CLICK, this, () => {
            equipmentBar.clicked = !equipmentBar.clicked;
            if (equipmentBar.clicked) {
                // 取消其他装备栏的选择
                this.bars.forEach(bar => {
                    this.changeShowColor(bar.location, this.defaultColor);
                    bar.clicked = false;
                })
                
                // 装备栏选中效果
                this.changeShowColor(sprite, this.clickedColor);
                this.clickedBar = equipmentBar;

                this.List_bag.selectedIndex = -1;
            } else {
                this.changeShowColor(sprite, this.defaultColor);
            }
        })
    }

    // 改变装备栏背景颜色
    private changeShowColor(sprite: Laya.Sprite, fillColor: string) {
        sprite.graphics.drawRect(0, 0, sprite.width, sprite.height, fillColor, '#373737', 2);
    }
}

type Equipment = {
    color: string,
    img: string,
    name: string,
    num: number,
    type: number, // 0 head 1 body 2 hand 3 foot
}

// 装备栏类型
type EquipmentBar = {
    type: number,
    clicked: boolean,
    location: Laya.Sprite,
}