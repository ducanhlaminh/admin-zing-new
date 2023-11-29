import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "datePipe",
})
export class DatePipe implements PipeTransform {
    transform(item: any): any {
        let date = new Date(item);
        if (item.status === 1) {
            return `
                  ${
                      date.toLocaleDateString("vi-VN") +
                      " lúc " +
                      date.toLocaleTimeString("vi-VN")
                  }`;
        } else {
            return `
                  ${
                      date.toLocaleDateString("vi-VN") +
                      " lúc " +
                      date.toLocaleTimeString("vi-VN")
                  }`;
        }
    }
}
