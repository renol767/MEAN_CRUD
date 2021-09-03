import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetData(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        email: res['email'],
        city: res['city']
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
      city: ['']
    })
  }

  ngOnInit() { }

  onUpdate(): any {
    this.crudService.updateData(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data berhasil di update')
      this.ngZone.run(() => this.router.navigateByUrl('/data-list'))
    }, (err) => {
      console.log(err)
    });
  }


}
