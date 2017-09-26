import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { DiagramComponent } from './diagram.component';

describe('BarchartComponent', () => {
  let component: DiagramComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentWrapper, DiagramComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector:'test-component-wrapper',
  template:'<diagram [data]="data"></diagram>'
})
class TestComponentWrapper {
  data = []
}