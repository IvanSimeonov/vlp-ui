import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./pages/courses/courses.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { UserManagementComponent } from "./pages/user-management/user-management.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { AdminGuard } from "./auth/guards/admin.guard";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "courses",
    component: CoursesComponent,
  },
  {
    path: "users",
    component: UserManagementComponent,
    // canActivate: [AdminGuard],
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
