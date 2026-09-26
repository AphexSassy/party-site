/* @ds-bundle: {"format":4,"namespace":"Y2KPartyDesignSystem_2620e7","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"GlitchText","sourcePath":"components/art/GlitchText.jsx"},{"name":"RetroTV","sourcePath":"components/art/RetroTV.jsx"},{"name":"ShardBurst","sourcePath":"components/art/ShardBurst.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Polaroid","sourcePath":"components/display/Polaroid.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"IndexLink","sourcePath":"components/navigation/IndexLink.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ThumbNav","sourcePath":"components/navigation/ThumbNav.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"ce17ed492ffa","components/actions/IconButton.jsx":"8fe7296cfa86","components/art/GlitchText.jsx":"b48916e8a59c","components/art/RetroTV.jsx":"e92947d1b1db","components/art/ShardBurst.jsx":"f307ab012e89","components/display/Badge.jsx":"e3197a0722ab","components/display/Card.jsx":"c4584ba6629e","components/display/Polaroid.jsx":"0064db7a8bcf","components/display/Tag.jsx":"6fe311df5bdc","components/feedback/Dialog.jsx":"b8a4000759bd","components/feedback/Toast.jsx":"bd35139faaeb","components/feedback/Tooltip.jsx":"c97bee155f6a","components/forms/Checkbox.jsx":"7f2a89d1cdf2","components/forms/Input.jsx":"0474355e5004","components/forms/Radio.jsx":"451d07113039","components/forms/Select.jsx":"483137bcaa38","components/forms/Switch.jsx":"2a4db91cb5bb","components/navigation/IndexLink.jsx":"463ecece6ace","components/navigation/NavLink.jsx":"a6c6e49a379c","components/navigation/Tabs.jsx":"4f6799d24d2d","components/navigation/ThumbNav.jsx":"b6e89adf9d45","ui_kits/party-site/FX.jsx":"c6c8fc6085e5","ui_kits/party-site/Footer.jsx":"409ab983f020","ui_kits/party-site/Gallery.jsx":"c9e267d4d6da","ui_kits/party-site/Header.jsx":"91802993742c","ui_kits/party-site/Home.jsx":"9367f0f292a5","ui_kits/party-site/Lineup.jsx":"f3249932626c","ui_kits/party-site/Rsvp.jsx":"ec1534475e7d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Y2KPartyDesignSystem_2620e7 = window.Y2KPartyDesignSystem_2620e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '7px 16px 6px 12px',
    fontSize: 14
  },
  md: {
    padding: '11px 26px 10px 16px',
    fontSize: 18
  },
  lg: {
    padding: '15px 38px 13px 22px',
    fontSize: 26
  }
};
const CUT = 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))';
const VARIANTS = {
  primary: {
    bg: 'var(--blood-600)',
    fg: 'var(--paper)',
    echo: 'var(--ink)',
    line: 'none'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--blood-600)',
    echo: 'transparent',
    line: 'var(--blood-600)'
  },
  flash: {
    bg: 'var(--paper)',
    fg: 'var(--ink)',
    echo: 'var(--blood-600)',
    line: 'none'
  },
  orange: {
    bg: 'var(--orange-500)',
    fg: 'var(--paper)',
    echo: 'var(--ink)',
    line: 'none'
  },
  ghost: {
    bg: 'transparent',
    fg: 'currentColor',
    echo: 'transparent',
    line: 'none'
  }
};
function Classic({
  children,
  disabled,
  onClick,
  type,
  style,
  rest
}) {
  const [d, setD] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: () => setD(true),
    onMouseUp: () => setD(false),
    onMouseLeave: () => setD(false),
    style: {
      background: 'var(--win-face)',
      color: disabled ? 'var(--win-shadow)' : 'var(--ink)',
      border: 'none',
      borderRadius: 0,
      padding: d ? '5px 11px 3px 13px' : '4px 12px',
      minWidth: 48,
      font: 'var(--text-os)',
      boxShadow: d ? 'var(--shadow-bevel-in)' : 'var(--shadow-bevel-out)',
      cursor: disabled ? 'default' : 'pointer',
      outline: 'none',
      ...style
    }
  }, rest), children);
}
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  index,
  disabled = false,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [d, setD] = React.useState(false);
  if (variant === 'classic') return /*#__PURE__*/React.createElement(Classic, {
    children,
    disabled,
    onClick,
    type,
    style,
    rest
  });
  const v = VARIANTS[variant] || VARIANTS.primary;
  const act = !disabled;
  const shift = d && act ? 'translate(0,0)' : h && act ? 'translate(-3px,-3px)' : 'translate(-1px,-1px)';
  const outlineHover = h && act && variant === 'secondary';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setD(false);
    },
    onMouseDown: () => setD(true),
    onMouseUp: () => setD(false),
    style: {
      position: 'relative',
      isolation: 'isolate',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: act ? 'pointer' : 'not-allowed',
      opacity: disabled ? .35 : 1,
      color: v.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      transform: 'translate(5px,5px)',
      background: v.echo,
      clipPath: CUT,
      zIndex: -1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...SIZES[size],
      background: outlineHover ? 'var(--blood-600)' : v.bg,
      color: outlineHover ? 'var(--paper)' : v.fg,
      clipPath: CUT,
      boxShadow: v.line === 'none' ? 'none' : 'inset 0 0 0 2px ' + v.line,
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      lineHeight: 1,
      transform: shift,
      transition: 'transform var(--dur-fast) var(--ease-snap)',
      animation: h && act ? 'y2k-glitch var(--dur-base) var(--ease-glitch)' : 'none'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      opacity: .8
    }
  }, String(index).padStart(2, '0')), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '.8em'
    }
  }, "\u2198")));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  glyph = '↘',
  tone = 'red',
  size = 40,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const col = tone === 'white' ? 'var(--paper)' : tone === 'ink' ? 'var(--ink)' : 'var(--blood-600)';
  const fill = tone === 'white' ? 'var(--ink)' : 'var(--paper)';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 0,
      cursor: 'pointer',
      border: '2px solid ' + col,
      background: h ? col : 'transparent',
      color: h ? fill : col,
      fontFamily: 'var(--font-impact)',
      fontSize: size * .5,
      lineHeight: 1,
      transform: h ? 'rotate(-8deg)' : 'none',
      transition: 'background var(--dur-fast), color var(--dur-fast), transform var(--dur-fast) var(--ease-snap)',
      ...style
    }
  }, rest), glyph);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/art/GlitchText.jsx
try { (() => {
function GlitchText({
  children,
  as = 'span',
  color,
  glitch = 'var(--blood-600)',
  ghost = 'var(--ink)',
  speed = 3.4,
  shake = true,
  style
}) {
  const Tag = as;
  const base = {
    display: 'inline-block',
    position: 'relative',
    color,
    ...style
  };
  const clone = (c, anim, delay) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      color: c,
      animation: anim + ' ' + speed + 's steps(1) ' + delay + 's infinite',
      pointerEvents: 'none',
      whiteSpace: 'inherit'
    }
  }, children);
  return /*#__PURE__*/React.createElement(Tag, {
    style: base
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      animation: shake ? 'y2k-shake ' + speed + 's linear infinite' : 'none'
    }
  }, children), clone(glitch, 'y2k-slice-a', 0), clone(ghost, 'y2k-slice-b', .08));
}
Object.assign(__ds_scope, { GlitchText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/art/GlitchText.jsx", error: String((e && e.message) || e) }); }

// components/art/RetroTV.jsx
try { (() => {
function Noise({
  on
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!on) return;
    const c = ref.current;
    const x = c.getContext('2d');
    const img = x.createImageData(96, 72);
    let raf;
    const f = () => {
      for (let i = 0; i < img.data.length; i += 4) {
        const v = Math.random() * 255 | 0;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 255;
      }
      x.putImageData(img, 0, 0);
      raf = requestAnimationFrame(f);
    };
    f();
    return () => cancelAnimationFrame(raf);
  }, [on]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    width: "96",
    height: "72",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      imageRendering: 'pixelated',
      opacity: on ? 1 : 0,
      transition: 'opacity 60ms'
    }
  });
}
function RetroTV({
  channels = [{
    text: 'your>party'
  }],
  interval = 3200,
  width = 420,
  style
}) {
  const [ch, setCh] = React.useState(0);
  const [st, setSt] = React.useState(false);
  const [knob, setKnob] = React.useState(0);
  const next = React.useCallback(() => {
    setSt(true);
    setKnob(k => k + 45);
    setTimeout(() => {
      setCh(c => (c + 1) % channels.length);
    }, 140);
    setTimeout(() => setSt(false), 320);
  }, [channels.length]);
  React.useEffect(() => {
    if (!interval || channels.length < 2) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [interval, next, channels.length]);
  const c = channels[ch] || {};
  const u = width / 420;
  const silver = 'linear-gradient(180deg,#f2f2f2 0%,#bdbdbd 18%,#e8e8e8 50%,#8e8e8e 88%,#d0d0d0 100%)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      paddingTop: 150 * u,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 150 * u - 14 * u,
      width: 64 * u,
      height: 16 * u,
      marginLeft: 10 * u,
      background: '#141414',
      borderRadius: '3px 3px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '40%',
      bottom: '100%',
      width: 1.5,
      height: 170 * u,
      background: 'linear-gradient(#222,#777)',
      transformOrigin: 'bottom',
      transform: 'rotate(-22deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '60%',
      bottom: '100%',
      width: 1.5,
      height: 170 * u,
      background: 'linear-gradient(#222,#777)',
      transformOrigin: 'bottom',
      transform: 'rotate(24deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: silver,
      borderRadius: 22 * u,
      padding: 9 * u,
      boxShadow: 'var(--shadow-object)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12 * u,
      background: '#1a1a1a',
      borderRadius: 15 * u,
      padding: 12 * u,
      boxShadow: 'inset 0 2px 0 #000,inset 0 -1px 0 #444'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: next,
    style: {
      position: 'relative',
      flex: 1,
      aspectRatio: '4/3',
      borderRadius: '18% / 22%',
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'radial-gradient(ellipse at 50% 45%,#e8402f 0%,#c41e2a 45%,#7a0e18 100%)',
      boxShadow: '0 0 0 5px #0b0b0b,0 0 0 7px #6a6a6a,inset 0 0 50px rgba(0,0,0,.65)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: ch,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      animation: 'y2k-tv-on 300ms var(--ease-out) both'
    }
  }, c.src ? /*#__PURE__*/React.createElement("img", {
    src: c.src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'var(--filter-duotone-red)',
      mixBlendMode: 'screen'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 ' + 44 * u + 'px/1 var(--font-geo)',
      color: 'var(--paper)',
      letterSpacing: '-.02em',
      textShadow: '0 0 12px rgba(255,255,255,.5)'
    }
  }, c.text)), /*#__PURE__*/React.createElement(Noise, {
    on: st
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '22%',
      background: 'linear-gradient(transparent,rgba(255,255,255,.14),transparent)',
      animation: 'y2k-roll 4.5s linear infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--pattern-scanline)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 28% 18%,rgba(255,255,255,.35) 0%,rgba(255,255,255,0) 38%)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78 * u,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10 * u,
      paddingTop: 6 * u
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next channel",
    onClick: next,
    style: {
      width: 58 * u,
      height: 58 * u,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'repeating-conic-gradient(#2a2a2a 0 6deg,#4a4a4a 6deg 12deg)',
      boxShadow: '0 0 0 4px #bdbdbd,0 0 0 5px #555',
      position: 'relative',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '22%',
      borderRadius: '50%',
      background: silver,
      transform: 'rotate(' + knob + 'deg)',
      transition: 'transform var(--dur-base) var(--ease-snap)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '8%',
      width: 4 * u,
      height: '42%',
      marginLeft: -2 * u,
      background: '#222'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6 * u,
      height: 6 * u,
      borderRadius: '50%',
      background: '#ff2a1a',
      boxShadow: '0 0 6px #ff2a1a',
      animation: 'y2k-led 1.6s steps(1) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      flex: 1,
      minHeight: 60 * u,
      background: 'var(--pattern-grille)',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8 * u,
      paddingBottom: 4 * u
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9 * u,
      height: 9 * u,
      borderRadius: '50%',
      background: '#111',
      boxShadow: '0 0 0 1.5px #888'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80%',
      height: 12 * u,
      margin: '0 auto',
      background: '#141414',
      borderRadius: '0 0 3px 3px'
    }
  }));
}
Object.assign(__ds_scope, { RetroTV });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/art/RetroTV.jsx", error: String((e && e.message) || e) }); }

// components/art/ShardBurst.jsx
try { (() => {
const PALETTES = {
  ember: {
    bg: 'var(--bone-200)',
    faces: ['#d04a22', '#c41e2a', '#e08a70', '#eab09c', '#ffffff', '#a8313a', '#f4f2ef'],
    side: '#7a1418',
    line: '#c41e2a'
  },
  paper: {
    bg: 'var(--paper)',
    faces: ['#c41e2a', '#0a0708', '#e4e4e4', '#d04a22', '#ffffff', '#a8313a'],
    side: '#3d0a1c',
    line: '#c41e2a'
  },
  crimson: {
    bg: 'var(--crimson-950)',
    faces: ['#6e1230', '#3d0a1c', '#c41e2a', '#e4e4e4', '#ffffff', '#a8313a', '#1c0612'],
    side: '#0e030a',
    line: '#c41e2a'
  },
  orange: {
    bg: 'var(--orange-500)',
    faces: ['#ffffff', '#0a0708', '#c41e2a', '#ffb27a', '#f4f2ef'],
    side: '#7a2a00',
    line: '#ffffff'
  },
  ink: {
    bg: 'var(--ink)',
    faces: ['#c41e2a', '#ffffff', '#d04a22', '#3d0a1c', '#e4e4e4'],
    side: '#000000',
    line: '#c41e2a'
  }
};
function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) % 100000 / 100000;
  };
}
function ShardBurst({
  palette = 'ember',
  seed = 7,
  density = 60,
  originX = 38,
  originY = 34,
  spread = 360,
  rotate = 0,
  lines = true,
  slabs = true,
  background = true,
  animate = true,
  drift = true,
  interactive = true,
  explodeOnClick = true,
  width = '100%',
  height = '100%',
  style,
  className
}) {
  const P = PALETTES[palette] || PALETTES.ember;
  const W = 1000,
    H = 700,
    ox = W * originX / 100,
    oy = H * originY / 100;
  const [burst, setBurst] = React.useState(0);
  const L = [React.useRef(null), React.useRef(null), React.useRef(null)];
  React.useEffect(() => {
    if (!interactive) return;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf;
    const mv = e => {
      tx = e.clientX / window.innerWidth - .5;
      ty = e.clientY / window.innerHeight - .5;
    };
    const loop = () => {
      cx += (tx - cx) * .07;
      cy += (ty - cy) * .07;
      [.25, .6, 1].forEach((d, i) => {
        const g = L[i].current;
        if (g) g.style.transform = 'translate(' + (cx * d * 70).toFixed(2) + 'px,' + (cy * d * 50).toFixed(2) + 'px) rotate(' + (cx * d * 4).toFixed(2) + 'deg)';
      });
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', mv);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', mv);
      cancelAnimationFrame(raf);
    };
  }, [interactive]);
  const r = rng(seed * 9973 + density);
  const shards = [],
    hair = [],
    planes = [];
  const a0 = (rotate - spread / 2) * Math.PI / 180,
    span = spread * Math.PI / 180;
  for (let i = 0; i < density; i++) {
    const a = a0 + r() * span;
    const Ln = 80 + Math.pow(r(), 1.4) * 900;
    const w = 4 + r() * r() * 70;
    const st = r() * 40;
    const dx = Math.cos(a),
      dy = Math.sin(a),
      nx = -dy,
      ny = dx;
    const m = .25 + r() * .5;
    const pts = [[ox + dx * st, oy + dy * st], [ox + dx * Ln * m + nx * w, oy + dy * Ln * m + ny * w], [ox + dx * Ln, oy + dy * Ln]];
    shards.push({
      pts,
      ex: nx * (3 + r() * 9),
      ey: ny * (3 + r() * 9),
      fill: P.faces[Math.floor(r() * P.faces.length)],
      op: .55 + r() * .45,
      stroke: r() < .3,
      d: Math.round(r() * 500)
    });
  }
  if (slabs) for (let i = 0; i < Math.round(density / 12); i++) {
    const a = a0 + r() * span;
    const d0 = 120 + r() * 300,
      d1 = d0 + 200 + r() * 500;
    const w0 = 10 + r() * 40,
      w1 = w0 + r() * 90;
    const dx = Math.cos(a),
      dy = Math.sin(a),
      nx = -dy,
      ny = dx;
    planes.push({
      p: [[ox + dx * d0 + nx * w0, oy + dy * d0 + ny * w0], [ox + dx * d1 + nx * w1, oy + dy * d1 + ny * w1], [ox + dx * d1 - nx * w1 * .2, oy + dy * d1 - ny * w1 * .2], [ox + dx * d0 - nx * w0 * .2, oy + dy * d0 - ny * w0 * .2]],
      fill: P.faces[Math.floor(r() * 2)],
      ex: nx * 14,
      ey: ny * 14,
      d: Math.round(r() * 300)
    });
  }
  if (lines) for (let i = 0; i < Math.round(density * .6); i++) {
    const a = a0 + r() * span;
    const Ln = 300 + r() * 1100;
    hair.push([ox + Math.cos(a) * r() * 60, oy + Math.sin(a) * r() * 60, ox + Math.cos(a) * Ln, oy + Math.sin(a) * Ln, r() * .7 + .15, 2 + r() * 4, r() * 3]);
  }
  const pt = a => a.map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
  const off = (a, x, y) => a.map(q => [q[0] + x, q[1] + y]);
  const org = {
    transformOrigin: ox + 'px ' + oy + 'px',
    transformBox: 'view-box'
  };
  const inA = d => animate ? {
    ...org,
    animation: 'y2k-shard-in var(--dur-explode) var(--ease-out) ' + d + 'ms both'
  } : undefined;
  const dr = (dur, rev) => drift ? {
    ...org,
    animation: 'y2k-drift ' + dur + 's ease-in-out infinite alternate' + (rev ? ' reverse' : '')
  } : org;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + W + ' ' + H,
    preserveAspectRatio: "xMidYMid slice",
    width: width,
    height: height,
    className: className,
    onClick: explodeOnClick ? () => setBurst(b => b + 1) : undefined,
    style: {
      display: 'block',
      background: background ? P.bg : 'transparent',
      overflow: 'hidden',
      cursor: explodeOnClick ? 'crosshair' : 'default',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    ref: L[0]
  }, /*#__PURE__*/React.createElement("g", {
    style: dr(9, true)
  }, hair.map((h, i) => /*#__PURE__*/React.createElement("line", {
    key: 'h' + i + '-' + burst,
    x1: h[0],
    y1: h[1],
    x2: h[2],
    y2: h[3],
    stroke: P.line,
    strokeWidth: ".6",
    opacity: h[4],
    style: animate ? {
      animation: 'y2k-flicker ' + h[5].toFixed(1) + 's linear ' + h[6].toFixed(1) + 's infinite'
    } : undefined
  })))), /*#__PURE__*/React.createElement("g", {
    ref: L[1]
  }, /*#__PURE__*/React.createElement("g", {
    style: dr(13)
  }, /*#__PURE__*/React.createElement("g", {
    key: 'p' + burst
  }, planes.map((s, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    style: inA(s.d)
  }, /*#__PURE__*/React.createElement("polygon", {
    points: pt(off(s.p, s.ex, s.ey)),
    fill: P.side
  }), /*#__PURE__*/React.createElement("polygon", {
    points: pt(s.p),
    fill: s.fill
  })))))), /*#__PURE__*/React.createElement("g", {
    ref: L[2]
  }, /*#__PURE__*/React.createElement("g", {
    style: dr(7, true)
  }, /*#__PURE__*/React.createElement("g", {
    key: 's' + burst
  }, shards.map((s, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    style: inA(s.d)
  }, /*#__PURE__*/React.createElement("polygon", {
    points: pt(off(s.pts, s.ex, s.ey)),
    fill: P.side,
    opacity: .55 * s.op
  }), /*#__PURE__*/React.createElement("polygon", {
    points: pt(s.pts),
    fill: s.fill,
    opacity: s.op,
    stroke: s.stroke ? P.line : 'none',
    strokeWidth: ".7"
  })))))));
}
Object.assign(__ds_scope, { ShardBurst });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/art/ShardBurst.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'red',
  blink = false,
  style
}) {
  const col = {
    red: 'var(--blood-600)',
    ink: 'var(--ink)',
    white: 'var(--paper)',
    orange: 'var(--orange-500)'
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: col,
      font: 'var(--text-micro)',
      letterSpacing: 'var(--tr-micro)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, "[ ", blink && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'currentColor',
      animation: 'y2k-blink 1s steps(1) infinite'
    }
  }), children, " ]");
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  variant = 'paper',
  code,
  title,
  crop = true,
  children,
  style
}) {
  const V = {
    paper: ['var(--paper)', 'var(--ink)', 'var(--ink)'],
    bone: ['var(--bone-200)', 'var(--ink)', 'var(--ink)'],
    crimson: ['var(--grad-crimson-flare),var(--crimson-950)', 'var(--bone-100)', 'var(--bone-100)'],
    ink: ['var(--ink)', 'var(--bone-100)', 'var(--bone-100)']
  }[variant] || [];
  const o = 'calc(var(--crop-overhang) * -1)';
  const dash = '1px dashed ' + V[2];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '16px 18px',
      background: V[0],
      color: V[1],
      ...style
    }
  }, crop && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: o,
      right: o,
      top: 0,
      borderTop: dash,
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: o,
      right: o,
      bottom: 0,
      borderTop: dash,
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: o,
      bottom: o,
      left: 0,
      borderLeft: dash,
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: o,
      bottom: o,
      right: 0,
      borderLeft: dash,
      opacity: .6
    }
  })), (code || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 10
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      fontSize: 13,
      textTransform: 'uppercase'
    }
  }, title), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      color: 'var(--blood-600)',
      textTransform: 'uppercase'
    }
  }, code)), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Polaroid.jsx
try { (() => {
function Polaroid({
  src,
  alt = '',
  caption,
  scrawl,
  mono = false,
  tilt = 0,
  width = 220,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      margin: 0,
      width,
      position: 'relative',
      transform: 'rotate(' + (h ? 0 : tilt) + 'deg)',
      transition: 'transform var(--dur-base) var(--ease-snap)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '214/294',
      overflow: 'hidden',
      background: 'var(--ink)',
      boxShadow: '0 0 0 1px var(--line-ember)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: mono && !h ? 'var(--filter-mono)' : 'var(--filter-flash)',
      transform: h ? 'scale(1.08)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out), filter var(--dur-fast)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      mixBlendMode: 'screen',
      opacity: h ? .75 : 0,
      transform: 'translate(7px,-2px) scale(1.08)',
      filter: 'var(--filter-duotone-red)',
      transition: 'opacity var(--dur-fast) var(--ease-glitch)',
      animation: h ? 'y2k-shake 1.2s linear infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--pattern-scanline)',
      opacity: .45,
      pointerEvents: 'none'
    }
  }), scrawl && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 8,
      bottom: 4,
      font: '400 42px/1 var(--font-impact)',
      color: 'var(--blood-600)',
      textShadow: '2px 2px 0 var(--paper)'
    }
  }, scrawl)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      font: 'var(--text-micro)',
      color: 'var(--smoke-500)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, caption), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, "\u25B2")));
}
Object.assign(__ds_scope, { Polaroid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Polaroid.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  dark = false
}) {
  const col = dark ? 'var(--bone-200)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      clipPath: 'polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)',
      boxShadow: 'inset 0 0 0 1px ' + (selected ? 'var(--blood-600)' : col),
      background: selected ? 'var(--blood-600)' : 'transparent',
      color: selected ? 'var(--paper)' : col,
      font: '400 13px/1 var(--font-impact)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      padding: '5px 12px 4px 8px',
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: selected ? 'var(--paper)' : 'var(--blood-600)'
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      cursor: 'pointer',
      opacity: .8
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  icon = '▲'
}) {
  if (!open) return null;
  const tb = {
    width: 16,
    height: 14,
    background: 'var(--win-face)',
    boxShadow: 'var(--shadow-bevel-out)',
    border: 'none',
    padding: 0,
    font: '700 9px/1 var(--font-os)',
    color: 'var(--ink)',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,7,8,.55)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 100,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(460px,100%)',
      background: 'var(--win-face)',
      boxShadow: 'var(--shadow-bevel-out),8px 8px 0 var(--blood-600)',
      padding: 3,
      animation: 'y2k-tv-on 380ms var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--grad-win-title)',
      color: 'var(--paper)',
      padding: '3px 3px 3px 6px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '700 11px/1 var(--font-os)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, icon), title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tb
  }, "_"), /*#__PURE__*/React.createElement("span", {
    style: tb
  }, "\u25A1"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      ...tb,
      marginLeft: 2
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 14px 10px',
      font: 'var(--text-os)',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6,
      padding: '4px 10px 10px'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  title = 'ATTENTION!!',
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--paper)',
      color: 'var(--ink)',
      padding: '10px 12px',
      boxShadow: '0 0 0 1px var(--ink),5px 5px 0 var(--blood-600)',
      minWidth: 260,
      maxWidth: 380,
      animation: 'y2k-jolt 360ms var(--ease-snap)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'italic 900 13px/1 var(--font-display)',
      letterSpacing: '.04em',
      color: 'var(--blood-600)',
      animation: 'y2k-flicker 2.4s linear infinite'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--ink)',
      cursor: 'pointer',
      font: '400 14px var(--font-impact)'
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = 'top'
}) {
  const [o, setO] = React.useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, o && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: '#ffffe1',
      color: 'var(--ink)',
      border: '1px solid var(--ink)',
      font: 'var(--text-os)',
      padding: '3px 6px',
      whiteSpace: 'nowrap',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  dark = false,
  disabled
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  const col = dark ? 'var(--bone-200)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      color: dark ? 'var(--bone-100)' : 'var(--ink)',
      font: '400 15px var(--font-impact)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      border: '2px solid ' + (on ? 'var(--blood-600)' : col),
      background: on ? 'var(--blood-600)' : 'transparent',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--paper)',
      fontSize: 14,
      lineHeight: 1,
      transform: on ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-snap), background var(--dur-fast)'
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)'
    }
  }, "\u2715") : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  code,
  hint,
  error,
  dark = false,
  variant = 'slab',
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  if (variant === 'classic') return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-os)',
      color: dark ? 'var(--bone-100)' : 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      background: 'var(--paper)',
      color: 'var(--ink)',
      border: 'none',
      borderRadius: 0,
      padding: '4px 6px',
      font: 'var(--text-os)',
      fontSize: 12,
      boxShadow: 'var(--shadow-bevel-in)',
      outline: 'none',
      minWidth: 120
    }
  })));
  const fg = dark ? 'var(--bone-100)' : 'var(--ink)';
  const line = error ? 'var(--blood-600)' : f ? 'var(--orange-500)' : dark ? 'var(--bone-200)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      color: fg,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--bone-100)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      color: 'var(--blood-600)'
    }
  }, code)), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      background: dark ? 'rgba(10,7,8,.55)' : 'var(--paper)',
      color: fg,
      border: 'none',
      borderBottom: '2px solid ' + line,
      borderLeft: '4px solid ' + line,
      borderRadius: 0,
      padding: '10px 12px',
      font: '500 16px var(--font-display)',
      outline: 'none',
      boxShadow: f ? 'var(--shadow-glow-blood)' : 'none',
      transition: 'box-shadow var(--dur-base)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      color: error ? 'var(--blood-600)' : dark ? 'var(--smoke-300)' : 'var(--smoke-500)',
      textTransform: 'uppercase',
      animation: error ? 'y2k-glitch var(--dur-base) var(--ease-glitch) 2' : 'none'
    }
  }, error ? '! ' + error : hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  dark = false,
  direction = 'row'
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value ?? v;
  const col = dark ? 'var(--bone-200)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const lab = o.label ?? o;
    const on = cur === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        color: dark ? 'var(--bone-100)' : 'var(--ink)',
        font: '400 15px var(--font-impact)',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      onChange: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: '2px solid ' + (on ? 'var(--blood-600)' : col),
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: on ? 'var(--blood-600)' : 'transparent',
        transform: on ? 'scale(1)' : 'scale(0)',
        transition: 'transform var(--dur-base) var(--ease-snap)'
      }
    })), lab);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  dark = false,
  style,
  ...rest
}) {
  const fg = dark ? 'var(--bone-100)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      textTransform: 'uppercase',
      color: fg
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      background: dark ? 'rgba(10,7,8,.55)' : 'var(--paper)',
      color: fg,
      border: '2px solid ' + (dark ? 'var(--bone-200)' : 'var(--ink)'),
      borderRadius: 0,
      padding: '10px 44px 10px 12px',
      font: '400 17px var(--font-impact)',
      textTransform: 'uppercase',
      cursor: 'pointer',
      outline: 'none'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 36,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--blood-600)',
      color: 'var(--paper)',
      pointerEvents: 'none',
      fontSize: 12
    }
  }, "\u25BC")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  dark = false
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  const col = dark ? 'var(--bone-200)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      color: dark ? 'var(--bone-100)' : 'var(--ink)',
      font: '400 15px var(--font-impact)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 22,
      border: '2px solid ' + (on ? 'var(--blood-600)' : col),
      background: on ? 'var(--blood-600)' : 'transparent',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 28 : 2,
      width: 14,
      height: 14,
      background: on ? 'var(--paper)' : col,
      transition: 'left var(--dur-base) var(--ease-snap)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IndexLink.jsx
try { (() => {
function IndexLink({
  title,
  sub,
  num,
  href = '#',
  onClick,
  dark = false
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      gap: 8,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 3,
      transform: h ? 'translateX(-10px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-snap)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 22px/1 var(--font-impact)',
      textTransform: 'uppercase',
      color: h ? 'var(--blood-600)' : dark ? 'var(--bone-100)' : 'var(--ink)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: dark ? 'var(--smoke-300)' : 'var(--ink)'
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 44px/.9 var(--font-impact)',
      color: 'var(--blood-600)',
      minWidth: '1.1em',
      textAlign: 'right',
      animation: h ? 'y2k-glitch var(--dur-base) var(--ease-glitch) infinite' : 'none'
    }
  }, String(num).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      background: h ? 'var(--blood-600)' : 'var(--smoke-500)',
      transform: h ? 'scaleY(1.3)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-snap)'
    }
  }));
}
Object.assign(__ds_scope, { IndexLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IndexLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({
  children,
  href = '#',
  active = false,
  num,
  prefix = '',
  arrow = '',
  tone = 'ink',
  onClick
}) {
  const [h, setH] = React.useState(false);
  const col = tone === 'white' ? 'var(--paper)' : tone === 'red' ? 'var(--blood-600)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 4,
      textDecoration: 'none',
      color: active || h ? 'var(--blood-600)' : col,
      font: '400 18px/1 var(--font-impact)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tr-caps)',
      borderBottom: active ? '2px solid var(--blood-600)' : '2px solid transparent',
      paddingBottom: 2,
      animation: h ? 'y2k-glitch var(--dur-base) var(--ease-glitch)' : 'none'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, prefix), children, num != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)',
      fontSize: '.7em'
    }
  }, num), arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--blood-600)'
    }
  }, arrow));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange
}) {
  const [v, setV] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, tabs.map(t => {
    const val = t.value ?? t;
    const lab = t.label ?? t;
    const on = val === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        position: 'relative',
        background: on ? 'var(--oxblood-800)' : 'var(--rust-700)',
        color: 'var(--paper)',
        border: 'none',
        padding: '7px 16px 6px',
        cursor: 'pointer',
        clipPath: 'polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)',
        font: '400 15px/1 var(--font-impact)',
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        marginBottom: 8,
        transform: on ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-snap)'
      }
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ThumbNav.jsx
try { (() => {
function ThumbNav({
  items = [],
  size = 80,
  strip = true,
  style
}) {
  const [h, setH] = React.useState(-1);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: 'var(--orange-500)',
      ...style
    }
  }, strip && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      background: 'var(--grey-800)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 10,
      padding: '38px 20px 60px'
    }
  }, items.map((it, i) => {
    const on = h === i;
    return /*#__PURE__*/React.createElement("a", {
      key: it.label,
      href: it.href || '#',
      onClick: it.onClick,
      onMouseEnter: () => setH(i),
      onMouseLeave: () => setH(-1),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        width: size,
        textDecoration: 'none',
        transform: on ? 'translateY(-8px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-snap)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-geo)',
        color: on ? 'var(--ink)' : 'var(--paper)',
        whiteSpace: 'nowrap',
        textTransform: 'lowercase'
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        width: size,
        height: size,
        overflow: 'hidden',
        background: 'var(--bone-200)',
        boxShadow: on ? '5px 5px 0 var(--ink)' : 'none',
        transition: 'box-shadow var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: it.src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: on ? 'var(--filter-flash)' : 'var(--filter-mono)',
        transform: on ? 'scale(1.15)' : 'none',
        transition: 'transform var(--dur-slow) var(--ease-out)'
      }
    })));
  })));
}
Object.assign(__ds_scope, { ThumbNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ThumbNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/FX.jsx
try { (() => {
function Crosshair() {
  const [p, setP] = React.useState(null);
  React.useEffect(() => {
    const m = e => setP({
      x: e.clientX,
      y: e.clientY
    });
    const l = () => setP(null);
    window.addEventListener('mousemove', m);
    document.addEventListener('mouseleave', l);
    return () => {
      window.removeEventListener('mousemove', m);
      document.removeEventListener('mouseleave', l);
    };
  }, []);
  if (!p) return null;
  const L = {
    position: 'fixed',
    background: 'var(--blood-600)',
    pointerEvents: 'none',
    zIndex: 90,
    opacity: .55
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...L,
      left: 0,
      right: 0,
      top: p.y,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...L,
      top: 0,
      bottom: 0,
      left: p.x,
      width: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'fixed',
      left: p.x + 8,
      top: p.y + 8,
      pointerEvents: 'none',
      zIndex: 91,
      font: 'var(--text-micro)',
      color: 'var(--blood-600)',
      letterSpacing: 'var(--tr-micro)'
    }
  }, "X:", String(p.x).padStart(4, '0'), " / Y:", String(p.y).padStart(4, '0')));
}
function Strobe({
  on
}) {
  return on ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--paper)',
      zIndex: 95,
      pointerEvents: 'none',
      animation: 'y2k-strobe 600ms steps(1) forwards'
    }
  }) : null;
}
Object.assign(window, {
  Crosshair,
  Strobe
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/FX.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/Footer.jsx
try { (() => {
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--paper)',
      color: 'var(--ink)',
      padding: '24px var(--gutter-page)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      font: 'var(--text-micro)',
      letterSpacing: 'var(--tr-micro)',
      borderTop: '1px dashed var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "COPYRIGHT \xA9 2000 YOUR PARTY. ALL RIGHTS RESERVED."), /*#__PURE__*/React.createElement("span", null, "SEND US AN E-MAIL: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--blood-600)'
    }
  }, "DOOR@YOURPARTY.NET")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--smoke-500)'
    }
  }, "[ BEST VIEWED AT 1024\xD7768 ]"));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/Gallery.jsx
try { (() => {
function GalleryScreen() {
  const {
    Polaroid,
    ShardBurst,
    GlitchText
  } = window.Y2KPartyDesignSystem_2620e7;
  const groups = [['NYC', 'HOUSE PARTY', 'BROOKLYN - NEW YORK'], ['ATL', 'WAREHOUSE', 'WESTSIDE - ATLANTA'], ['LA', 'ROOFTOP', 'DOWNTOWN - LOS ANGELES'], ['HNL', 'BEACH HOUSE', 'NORTH SHORE - HONOLULU']];
  const dates = ['8/28', '8/14', '7/11', '8/19', '6/30'];
  const all = Array.from({
    length: 21
  }, (_, i) => ({
    n: String(i + 1).padStart(2, '0'),
    c: groups[i % 4][0],
    s: dates[i % 5]
  }));
  const [f, setF] = React.useState('ALL');
  const list = f === 'ALL' ? all : all.filter(p => p.c === f);
  const L = (k, label) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setF(k);
    },
    style: {
      color: f === k ? 'var(--ink)' : 'var(--blood-600)',
      textDecoration: 'none',
      font: '700 11px/1.5 var(--font-display)',
      background: f === k ? 'var(--bone-200)' : 'transparent'
    }
  }, label);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--paper)',
      minHeight: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -30
    }
  }, /*#__PURE__*/React.createElement(ShardBurst, {
    key: f,
    palette: "paper",
    seed: f.length * 7 + 3,
    density: 120,
    originX: 78,
    originY: 55,
    spread: 200,
    rotate: 190
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--gutter-page)',
      bottom: 12,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(GlitchText, {
    as: "h1",
    speed: 3.6,
    style: {
      margin: 0,
      font: 'var(--text-mega)',
      letterSpacing: 'var(--tr-mega)',
      color: 'var(--ink)'
    }
  }, "Gallery", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, ".")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px minmax(0,1fr)',
      gap: 40,
      padding: '30px var(--gutter-page) 60px'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      borderRight: '1px dashed var(--ink)',
      paddingRight: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--text-label)'
    }
  }, "SHORT SELECTION OF NIGHTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      color: 'var(--smoke-500)',
      marginTop: 3
    }
  }, list.length, " PHOTOS \xB7 600 PIXELS")), L('ALL', '_ALL (21)'), groups.map(([k, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '800 11px/1.1 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-micro)',
      marginBottom: 4
    }
  }, s), L(k, '_' + k + '_A (600 PIXELS) (1200)')))), /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))',
      gap: '24px 14px',
      animation: 'y2k-tv-on 380ms var(--ease-out) both'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Polaroid, {
    key: p.n,
    mono: true,
    src: '../../assets/imagery/flash-' + p.n + '.png',
    scrawl: p.s,
    caption: 'IMG_08' + p.n + ' · ' + p.c,
    width: "100%"
  })))));
}
window.GalleryScreen = GalleryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/Header.jsx
try { (() => {
function SiteHeader({
  page,
  go
}) {
  const {
    NavLink
  } = window.Y2KPartyDesignSystem_2620e7;
  const links = [['home', 'Home'], ['lineup', 'Lineup'], ['gallery', 'Gallery'], ['rsvp', 'Rsvp']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      background: 'var(--grey-800)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 24,
      padding: '0 var(--gutter-page)',
      font: 'var(--text-micro)',
      letterSpacing: 'var(--tr-micro)',
      color: 'var(--bone-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "UPDATED: 08.28.00"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "[ NEW URL: YOURPARTY.NET ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      background: 'var(--paper)',
      padding: '10px var(--gutter-page)',
      borderBottom: '3px solid var(--blood-600)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      font: '400 30px/1 var(--font-geo)',
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, "your", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, ">"), "party"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      flexWrap: 'wrap'
    }
  }, links.map(([k, l], i) => /*#__PURE__*/React.createElement(NavLink, {
    key: k,
    prefix: "_",
    active: page === k,
    num: i + 1,
    onClick: e => {
      e.preventDefault();
      go(k);
    }
  }, l)))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/Home.jsx
try { (() => {
function Crop({
  x,
  y,
  w,
  h,
  col = 'var(--ink)'
}) {
  const d = '1px dashed ' + col;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -16,
      right: -16,
      top: 0,
      borderTop: d
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -16,
      right: -16,
      bottom: 0,
      borderTop: d
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -16,
      bottom: -16,
      left: 0,
      borderLeft: d
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -16,
      bottom: -16,
      right: 0,
      borderLeft: d
    }
  }));
}
function HomeScreen({
  go
}) {
  const {
    Button,
    ShardBurst,
    IndexLink,
    Tabs,
    Card,
    Badge,
    RetroTV,
    ThumbNav,
    GlitchText,
    Input,
    Dialog,
    Toast
  } = window.Y2KPartyDesignSystem_2620e7;
  const A = '../../assets/';
  const [night, setNight] = React.useState('Sat 8/28');
  const [email, setEmail] = React.useState('');
  const [dlg, setDlg] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const nav = k => e => {
    e.preventDefault();
    go(k);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 720,
      overflow: 'hidden',
      background: 'var(--bone-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -40
    }
  }, /*#__PURE__*/React.createElement(ShardBurst, {
    palette: "ember",
    seed: {
      'Fri 8/27': 19,
      'Sat 8/28': 7,
      'Sun 8/29': 41
    }[night],
    density: 140,
    originX: 30,
    originY: 42
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 18,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Fri 8/27', 'Sat 8/28', 'Sun 8/29'],
    value: night,
    onChange: setNight
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--gutter-page)',
      bottom: 14,
      mixBlendMode: 'multiply',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(GlitchText, {
    as: "h1",
    speed: 3.1,
    style: {
      margin: 0,
      font: 'var(--text-mega)',
      letterSpacing: 'var(--tr-mega)',
      color: 'var(--ink)'
    }
  }, night.split(' ')[0], /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, "."), /*#__PURE__*/React.createElement("br", null), "Night", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '7%',
      top: '34%',
      width: 350
    }
  }, /*#__PURE__*/React.createElement(Card, {
    code: night.toUpperCase(),
    title: "Index",
    style: {
      background: 'rgba(255,255,255,.88)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(IndexLink, {
    num: 1,
    title: "Lineup",
    sub: "Four sets - don't wonder why",
    onClick: nav('lineup')
  }), /*#__PURE__*/React.createElement(IndexLink, {
    num: 2,
    title: "Gallery",
    sub: "Flash photos, last night",
    onClick: nav('gallery')
  }), /*#__PURE__*/React.createElement(IndexLink, {
    num: 3,
    title: "Get on the list",
    sub: "Address drops at 9PM",
    onClick: nav('rsvp')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, "Click the art to detonate")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--grad-floor)',
      padding: '70px var(--gutter-page) 60px',
      display: 'flex',
      gap: 60,
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(RetroTV, {
    width: 480,
    interval: 2600,
    channels: [{
      text: 'your>party'
    }, {
      src: A + 'imagery/flash-05.png'
    }, {
      src: A + 'art/crimson-flare.png'
    }, {
      text: 'sat 8/28'
    }, {
      src: A + 'imagery/flash-12.png'
    }, {
      src: A + 'imagery/street-crowd-night.png'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      paddingBottom: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--text-label)'
    }
  }, "RECENT NEWS FROM YOURPARTY.NET"), [['28.AUGUST.00:', '_the address goes out at ', /*#__PURE__*/React.createElement("b", {
    key: "b"
  }, "9PM"), ' to everyone on the list. check your texts.'], ['21.AUGUST.00:', '_we found a roof that holds 400 people. ', /*#__PURE__*/React.createElement("b", {
    key: "b"
  }, "no phones"), ' up there after 2.'], ['14.AUGUST.00:', '_last night is up in the gallery. ', /*#__PURE__*/React.createElement("a", {
    key: "a",
    href: "#",
    onClick: nav('gallery'),
    style: {
      color: 'var(--blood-600)',
      fontWeight: 700
    }
  }, "click here"), '.']].map(([d, ...t]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      font: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '800 13px var(--font-display)'
    }
  }, d), /*#__PURE__*/React.createElement("br", null), t)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      font: '700 11px var(--font-display)',
      color: 'var(--blood-600)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "ARCHIVE"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav('gallery'),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "_VERSION1999"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav('gallery'),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "_VERSION2000")))), /*#__PURE__*/React.createElement(ThumbNav, {
    items: [['lineup', 'imagery/flash-01.png', 'lineup'], ['gallery', 'imagery/flash-04.png', 'gallery'], ['rsvp', 'imagery/flash-11.png', 'rsvp'], ['the house', 'imagery/street-crowd-night.png', 'home'], ['archive 1999', 'art/ember-shard-burst.png', 'gallery'], ['news', 'art/crimson-flare.png', 'home'], ['door', 'imagery/flash-13.png', 'rsvp'], ['afterparty', 'imagery/flash-19.png', 'lineup']].map(([l, s, k]) => ({
      label: l,
      src: A + s,
      onClick: nav(k)
    }))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 640,
      overflow: 'hidden',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      width: 1100,
      height: '100%',
      marginLeft: -550
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 300,
      top: 40,
      width: 3,
      height: 470,
      background: 'var(--oxblood-800)'
    }
  }), /*#__PURE__*/React.createElement(Crop, {
    x: 60,
    y: 250,
    w: 260,
    h: 70
  }), /*#__PURE__*/React.createElement(Crop, {
    x: 240,
    y: 110,
    w: 140,
    h: 60
  }), /*#__PURE__*/React.createElement(Crop, {
    x: 560,
    y: 200,
    w: 420,
    h: 250
  }), /*#__PURE__*/React.createElement(Crop, {
    x: 880,
    y: 60,
    w: 1,
    h: 520,
    col: "var(--blood-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 70,
      top: 268,
      font: 'var(--text-micro)',
      letterSpacing: '.4em',
      color: 'var(--blood-600)'
    }
  }, "YOURPARTY.NET"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 70,
      top: 292,
      font: 'var(--text-micro)',
      color: 'var(--ink)'
    }
  }, "YOURPARTY.NET \xB7 TYPE DESIGN \xB7 08.28.00"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 560,
      top: 200,
      width: 420,
      height: 250,
      overflow: 'hidden',
      background: 'var(--crimson-950)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'art/crimson-flare.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      mixBlendMode: 'screen'
    }
  }, /*#__PURE__*/React.createElement(ShardBurst, {
    palette: "crimson",
    seed: 3,
    density: 50,
    originX: 70,
    originY: 40,
    background: false,
    explodeOnClick: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--pattern-scanline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: 110,
      font: 'italic 900 22px var(--font-display)',
      color: 'var(--paper)'
    }
  }, "yourparty.net")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 1000,
      top: 230,
      width: 110,
      height: 110,
      background: 'var(--orange-500)',
      padding: 6,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'imagery/flash-19.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'var(--filter-duotone-red)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 330,
      top: 250,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(GlitchText, {
    speed: 4.3,
    style: {
      font: 'var(--text-slant)',
      fontStretch: '62%',
      fontSize: 128,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "party", /*#__PURE__*/React.createElement("br", null), "dESIGN")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 480,
      top: 280,
      zIndex: 3,
      font: '400 300px/1 var(--font-script)',
      color: 'var(--blood-600)',
      transformOrigin: '40% 60%',
      animation: 'y2k-drift 3.2s ease-in-out infinite alternate',
      pointerEvents: 'none'
    }
  }, "N"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 340,
      top: 520,
      font: '400 11px var(--font-web)',
      color: 'var(--blood-600)'
    }
  }, "updated: 08.28.00"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 760,
      top: 462,
      font: 'var(--text-micro)',
      color: 'var(--ink)'
    }
  }, "[ NEW URL: YOURPARTY.NET ]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 600,
      top: 500,
      font: 'italic 900 15px var(--font-display)',
      letterSpacing: '.08em',
      color: 'var(--blood-600)',
      animation: 'y2k-flicker 2.2s linear infinite'
    }
  }, "ATTENTION!!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 600,
      top: 526,
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "classic",
    placeholder: "your e-mail :",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "classic",
    onClick: () => setDlg(true)
  }, "join"), /*#__PURE__*/React.createElement(Button, {
    variant: "classic",
    onClick: () => {
      setToast(true);
      setTimeout(() => setToast(false), 2600);
    }
  }, "drop")))), /*#__PURE__*/React.createElement(Dialog, {
    open: dlg,
    onClose: () => setDlg(false),
    title: "yourparty.net",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "classic",
      onClick: () => setDlg(false)
    }, "OK")
  }, /*#__PURE__*/React.createElement("b", null, email || 'you'), " is on the list for ", night, ". The address goes out at 9PM."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    onClose: () => setToast(false)
  }, "You've been dropped from the list.")));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/Lineup.jsx
try { (() => {
function SetRow({
  i,
  t,
  a,
  g,
  liked,
  onLike
}) {
  const {
    Tag,
    Badge,
    IconButton,
    Tooltip
  } = window.Y2KPartyDesignSystem_2620e7;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      padding: '16px 14px',
      borderTop: '1px solid var(--line-ember)',
      background: h ? 'var(--blood-600)' : 'transparent',
      transform: h ? 'translateX(14px) skewX(-4deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-snap), background var(--dur-fast) steps(2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 58px/.9 var(--font-impact)',
      color: h ? 'var(--paper)' : 'var(--blood-600)',
      minWidth: 70,
      animation: h ? 'y2k-glitch 160ms steps(2) infinite' : 'none'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-mono)',
      color: 'var(--bone-200)',
      minWidth: 50
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '900 44px/.9 var(--font-display)',
      letterSpacing: '-.05em',
      color: 'var(--bone-100)'
    }
  }, a), /*#__PURE__*/React.createElement(Tag, {
    dark: true
  }, g), i === 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "white",
    blink: true
  }, "Opening"), /*#__PURE__*/React.createElement(Tooltip, {
    label: liked ? 'Saved' : 'Save set'
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Save",
    glyph: liked ? '◆' : '＋',
    tone: "white",
    onClick: onLike
  })));
}
function LineupScreen({
  go
}) {
  const {
    Tabs,
    Button,
    ShardBurst,
    GlitchText
  } = window.Y2KPartyDesignSystem_2620e7;
  const nights = {
    'Fri 8/27': [['22:00', 'Dopedupafterschool', 'Club'], ['23:30', 'Soldouttosociety', 'Bass'], ['01:00', 'Abortedsouls', 'Techno']],
    'Sat 8/28': [['22:00', 'DJ Kool.Aid', 'Club'], ['23:30', 'Pinkshard', 'Bass'], ['01:00', 'Epyt b2b CDT', 'Jersey'], ['02:30', 'Southbound83', 'Techno']]
  };
  const [n, setN] = React.useState('Sat 8/28');
  const [liked, setLiked] = React.useState({});
  return /*#__PURE__*/React.createElement("main", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--crimson-950)',
      minHeight: 760,
      padding: '40px var(--gutter-page) 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -120,
      top: -60,
      width: '72%',
      height: '120%'
    }
  }, /*#__PURE__*/React.createElement(ShardBurst, {
    palette: "crimson",
    seed: n === 'Fri 8/27' ? 5 : 44,
    density: 110,
    originX: 70,
    originY: 30,
    spread: 220,
    rotate: 160,
    background: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(GlitchText, {
    as: "h1",
    speed: 2.8,
    style: {
      margin: '0 0 4px',
      font: '400 150px/1 var(--font-tall)',
      letterSpacing: '.3em',
      color: 'var(--bone-100)'
    }
  }, "LINEUP"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-micro)',
      color: 'var(--blood-600)',
      letterSpacing: '.1em',
      marginBottom: 24
    }
  }, "2342 AS OF JUNE 24, 2000 | ", nights[n].length, " SETS"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(nights),
    value: n,
    onChange: setN
  }), /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 26,
      maxWidth: 900,
      animation: 'y2k-tv-on 380ms var(--ease-out) both'
    }
  }, nights[n].map(([t, a, g], i) => /*#__PURE__*/React.createElement(SetRow, {
    key: a,
    i: i,
    t: t,
    a: a,
    g: g,
    liked: liked[a],
    onLike: () => setLiked({
      ...liked,
      [a]: !liked[a]
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "flash",
    arrow: true,
    onClick: () => go('rsvp')
  }, "Rsvp for ", n))));
}
window.LineupScreen = LineupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/Lineup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/party-site/Rsvp.jsx
try { (() => {
function RsvpScreen() {
  const {
    Input,
    Select,
    Checkbox,
    Radio,
    Switch,
    Button,
    Dialog,
    Toast,
    Card,
    ShardBurst,
    GlitchText
  } = window.Y2KPartyDesignSystem_2620e7;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [strobe, setStrobe] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErr("That's not an email");
      return;
    }
    setErr('');
    setStrobe(true);
    setTimeout(() => {
      setStrobe(false);
      setOpen(true);
    }, 600);
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      position: 'relative',
      minHeight: 760,
      overflow: 'hidden',
      background: 'var(--crimson-950)',
      padding: '48px var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/art/crimson-abstract.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: '62%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,var(--crimson-950) 30%,rgba(14,3,10,.4) 70%,rgba(14,3,10,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      top: -40,
      width: '70%',
      height: '110%',
      mixBlendMode: 'screen'
    }
  }, /*#__PURE__*/React.createElement(ShardBurst, {
    palette: "crimson",
    seed: 12,
    density: 90,
    originX: 75,
    originY: 35,
    background: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 50,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: 'min(480px,100%)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    title: "Get on the list",
    code: "RSVP.01",
    style: {
      background: 'rgba(10,7,8,.8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    dark: true,
    label: "Name on the list",
    code: "F.01",
    placeholder: "First + last",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    dark: true,
    label: "Email",
    code: "F.02",
    placeholder: "you@aol.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    error: err,
    hint: "Address drops here at 9PM"
  }), /*#__PURE__*/React.createElement(Select, {
    dark: true,
    label: "City",
    options: ['NYC', 'ATL', 'LA', 'Honolulu']
  }), /*#__PURE__*/React.createElement(Radio, {
    dark: true,
    name: "night",
    options: ['Fri', 'Sat', 'Both'],
    defaultValue: "Sat"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    dark: true,
    label: "+1 coming"
  }), /*#__PURE__*/React.createElement(Switch, {
    dark: true,
    label: "Text me"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "flash",
    size: "lg",
    arrow: true
  }, "Put me on"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 30
    }
  }, /*#__PURE__*/React.createElement(GlitchText, {
    speed: 2.6,
    style: {
      font: 'var(--text-slant)',
      fontStretch: '62%',
      fontSize: 150,
      color: 'var(--bone-100)'
    }
  }, "put me", /*#__PURE__*/React.createElement("br", null), "on", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 140,
      top: 90,
      font: '400 260px/1 var(--font-script)',
      color: 'var(--blood-600)',
      mixBlendMode: 'screen',
      animation: 'y2k-drift 2.8s ease-in-out infinite alternate',
      pointerEvents: 'none'
    }
  }, "M"))), /*#__PURE__*/React.createElement(Strobe, {
    on: strobe
  }), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "yourparty.net - you're on the list",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "classic",
      onClick: () => {
        setOpen(false);
        setToast(true);
        setTimeout(() => setToast(false), 3000);
      }
    }, "OK")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 44px/.86 var(--font-display)',
      letterSpacing: '-.06em',
      marginBottom: 8
    }
  }, name || 'You', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blood-600)'
    }
  }, ".")), "Show your hand at the door. We write ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--blood-600)'
    }
  }, "8/28"), " on it."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    onClose: () => setToast(false)
  }, "Confirmation sent to ", email)));
}
window.RsvpScreen = RsvpScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/party-site/Rsvp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.GlitchText = __ds_scope.GlitchText;

__ds_ns.RetroTV = __ds_scope.RetroTV;

__ds_ns.ShardBurst = __ds_scope.ShardBurst;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Polaroid = __ds_scope.Polaroid;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.IndexLink = __ds_scope.IndexLink;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ThumbNav = __ds_scope.ThumbNav;

})();
