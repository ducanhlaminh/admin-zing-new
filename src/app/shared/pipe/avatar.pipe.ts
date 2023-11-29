import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Pipe({
      name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
      transform(value: any) {
            environment.API_GET_AVATAR;
            return null;
      }
}
