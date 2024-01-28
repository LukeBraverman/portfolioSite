import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from "./pages/homepage/home-page/home-page.component";
import {PortfolioMenuComponent} from "./pages/portfolio-menu/portfolio-menu/portfolio-menu.component";
import {PortfolioJavaComponent} from "./pages/portfolio-java/portfolio-java/portfolio-java.component";
import {AboutMeComponent} from "./pages/about-me/about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, PortfolioMenuComponent, PortfolioJavaComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
// https://flowbite.com/docs/components/carousel/ <- image carusel
}
