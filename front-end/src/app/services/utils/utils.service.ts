import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor() {}

  formatReal(value: number) {
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }

  formatDate(value: Date) {
    var date = new Date(value);
    let options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleString("pt-BR", options);
  }

  converteCurrencyFloat(value: any) {
    if (value === "") {
      value = 0;
    } else {
      value = value.replace(".", "");
      value = value.replace(",", ".");
      value = parseFloat(value);
    }
    return value;
  }
}
