import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  // Deklarasi Form Group
  dataForm: FormGroup;

  // Constructor
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    // Form Builder untuk menerima Inputan
    this.dataForm = this.formBuilder.group({
      name: [''],
      email: [''],
      city: ['']
    })
   }

  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddData(this.dataForm.value).subscribe(() => {
      console.log('Data berhasil ditambahkan')
      this.ngZone.run(() => this.router.navigateByUrl('/data-list'))
    }, (err) => {
      console.log(err)
    });
  }
}
