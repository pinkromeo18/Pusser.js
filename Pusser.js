/*v1.0*/

function makepusser(flg){
  const pussherclass="pussher"
  const column = flg?"column-reverse":"column"
  var el = document.createElement('div')
  el.className=pussherclass
  el.style=`display:flex;flex-direction:${column};`
  return el;
}

function isObject(value) {
  return value !== null && typeof value === 'object'
}

export function Pusser(target,use_reverse){
  if(!isObject(target)){
   target =document.getElementById(target)||document.body
  }
  var pusser = makepusser(use_reverse)
  target.appendChild(pusser)
  ;
  
  var o={}
  o.target=target;
  o.pusser=pusser;
  o.push = (html,cb)=>{
    var el=document.createElement('div')
    el.innerHTML=html
    if(cb) cb(el)
    pusser.appendChild(el)    
    return el
  }
  ;
  
  return o;
}


/*
//usage
var pusser2=Pusser("pre","reverse")

var pusser=Pusser("app");
//var pusser=Pusser();

;"a,b,c,d,e,f,g".split(',').map(d=>{
  var temp ="<button>"+d+"</button>"
  pusser.push(temp,el=>{
    el.onclick=()=>{
      pusser2.push("press "+d)
    }
  })
  
})
*/
