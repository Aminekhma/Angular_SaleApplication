import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourteauPage } from './tourteau.page';

describe('TourteauPage', () => {
  let component: TourteauPage;
  let fixture: ComponentFixture<TourteauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourteauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourteauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
