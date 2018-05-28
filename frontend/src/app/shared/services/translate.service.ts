import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TranslateService {
    private _currentLang: string;

    public get currentLang() {
        return this._currentLang;
    }

    // inject our translations
    constructor(public http: HttpClient) {
    }

    public getAllLabels() {
    return this.http.get('http://localhost:3000/api/users/getlabels');
      
  }

    public use(lang: string): void {
        // set current language
        this._currentLang = lang;
    }

    private translate(key: string): string {
        // private perform translation
        const tLables = localStorage.getItem('lables');
         const allLabels =  tLables ? JSON.parse(tLables).data  : {};
         let translate = '';
         const temp = allLabels.find( x => Object.keys(x)[0] === key);
         console.log(temp);
         return temp[key];
    }

    public instant(key: string) {
        // call translation
        return this.translate(key); 
    }
}