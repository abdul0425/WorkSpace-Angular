import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: 'auth-module',
    loadChildren: () =>
      import('./auth-module/auth-module-routing.module').then(
        (m) => m.AuthModuleRoutingModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
