import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgEntregaPage } from './ag-entrega.page';

describe('AgEntregaPage', () => {
  let component: AgEntregaPage;
  let fixture: ComponentFixture<AgEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgEntregaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
