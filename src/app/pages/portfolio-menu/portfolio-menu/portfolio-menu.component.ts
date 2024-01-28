import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {HeaderComponent} from "../../../components/header/header/header.component";
import {FooterComponent} from "../../../components/footer/footer/footer.component";

@Component({
  selector: 'app-portfolio-menu',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './portfolio-menu.component.html',
  styleUrl: './portfolio-menu.component.css'
})
export class PortfolioMenuComponent {

  constructor(    private router: Router,
  ) {

  }
  onJava()
  {
    this.router.navigate(['/portfolio-java']);

  }

  onAngular()
  {
    this.router.navigate(['/portfolio-angular']);

  }


  onReact()
  {
    this.router.navigate(['/portfolio-react']);

  }
}
