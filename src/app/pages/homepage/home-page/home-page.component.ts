import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FooterComponent} from "../../../components/footer/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


  constructor(    private router: Router,
  ) {

  }

  onPortfolio() {
    // Navigate to the 'portfolio' route
    this.router.navigate(['/portfolio']);
  }

  onAboutUs() {
    // Navigate to the 'about-me' route
    this.router.navigate(['/about-me']);
  }

  onLinkedIn()
  {
    window.open('https://www.linkedin.com/in/luke-braverman', '_blank');

  }
}
