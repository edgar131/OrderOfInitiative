import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'orderBy'})

export class OrderByPipe implements PipeTransform {
  transform(value: any, ...orderFields: any[]): any {
    orderFields.forEach((currentField) => {
      let orderType = 'ASC';

      if (currentField[0] === '-') {
        currentField = currentField.substring(1);
        orderType = 'DESC';
      }

      value.sort((a, b) => {
        let aValue = a, bValue = b;
        currentField.split('.').forEach((field) => {
          aValue = aValue[field];
          bValue = bValue[field];
        });
        if (orderType === 'ASC') {
          if (aValue < bValue) {
            return -1;
          }
          if (aValue > bValue) {
            return 1;
          }
          return 0;
        } else {
          if (aValue < bValue) {
            return 1;
          }
          if (aValue > bValue) {
            return -1;
          }
          return 0;
        }
      });

    });
    return value;
  }

}
