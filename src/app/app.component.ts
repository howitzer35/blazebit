import { Component, Input } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() erroMessage: string;
}
