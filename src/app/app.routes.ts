import { Routes } from '@angular/router';
import { DashboredComponent } from './shared/adminComponents/dashbored/dashbored.component';
import { AdminAddCatagoryComponent } from './core/components/admin-add-catagory/admin-add-catagory.component';
import { AdminUsersComponent } from './core/components/admin-users/admin-users.component';
import { AdminBlogsComponent } from './core/components/admin-blogs/admin-blogs.component';
import { HeaderComponent } from './core/user-component/header/header.component';
import { UserDashboredComponent } from './shared/user-components/user-dashbored/user-dashbored.component';

export const routes: Routes = [
  // admin routings 
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin/admin-layout/admin-layout.component').then(
        (c) => c.AdminLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./shared/adminComponents/dashbored/dashbored.component').then(
            (c) => c.DashboredComponent
          ),
      },
      {
        path: "catagories",
        loadComponent: () => import("./core/components/admin-add-catagory/admin-add-catagory.component").then(c => c.AdminAddCatagoryComponent)
      }, {
        path: "users",
        loadComponent: () =>
          import("./core/components/admin-users/admin-users.component").then(c => c.AdminUsersComponent)

      }, {
        path: "blogs",
        loadComponent: () =>
          import("./core/components/admin-blogs/admin-blogs.component").then(c => c.AdminBlogsComponent)

      },

    ]
  },


  // user routing 

  {
    path: "user",
    loadComponent: () => import("./layouts/user/user-layout/user-layout.component").then(c => c.UserLayoutComponent),
    children:[
    {
      path:"",
      loadComponent:()=>import("./shared/user-components/user-dashbored/user-dashbored.component").then(c=>c.UserDashboredComponent)
    },



    ]
  }

];
