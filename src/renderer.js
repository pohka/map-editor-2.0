require("./helper.js");
require("./header-menu.js");

var mapData = 
{
  //meta data
  "project_name" : "sample",
  "tile_size" : 16, //pixels
  "chunk_size" : 32, //tiles per chunk

  //draw layers
  "draw_layers" :
  [
    {
      "name" : "ground",
      "order" : 0
    },
    {
      "name" : "wall",
      "order" : 1
    }
  ],

  //textures
  "textures" : 
  {
    0 : { //tex id = 0
      "name" : "img_1",
      "src" : "my_img.png",
    },
    1 : {
      "name" : "img_2",
      "src" : "other_image.png",
    }
  },

  //tiles ordered by texture key
  "tiles" :
  {
    0 : //tile id = 0
    {
      "name" : "img_1",
      "tex_x" : 0,
      "tex_y" : 0,
      "collision" : "rect" // rect / circle
    }
  },

  "chunks" :
  [
    {
      "x" : 0,
      "y" : 0,
      "textures_used" : [ 0 ], //texture ids used in this chunk
      "draw_layer" : 1,
      "map" :
      [
        [
          { "tex_id" : 0, "tile_id" : 0, "h" : 0 }, //h = height layer index for collision
          { "tex_id" : 0, "tile_id" : 0, "h" : 0 }
          //....
        ]
      ]
    }
  ],

  "entitys" :
  [
    {
      "x" : 0.0,
      "y" : 0.0,
      "h" : 0,
      "name" : "my_ent", //must be unique
      "components" : [
        //... todo: sprite, collision box and sprite animation
      ]
    }
  ]
  

};