import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("nav") nav!: MatSidenav;
  isSidenavOpen = false;

  public toggleSidenav(): void {
    this.nav.toggle();
  }

  public closeSidenav(): void {
    this.nav.close();
  }
}
