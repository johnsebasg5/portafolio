# Create Component Test

Crea tests unitarios para componentes Angular.

## Pasos
1. Crear archivo `{nombre}.spec.ts` junto al componente
2. Usar `TestBed.configureTestingModule`
3. Importar standalone components en `imports` array
4. Crear fixture con `ComponentFixture`
5. `detectChanges()` después de crear componente
6. Testear inputs, outputs y métodos públicos
7. Testear template rendering con `querySelector`/`querySelectorAll`
8. Mockear servicios con `TestBed.overrideComponent`
9. Usar `describe()` para agrupar tests
10. Usar `it()` para cada caso de prueba

## Template
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { {Name}Component } from './{name}';

describe('{Name}Component', () => {
  let component: {Name}Component;
  let fixture: ComponentFixture<{Name}Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [{Name}Component]
    }).compileComponents();

    fixture = TestBed.createComponent({Name}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```
