import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  home:string="user/";
  catagories:string="admin/catagories";
  Users:string="admin/users";
  blogs:string="admin/blogs";
  isloggedIn=false;
}
