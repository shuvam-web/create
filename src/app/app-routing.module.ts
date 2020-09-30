import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenComponent } from './men/men.component';
import { AuthenticationGuard} from "./authentication.guard"
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WomenComponent } from './women/women.component';
import { WomenDetailsComponent } from './women-details/women-details.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
   {path:'register', component:RegisterComponent},
   {path:'login', component:LoginComponent},
   {path:'dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard]},
   {path:'product', component:MenComponent},
   { path:'product-details/:id', component:ProductDetailsComponent},
   {path:'mycart', component:MycartComponent},
   {path:'myorder', component:MyorderComponent},
   { path:'feedback', component:FeedbackComponent},
   {path:'women', component:WomenComponent},
   {path:'women-details/:id', component:WomenDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
