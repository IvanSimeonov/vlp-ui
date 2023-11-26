import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";
import { StorageService } from "src/app/auth/services/storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMsg = "";

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  get formFields() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.authService
        .login(email ? email : "", password ? password : "")
        .subscribe({
          next: (data) => {
            console.log(data);
            this.storageService.saveUser(data);
            this.isLoggedIn = true;
            this.isLoginFailed = false;
            // this.router.navigate([""]);
            // window.location.reload();
          },
          error: (data) => {
            console.log(data);
            this.isLoginFailed = false;
          },
        });
    }
  }
}
