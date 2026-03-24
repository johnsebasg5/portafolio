# 🤖 Orquestador Personal - Portafolio Angular

Este directorio contiene la configuración completa del **Orquestador Principal** y los **Sub-Agentes** para tu proyecto Angular.

## 📋 Estructura

```
.opencode/
├── orchestrator.md          # Definición del orquestador
├── agents.md                # Configuración de agentes
├── agents/                  # Definiciones detalladas de cada agente
│   ├── angular-developer.md
│   ├── styling.md
│   ├── auditor.md
│   └── testing.md
├── skills/                  # Skills especializados por agente
├── commands/                # Custom commands (NUEVO)
│   ├── orquestador.md      # Comando principal inteligente
│   ├── dev.md              # Acceso directo Angular Developer
│   ├── style.md            # Acceso directo Styling
│   ├── audit.md            # Acceso directo Auditor
│   ├── test.md             # Acceso directo Testing
│   └── help.md             # Ayuda de comandos
└── package.json             # Dependencias

```

## 🚀 Cómo Usar

### Opción 1: Orquestador Inteligente (Recomendado)
Usa el comando `/orquestador` y deja que el sistema enrute automáticamente:

```
/orquestador crear un componente para mostrar mis proyectos
```

El orquestador analizará los keywords ("componente") y enrutará a **Angular Developer**.

### Opción 2: Acceso Directo a Agentes
Si sabes exactamente qué necesitas, usa los comandos directos:

- `/dev` → Angular Developer
- `/style` → Styling
- `/audit` → Auditor  
- `/test` → Testing

### Opción 3: Ayuda
```
/help
```
Muestra guía completa de comandos disponibles.

## 🎯 Agentes Disponibles

### Angular Developer
**Keywords:** component, service, route, module, angular, typescript, crear, implementar

Especialista en Angular 21+ con Signals y Standalone Components.

### Styling
**Keywords:** css, tailwind, estilo, diseño, responsive, dark mode

Especialista en Tailwind CSS v4 y diseño responsivo.

### Auditor
**Keywords:** revisar, bug, error, calidad, review, seguridad

Especialista en code review, detección de bugs y auditoría.

### Testing
**Keywords:** test, prueba, spec, vitest, coverage

Especialista en testing con Vitest.

## 📚 Flujo Típico

```
1. Solicitud → /orquestador [tu tarea]
2. Análisis → Identificar keywords
3. Enrutamiento → Delegar al agente correcto
4. Ejecución → El agente implementa la tarea
5. Resultado → Devolver resultado al usuario
```

## 🔧 Personalización

### Agregar un nuevo agente
1. Crea `agents/mi-agente.md`
2. Define rol, skills y dependencias
3. Actualiza `orchestrator.md` con keywords
4. Crea comando en `commands/mi-agente.md`

### Modificar keywords de routing
Edita `orchestrator.md` en la sección "Rutas"

### Crear new custom commands
Crea un archivo `.md` en `commands/` con frontmatter YAML

## 💡 Tips

- El orquestador automáticamente fallback a **Auditor** si no detecta keywords claras
- Puedes usar múltiples agentes en secuencia
- Los comandos soportan argumentos: `/dev crear componente Button`
- Usa `@archivo.ts` para referenciar archivos en comandos

## 📖 Documentación

- [Orchestrator](./orchestrator.md) - Lógica de enrutamiento
- [Agents](./agents.md) - Configuración de agentes
- [Commands](./commands/help.md) - Guía de comandos

---

**Estado:** ✅ Configurado y listo para usar

**Última actualización:** Marzo 2026
