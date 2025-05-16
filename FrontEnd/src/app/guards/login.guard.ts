import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const email = sessionStorage.getItem("email")

  if (!email) {
    alert("Usuário não está autenticado. Retorne e faça login novamente!")
    router.navigate([""])
    return false
  }

  return true;
};
