# Angular Specific Audit

Revisa patrones y mejores prácticas Angular.

## Checks
- [ ] Uso correcto de signals (`signal`, `computed`, `effect`)
- [ ] Componentes standalone con imports correctos
- [ ] Rutas con wildcard (`**`) al final
- [ ] Sin dependencias circulares en servicios
- [ ] `ngOnInit` donde constructor sería suficiente
- [ ] Template syntax correcta
- [ ] Sin `subscribe()` sin async pipe
- [ ] Uso de `inject()` vs constructor injection
- [ ] No mutar inputs directamente
