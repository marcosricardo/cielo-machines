import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterMachineComponent } from "./pages/register-machine/register-machine.component";
import { DetailsComponent } from "./pages/details/details.component";
import { GraphicComponent } from "./pages/graphic/graphic.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterMachineComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "graphic", component: GraphicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
