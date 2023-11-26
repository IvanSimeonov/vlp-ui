import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserCardComponent } from "./user-card.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MaterialModule } from "src/app/shared/material/material.module";

describe("UserCardComponent", () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [MaterialModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
