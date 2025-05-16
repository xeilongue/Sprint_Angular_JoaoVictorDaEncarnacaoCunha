import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  router = inject(Router)

  goToDashboard(){
    this.router.navigate(["/dashboard"])
  }

}
