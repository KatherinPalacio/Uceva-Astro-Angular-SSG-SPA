import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BranchesPage } from './branches.page';

describe('BranchesPage', () => {
  let component: BranchesPage;
  let fixture: ComponentFixture<BranchesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener sucursales', () => {
    expect(component.branches.length).toBeGreaterThan(0);
  });
});