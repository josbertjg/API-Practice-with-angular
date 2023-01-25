import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languajes',
})
export class LanguajesPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'en': return 'Inglés';
      case 'es': return 'Español';
      case 'ru': return 'Ruso';
      case 'fr': return 'Frances';
      case 'ja': return 'Japones';
      case 'it': return 'Italiano';
    }
    return null;
  }

}
