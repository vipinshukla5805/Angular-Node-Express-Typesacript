import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './../services/translate.service'; // our translate service

@Pipe({
    name: 'translate',
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) { }

    transform(value: string, args: any[]): any {
        if (!value) return;
        console.log(this._translate.instant(value));
        return this._translate.instant(value);
    }
}