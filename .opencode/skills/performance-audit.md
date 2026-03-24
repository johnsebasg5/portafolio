# Performance Audit

Revisa problemas de rendimiento.

## Checks
- [ ] `ngFor` sin `trackBy`
- [ ] Detección de cambios innecesaria
- [ ] Uso de `OnPush` change detection
- [ ] Pipes puros que muten datos
- [ ] Lazy loading de rutas
- [ ] Tamaño de bundles (budgets en `angular.json`)
- [ ] Suscripciones creadas múltiples veces
- [ ] Imágenes sin lazy loading
- [ ] Uso de `computed()` vs `effect()` innecesario

## Comando
```bash
npm run build --configuration=production
```

## Budgets (angular.json)
- **Initial bundle**: 500kB warning, 1MB error
- **Component style**: 4kB warning, 8kB error
