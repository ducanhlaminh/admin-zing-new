import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "datePipe",
})
export class DatePipe implements PipeTransform {
    transform(item: any): any {
        let create = new Date(item.publishAt);
        let update = new Date(item.updatedAt);
        if (item.status === 1) {
            return `
                  ${update.toLocaleDateString("vi-VN")}`;
        } else {
            return `
                  ${create.toLocaleDateString("vi-VN")}`;
        }
    }
}
