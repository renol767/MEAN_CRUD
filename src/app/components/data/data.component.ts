import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  Datas: any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetDatas().subscribe(res => {
      console.log(res)
      this.Datas = res;
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

}
