import * as React from 'react';
/**
 * Seeded generative vector explosion that blasts in, drifts, parallaxes with the cursor and re-explodes on click.
 * @startingPoint section="Art" subtitle="Animated shard explosion" viewport="700x360"
 */
export interface ShardBurstProps{
  /** ember = red/orange on bone; paper = red/ink on white; crimson = red on black-red; orange = white/ink on orange; ink = red/white on black */
  palette?:'ember'|'paper'|'crimson'|'orange'|'ink';
  seed?:number;
  /** Shard count (20–160) */
  density?:number;
  originX?:number;originY?:number;
  /** Degrees of arc (360 = full burst) */
  spread?:number;
  /** Arc center angle, degrees */
  rotate?:number;
  lines?:boolean;slabs?:boolean;
  background?:boolean;
  /** Staggered explode-in on mount / seed change (default true) */
  animate?:boolean;
  /** Slow continuous rotate/scale per layer (default true) */
  drift?:boolean;
  /** 3-layer cursor parallax (default true) */
  interactive?:boolean;
  /** Click to re-explode (default true) */
  explodeOnClick?:boolean;
  width?:number|string;height?:number|string;
  style?:React.CSSProperties;className?:string;
}
export declare function ShardBurst(props:ShardBurstProps):JSX.Element;