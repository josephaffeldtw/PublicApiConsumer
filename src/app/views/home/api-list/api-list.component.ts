import { Component, OnInit } from '@angular/core';
import {PlaceholderService} from '../../../services/placeholder.service';
import {Placeholder} from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit {

  placeholder: Placeholder[];

  constructor(
    public placeholderService: PlaceholderService
  ) { }

  ngOnInit(): void {
    this.getPlaceholders();
  }

  getPlaceholders(){
    this.placeholderService.getPlaceholders().subscribe((data: any[]) => {
      this.placeholder = data;
      console.log(this.placeholder);
    });
  }

}
