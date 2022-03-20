import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:"home",
  component: HomeComponent
},
{
  path:"about",
  component: AboutComponent
},
{
  path:"register",
  component: RegisterComponent
},
{
  path:"contact",
  component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }