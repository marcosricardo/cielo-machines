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
    value = value.replace(/[^a-zA-Z0-9]/g, "");
    return parseFloat(
      value.substr(0, value.length - 2) +
        "." +
        value.substr(value.length - 2, value.length)
    );
  }
}
