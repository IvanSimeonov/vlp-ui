import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  hide = true;

  registerForm = new FormGroup({
    fullname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get formFields() {
    return this.registerForm.controls;
  }

  onSubmit() {
    const fullname = this.registerForm.value.fullname?.split(" ");
    const firstName = fullname ? fullname[0] : "";
    const lastName = fullname ? fullname[1] : "";
    const email = this.registerForm.value.email
      ? this.registerForm.value.email
      : "";
    const password = this.registerForm.value.password
      ? this.registerForm.value.password
      : "";
    this.authService.register(email, password, firstName, lastName).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
