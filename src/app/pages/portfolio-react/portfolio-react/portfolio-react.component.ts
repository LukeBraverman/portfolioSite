import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../../components/header/header/header.component";
import {FooterComponent} from "../../../components/footer/footer/footer.component";

@Component({
  selector: 'app-portfolio-react',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './portfolio-react.component.html',
  styleUrl: './portfolio-react.component.css'
})
export class PortfolioReactComponent {

}
