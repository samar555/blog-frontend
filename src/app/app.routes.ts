import { Routes } from '@angular/router';
import { DashboredComponent } from './shared/adminComponents/dashbored/dashbored.component';

export const routes: Routes = [
  {
    path: 'admin/dashbored',
    loadComponent: () =>
      import('./shared/adminComponents/dashbored/dashbored.component').then(
        (c) => c.DashboredComponent
      ),
  },
];
