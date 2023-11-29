import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
      name: 'dateVN',
})
export class DateVNPipe implements PipeTransform {
      transform(value: string): any {
            // Chuyển chuỗi thời gian sang đối tượng Date
            const inputTime = new Date(value);

            // Mảng chứa tên các ngày trong tuần
            const daysOfWeek = [
                  'Chủ nhật',
                  'Thứ hai',
                  'Thứ ba',
                  'Thứ tư',
                  'Thứ năm',
                  'Thứ sáu',
                  'Thứ bảy',
            ];

            // Lấy tên ngày trong tuần của thời gian đầu vào
            const dayOfWeek = daysOfWeek[inputTime.getUTCDay()];

            // Lấy ngày, tháng, năm của thời gian đầu vào
            const day = inputTime.getUTCDate();
            const month = inputTime.getUTCMonth() + 1; // Tháng trong JavaScript tính từ 0 - 11
            const year = inputTime.getUTCFullYear();

            // Lấy giờ, phút của thời gian đầu vào
            const hours = inputTime.getUTCHours();
            const minutes = inputTime.getUTCMinutes();

            // Định dạng lại thời gian theo yêu cầu
            const formattedTime = `${dayOfWeek}, ${day}/${month}/${year}, ${hours}:${minutes} (GMT+7)`;
            return formattedTime;
      }
}
