import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionbidComponent } from './auctionbid.component';

describe('AuctionbidComponent', () => {
  let component: AuctionbidComponent;
  let fixture: ComponentFixture<AuctionbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionbidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
