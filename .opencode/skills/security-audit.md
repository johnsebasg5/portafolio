# Security Audit

Revisa vulnerabilidades de seguridad.

## Checks
- [ ] Secrets/keys hardcodeadas en código
- [ ] `innerHTML` sin sanitizar
- [ ] CORS configuration
- [ ] Endpoints expuestos innecesariamente
- [ ] Validación de inputs en forms
- [ ] Datos sensibles en `localStorage` sin encriptar
- [ ] XSS prevention en templates
- [ ] Dependencias con vulnerabilidades conocidas

## Comando
```bash
npm audit
```
