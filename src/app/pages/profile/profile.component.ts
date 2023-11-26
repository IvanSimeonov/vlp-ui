import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/auth/services/storage.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  hide: boolean = true;
  selectedNavItem: string;
  previewUrl: any;
  userData: any;

  constructor(private storageService: StorageService) {
    this.selectedNavItem = "profile";
  }

  ngOnInit(): void {
    this.userData = this.storageService.getUser().user;
    console.log(this.userData);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
