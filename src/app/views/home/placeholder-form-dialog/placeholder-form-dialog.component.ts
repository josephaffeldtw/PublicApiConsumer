import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-placeholder-form-dialog',
  templateUrl: './placeholder-form-dialog.component.html',
  styleUrls: ['./placeholder-form-dialog.component.css']
})
export class PlaceholderFormDialogComponent implements OnInit {

  public forms: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<PlaceholderFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      userId: ['', [Validators.required]],
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
