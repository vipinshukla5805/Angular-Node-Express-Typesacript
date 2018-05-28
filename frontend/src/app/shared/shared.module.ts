import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS,HttpClient,HttpClientModule  } from '@angular/common/http';

import { AppInterceptor } from './services/interceptor.service';
import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './pipes/translate'

@NgModule({
    declarations: [TranslatePipe],
    exports: [TranslatePipe],
    imports:[HttpClientModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppInterceptor,
                TranslateService,
                {
                provide: HTTP_INTERCEPTORS,
                useClass: AppInterceptor,
                multi: true
            },
            HttpClient
            ]
        };
    }
}