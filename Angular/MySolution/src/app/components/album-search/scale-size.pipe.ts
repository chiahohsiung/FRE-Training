import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album';

@Pipe({
  name: 'scaleSize',
})
export class ScaleSizePipe implements PipeTransform {
  transform(albums: Album[], size: number): Album[] {
    return albums.slice(0, size);
  }
}
