import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = true;
  // const isLoggedIn = false;

  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/pages/login']);
};
