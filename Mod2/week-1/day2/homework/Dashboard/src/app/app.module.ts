import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CustomersComponent } from './customers/customers.component';
import { OnlineanalysisComponent } from './onlineanalysis/onlineanalysis.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { WebsitevisitorsComponent } from './websitevisitors/websitevisitors.component';
import { AverageratingComponent } from './averagerating/averagerating.component';
import { SentimentanalysisComponent } from './sentimentanalysis/sentimentanalysis.component';
import { ReviewsmainComponent } from './reviewsmain/reviewsmain.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetComponent,
    ReviewsComponent,
    CustomersComponent,
    OnlineanalysisComponent,
    SettingsComponent,
    HeaderComponent,
    WebsitevisitorsComponent,
    AverageratingComponent,
    SentimentanalysisComponent,
    ReviewsmainComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
