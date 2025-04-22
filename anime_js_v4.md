# Anime.js v4 Migration Guide

## Key Changes

### Imports

```javascript
// v3
import anime from "animejs";

// v4
import {
  animate,
  createTimeline,
  createScope,
  createSpring,
  utils,
} from "animejs";
```

### Animation Creation

```javascript
// v3
anime({
  targets: ".element",
  // ...options
});

// v4
animate(".element", {
  // ...options
});
```

### Timeline Creation

```javascript
// v3
const timeline = anime.timeline({
  easing: "easeOutQuad",
  duration: 1000,
});

// v4
const timeline = createTimeline({
  defaults: {
    ease: "outQuad",
    duration: 1000,
  },
});
```

### Parameter Changes

1. **Easing**

   - `easing` → `ease`
   - `easeOutQuad` → `outQuad` (removed 'ease' prefix)
   - Default is now 'out(2)'

2. **Direction**

   - `direction: 'reverse'` → `reversed: true`
   - `direction: 'alternate'` → `alternate: true`

3. **Loop Behavior**

   - `loop: 1` now means "repeat once" (2 iterations total)
   - Previous `loop: 1` meant "run once" (1 iteration)

4. **Delays**

   - `endDelay` → `loopDelay`
   - Note: `loopDelay` only adds delay between loops, not after last iteration

5. **Property Values**
   - `value` → `to` in object syntax
   ```javascript
   // v3
   opacity: { value: 0.5, duration: 250 }
   // v4
   opacity: { to: 0.5, duration: 250 }
   ```

### Callbacks

All callbacks now use 'on' prefix:

```javascript
// v3
{
  begin: () => {},
  complete: () => {},
  update: () => {},
  change: () => {}
}

// v4
{
  onBegin: () => {},
  onComplete: () => {},
  onUpdate: () => {},
  onRender: () => {}  // replaces 'change'
}
```

### Promises

```javascript
// v3
anime({...}).finished.then(() => {});

// v4
animate(...).then(() => {});
```

### Scope Management

```javascript
// v4 new feature
const scope = createScope({ root }).add((scope) => {
  // All animations here are scoped to root element
  // Cleanup is handled automatically
});

// Cleanup
scope.revert();
```

## Best Practices

1. Always use scopes for component-based animations
2. Use the new `ease` parameter instead of `easing`
3. Be careful with loop counts as the behavior has changed
4. Use `onRender` instead of the old `change` callback
5. Prefer the new promise syntax with `.then()`
6. Use `utils` for helper functions instead of the old `anime.*` methods

## Common Patterns

### Spring Animation

```javascript
// v3
easing: "spring(1, 80, 10, 0)";

// v4
ease: createSpring({
  mass: 1,
  stiffness: 80,
  damping: 10,
  velocity: 0,
});
```

### Stagger Animations

```javascript
// v3
delay: anime.stagger(100, { direction: "reverse" });

// v4
delay: stagger(100, { reversed: true });
```
