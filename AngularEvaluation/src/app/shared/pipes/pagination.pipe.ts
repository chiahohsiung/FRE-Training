import { Pipe, PipeTransform } from '@angular/core';
import {Album} from '../models/album';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {

  transform(albums: Album[] | undefined, pageSize: number, currentPage: number): Album[] | undefined {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return albums && albums.slice(start, end);
  }

}
