import { Component, Input } from '@angular/core';

// my code
import { AboutUsComponent } from './about-us/about-us.component'
import { CompletedComponent } from './completed/completed.component'
import { ContactUsComponent } from './contact-us/contact-us.component'
import { FooterComponent } from './footer/footer.component'
import { HikeComponent } from './hike/hike.component'
import { LoginComponent } from './login/login.component'
import { NavigationComponent } from './navigation/navigation.component'
import { ProfileComponent } from './profile/profile.component'
import { SignupComponent } from './signup/signup.component'
import { WishlistComponent } from './wishlist/wishlist.component'
import { LogoutComponent } from './logout/logout.component';

//my code

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() erroMessage: string;
}
