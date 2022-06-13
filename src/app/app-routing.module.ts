import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DevToComponent } from "./dev-to/dev-to.component";
import { HomeComponent } from "./home/home.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "dev-to",
    component: DevToComponent,
  },
  {
    path: "thank-you",
    component: ThankYouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
