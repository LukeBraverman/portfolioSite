import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/homepage/home-page/home-page.component";
import {PortfolioMenuComponent} from "./pages/portfolio-menu/portfolio-menu/portfolio-menu.component";
import {PortfolioJavaComponent} from "./pages/portfolio-java/portfolio-java/portfolio-java.component";
import {AboutMeComponent} from "./pages/about-me/about-me/about-me.component";
import {PortfolioAngularComponent} from "./pages/portfolio-angular/portfolio-angular/portfolio-angular.component";
import {PortfolioReactComponent} from "./pages/portfolio-react/portfolio-react/portfolio-react.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'portfolio', component: PortfolioMenuComponent },
  { path: 'portfolio-java', component: PortfolioJavaComponent },
  { path: 'portfolio-angular', component: PortfolioAngularComponent },
  { path: 'portfolio-react', component: PortfolioReactComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home for the root path
  { path: '**', component: HomePageComponent }, // Wildcard route for handling invalid routes
];
