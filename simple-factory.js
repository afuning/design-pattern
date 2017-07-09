// 通过类实例化对象创建
var bodyNode = document.body;
var LoginAlert = function (text) {
  this.content = text;
}
LoginAlert.prototype.show = function(text) {
  // 显示警示框
  this.content = text ? text : this.content;
  var popNode = document.getElementById('popDialog_alert');
  if (popNode) {
    popNode.style.display = 'block';
  } else {
    var popNode = document.createElement('div');
    popNode.id = 'popDialog_alert';
    popNode.style.position = 'fixed';
    popNode.style.width = '400px';
    popNode.style.height = '100px';
    popNode.style.top = '100px';
    popNode.style.left = '50%';
    popNode.style.marginLeft="-200px";
    popNode.style.border="1px solid #000";
    popNode.innerText = this.content;
    bodyNode.appendChild(popNode);
  }
}
LoginAlert.prototype.hide = function () {
  var popNode = document.getElementById('popDialog_alert');
  if (popNode) {
    popNode.style.display = "none";
  }
}

var LoginConfirm = function (text) {
  this.content = text;
}
LoginConfirm.prototype.show = function(text) {
  // 显示警示框
  this.content = text ? text : this.content;
  var popNode = document.getElementById('popDialog_confirm');
  if (popNode) {
    popNode.style.display = 'block';
  } else {
    var popNode = document.createElement('div');
    var buttonNode = document.createElement('button');
    popNode.id = 'popDialog_confirm';
    popNode.style.position = 'fixed';
    popNode.style.width = '400px';
    popNode.style.height = '100px';
    popNode.style.top = '100px';
    popNode.style.left = '50%';
    popNode.style.marginLeft="-200px";
    popNode.style.border="1px solid #000";
    popNode.innerText = this.content;
    buttonNode.innerText = '注册';
    popNode.appendChild(buttonNode);
    bodyNode.appendChild(popNode);
  }
}
LoginConfirm.prototype.hide = function () {
  var popNode = document.getElementById('popDialog_confirm');
  if (popNode) {
    popNode.style.display = "none";
  }
}
var LoginPrompt = function (text) {
  this.content = text;
}
LoginPrompt.prototype.show = function(text) {
  // 显示警示框
  this.content = text ? text : this.content;
  var popNode = document.getElementById('popDialog_confirm');
  if (popNode) {
    popNode.style.display = 'block';
  } else {
    popNode = document.createElement('div');
    var confirm = document.createElement('button');
    var cancel = document.createElement('button');
    var input = document.createElement('input');
    popNode.id = 'popDialog_confirm';
    popNode.style.position = 'fixed';
    popNode.style.width = '400px';
    popNode.style.height = '100px';
    popNode.style.top = '100px';
    popNode.style.left = '50%';
    popNode.style.marginLeft="-200px";
    popNode.style.border="1px solid #000";
    popNode.innerText = this.content;
    input.style.display = 'block';
    confirm.innerText = '确定';
    cancel.innerText = '取消';
    popNode.appendChild(input);
    popNode.appendChild(confirm);
    popNode.appendChild(cancel);
    bodyNode.appendChild(popNode);
  }
}
LoginPrompt.prototype.hide = function () {
  var popNode = document.getElementById('popDialog_confirm');
  if (popNode) {
    popNode.style.display = "none";
  }
}

function createPop (type, text) {
  var o = new Object();
  var id = 'popDialog_' + type + '_2';
  var popNode = document.getElementById(id);
  o.content = text;
  if (!popNode) {
    popNode = document.createElement('div');
    popNode.id = id;
    popNode.style.position = 'fixed';
    popNode.style.width = '400px';
    popNode.style.height = '100px';
    popNode.style.top = '100px';
    popNode.style.left = '50%';
    popNode.style.marginLeft="-200px";
    popNode.style.border="1px solid #000";
    popNode.innerText = o.content;
    popNode.style.display="none";
  }
  o.show = function () {
    popNode.style.display = "block";
  }
  o.hide = function () {
    popNode.style.display = "none";
  }
  if (type == 'alert') {
    bodyNode.appendChild(popNode);
  }
  if (type == 'confirm') {
    var bottonNode = document.createElement('button');
    bottonNode.innerText = '注册';
    popNode.appendChild(buttonNode);
    bodyNode.appendChild(popNode);
  }
  if (type == 'prompt') {
    var confirm = document.createElement('button');
    var cancel = document.createElement('button');
    var input = document.createElement('input');
    confirm.innerText = '确定';
    cancel.innerText = '取消';
    popNode.appendChild(input);
    popNode.appendChild(confirm);
    popNode.appendChild(cancel);
    bodyNode.appendChild(popNode);
  }
  return o;
}

var PopFactory = function (name, text) {
  switch (name) {
    case 'alert':
      return new LoginAlert(text);
    case 'confirm':
      return new LoginConfirm(text);
    case "prompt":
      return new LoginPrompt(text);
  }
}
