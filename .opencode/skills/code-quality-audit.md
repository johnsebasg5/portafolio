# Code Quality Audit

Revisa calidad general del código.

## Checks
- [ ] Imports innecesarios
- [ ] Código muerto (variables/métodos no usados)
- [ ] Naming conventions (`kebab-case` archivos, `PascalCase` clases)
- [ ] `console.log` en producción
- [ ] Duplicación de código entre componentes
- [ ] `standalone: true` en todos los componentes
- [ ] Servicios usen `providedIn: root`

## Comando
```bash
npm run build
```

## Severidad
Issues encontrados se clasifican por severidad:
- **critical**: Rompe funcionalidad
- **high**: Problemas potenciales
- **medium**: Code smells
- **low**: Mejoras menores
