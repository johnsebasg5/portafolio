# Dark Mode

Implementa soporte dark mode en componentes.

## Mapeo de Clases

| Elemento | Light | Dark |
|----------|-------|------|
| Fondo | `bg-white` | `dark:bg-slate-900` |
| Texto | `text-slate-800` | `dark:text-slate-200` |
| Bordes | `border-slate-200` | `dark:border-slate-700` |
| Sombras | `shadow-lg` | `dark:shadow-slate-900/50` |

## Implementación
- `ThemeService` maneja toggle con clase `dark` en `<html>`
- No usar darkMode en CSS puro, solo Tailwind classes
- Usar `localStorage` para persistir preferencia
- Respetar `prefers-color-scheme` del sistema

## Ejemplo
```html
<div class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
  Contenido
</div>
```
