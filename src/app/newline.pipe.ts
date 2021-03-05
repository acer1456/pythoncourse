import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'newline'
})
export class NewlinePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // if (value.search('<ul>' || '</ul>') != -1) {
    //   value = value
    // } else if (value.search('<li>' || '</li>') != -1) {
    //   value = value
    // } else {
    //   if (value.search(/(?:\r\n|\r|\n)/g) != -1) {
    //     value = value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    //   } else {
    //     if (value.search(/\n/g) != -1) {
    //       value = value.replace(/\n/g, '<br>');
    //   }}
    // }
    if (value.search(/(?:\r\n|\r|\n)/g) != -1) {
      value = value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
    return value;
    // value = value.replace(/(?:\r\n\r\n|\r\r|\n\n)/g, '<br>');
    // return '<p>' + value.replace(/(?:\r\n|\r|\n)/g, '') + '</p>';
  }
/****************************
 * example useage
 * <div [innerHTML]="'testi\n\nng \n t/n/nest\n\b\ning' | translate | nl2pbr"></div>
 ****************************/
}


