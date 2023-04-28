import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './component/edit/edit.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [

    {path:'',component:HeaderComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:'userlist',component:UserlistComponent,canActivate:[AuthGuard]},
    {path:'edit/:id',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
