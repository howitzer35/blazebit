import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//about-us imports
import { AboutUsComponent }   from '../about-us/about-us.component';
import { HomeComponent }   from '../home/home.component';
//login imports
import { LoginComponent }   from '../login/login.component';
//profile imports
import { ProfileComponent }   from '../profile/profile.component';
//signup imports
import { SignupComponent }   from '../signup/signup.component';
//logout imports
import { LogoutComponent } from '../logout/logout.component';
//trail imports
import { TrailsComponent } from '../trails/trails.component';
//trail imports
import { DetailsComponent } from '../details/details.component';
 
 const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
   { path: 'about-us',  component: AboutUsComponent },
   { path: 'login',  component: LoginComponent },
   { path: 'signup',  component: SignupComponent },
   { path: 'profile',  component: ProfileComponent },
   { path: 'profile',  component: ProfileComponent },
   { path: 'trails',  component: TrailsComponent },
   { path: 'details',  component: DetailsComponent },
   { path: 'details/:id',  component: DetailsComponent },
 ];

 @NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
 })
 export class AppRoutingModule {}
 