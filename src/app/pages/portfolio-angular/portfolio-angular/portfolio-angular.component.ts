import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../../components/header/header/header.component";
import {FooterComponent} from "../../../components/footer/footer/footer.component";

@Component({
  selector: 'app-portfolio-angular',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './portfolio-angular.component.html',
  styleUrl: './portfolio-angular.component.css'
})
export class PortfolioAngularComponent {

}
