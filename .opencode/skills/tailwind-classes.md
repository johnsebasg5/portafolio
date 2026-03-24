# Tailwind Classes

Aplica clases Tailwind CSS v4 correctamente.

## Patrones Comunes

```
Dark mode:       bg-white dark:bg-slate-900
Responsive grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Card:            rounded-xl shadow-lg p-6 bg-white dark:bg-slate-800
Button:          px-4 py-2 rounded-lg font-medium transition hover:opacity-80
Gradient:        bg-gradient-to-r from-blue-600 to-purple-600
```

## Reglas
- Usar prefijo `dark:` para estilos dark mode
- Usar `sm:`, `md:`, `lg:`, `xl:` para responsive
- Paleta `slate` para neutrales primarios
- Usar `transition` para animaciones suaves
- Spacing: `p-1` a `p-12`, `m-1` a `m-12`, `gap-1` a `gap-8`
- Flexbox/Grid para layouts

## Configuración
- Dark mode: `class-based` en `tailwind.config.js`
- Contenido: `src/**/*.{html,ts}`
