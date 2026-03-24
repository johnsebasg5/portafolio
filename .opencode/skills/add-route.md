# Add Route

Añade una nueva ruta al router de Angular.

## Pasos
1. Importar componente en `src/app/app.routes.ts`
2. Añadir objeto `Route` al array `routes`
3. Definir `path` y `component`
4. Lazy load con `loadComponent` si es página principal
5. Ruta `'**'` siempre al final como wildcard

## Ejemplo
```typescript
{
  path: 'nueva-ruta',
  component: NuevaRutaComponent
}
```

## Notas
- Wildcard `**` debe ser la última ruta
- Usar `loadComponent` para lazy loading de páginas principales
