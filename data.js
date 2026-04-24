var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -0.013425825046025963,
        "pitch": 0.005639270480301661,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.6167043955532412,
          "pitch": 0.20835851243721137,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": 1.5842216597988532,
          "pitch": 0.04149951183603662,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.6183100829870014,
          "pitch": 0.07599604427341866,
          "rotation": 4.71238898038469,
          "target": "3-play-area"
        },
        {
          "yaw": 2.43427582539105,
          "pitch": 0.05982616895202142,
          "rotation": 1.5707963267948966,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 1.9669321623877227,
          "pitch": 0.03396447976548167,
          "rotation": 1.5707963267948966,
          "target": "6-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.09959546069760705,
          "pitch": 0.03313146123332089,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.2771847568377535,
          "pitch": 0.10341143876078718,
          "rotation": 3.141592653589793,
          "target": "3-play-area"
        },
        {
          "yaw": 1.2998374105200998,
          "pitch": 0.03182417189432485,
          "rotation": 7.853981633974483,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 0.5830335315866204,
          "pitch": 0.029650975869353502,
          "rotation": 1.5707963267948966,
          "target": "6-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0071269036897335
      },
      "linkHotspots": [
        {
          "yaw": -1.3728002246024573,
          "pitch": 0.22505383698503323,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": -1.3910709739386196,
          "pitch": 0.11084481132791524,
          "rotation": 3.141592653589793,
          "target": "0-living-room"
        },
        {
          "yaw": -0.6372731496417074,
          "pitch": 0.03900124138453087,
          "rotation": 1.5707963267948966,
          "target": "3-play-area"
        },
        {
          "yaw": -1.9997349913369078,
          "pitch": 0.040486372611153953,
          "rotation": 4.71238898038469,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 2.9997082718398325,
          "pitch": 0.07961026588305664,
          "rotation": 3.141592653589793,
          "target": "6-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-play-area",
      "name": "Play Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.035574551770835
      },
      "linkHotspots": [
        {
          "yaw": 3.0366989140026774,
          "pitch": 0.04007585908951228,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": -2.984999620896888,
          "pitch": 0.029193191139949448,
          "rotation": 1.5707963267948966,
          "target": "0-living-room"
        },
        {
          "yaw": -3.1342587493623117,
          "pitch": 0.00972751302657926,
          "rotation": 7.853981633974483,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -0.01841999546241979,
        "pitch": 0.011321690679601204,
        "fov": 1.1497160704539988
      },
      "linkHotspots": [
        {
          "yaw": -2.104635215788255,
          "pitch": -0.02036356276575546,
          "rotation": 4.71238898038469,
          "target": "0-living-room"
        },
        {
          "yaw": -0.9594898059257595,
          "pitch": -0.02609527107069276,
          "rotation": 9.42477796076938,
          "target": "5-master-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bath",
      "name": "Master Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1499631691185195
      },
      "linkHotspots": [
        {
          "yaw": 1.5856002568986316,
          "pitch": 0.2543572670175287,
          "rotation": 3.141592653589793,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.149726643339705
      },
      "linkHotspots": [
        {
          "yaw": -1.5274203567857434,
          "pitch": 0.04238851610682026,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Aspen Plan #22055-01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
