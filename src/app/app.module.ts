import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// MENU COMPONENTS
import { TopbarComponent } from './components/menu/topbar/topbar.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { UserDropDownComponent } from './components/menu/user-dropdown/user-dropdown.component';
import { NotificationBadgeComponent } from './components/menu/notification-badge/notification-badge.component';
import { PlantListComponent } from './components/plant-library/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-library/plant-detail/plant-detail.component';
import { UserInputComponent } from './components/growth-simulator/user-inputs/user-inputs.component';
import { GrowthVizComponent } from './components/growth-simulator/growth-viz/growth-viz.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    UserDropDownComponent,
    NotificationBadgeComponent,
    PlantListComponent,
    PlantDetailComponent,
    UserInputComponent,
    GrowthVizComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
