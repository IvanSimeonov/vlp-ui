import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";
import { StorageService } from "src/app/auth/services/storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public sidenavClose = new EventEmitter();
  isLoggedIn: boolean = false;
  isUserAdmin: boolean = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      this.isUserAdmin =
        this.storageService.getUser().user.role === "ROLE_ADMIN";
    }
  }

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  public onCloseSidenav(): void {
    this.sidenavClose.emit();
  }

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log(response);
        this.storageService.clean();
        this.router.navigate([""]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
