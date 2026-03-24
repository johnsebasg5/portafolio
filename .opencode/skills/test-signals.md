# Test Signals

Tests específicos para Angular Signals.

## Checks
- [ ] Valor inicial del signal
- [ ] `.set()` actualiza valor
- [ ] `.update()` con callback
- [ ] `computed()` deriva correctamente
- [ ] `effect()` se ejecuta en cambios
- [ ] `fixture.detectChanges()` después de signal changes
- [ ] `signal.asReadonly()` no permite mutación
- [ ] Signals actualizan template

## Ejemplo
```typescript
it('should update signal value', () => {
  expect(component.count()).toBe(0);
  component.count.set(5);
  expect(component.count()).toBe(5);
});

it('should compute derived value', () => {
  component.count.set(3);
  expect(component.doubleCount()).toBe(6);
});
```
