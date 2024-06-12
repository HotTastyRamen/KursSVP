import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverviewExampleComponent } from './table-overview-example.component';

describe('TableOverviewExampleComponent', () => {
  let component: TableOverviewExampleComponent;
  let fixture: ComponentFixture<TableOverviewExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableOverviewExampleComponent]
    });
    fixture = TestBed.createComponent(TableOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
