function GalleryScreen(){const {Polaroid,ShardBurst,GlitchText}=window.Y2KPartyDesignSystem_2620e7;
const groups=[['NYC','HOUSE PARTY','BROOKLYN - NEW YORK'],['ATL','WAREHOUSE','WESTSIDE - ATLANTA'],['LA','ROOFTOP','DOWNTOWN - LOS ANGELES'],['HNL','BEACH HOUSE','NORTH SHORE - HONOLULU']];
const dates=['8/28','8/14','7/11','8/19','6/30'];
const all=Array.from({length:21},(_,i)=>({n:String(i+1).padStart(2,'0'),c:groups[i%4][0],s:dates[i%5]}));
const [f,setF]=React.useState('ALL');const list=f==='ALL'?all:all.filter(p=>p.c===f);
const L=(k,label)=><a href="#" onClick={e=>{e.preventDefault();setF(k)}} style={{color:f===k?'var(--ink)':'var(--blood-600)',textDecoration:'none',font:'700 11px/1.5 var(--font-display)',background:f===k?'var(--bone-200)':'transparent'}}>{label}</a>;
return <main style={{background:'var(--paper)',minHeight:760}}>
<div style={{position:'relative',height:300,overflow:'hidden'}}><div style={{position:'absolute',inset:-30}}><ShardBurst key={f} palette="paper" seed={f.length*7+3} density={120} originX={78} originY={55} spread={200} rotate={190}/></div>
<div style={{position:'absolute',left:'var(--gutter-page)',bottom:12,pointerEvents:'none'}}><GlitchText as="h1" speed={3.6} style={{margin:0,font:'var(--text-mega)',letterSpacing:'var(--tr-mega)',color:'var(--ink)'}}>Gallery<span style={{color:'var(--blood-600)'}}>.</span></GlitchText></div></div>
<div style={{display:'grid',gridTemplateColumns:'240px minmax(0,1fr)',gap:40,padding:'30px var(--gutter-page) 60px'}}>
<aside style={{display:'flex',flexDirection:'column',gap:18,borderRight:'1px dashed var(--ink)',paddingRight:20}}>
<div><b style={{font:'var(--text-label)'}}>SHORT SELECTION OF NIGHTS</b><div style={{font:'var(--text-micro)',color:'var(--smoke-500)',marginTop:3}}>{list.length} PHOTOS · 600 PIXELS</div></div>
{L('ALL','_ALL (21)')}
{groups.map(([k,t,s])=><div key={k} style={{display:'flex',flexDirection:'column'}}><b style={{font:'800 11px/1.1 var(--font-display)'}}>{t}</b><span style={{font:'var(--text-micro)',marginBottom:4}}>{s}</span>{L(k,'_'+k+'_A (600 PIXELS) (1200)')}</div>)}
</aside>
<div key={f} style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'24px 14px',animation:'y2k-tv-on 380ms var(--ease-out) both'}}>
{list.map(p=><Polaroid key={p.n} mono src={'../../assets/imagery/flash-'+p.n+'.png'} scrawl={p.s} caption={'IMG_08'+p.n+' · '+p.c} width="100%"/>)}</div></div>
</main>;}
window.GalleryScreen=GalleryScreen;