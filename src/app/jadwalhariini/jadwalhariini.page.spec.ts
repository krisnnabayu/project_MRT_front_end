import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadwalhariiniPage } from './jadwalhariini.page';

describe('JadwalhariiniPage', () => {
  let component: JadwalhariiniPage;
  let fixture: ComponentFixture<JadwalhariiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalhariiniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadwalhariiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
