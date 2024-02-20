const t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",i=>{if(i.target!==t)return!1;let l=t.clientWidth-e.clientWidth,n=t.clientHeight-e.clientHeight,c=Math.min(Math.max(i.offsetX-e.clientWidth/2,0),l),h=Math.min(Math.max(i.offsetY-e.clientHeight/2,0),n);e.style.left=`${c}px`,e.style.top=`${h}px`});
//# sourceMappingURL=index.58efbdac.js.map
