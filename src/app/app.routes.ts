import { Routes } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';

export const routes: Routes = [{

    path:"/",
    loadComponent:()=>import("./core/components/header/header.component").then(c=>c.HeaderComponent)
}];
