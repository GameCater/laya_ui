import { Scene7RTBase } from "./Scene7RT.generated";

const { regClass, property } = Laya;

@regClass()
export class Scene7RT extends Scene7RTBase {

    private messagePrefab: Laya.PrefabImpl;
    private MESSAGE_SPACE: number = 10;

    onAwake(): void {
        Laya.loader.load("prefabs/MessageVisual.lh").then(messagePrefab => {
            this.messagePrefab = messagePrefab;            
        });

        this.Panel_Content.vScrollBarSkin = '';

        this.Button_Send.on(Laya.Event.CLICK, this, this.sendMessage);
    }

    private sendMessage() {
        let message: Message = {
            body: this.TextInput_Message.text,
            sender: { name: 'alo', avatar: 'C_Elm01' }
        };
        this.generateMessage(message);
        this.TextInput_Message.text = '';
        this.Panel_Content.scrollTo(0, this.getContentHeight());
    }

    private getContentHeight() {
        let height: number = 0;
        for (let i = 0, len = this.Panel_Content.numChildren; i < len; i ++) {
            let messageVisual = this.Panel_Content.getChildAt(i) as Laya.View;
            height += messageVisual.height + this.MESSAGE_SPACE;
        }
        return height;
    }

    private generateMessage(message: Message) {
        let messageVisual = this.messagePrefab.create() as Laya.View;
        let label = messageVisual.getChildByName("Label_Message") as Laya.Label;
        let head = messageVisual.getChildByName("Box_Head").getChildByName("Image_Avatar") as Laya.Image;

        label.text = message.body;
        head.skin = `resources/equipment/${message.sender.avatar}.png`;

        messageVisual.y = this.getContentHeight();
        this.Panel_Content.addChild(messageVisual);
    }
}

interface Message {
    body: string
    sender: Player
}

interface Player {
    name: string
    avatar: string
}