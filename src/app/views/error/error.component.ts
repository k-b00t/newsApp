import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent
{
  errorSearchInput:string;

  constructor(private _data:DataService) { }

  googleSearch() {
    this._data.googleSearch(this.errorSearchInput);
  }  

}
