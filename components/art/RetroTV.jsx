import React from 'react';
function Noise({on}){const ref=React.useRef(null);
  React.useEffect(()=>{if(!on)return;const c=ref.current;const x=c.getContext('2d');const img=x.createImageData(96,72);let raf;
    const f=()=>{for(let i=0;i<img.data.length;i+=4){const v=Math.random()*255|0;img.data[i]=img.data[i+1]=img.data[i+2]=v;img.data[i+3]=255;}x.putImageData(img,0,0);raf=requestAnimationFrame(f);};f();return()=>cancelAnimationFrame(raf);},[on]);
  return <canvas ref={ref} width="96" height="72" style={{position:'absolute',inset:0,width:'100%',height:'100%',imageRendering:'pixelated',opacity:on?1:0,transition:'opacity 60ms'}}></canvas>;}
export function RetroTV({channels=[{text:'your>party'}],interval=3200,width=420,style}){
  const [ch,setCh]=React.useState(0);const [st,setSt]=React.useState(false);const [knob,setKnob]=React.useState(0);
  const next=React.useCallback(()=>{setSt(true);setKnob(k=>k+45);setTimeout(()=>{setCh(c=>(c+1)%channels.length);},140);setTimeout(()=>setSt(false),320);},[channels.length]);
  React.useEffect(()=>{if(!interval||channels.length<2)return;const t=setInterval(next,interval);return()=>clearInterval(t);},[interval,next,channels.length]);
  const c=channels[ch]||{};const u=width/420;
  const silver='linear-gradient(180deg,#f2f2f2 0%,#bdbdbd 18%,#e8e8e8 50%,#8e8e8e 88%,#d0d0d0 100%)';
  return <div style={{position:'relative',width,paddingTop:150*u,...style}}>
    <div style={{position:'absolute',left:'50%',top:150*u-14*u,width:64*u,height:16*u,marginLeft:10*u,background:'#141414',borderRadius:'3px 3px 0 0'}}>
      <span style={{position:'absolute',left:'40%',bottom:'100%',width:1.5,height:170*u,background:'linear-gradient(#222,#777)',transformOrigin:'bottom',transform:'rotate(-22deg)'}}></span>
      <span style={{position:'absolute',left:'60%',bottom:'100%',width:1.5,height:170*u,background:'linear-gradient(#222,#777)',transformOrigin:'bottom',transform:'rotate(24deg)'}}></span>
    </div>
    <div style={{position:'relative',background:silver,borderRadius:22*u,padding:9*u,boxShadow:'var(--shadow-object)'}}>
      <div style={{display:'flex',gap:12*u,background:'#1a1a1a',borderRadius:15*u,padding:12*u,boxShadow:'inset 0 2px 0 #000,inset 0 -1px 0 #444'}}>
        <div onClick={next} style={{position:'relative',flex:1,aspectRatio:'4/3',borderRadius:'18% / 22%',overflow:'hidden',cursor:'pointer',background:'radial-gradient(ellipse at 50% 45%,#e8402f 0%,#c41e2a 45%,#7a0e18 100%)',boxShadow:'0 0 0 5px #0b0b0b,0 0 0 7px #6a6a6a,inset 0 0 50px rgba(0,0,0,.65)'}}>
          <div key={ch} style={{position:'absolute',inset:0,display:'grid',placeItems:'center',animation:'y2k-tv-on 300ms var(--ease-out) both'}}>
            {c.src?<img src={c.src} alt="" style={{width:'100%',height:'100%',objectFit:'cover',filter:'var(--filter-duotone-red)',mixBlendMode:'screen'}}/>:
            <span style={{font:'400 '+(44*u)+'px/1 var(--font-geo)',color:'var(--paper)',letterSpacing:'-.02em',textShadow:'0 0 12px rgba(255,255,255,.5)'}}>{c.text}</span>}
          </div>
          <Noise on={st}/>
          <span style={{position:'absolute',left:0,right:0,top:0,height:'22%',background:'linear-gradient(transparent,rgba(255,255,255,.14),transparent)',animation:'y2k-roll 4.5s linear infinite',pointerEvents:'none'}}></span>
          <span style={{position:'absolute',inset:0,background:'var(--pattern-scanline)',pointerEvents:'none'}}></span>
          <span style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 28% 18%,rgba(255,255,255,.35) 0%,rgba(255,255,255,0) 38%)',pointerEvents:'none'}}></span>
        </div>
        <div style={{width:78*u,display:'flex',flexDirection:'column',alignItems:'center',gap:10*u,paddingTop:6*u}}>
          <button aria-label="Next channel" onClick={next} style={{width:58*u,height:58*u,borderRadius:'50%',border:'none',cursor:'pointer',background:'repeating-conic-gradient(#2a2a2a 0 6deg,#4a4a4a 6deg 12deg)',boxShadow:'0 0 0 4px #bdbdbd,0 0 0 5px #555',position:'relative',padding:0}}>
            <span style={{position:'absolute',inset:'22%',borderRadius:'50%',background:silver,transform:'rotate('+knob+'deg)',transition:'transform var(--dur-base) var(--ease-snap)'}}><span style={{position:'absolute',left:'50%',top:'8%',width:4*u,height:'42%',marginLeft:-2*u,background:'#222'}}></span></span>
          </button>
          <span style={{width:6*u,height:6*u,borderRadius:'50%',background:'#ff2a1a',boxShadow:'0 0 6px #ff2a1a',animation:'y2k-led 1.6s steps(1) infinite'}}></span>
          <span style={{width:'100%',flex:1,minHeight:60*u,background:'var(--pattern-grille)',borderRadius:3}}></span>
          <span style={{display:'flex',gap:8*u,paddingBottom:4*u}}>{[0,1,2].map(i=><span key={i} style={{width:9*u,height:9*u,borderRadius:'50%',background:'#111',boxShadow:'0 0 0 1.5px #888'}}></span>)}</span>
        </div>
      </div>
    </div>
    <div style={{width:'80%',height:12*u,margin:'0 auto',background:'#141414',borderRadius:'0 0 3px 3px'}}></div>
  </div>;
}