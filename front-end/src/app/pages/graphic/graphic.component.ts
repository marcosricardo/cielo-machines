import { Component, OnInit } from "@angular/core";
import { HttprequestsService } from "src/app/services/httprequests/httprequests.service";

@Component({
  selector: "app-graphic",
  templateUrl: "./graphic.component.html",
  styleUrls: ["./graphic.component.css"]
})
export class GraphicComponent implements OnInit {
  constructor(private _httpRequests: HttprequestsService) {}

  ngOnInit() {
    this._httpRequests
      .get("graphic", "")
      .toPromise()
      .then((response: any) => {
        console.log();

        var data = {
          labels: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
          ],
          series: [response]
        };

        var options = {
          seriesBarDistance: 10
        };

        var responsiveOptions = [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ];

        new Chartist.Bar(".ct-chart", data, options, responsiveOptions);
      })
      .catch(errorRequest => {});
  }
}
