import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should emit the sidenavToggle event when onToggleSidenav is called", () => {
    spyOn(component.sidenavToggle, "emit");
    component.onToggleSidenav();
    expect(component.sidenavToggle.emit).toHaveBeenCalled();
  });

  it("should emit the sidenavClose event when onCloseSidenav is called", () => {
    spyOn(component.sidenavClose, "emit");
    component.onCloseSidenav();
    expect(component.sidenavClose.emit).toHaveBeenCalled();
  });
});
