# Implement Data Binding

Implementa binding de datos en componentes Angular.

## Pasos
1. Usar signals para estado local
2. `@Input()` con signal inputs cuando sea posible
3. `@Output()` con `EventEmitter` para eventos
4. Usar `computed()` para derivados
5. Usar `effect()` para side effects
6. Template syntax: `{{ signal() }}`, `[prop]`, `(event)`

## Template Syntax
```html
<!-- Interpolación -->
{{ signal() }}

<!-- Property binding -->
[propertyName]="value"

<!-- Event binding -->
(eventName)="handler()"

<!-- Two-way binding -->
[(ngModel)]="property"
```

## Signals
```typescript
// Signal básico
count = signal(0);

// Computed
doubleCount = computed(() => this.count() * 2);

// Effect
constructor() {
  effect(() => {
    console.log(this.count());
  });
}
```
