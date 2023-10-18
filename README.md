# Pusser.js
### demo https://codepen.io/pinkromeo/pen/RwEXbNd?editors=1010
```js
import {Pusser} from "https://pinkromeo18.github.io/Pusser.js/Pusser.js"
//usage
var pu=Pusser(document.body,"reverse")
//var pu=Pusser(document.body)
pu.push("aaaa")
pu.push("xxxx",el=>{
  el.style.color="red"
  console.log(el)
})
```
# create dom
```html
<div class="pussher" style="display: flex; flex-direction: column-reverse;">
  <div>aaaa</div>
  <div style="color: red;">xxxx</div>
</div>
```
