import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../../core/user-component/header/header.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
