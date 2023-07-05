import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public sidenavClose = new EventEmitter();

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  public onCloseSidenav(): void {
    this.sidenavClose.emit();
  }
}
