# Bug Detection

Detecta posibles bugs y errores.

## Checks
- [ ] Signals usados correctamente (`signal()`)
- [ ] Posibles `null`/`undefined` sin manejo
- [ ] Suscripciones sin `unsubscribe` (memory leaks)
- [ ] `@Input`/`@Output` con tipos correctos
- [ ] Condiciones de carrera en async operations
- [ ] Bindings a propiedades inexistentes en templates
- [ ] Uso de `any` explícito
- [ ] Manejo de errores en HTTP calls
- [ ] Efectos (`effect()`) que generen loops infinitos

## Severidad

| Nivel | Descripción |
|-------|-------------|
| **critical** | Bugs que rompen funcionalidad |
| **high** | Bugs potenciales con datos |
| **medium** | Code smells, memory leaks |
| **low** | Mejoras menores |
