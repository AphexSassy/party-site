Wraps display text so it periodically tears into red and ink offset slices with a skew-shake; use on the one big headline per screen.
```jsx
<GlitchText as="h1" style={{font:"var(--text-mega)"}}>Saturday Night.</GlitchText>
```
`speed` sets cycle length; use different speeds on neighbouring headlines so they don't sync.