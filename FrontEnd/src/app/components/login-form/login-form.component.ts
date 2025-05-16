import { LoginService } from './../../services/login.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  loginService = inject(LoginService)
  router = inject(Router)

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
  })

  onSubmitLogin() {
    const { nome, senha } = this.loginForm.value

    if (!this.loginForm.valid || !nome || !senha) {
      alert("Existem campos não preenchidos!")
      return
    }

    this.loginService.login(nome, senha).subscribe({
      error: (err) => {

        if (err.status === 401) {
          alert("O usuário ou senha estão incorretos!")
          return
        }

        alert("Erro ao conectar com o servidor, tente novamente mais tarde")
      },
      
      next: () => {
        this.router.navigate(["/home"])
      }

    })
  }

}