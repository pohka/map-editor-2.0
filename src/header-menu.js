const fs = require("fs");
const { dialog } = require("electron").remote;
let toast = require("./toast.js");

const dialogOptions = {
  filters: [
  { name: "json", extensions: ["json", "*"] }
]};

//new project
let fileBtn = document.getElementById("header-menu-file-new");
fileBtn.addEventListener("click", function(e){
  let content = "hello";
  dialog.showSaveDialog(dialogOptions,
    (fileName) => {
      //cancelled action
      if (fileName === undefined){
        toast.create("New project cancelled", toast.DURATION, toast.TYPE_DEFAULT);
        return;
      }

      //validate extention name
      const ext= "json";
      let strs = fileName.split(".");
      //no extention
      if(strs.length == 1)
      {
        fileName += "." + ext;
      }
      //incorrect extention
      else if(strs[strs.length-1] != ext)
      {
        strs[strs.length-1] = ext;
        fileName = strs.join(".");
      }

      // fileName is a string that contains the path and filename created in the save file dialog.  
      fs.writeFile(fileName, content, (err) => {
          if(err){
            toast.create("Failed to create project file", toast.DURATION, toast.TYPE_ERROR);
            console.log("An error ocurred creating the file "+ err.message)
          }
                      
          toast.create("New project created!", toast.DURATION, toast.TYPE_SUCCESS);
      });
    }
  ); 
});