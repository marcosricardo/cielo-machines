import { Component, OnInit } from "@angular/core";
import { HttprequestsService } from "src/app/services/httprequests/httprequests.service";
import { UtilsService } from "src/app/services/utils/utils.service";
import { Machine } from "src/app/class/machine/machine";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  private machine: Machine;
  private id: String;
  private dataForm: any = {};
  constructor(
    private _httpRequests: HttprequestsService,
    private _utils: UtilsService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this._httpRequests
      .get("machines", this.id)
      .toPromise()
      .then((machine: any) => {
        this.dataForm.title = machine.title;
        this.dataForm.description = machine.description;
        this.dataForm.price = this._utils.formatReal(machine.price);
      });
  }

  update(dataForm: any) {
    console.log("User Entered Data", dataForm);

    let price = this._utils.converteCurrencyFloat(dataForm.price);

    this.machine = {
      title: dataForm.title,
      description: dataForm.description,
      price: price
    };

    this._httpRequests
      .put("machines", this.id, this.machine)
      .toPromise()
      .then(() => {
        this.router.navigateByUrl("/home");
      })
      .catch(() => {});
  }
}
