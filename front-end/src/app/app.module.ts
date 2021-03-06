import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterMachineComponent } from "./pages/register-machine/register-machine.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { DetailsComponent } from "./pages/details/details.component";

import { BrMaskerModule } from "br-mask";
import { GraphicComponent } from "./pages/graphic/graphic.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterMachineComponent,
    DetailsComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
