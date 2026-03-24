# Run Verification

Ejecuta build y tests para verificar integridad.

## Pasos
1. Ejecutar `npm run build`
2. Si falla → analizar error y reportar
3. Ejecutar `npm run test`
4. Si fallan → analizar y reportar
5. Verificar que no haya errores de TypeScript
6. Reportar resultado final: **PASS** o **FAIL**

## Comandos
```bash
npm run build
npm run test
```

## Formato de Reporte
- **Resumen ejecutivo**: Issues por severidad
- **Detalle**: Archivo, línea, descripción, severidad, fix sugerido
- **Veredicto**: PASS o FAIL
