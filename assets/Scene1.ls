{
  "_$ver": 1,
  "_$id": "4rogaovt",
  "_$runtime": "res://f85c40d7-ff15-42f0-b068-854f7b7c805a",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "usjtz3nn",
      "_$type": "Box",
      "name": "Box",
      "x": 675,
      "y": 97,
      "width": 570,
      "height": 410,
      "mouseEnabled": true,
      "centerX": 0,
      "centerY": 0,
      "_$child": [
        {
          "_$id": "9mb2ulb6",
          "_$var": true,
          "_$type": "TextArea",
          "name": "TextArea",
          "width": 25,
          "height": 410,
          "visible": false,
          "mouseEnabled": true,
          "centerY": 0,
          "text": "",
          "fontSize": 20,
          "color": "#A9A9A9",
          "overflow": "scroll",
          "leading": 0,
          "padding": "20,10,20,40",
          "skin": "res://9eb4836d-78c4-4be3-aa53-70a613fef28d",
          "sizeGrid": "10,12,10,12,0",
          "type": "text",
          "maxChars": 100000,
          "restrict": "",
          "prompt": "",
          "promptColor": "#A9A9A9",
          "scrollType": 2
        },
        {
          "_$id": "uscoia9d",
          "_$var": true,
          "_$type": "Button",
          "name": "Button_toggle",
          "x": -25,
          "width": 50,
          "height": 410,
          "mouseEnabled": true,
          "centerY": 0,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "sizeGrid": "17,39,16,33,0",
          "label": "",
          "labelSize": 20
        }
      ]
    },
    {
      "_$id": "2iny7cag",
      "_$var": true,
      "_$type": "List",
      "name": "List_card",
      "x": 505,
      "y": 702,
      "width": 911,
      "height": 200,
      "mouseEnabled": true,
      "repeatX": 1,
      "repeatY": 1,
      "spaceX": 20,
      "scrollType": 1,
      "itemRender": {
        "_$type": "any",
        "value": {
          "_$ver": 1,
          "_$id": "smd8ejwp",
          "_$var": true,
          "_$type": "Image",
          "name": "Card",
          "x": 85,
          "y": 100,
          "width": 100,
          "height": 100,
          "pivotX": 50,
          "pivotY": 50,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://59c09b6e-2c7c-4b6f-9c8b-d4f5a9ed0955",
          "_$comp": [
            {
              "_$type": "62596c95-8da3-4c2b-aaa1-e86b72841f41",
              "enabled": false,
              "scriptPath": "../src/FlipCard.ts",
              "frontImg": {
                "_$uuid": "59c09b6e-2c7c-4b6f-9c8b-d4f5a9ed0955",
                "_$type": "Texture"
              },
              "backImg": {
                "_$uuid": "59c09b6e-2c7c-4b6f-9c8b-d4f5a9ed0955",
                "_$type": "Texture"
              },
              "duration": 220
            }
          ]
        }
      }
    }
  ]
}