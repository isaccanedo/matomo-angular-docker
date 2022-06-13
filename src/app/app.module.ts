import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DevToComponent } from "./dev-to/dev-to.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { NgxMatomoTrackerModule } from "@ngx-matomo/tracker";
import { NgxMatomoRouterModule } from "@ngx-matomo/router";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevToComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMatomoTrackerModule.forRoot({
      siteId: environment.siteId, // your Matomo's site ID (find it in your Matomo's settings)
      trackerUrl: environment.trackerUrl, // your matomo server root url
    }),
    NgxMatomoRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
