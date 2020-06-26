import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiketPage } from './tiket.page';

describe('TiketPage', () => {
  let component: TiketPage;
  let fixture: ComponentFixture<TiketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
