import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormLoginComponent } from "./form-login.component";

describe("FormLoginComponent", () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormLoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
