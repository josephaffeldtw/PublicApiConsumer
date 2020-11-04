import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-placeholder-form-dialog',
  templateUrl: './placeholder-form-dialog.component.html',
  styleUrls: ['./placeholder-form-dialog.component.css']
})
export class PlaceholderFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlaceholderFormDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
