import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioReactComponent } from './portfolio-react.component';

describe('PortfolioReactComponent', () => {
  let component: PortfolioReactComponent;
  let fixture: ComponentFixture<PortfolioReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioReactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
