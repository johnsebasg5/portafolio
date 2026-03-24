# Gradient Design

Crea diseños con gradientes atractivos.

## Colores por Proyecto

| Proyecto | Gradiente |
|----------|-----------|
| Real Estate | `from-blue-600 to-blue-800` |
| Analytics | `from-purple-600 to-purple-800` |
| E-commerce | `from-green-600 to-green-800` |
| CRM | `from-pink-600 to-pink-800` |
| Learning | `from-yellow-600 to-yellow-800` |
| Music | `from-red-600 to-red-800` |

## Patrones

```
Fondo:      bg-gradient-to-r from-{color} to-{color}
Overlay:    bg-gradient-to-t from-black/60
Texto:      bg-clip-text text-transparent bg-gradient-to-r
Botones:    bg-gradient-to-r con hover:opacity-90
Cards:      gradient overlays en imágenes
```

## Ejemplo
```html
<div class="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
  <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
    Título
  </h2>
</div>
```
