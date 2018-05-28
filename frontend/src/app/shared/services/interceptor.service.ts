import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private _currentLangulage: string = 'en-US;en;qt=0.9';
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'accept-language' : this._currentLangulage
      }
    });
    return next.handle(request);
  }

  setLanguageHeader(language:string){
    switch(language){
      case 'en':
        this._currentLangulage = 'en-US;en;qt=0.9';
      break;
      case 'de':
       this._currentLangulage = 'de-US;de;qt=0.9';
      break;      
      default:
        this._currentLangulage = 'en-US;en;qt=0.9';
      break;
    }
  }
}
