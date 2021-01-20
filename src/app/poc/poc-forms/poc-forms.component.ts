import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-poc-forms',
  templateUrl: './poc-forms.component.html',
  styleUrls: ['./poc-forms.component.scss']
})
export class PocFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  pocForm = this.fb.group({

    customerName:[''],
    customerMobile:[''],
    customerEmail:['']

  })

}
