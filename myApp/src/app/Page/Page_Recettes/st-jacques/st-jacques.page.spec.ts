import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StJacquesPage } from './st-jacques.page';

describe('StJacquesPage', () => {
  let component: StJacquesPage;
  let fixture: ComponentFixture<StJacquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StJacquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StJacquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
