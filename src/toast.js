var AUTO_INC_ID = 0;

var self = module.exports = {


/** default toast theme*/
TYPE_DEFAULT : 0,
/** success toast theme*/
TYPE_SUCCESS : 1,
/** error toast theme*/
TYPE_ERROR : 2,

/** default toast duration*/
DURATION : 5, 

/**
 * Creates a toast notification
 * @param {string} msg - message
 * @param {number} [duration] - display time in seconds
 * @param {number} [type] - msg type
 */
create : function(msg, duration, type)
{
  let container = document.getElementById("toast-con");
  let el = document.createElement("div");
  el.textContent = msg;
  if(type === undefined || type == self.TYPE_DEFAULT)
  {
    el.className = "toast";
  }
  else if(type == self.TYPE_SUCCESS)
  {
    el.className = "toast toast-success";
  }
  else if(type == self.TYPE_ERROR)
  {
    el.className = "toast toast-error";
  }

  const id = "toast_" + AUTO_INC_ID;
  el.id = id;
  AUTO_INC_ID++;
  
  container.appendChild(el);

  if(duration === undefined)
  {
    duration = self.DURATION;
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
};