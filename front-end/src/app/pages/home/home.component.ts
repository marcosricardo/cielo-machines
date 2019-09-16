import { Component, OnInit } from "@angular/core";
import { HttprequestsService } from "src/app/services/httprequests/httprequests.service";
import { UtilsService } from "src/app/services/utils/utils.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public machines: any = [];
  public error: boolean = false;
  constructor(
    private _httpRequests: HttprequestsService,
    private _utils: UtilsService,
    private router: Router
  ) {}

  ngOnInit() {
    this._httpRequests
      .get("machines", "")
      .toPromise()
      .then((machines: any) => {
        machines.forEach(machine => {
          machine.price = this._utils.formatReal(machine.price);
          machine.createdAt = this._utils.formatDate(machine.createdAt);
        });
        this.machines = machines;
      })
      .catch(errorRequest => {
        console.log("error request", errorRequest);
        this.error = true;
      });
  }

  details(id: Number) {
    this.router.navigateByUrl("/details/" + id);
  }

  destroy(id: Number) {
    this._httpRequests
      .delete("machines", id)
      .toPromise()
      .then((response: any) => {
        Swal.fire({
          title: "Sucesso!",
          text: "Máquina removida com sucesso.",
          type: "success",
          confirmButtonText: "Ok"
        });

        this.machines.forEach((machine, index) => {
          if (id == machine._id) {
            this.machines.splice(index, 1);
          }
        });
      });
  }
}
