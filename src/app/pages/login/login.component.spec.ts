import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the LoginComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should have an initial empty email and password fields", () => {
    expect(component.loginForm?.get("email")?.value).toEqual("");
    expect(component.loginForm?.get("password")?.value).toEqual("");
  });

  it("should mark email field as invalid when empty", () => {
    const email = component.loginForm?.get("email");
    email?.setValue("");
    expect(email?.invalid).toBeTruthy();
    expect(email?.errors?.["required"]).toBeTruthy();
  });

  it("should mark email field as invalid when invalid email format", () => {
    const email = component.loginForm?.get("email");
    email?.setValue("invalid-email");
    expect(email?.invalid).toBeTruthy();
    expect(email?.errors?.["email"]).toBeTruthy();
  });

  it("should mark password field as invalid when empty", () => {
    const password = component.loginForm?.get("password");
    password?.setValue("");
    expect(password?.invalid).toBeTruthy();
    expect(password?.errors?.["required"]).toBeTruthy();
  });

  it("should mark password field as invalid when less than 8 characters", () => {
    const password = component.loginForm?.get("password");
    password?.setValue("pass");
    expect(password?.invalid).toBeTruthy();
    expect(password?.errors?.["minlength"]).toBeTruthy();
  });

  it("should mark form as valid when all fields are filled correctly", () => {
    const email = component.loginForm?.get("email");
    const password = component.loginForm?.get("password");
    email?.setValue("test@example.com");
    password?.setValue("password123");
    expect(component.loginForm?.valid).toBeTruthy();
  });

  it("should call console.log with form value on submit when form is valid", () => {
    spyOn(console, "log");
    const email = component.loginForm?.get("email");
    const password = component.loginForm?.get("password");
    email?.setValue("test@example.com");
    password?.setValue("password123");
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith(component.loginForm?.value);
  });

  it("should not call console.log on submit when form is invalid", () => {
    spyOn(console, "log");
    const email = component.loginForm?.get("email");
    const password = component.loginForm?.get("password");
    email?.setValue("test@example.com");
    password?.setValue("");
    component.onSubmit();
    expect(console.log).not.toHaveBeenCalled();
  });
});
