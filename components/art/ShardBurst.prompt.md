Seeded generative vector explosion: shards blast out from the origin on mount, layers drift and parallax with the cursor, hairlines flicker, and a click re-detonates it. Use as hero art or a transparent overlay.
```jsx
<ShardBurst palette="ember" seed={12} density={120} originX={30} originY={40} />
<ShardBurst palette="paper" background={false} spread={120} rotate={-20} interactive={false} />
```
Change `seed` for a new composition (it re-explodes). Turn off `interactive`/`drift` for static use.