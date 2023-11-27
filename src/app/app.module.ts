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
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { UserManagementComponent } from "./pages/user-management/user-management.component";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PageForbiddenComponent } from "./pages/page-forbidden/page-forbidden.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./auth/interceptors/auth.interceptor";
import { BASE_PATH as VLP_BACKEND_BASE_PATH } from "@ivannicksim/vlp";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    CourseCardComponent,
    ProfileComponent,
    UserManagementComponent,
    UserCardComponent,
    PageNotFoundComponent,
    PageForbiddenComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterActivatedMatListItemDirective,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: VLP_BACKEND_BASE_PATH,
      useValue: environment.vlpBackendBasePath,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
