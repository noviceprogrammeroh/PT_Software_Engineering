import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantersComponent } from './planters/planters.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnouncementComponent,
    PlantsComponent,
    PlantersComponent,
    SuppliesComponent,
    MerchandiseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
