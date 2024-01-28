import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../../components/header/header/header.component";
import {FooterComponent} from "../../../components/footer/footer/footer.component";

@Component({
  selector: 'app-portfolio-java',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './portfolio-java.component.html',
  styleUrl: './portfolio-java.component.css'
})
export class PortfolioJavaComponent {

}
