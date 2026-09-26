function Crosshair(){const [p,setP]=React.useState(null);
React.useEffect(()=>{const m=e=>setP({x:e.clientX,y:e.clientY});const l=()=>setP(null);window.addEventListener('mousemove',m);document.addEventListener('mouseleave',l);return()=>{window.removeEventListener('mousemove',m);document.removeEventListener('mouseleave',l);};},[]);
if(!p)return null;const L={position:'fixed',background:'var(--blood-600)',pointerEvents:'none',zIndex:90,opacity:.55};
return <><span style={{...L,left:0,right:0,top:p.y,height:1}}></span><span style={{...L,top:0,bottom:0,left:p.x,width:1}}></span>
<span style={{position:'fixed',left:p.x+8,top:p.y+8,pointerEvents:'none',zIndex:91,font:'var(--text-micro)',color:'var(--blood-600)',letterSpacing:'var(--tr-micro)'}}>X:{String(p.x).padStart(4,'0')} / Y:{String(p.y).padStart(4,'0')}</span></>;}
function Strobe({on}){return on?<div style={{position:'fixed',inset:0,background:'var(--paper)',zIndex:95,pointerEvents:'none',animation:'y2k-strobe 600ms steps(1) forwards'}}></div>:null;}
Object.assign(window,{Crosshair,Strobe});