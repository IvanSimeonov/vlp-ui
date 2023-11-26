import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { StorageService } from "../services/storage.service";

export const AdminGuard: CanActivateFn = (route, state) => {
  const currentUser = inject(StorageService).getUser();
  const isAnonymous = !currentUser;
  if (isAnonymous) {
    return inject(Router).createUrlTree(["/", "login"]);
  }
  const isAdmin = currentUser.role === "ROLE_ADMIN";
  return isAdmin;
};
