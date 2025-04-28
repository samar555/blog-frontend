import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

  home:string="admin/";
  catagories:string="admin/catagories";
  Users:string="admin/users";
  blogs:string="admin/blogs";
}
