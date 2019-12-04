import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGetComponent } from './pokemon-get.component';

describe('PokemonGetComponent', () => {
  let component: PokemonGetComponent;
  let fixture: ComponentFixture<PokemonGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
