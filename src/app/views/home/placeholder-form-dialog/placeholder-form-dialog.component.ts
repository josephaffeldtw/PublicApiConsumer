import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlaceholderService} from '../../../services/placeholder.service';
import {Placeholder} from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-placeholder-form-dialog',
  templateUrl: './placeholder-form-dialog.component.html',
  styleUrls: ['./placeholder-form-dialog.component.css']
})
export class PlaceholderFormDialogComponent implements OnInit {

  public forms: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: PlaceholderService,
    public dialogRef: MatDialogRef<PlaceholderFormDialogComponent>,
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

  createPlaceholder(): void{
    this.api.postPlaceholder(this.forms.value).subscribe(result => {});
    this.dialogRef.close();
    this.forms.reset();
  }

}
