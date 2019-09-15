import { Component, OnInit } from "@angular/core";
import { Machine } from "src/app/class/machine/machine";
import { HttprequestsService } from "src/app/services/httprequests/httprequests.service";
import { Router } from "@angular/router";
import { UtilsService } from "src/app/services/utils/utils.service";

@Component({
  selector: "app-register-machine",
  templateUrl: "./register-machine.component.html",
  styleUrls: ["./register-machine.component.css"]
})
export class RegisterMachineComponent implements OnInit {
  private machine: Machine;
  public dataForm: any = {};
  public customMaska: any = {};
  public pattern: any = {};

  constructor(
    private _httpRequests: HttprequestsService,
    private router: Router,
    private _utils: UtilsService
  ) {}

  ngOnInit() {}

  register(dataForm: any) {
    console.log("User Entered Data", dataForm);

    let price = this._utils.converteCurrencyFloat(dataForm.price);

    this.machine = {
      title: dataForm.title,
      description: dataForm.description,
      price: price
    };

    this._httpRequests
      .post("machines", this.machine)
      .toPromise()
      .then(() => {
        this.router.navigateByUrl("/home");
      })
      .catch(() => {});
  }
}
