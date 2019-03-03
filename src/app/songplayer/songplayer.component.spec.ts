import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongplayerComponent } from './songplayer.component';

describe('SongplayerComponent', () => {
  let component: SongplayerComponent;
  let fixture: ComponentFixture<SongplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
