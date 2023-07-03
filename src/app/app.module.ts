import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "./shared/material/material.module";
import { CoursesComponent } from "./pages/courses/courses.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterActivatedMatListItemDirective } from "./shared/directives/router-activated-mat-list-item.directive";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./pages/homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    FooterComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterActivatedMatListItemDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
