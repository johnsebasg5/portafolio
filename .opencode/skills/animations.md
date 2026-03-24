# Animations

Añade animaciones y transiciones CSS.

## Patrones

```
Transiciones:  transition duration-200 ease-in-out
Hover:         hover:scale-105, hover:shadow-xl
Focus:         focus:ring-2 focus:ring-blue-500
Animaciones:   animate-pulse, animate-bounce, animate-spin
Transform:     transform hover:-translate-y-1
Opacidad:      opacity-0 animate-fadeIn
```

## Custom Animations
Si se necesitan animaciones personalizadas, definir en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
},
```
