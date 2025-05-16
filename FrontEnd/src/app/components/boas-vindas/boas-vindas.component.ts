import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  imports: [],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {

  closePopUp(){
    const popUp = document.getElementById("popUp")

    if (popUp) {
      popUp.style.visibility = "hidden"
    }

  }
}
