import { MainRTBase } from "./MainRT.generated";

const { regClass, property } = Laya;

@regClass()
export class MainRT extends MainRTBase {

    private lastClickedBtn: Laya.Button;

    onEnable(): void {
        let data = [
            { title: 'space1', color: '', visible: false },
            { title: 'btn2', color: '#222', visible: true },
            { title: 'btn3', color: '#333', visible: true },
            { title: 'btn4', color: '#444', visible: true },
            { title: 'btn5', color: '#555', visible: true },
            { title: 'space2', color: '', visible: false },
        ];
        this.List.array = data;
        // this.List.selectedIndex = 1;
        // 禁用鼠标滚轮滚动
        this.List.scrollBar.mouseWheelEnable = false;
        this.List.scrollBar.touchScrollEnable = false;

        // 所有按钮始终执行的行为一致，可以缓存，防止按钮事件反复的初始化
        this.List.cacheContent = true;
        
        this.List.renderHandler = Laya.Handler.create(this, (cell: Laya.Box, index: number) => { 

            let btn = cell.getChildAt(0) as Laya.Button;
            btn.label = cell.dataSource.title;

            // 默认显示
            btn.visible = true;
            if (!cell.dataSource.visible && cell.dataSource.title.startsWith('space')) {
                btn.visible = false;
            }

            btn.on(Laya.Event.CLICK, this, this.onBtnClick1, [btn, index]);
        }, null, false);
    }

    onBtnClick1(btn: Laya.Button, index: number) {

        // 之前点击的按钮恢复起始位置
        if (this.lastClickedBtn && btn !== this.lastClickedBtn) {
            Laya.Tween.to(this.lastClickedBtn, { y: 450 }, 200, Laya.Ease.linearIn);
            this.lastClickedBtn.offAll(Laya.Event.CLICK);
        }
        this.lastClickedBtn = btn;

        this.List.scrollTo(index - 1);

        // 执行完动画后添加再次点击的事件
        Laya.Tween.to(btn, { y: 0 }, 200, Laya.Ease.linearOut, Laya.Handler.create(this, this.onClick1Completed, [btn]))
    }

    onClick1Completed(btn: Laya.Button) {
        btn.off(Laya.Event.CLICK, this, this.onBtnClick2);      
        btn.on(Laya.Event.CLICK, this, this.onBtnClick2);
    }

    onBtnClick2(e: Laya.Event) {
        console.log('click2' + e.target.label);
    }
}
