parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,l=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw a}}}}function t(e){return a(e)||o(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector("thead"),c=document.querySelector("tbody"),u=document.createElement("form"),s=null,d=!1,f=function(e,t,n){var r=document.createElement("div");r.className="notification ".concat(n),r.innerHTML='\n    <h2 class="title">'.concat(e,"</h2>\n    <p>").concat(t,"</p>\n  "),r.dataset.qa="notification",document.body.append(r),r.style.top=(document.documentElement.clientHeight-r.clientHeight)/2+window.pageYOffset+"px",r.style.right=(document.documentElement.clientWidth-r.clientWidth)/2+window.pageXOffset+"px",setTimeout(function(){return r.remove()},2e3)};function m(e){var n=e.target.closest("th");if(n){var r=t(c.rows);s===n.cellIndex?(r.reverse(),s=null):("Salary"===n.textContent?r.sort(function(e,t){return p(e.cells[n.cellIndex].textContent)-p(t.cells[n.cellIndex].textContent)}):r.sort(function(e,t){return e.cells[n.cellIndex].textContent.localeCompare(t.cells[n.cellIndex].textContent)}),s=n.cellIndex),r.forEach(function(e){return c.append(e)})}}function p(e){return+e.split("").filter(function(e){return"0123456789".includes(e)}).join("")}function y(e){var n=e.target.closest("tr");n&&t(c.rows).forEach(function(e){return e===n?e.classList.add("active"):e.classList.remove("active")})}function v(t){t.preventDefault();var n=document.createElement("tr"),r=u.querySelector('[name="name"]').value.trim(),o=u.querySelector('[name="position"]').value.trim(),a=u.querySelector('[name="office"]').value,l=u.querySelector('[name="age"]').value,i=u.querySelector('[name="salary"]').value,s=u.querySelectorAll("input");if(r&&o&&a&&l&&i)if(r.length<4)f("Input error","Name has less than 4 letters.","error");else if(l<18||l>90)f("Input error","Age is less than 18 or more than 90.","error");else{n.innerHTML="\n    <td>".concat(r,"</td>\n    <td>").concat(o,"</td>\n    <td>").concat(a,"</td>\n    <td>").concat(l,"</td>\n    <td>").concat("$"+(+i).toLocaleString("en-US"),"</td>\n  "),c.append(n),u.querySelector('[name="office"]').firstElementChild.selected=!0;var d,m=e(s);try{for(m.s();!(d=m.n()).done;){d.value.value=""}}catch(p){m.e(p)}finally{m.f()}f("New employee added","Data has been successfully added to the table.","success")}else f("Input error","All fields are required.","error")}function b(e){var t=e.target.closest("td");if(t&&!d){d=!0;var n=t.textContent;t.innerHTML='\n    <input type="text" value="'.concat(n,'" class="cell-input">\n  '),t.firstElementChild.focus(),t.firstElementChild.onblur=function(){var e=t.firstElementChild.value.trim();t.firstElementChild.remove(),e.length?t.textContent=e:t.textContent=n,d=!1},t.firstElementChild.onkeydown=function(e){"Enter"===e.key&&t.firstElementChild.blur()}}}u.className="new-employee-form",u.innerHTML='\n  <label>\n    Name:\n    <input name="name" type="text" data-qa="name">\n  </label>\n  <label>\n    Position:\n    <input name="position" type="text" data-qa="position">\n  </label>\n  <label>\n    Office:\n    <select name="office" data-qa="office">\n      <option value="" disabled selected>Сhoose an office</option>\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>\n    Age:\n    <input name="age" type="number" data-qa="age">\n  </label>\n  <label>\n    Salary:\n    <input name="salary" type="number" data-qa="salary">\n  </label>\n  <button type="submit">Save to table</button>\n',document.querySelector("table").after(u),i.addEventListener("click",m),c.addEventListener("click",y),u.addEventListener("submit",v),c.addEventListener("dblclick",b);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.724887a9.js.map