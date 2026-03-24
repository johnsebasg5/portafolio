# Test Templates

Tests para renderizado de templates.

## Checks
- [ ] Elementos esperados existan en DOM
- [ ] `*ngIf` mostrando/ocultando contenido
- [ ] `*ngFor` renderizando listas
- [ ] Clases CSS condicionales
- [ ] Eventos (click, input, etc)
- [ ] Bindings de atributos
- [ ] Contenido dinámico con signals

## Acceso al DOM
```typescript
const element = fixture.nativeElement.querySelector('.class');
const elements = fixture.nativeElement.querySelectorAll('li');
```

## Ejemplo
```typescript
it('should render list items', () => {
  component.items = ['A', 'B', 'C'];
  fixture.detectChanges();
  const items = fixture.nativeElement.querySelectorAll('li');
  expect(items.length).toBe(3);
});

it('should apply dark class', () => {
  component.isDark = true;
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector('.container');
  expect(el.classList.contains('dark:bg-slate-900')).toBe(true);
});
```

## Convenciones
- **Ubicación**: junto al archivo fuente
- **Naming**: `{nombre}.spec.ts`
- **describe**: Nombre del componente/servicio
- **it**: `debería [acción esperada]`
