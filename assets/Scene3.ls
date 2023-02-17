{
  "_$ver": 1,
  "_$id": "9xtb4h94",
  "_$runtime": "res://273ead01-cee8-44dd-a807-4b58ea509ab0",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "su805o09",
      "_$type": "Box",
      "name": "Box",
      "x": 60,
      "y": 40,
      "width": 1800,
      "height": 1000,
      "mouseEnabled": true,
      "centerX": 0,
      "centerY": 0,
      "_$child": [
        {
          "_$id": "1n83s5al",
          "_$type": "Box",
          "name": "Box_bag",
          "x": 2.842170943040401e-14,
          "y": 1.4210854715202004e-14,
          "width": 700,
          "height": 1000,
          "mouseEnabled": true,
          "bgColor": "rgba(227, 227, 194, 1)",
          "_$child": [
            {
              "_$id": "oknfpsrl",
              "_$var": true,
              "_$type": "List",
              "name": "List_bag",
              "x": 20,
              "y": 10,
              "width": 660,
              "height": 980,
              "mouseEnabled": true,
              "centerX": 0,
              "centerY": 0,
              "repeatX": 6,
              "repeatY": 8,
              "elasticEnabled": true,
              "spaceX": 10,
              "spaceY": 12,
              "scrollType": 2,
              "selectEnable": true,
              "itemRender": {
                "_$type": "any",
                "value": {
                  "_$ver": 1,
                  "_$id": "2o5jphub",
                  "_$type": "Box",
                  "name": "Box",
                  "width": 100,
                  "height": 120,
                  "_$child": [
                    {
                      "_$id": "va0y5y7t",
                      "_$type": "Sprite",
                      "name": "e_bg",
                      "width": 100,
                      "height": 120,
                      "_gcmds": [
                        {
                          "_$type": "DrawRectCmd",
                          "x": 0,
                          "y": 0,
                          "width": 1,
                          "height": 1,
                          "percent": true,
                          "lineWidth": 1,
                          "lineColor": "#000000",
                          "fillColor": "rgba(179, 184, 23, 1)"
                        }
                      ]
                    },
                    {
                      "_$id": "vkfdjloa",
                      "_$type": "Image",
                      "name": "e_img",
                      "x": 10,
                      "y": 5,
                      "width": 80,
                      "height": 80,
                      "centerX": 0,
                      "skin": "res://60c01f4d-9e2b-4b65-ba94-29dc773d6687"
                    },
                    {
                      "_$id": "uwzon2o8",
                      "_$type": "Label",
                      "name": "e_name",
                      "y": 92,
                      "width": 100,
                      "height": 28,
                      "left": 0,
                      "right": 0,
                      "bottom": 0,
                      "text": "绿帽",
                      "fontSize": 18,
                      "color": "#FFFFFF",
                      "align": "center",
                      "valign": "middle",
                      "leading": 0,
                      "padding": "0,0,0,0"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "_$id": "x6026wot",
          "_$type": "Box",
          "name": "Box",
          "x": 731,
          "width": 1069,
          "height": 1000,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "_$child": [
            {
              "_$id": "t42oronw",
              "_$var": true,
              "_$type": "Sprite",
              "name": "Sprite_head",
              "x": 507,
              "y": 208,
              "width": 120,
              "height": 120,
              "_gcmds": [
                {
                  "_$type": "DrawRectCmd",
                  "x": 0,
                  "y": 0,
                  "width": 1,
                  "height": 1,
                  "percent": true,
                  "lineWidth": 5,
                  "lineColor": "rgba(55, 55, 47, 1)",
                  "fillColor": "rgba(179, 179, 179, 1)"
                }
              ],
              "_$child": [
                {
                  "_$id": "df48ypu6",
                  "_$var": true,
                  "_$type": "Image",
                  "name": "groove_head",
                  "x": 10,
                  "y": 10,
                  "width": 100,
                  "height": 100,
                  "centerX": 0,
                  "centerY": 0
                }
              ]
            },
            {
              "_$id": "yv5mpr8a",
              "_$var": true,
              "_$type": "Sprite",
              "name": "Sprite_body",
              "x": 507,
              "y": 448,
              "width": 120,
              "height": 120,
              "_gcmds": [
                {
                  "_$type": "DrawRectCmd",
                  "x": 0,
                  "y": 0,
                  "width": 1,
                  "height": 1,
                  "percent": true,
                  "lineWidth": 5,
                  "lineColor": "rgba(55, 55, 47, 1)",
                  "fillColor": "rgba(179, 179, 179, 1)"
                }
              ],
              "_$child": [
                {
                  "_$id": "xjdpqu1y",
                  "_$var": true,
                  "_$type": "Image",
                  "name": "groove_body",
                  "x": 10,
                  "y": 10,
                  "width": 100,
                  "height": 100,
                  "centerX": 0,
                  "centerY": 0
                }
              ]
            },
            {
              "_$id": "079fiy9y",
              "_$var": true,
              "_$type": "Sprite",
              "name": "Sprite_hand",
              "x": 237,
              "y": 448,
              "width": 120,
              "height": 120,
              "_gcmds": [
                {
                  "_$type": "DrawRectCmd",
                  "x": 0,
                  "y": 0,
                  "width": 1,
                  "height": 1,
                  "percent": true,
                  "lineWidth": 5,
                  "lineColor": "rgba(55, 55, 47, 1)",
                  "fillColor": "rgba(179, 179, 179, 1)"
                }
              ],
              "_$child": [
                {
                  "_$id": "ij6snofm",
                  "_$var": true,
                  "_$type": "Image",
                  "name": "groove_hand",
                  "x": 10,
                  "y": 10,
                  "width": 100,
                  "height": 100,
                  "centerX": 0,
                  "centerY": 0
                }
              ]
            },
            {
              "_$id": "qghchys0",
              "_$var": true,
              "_$type": "Sprite",
              "name": "Sprite_foot",
              "x": 507,
              "y": 688,
              "width": 120,
              "height": 120,
              "_gcmds": [
                {
                  "_$type": "DrawRectCmd",
                  "x": 0,
                  "y": 0,
                  "width": 1,
                  "height": 1,
                  "percent": true,
                  "lineWidth": 5,
                  "lineColor": "rgba(55, 55, 47, 1)",
                  "fillColor": "rgba(179, 179, 179, 1)"
                }
              ],
              "_$child": [
                {
                  "_$id": "dd4rou8l",
                  "_$var": true,
                  "_$type": "Image",
                  "name": "groove_foot",
                  "x": 10,
                  "y": 10,
                  "width": 100,
                  "height": 100,
                  "centerX": 0,
                  "centerY": 0
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}