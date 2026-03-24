# Create Service Test

Crea tests unitarios para servicios Angular.

## Pasos
1. Crear archivo `{nombre}.service.spec.ts`
2. Usar `TestBed.configureTestingModule` con `providers`
3. Inyectar servicio con `TestBed.inject()`
4. Testear estado inicial de signals
5. Testear métodos que mutan estado
6. Verificar que signals se actualicen correctamente
7. Mockear dependencias externas (`HttpClient`, etc)
8. Usar `fakeAsync`/`tick` para async operations
9. Testear casos edge y errores
10. Verificar cleanup en `ngOnDestroy`

## Template
```typescript
import { TestBed } from '@angular/core/testing';
import { {Name}Service } from './{name}.service';

describe('{Name}Service', () => {
  let service: {Name}Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject({Name}Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```
