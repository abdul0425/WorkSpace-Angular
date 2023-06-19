import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    AuthModuleRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AuthModuleModule {}
