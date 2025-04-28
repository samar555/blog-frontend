import { Routes } from '@angular/router';
import { DashboredComponent } from './shared/adminComponents/dashbored/dashbored.component';
import { AdminAddCatagoryComponent } from './core/components/admin-add-catagory/admin-add-catagory.component';
import { AdminUsersComponent } from './core/components/admin-users/admin-users.component';
import { AdminBlogsComponent } from './core/components/admin-blogs/admin-blogs.component';

export const routes: Routes = [
  {
    path: 'admin/dashbored',
    loadComponent: () =>
      import('./shared/adminComponents/dashbored/dashbored.component').then(
        (c) => c.DashboredComponent
      ),
  },
  {
    path:"admin/catagories",
    loadComponent:()=>import("./core/components/admin-add-catagory/admin-add-catagory.component").then(c=>c.AdminAddCatagoryComponent)
  },{
    path:"admin/users",
    loadComponent:()=>
      import("./core/components/admin-users/admin-users.component").then(c=>c.AdminUsersComponent)
    
  },{
    path:"admin/blogs",
    loadComponent:()=>
      import("./core/components/admin-blogs/admin-blogs.component").then(c=>c.AdminBlogsComponent)
    
  }
];
