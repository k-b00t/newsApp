import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent
{
  new:object;

  constructor(private _data:DataService, private _path:ActivatedRoute, private _router:Router)
  {
    const index = parseInt(this._path.snapshot.params.id);
    this._data.dataFiltered
      ? this.new = this._data.dataFiltered[index]
      : this._router.navigateByUrl('/');
  }
 
}
