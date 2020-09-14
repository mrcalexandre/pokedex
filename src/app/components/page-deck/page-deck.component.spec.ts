import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageDeckComponent } from "./page-deck.component";

describe("PageDeckComponent", () => {
  let component: PageDeckComponent;
  let fixture: ComponentFixture<PageDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageDeckComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
