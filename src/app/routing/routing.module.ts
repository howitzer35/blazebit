import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 //about-us imports
 import { AboutUsComponent }   from '../about-us/about-us.component';
 import { HomeComponent }   from '../home/home.component';
 // completed imports
 import { CompletedComponent }   from '../completed/completed.component';
 //contact-us imports
 import { ContactUsComponent }   from '../contact-us/contact-us.component';
 //login imports
 import { LoginComponent }   from '../login/login.component';
 //profile imports
 import { ProfileComponent }   from '../profile/profile.component';
 //signup imports
 import { SignupComponent }   from '../signup/signup.component';
 //wishlist imports
 import { WishlistComponent }   from '../wishlist/wishlist.component';
//logout imports
 import { LogoutComponent } from '../logout/logout.component';
 

 
 const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
   // about-us routes
   { path: 'about-us',  component: AboutUsComponent },
   // completed routes
   { path: 'completed',  component: CompletedComponent },
   // contact-us routes
   { path: 'contact-us',  component: ContactUsComponent },
   // login routes
   { path: 'login',  component: LoginComponent },
   // signup routes
   { path: 'signup',  component: SignupComponent },
   // wishlist routes
   { path: 'wishlist',  component: WishlistComponent },
   // profile routes
   { path: 'profile',  component: ProfileComponent },
   //logout routes
   { path: 'profile',  component: ProfileComponent },
   
 ];
  
 @NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
 })
 export class AppRoutingModule {}
 