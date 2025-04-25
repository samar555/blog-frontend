import { Routes } from '@angular/router';
import { DashboredComponent } from './shared/adminComponents/dashbored/dashbored.component';
import { AdminAddCatagoryComponent } from './core/components/admin-add-catagory/admin-add-catagory.component';

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
  }
];
