import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAngularComponent } from './portfolio-angular.component';

describe('PortfolioAngularComponent', () => {
  let component: PortfolioAngularComponent;
  let fixture: ComponentFixture<PortfolioAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
