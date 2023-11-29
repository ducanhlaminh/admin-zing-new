import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
      name: 'articlePoition',
})
export class ArticlePoitionPipe implements PipeTransform {
      transform(value: unknown, ...args: unknown[]): unknown {
            return null;
      }
}
