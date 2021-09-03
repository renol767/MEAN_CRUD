import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Datas: any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetDatas().subscribe(res => {
      console.log(res)
      this.Datas = res;
      this.dtTrigger.next();
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Apakah anda yakin ingin menghapusnya?')) {
      this.crudService.deleteData(id).subscribe((res) => {
        this.Datas.splice(i, 1);
      })
    }
  }

  // ngOnDestroy Data Table
  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

}
