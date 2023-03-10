{
  "_$ver": 1,
  "_$id": "18ysrpfc",
  "_$runtime": "res://cc5ca5ec-2acd-4332-8ee3-9480f77c675a",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "mouseThrough": true,
  "_$child": [
    {
      "_$id": "6dlhgbgw",
      "_$var": true,
      "_$type": "List",
      "name": "List_Craft",
      "x": 1118,
      "y": 240,
      "width": 600,
      "height": 600,
      "anchorX": 0,
      "anchorY": 0,
      "mouseEnabled": true,
      "centerY": 0,
      "bgColor": "rgba(46, 47, 48, 1)",
      "itemTemplate": {
        "_$ref": "kpdfe7bg",
        "_$tmpl": "itemRender"
      },
      "repeatX": 3,
      "repeatY": 3,
      "spaceX": 10,
      "spaceY": 10,
      "_$comp": [
        {
          "_$type": "843f8061-a597-462e-8987-9cc586fbd280",
          "scriptPath": "../src/CraftPanel.ts",
          "text": ""
        }
      ],
      "_$child": [
        {
          "_$id": "kpdfe7bg",
          "_$type": "Box",
          "name": "Box",
          "x": 20,
          "y": 20,
          "width": 180,
          "height": 180,
          "anchorX": 0,
          "anchorY": 0,
          "bgColor": "rgba(77, 89, 101, 1)",
          "_$child": [
            {
              "_$id": "dub43n49",
              "_$type": "Sprite",
              "name": "Sprite_Item",
              "width": 180,
              "height": 180,
              "anchorX": 0,
              "anchorY": 0,
              "_gcmds": []
            }
          ]
        }
      ]
    },
    {
      "_$id": "1ova6vqp",
      "_$var": true,
      "_$type": "List",
      "name": "List_Bag",
      "x": 172,
      "y": 110,
      "width": 620,
      "height": 860,
      "anchorX": 0,
      "anchorY": 0,
      "mouseEnabled": true,
      "centerY": 0,
      "bgColor": "rgba(159, 165, 172, 1)",
      "itemTemplate": {
        "_$ref": "h457k5jv",
        "_$tmpl": "itemRender"
      },
      "repeatX": 3,
      "repeatY": 1,
      "spaceX": 10,
      "spaceY": 10,
      "_$child": [
        {
          "_$id": "h457k5jv",
          "_$type": "Box",
          "name": "Box",
          "width": 200,
          "height": 200,
          "anchorX": 0,
          "anchorY": 0,
          "bgColor": "rgba(66, 80, 97, 1)",
          "_$child": [
            {
              "_$id": "tk17hc1y",
              "_$type": "Sprite",
              "name": "Sprite_Item",
              "x": 10,
              "y": 10,
              "width": 180,
              "height": 180,
              "anchorX": 0,
              "anchorY": 0
            }
          ]
        }
      ]
    },
    {
      "_$id": "b617bmie",
      "_$var": true,
      "_$type": "Button",
      "name": "Button_Clear",
      "x": 1306,
      "y": 871,
      "width": 246.29999999999998,
      "height": 82.10000000000001,
      "anchorX": 0,
      "anchorY": 0,
      "mouseEnabled": true,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "Clear",
      "labelSize": 50
    }
  ]
}