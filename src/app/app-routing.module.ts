import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';

//GUARDIANS
import { LoginGuard } from './guardians/login.guard';

//GURADIANS

const routes: Routes = [
  {
    path:'producto',
    component:ProductoComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
