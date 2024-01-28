import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../../components/header/header/header.component";
import {FooterComponent} from "../../../components/footer/footer/footer.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
