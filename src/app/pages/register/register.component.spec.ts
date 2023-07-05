import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterComponent } from "./register.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [RegisterComponent],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the RegisterComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should have an initial empty fullname, email, and password fields", () => {
    expect(component.registerForm?.get("fullname")?.value).toEqual("");
    expect(component.registerForm?.get("email")?.value).toEqual("");
    expect(component.registerForm?.get("password")?.value).toEqual("");
  });

  it("should mark fullname field as invalid when empty", () => {
    const fullname = component.registerForm?.get("fullname");
    fullname?.setValue("");
    expect(fullname?.invalid).toBeTruthy();
    expect(fullname?.errors?.["required"]).toBeTruthy();
  });

  it("should mark email field as invalid when empty", () => {
    const email = component.registerForm?.get("email");
    email?.setValue("");
    expect(email?.invalid).toBeTruthy();
    expect(email?.errors?.["required"]).toBeTruthy();
  });

  it("should mark email field as invalid when invalid email format", () => {
    const email = component.registerForm?.get("email");
    email?.setValue("invalid-email");
    expect(email?.invalid).toBeTruthy();
    expect(email?.errors?.["email"]).toBeTruthy();
  });

  it("should mark password field as invalid when empty", () => {
    const password = component.registerForm?.get("password");
    password?.setValue("");
    expect(password?.invalid).toBeTruthy();
    expect(password?.errors?.["required"]).toBeTruthy();
  });

  it("should mark password field as invalid when less than 8 characters", () => {
    const password = component.registerForm?.get("password");
    password?.setValue("pass");
    expect(password?.invalid).toBeTruthy();
    expect(password?.errors?.["minlength"]).toBeTruthy();
  });

  it("should mark form as valid when all fields are filled correctly", () => {
    const fullname = component.registerForm?.get("fullname");
    const email = component.registerForm?.get("email");
    const password = component.registerForm?.get("password");
    fullname?.setValue("John Doe");
    email?.setValue("test@example.com");
    password?.setValue("password123");
    expect(component.registerForm?.valid).toBeTruthy();
  });

  it("should call console.log with form value on submit", () => {
    spyOn(console, "log");
    const fullname = component.registerForm?.get("fullname");
    const email = component.registerForm?.get("email");
    const password = component.registerForm?.get("password");
    fullname?.setValue("John Doe");
    email?.setValue("test@example.com");
    password?.setValue("password123");
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(component.registerForm?.value);
  });
});
