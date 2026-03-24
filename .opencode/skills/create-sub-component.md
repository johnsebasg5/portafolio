# Create Sub-component

Crea un sub-componente dentro de una página existente.

## Pasos
1. Crear carpeta en `src/app/pages/{page}/components/{name}/`
2. Crear `.ts`, `.html`, `.css` dentro de la carpeta
3. Importar en el componente padre de la página
4. Añadir al array `imports` del `@Component` padre
5. Usar en template del padre con `<app-{name}>`

## Estructura
```
src/app/pages/{page}/
├── {page}.ts
├── {page}.html
├── {page}.css
└── components/
    └── {name}/
        ├── {name}.ts
        ├── {name}.html
        └── {name}.css
```

## Ejemplo de import en padre
```typescript
@Component({
  imports: [CommonModule, {Name}Component]
})
```
