import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descript'
})
export class DescPipe implements PipeTransform {

    transform(value: string): string {
        var newString: string = "";
        for(let i=0; i<20; i++){
            newString +=  value[i];
        }
        return newString+="...";
    }
}