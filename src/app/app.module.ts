import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// MENU COMPONENTS
import { TopbarComponent } from './components/menu/topbar/topbar.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { UserDropDownComponent } from './components/menu/user-dropdown/user-dropdown.component';
import { NotificationBadgeComponent } from './components/menu/notification-badge/notification-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    UserDropDownComponent,
    NotificationBadgeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
