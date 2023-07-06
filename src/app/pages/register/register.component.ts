import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

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

  constructor(private fb: FormBuilder) {}

  get formFields() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
