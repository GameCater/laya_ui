const { regClass, property } = Laya;

@regClass()
export class CraftPanel extends Laya.Script {
    // 合成规则
    private compositionRules: CompositonRule[] = [
        {
            input: [
                { objectName: "Ac_Gloves01", location: 1 },
                { objectName: "Ac_Gloves02", location: 3 },
            ],
            output: { objectName: "Ac_Gloves03", prefabUrl: "prefabs/GreenHat.lh" }
        },
        {
            input: [
                { objectName: "Ac_Gloves01", location: 0 },
                { objectName: "Ac_Gloves01", location: 1 },
                { objectName: "Ac_Gloves01", location: 2 }
            ],
            output: { objectName: "Ac_Gloves04", prefabUrl: "prefabs/GreenHat.lh" }
        }
    ]

    public get rules() {
        return this.compositionRules;
    }
}

interface CompositonRule {
    input: InputObject[]
    output: OutputObject
}

interface InputObject {
    objectName: string
    location: number
}

export interface OutputObject {
    objectName: string
    prefabUrl: string
}