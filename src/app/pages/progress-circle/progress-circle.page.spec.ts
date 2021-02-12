import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgressCirclePage } from './progress-circle.page';

describe('ProgressCirclePage', () => {
  let component: ProgressCirclePage;
  let fixture: ComponentFixture<ProgressCirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressCirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
