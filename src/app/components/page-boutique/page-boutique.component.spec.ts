import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageBoutiqueComponent } from "./page-boutique.component";

describe("PageBoutiqueComponent", () => {
  let component: PageBoutiqueComponent;
  let fixture: ComponentFixture<PageBoutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageBoutiqueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
