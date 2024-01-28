import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  onLinkedIn()
  {
    window.open('https://www.linkedin.com/in/luke-braverman', '_blank');

  }

  onUpwork()
  {

      window.open('https://www.upwork.com/freelancers/~01ba31192ccb3920b0', '_blank');

  }
}
