# Orchestrator

## Propósito
Únicamente enrutar tareas al sub agente correcto según keywords.

## Rutas

| Agente | Keywords |
|--------|----------|
| [angular-developer](agents/angular-developer.md) | component, service, route, module, angular, typescript, implementar, crear componente, añadir funcionalidad |
| [styling](agents/styling.md) | css, tailwind, estilo, diseño, responsive, dark mode, tema, color, layout |
| [auditor](agents/auditor.md) | revisar, auditar, bug, error, validar, calidad, review, code review, seguridad |
| [testing](agents/testing.md) | test, prueba, spec, vitest, unit test, testing |

## Fallback
Si no matchea ningún keyword → **auditor**

## Flujo
1. Recibir solicitud del usuario
2. Identificar keyword en la solicitud
3. Delegar al agente correspondiente
4. Retornar resultado al usuario
