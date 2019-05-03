// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require("fs");
const { dialog } = require("electron").remote;

Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
      }
  }
}

var AUTO_INC_ID = 0;

function toast(msg, duration, type)
{
  let container = document.getElementById("toast-con");
  let el = document.createElement("div");
  el.textContent = msg;
  if(type === undefined || type == 0)
  {
    el.className = "toast toast-success";
  }
  if(type == 1)
  {
    el.className = "toast toast-error";
  }

  const id = "toast_" + AUTO_INC_ID;
  el.id = id;
  AUTO_INC_ID++;
  
  container.appendChild(el);

  if(duration === undefined)
  {
    duration = 5;
  }

  //destroy after duration
  setTimeout(function(){ 
    let query = document.getElementById(id);
    if(query !== null)
    {
      query.remove();
    }
   }, duration * 1000);
}

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
        toast("New project cancelled", 2);
        return;
      }

      const ext= "json";
      //no extention
      let strs = fileName.split(".");
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
            toast("Failed to create project file", 5, 1);
            console.log("An error ocurred creating the file "+ err.message)
          }
                      
          toast("New project created!");
      });
    }
  ); 
});