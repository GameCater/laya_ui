import { CraftPanel, OutputObject } from "./CraftPanel";
import { Scene9RTBase } from "./Scene9RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene9RT extends Scene9RTBase {

    private bagItems: BagItem[] = [
        { name: "Ac_Gloves01" },
        { name: "Ac_Gloves02" }
    ];

    private selectedItemCopy: Laya.Image;
    private craftPanel: CraftPanel;

    private composition: OutputObject;

    private initialArray: { objectName: string, location: number }[] = [];
    
    onAwake(): void {

        this.craftPanel = this.List_Craft.getComponent(Laya.Script) as CraftPanel;
        
        this.List_Bag.array = this.bagItems;
        this.List_Bag.renderHandler = Laya.Handler.create(this, (cell: Laya.Box, idx: number) => {
            let spriteItem = cell.getChildByName("Sprite_Item") as Laya.Sprite;
            spriteItem.loadImage(`resources/equipment/${cell.dataSource.name}.png`);

            cell.on(Laya.Event.MOUSE_DOWN, this, this.onCellPressed, [cell.dataSource]);
        }, null, false);

        // 有数据之后list调用setItem改变数据才会调用renderHandler的回调
        for (let i = 0; i <= 8; i ++) {
            this.initialArray.push({ objectName: "", location: -1 });
        }
        // 拷贝
        this.List_Craft.array = [...this.initialArray];

        this.List_Craft.renderHandler = Laya.Handler.create(this, (cell: Laya.Box, idx: number) => {
            let spriteItem = cell.getChildByName("Sprite_Item") as Laya.Sprite;
            if (cell.dataSource.objectName) {
                spriteItem.loadImage(`resources/equipment/${cell.dataSource.objectName}.png`);
            } else {
                // 清除sprite原先的texture
                spriteItem.texture = null;
            }
        }, null, false);


        this.List_Craft.mouseHandler = Laya.Handler.create(this, (e: Laya.Event, idx: number) => {
            if (e.type === Laya.Event.MOUSE_UP && this.selectedItemCopy) {
                let data = {
                    objectName: this.selectedItemCopy.dataSource.name,
                    location: idx
                }
                this.List_Craft.setItem(idx, data);

                if (this.canComposite()) {
                    // 合成物品
                    this.composite();
                }
            }

        }, null, false);

        this.Button_Clear.on(Laya.Event.CLICK, this, this.clearCraftList);
    }

    private clearCraftList() {
        // 清空list数据
        // this.List_Craft.array = [...this.initialArray];
        for (let i = 0, len = this.List_Craft.length; i < len; i ++) {
            this.List_Craft.setItem(i, this.initialArray[0]);
        }
    }

    // 测试用
    private logCellData(list: Laya.List) {
        list.cells.forEach(cell => {
            console.log(cell.dataSource);
        })
    }

    private composite() {
        this.clearCraftList();

        // 在中间位置生成合成物品
        this.List_Craft.setItem(4, { objectName: this.composition.objectName, location: -1 });
    }

    private canComposite() {
        // 计算当前有几个单元格放了物品
        let validNums = 0;
        this.List_Craft.cells.forEach(cell => {
            if (cell.dataSource.objectName) {
                validNums += 1;
            }
        });

        let canComposite: boolean = false;

        let rules = this.craftPanel.rules;
        rules.forEach(rule => {
            // 有符合的合成规则
            if (rule.input.length === validNums) {
                // 暂时假定可以合成
                canComposite = true;
                // 遍历该规则看看是否在规则位置找到相应的物品
                rule.input.forEach(inputObj => {
                    let targetCell = this.List_Craft.getCell(inputObj.location);
                    if (targetCell.dataSource.objectName !== inputObj.objectName) {
                        canComposite = false;
                    }
                });

                // 获取相应规则的输出
                if (canComposite) {
                    this.composition = rule.output;
                }
            }
        });

        return canComposite;
    }
    

    private onCellPressed(cellData: BagItem): void {
        let selectedItem = new Laya.Image();
        selectedItem.size(120, 120);
        selectedItem.loadImage(`resources/equipment/${cellData.name}.png`);
        selectedItem.pos(Laya.stage.mouseX, Laya.stage.mouseY);
        Laya.stage.addChild(selectedItem);

        this.selectedItemCopy = selectedItem;
        selectedItem.dataSource = cellData;

        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onSelectedItemCopyMove, [selectedItem]);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onSelectedItemCopyLoosen, [selectedItem]);
    }

    private onSelectedItemCopyMove(target: Laya.Sprite): void {
        target.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }

    private onSelectedItemCopyLoosen(target: Laya.Sprite) {
        this.selectedItemCopy = null;
        target.removeSelf();
        target.destroy();
    }
}

interface BagItem {
    name: string
}

