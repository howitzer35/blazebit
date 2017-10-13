import { Component, Input } from '@angular/core';

// my code
// import { AboutUsComponent } from './about-us/about-us.component'
// import { CompletedComponent } from './completed/completed.component'
// import { ContactUsComponent } from './contact-us/contact-us.component'
// import { FooterComponent } from './footer/footer.component'
// import { LoginComponent } from './login/login.component'
// import { NavigationComponent } from './navigation/navigation.component'
// import { ProfileComponent } from './profile/profile.component'
// import { SignupComponent } from './signup/signup.component'
// import { WishlistComponent } from './wishlist/wishlist.component'
// import { HomeComponent } from './home/home.component'
// import { LogoutComponent } from './logout/logout.component';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CompletedComponent } from './completed/completed.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AppRoutingModule } from './routing/routing.module';
import { DataService } from './data.service';
import { FunFastUserService } from './fun-fast-user/fun-fast-user.service';
import { StatusMessageComponent } from './status-message/status-message.component';
import { LogoutComponent } from './logout/logout.component';
import { DetailsComponent } from './details/details.component';
//my code

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() erroMessage: string;
}
