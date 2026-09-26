function RsvpScreen(){const {Input,Select,Checkbox,Radio,Switch,Button,Dialog,Toast,Card,ShardBurst,GlitchText}=window.Y2KPartyDesignSystem_2620e7;
const [name,setName]=React.useState('');const [email,setEmail]=React.useState('');const [err,setErr]=React.useState('');const [open,setOpen]=React.useState(false);const [toast,setToast]=React.useState(false);const [strobe,setStrobe]=React.useState(false);
const submit=e=>{e.preventDefault();if(!/.+@.+\..+/.test(email)){setErr("That's not an email");return;}setErr('');setStrobe(true);setTimeout(()=>{setStrobe(false);setOpen(true)},600);};
return <main style={{position:'relative',minHeight:760,overflow:'hidden',background:'var(--crimson-950)',padding:'48px var(--gutter-page)'}}>
<img src="../../assets/art/crimson-abstract.png" alt="" style={{position:'absolute',right:0,top:0,height:'100%',width:'62%',objectFit:'cover'}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,var(--crimson-950) 30%,rgba(14,3,10,.4) 70%,rgba(14,3,10,0) 100%)'}}></div>
<div style={{position:'absolute',right:-60,top:-40,width:'70%',height:'110%',mixBlendMode:'screen'}}><ShardBurst palette="crimson" seed={12} density={90} originX={75} originY={35} background={false}/></div>
<div style={{position:'relative',display:'flex',gap:50,flexWrap:'wrap',alignItems:'flex-start'}}>
<form onSubmit={submit} style={{width:'min(480px,100%)'}}><Card variant="ink" title="Get on the list" code="RSVP.01" style={{background:'rgba(10,7,8,.8)'}}>
<div style={{display:'flex',flexDirection:'column',gap:18}}>
<Input dark label="Name on the list" code="F.01" placeholder="First + last" value={name} onChange={e=>setName(e.target.value)}/>
<Input dark label="Email" code="F.02" placeholder="you@aol.com" value={email} onChange={e=>setEmail(e.target.value)} error={err} hint="Address drops here at 9PM"/>
<Select dark label="City" options={['NYC','ATL','LA','Honolulu']}/>
<Radio dark name="night" options={['Fri','Sat','Both']} defaultValue="Sat"/>
<div style={{display:'flex',gap:24,flexWrap:'wrap'}}><Checkbox dark label="+1 coming"/><Switch dark label="Text me"/></div>
<div><Button type="submit" variant="flash" size="lg" arrow>Put me on</Button></div>
</div></Card></form>
<div style={{position:'relative',paddingTop:30}}><GlitchText speed={2.6} style={{font:'var(--text-slant)',fontStretch:'62%',fontSize:150,color:'var(--bone-100)'}}>put me<br/>on<span style={{color:'var(--blood-600)'}}>.</span></GlitchText>
<span style={{position:'absolute',left:140,top:90,font:'400 260px/1 var(--font-script)',color:'var(--blood-600)',mixBlendMode:'screen',animation:'y2k-drift 2.8s ease-in-out infinite alternate',pointerEvents:'none'}}>M</span></div>
</div>
<Strobe on={strobe}/>
<Dialog open={open} onClose={()=>setOpen(false)} title="yourparty.net - you're on the list" actions={<Button variant="classic" onClick={()=>{setOpen(false);setToast(true);setTimeout(()=>setToast(false),3000)}}>OK</Button>}>
<div style={{font:'900 44px/.86 var(--font-display)',letterSpacing:'-.06em',marginBottom:8}}>{name||'You'}<span style={{color:'var(--blood-600)'}}>.</span></div>
Show your hand at the door. We write <b style={{color:'var(--blood-600)'}}>8/28</b> on it.</Dialog>
{toast&&<div style={{position:'fixed',right:20,bottom:20,zIndex:120}}><Toast onClose={()=>setToast(false)}>Confirmation sent to {email}</Toast></div>}
</main>;}
window.RsvpScreen=RsvpScreen;