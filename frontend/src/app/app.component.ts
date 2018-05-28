import { Component,OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TranslateService } from "./shared/services/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor( private translateService: TranslateService ){

  }
  ngOnInit(){
    this.translateService.use('en-US;en;qt=0.9');
    this.translateService.getAllLabels().subscribe( (lables) => {
      localStorage.setItem('lables',JSON.stringify(lables));
    });

  }

}
