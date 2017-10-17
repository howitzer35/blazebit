import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './routing/routing.module';
import { DataService } from './data.service';
import { FunFastUserService } from './fun-fast-user/fun-fast-user.service';
import { StatusMessageComponent } from './status-message/status-message.component';
import { LogoutComponent } from './logout/logout.component';
import { DetailsComponent } from './details/details.component';
import { TrailsComponent } from './trails/trails.component';
import { ChartsModule } from 'ng2-charts';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    StatusMessageComponent,
    LogoutComponent,
    DetailsComponent,
    TrailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ChartsModule 
  ],
  providers: [
    DataService,
    FunFastUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
