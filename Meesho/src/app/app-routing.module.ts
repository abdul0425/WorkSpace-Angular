import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './authorization-module/auth-routing.module';

const routes: Routes = [
  {
    path: 'authorization-module',
    loadChildren: () =>
      import('./authorization-module/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  {
    path : 'home-module',
    loadChildren : ()=>import('./home-module/home-routing.module').then(m=>m.HomeRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
