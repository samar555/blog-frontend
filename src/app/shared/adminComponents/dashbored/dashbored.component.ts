import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../../../core/components/admin-header/admin-header.component";
import { HomeComponent } from "../../../core/components/home/home.component";
import { FooterComponent } from "../../../core/components/footer/footer.component";

@Component({
  selector: 'app-dashbored',
  imports: [AdminHeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './dashbored.component.html',
  styleUrl: './dashbored.component.css'
})
export class DashboredComponent {

}
