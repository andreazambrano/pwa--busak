import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { CategoryInterface } from '../../models/category-interface'; 
@Component({
  selector: 'app-modalegreso',
  templateUrl: './modalegreso.component.html',
  styleUrls: ['./modalegreso.component.css']
})
export class ModalegresoComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
    ) { }

  public categories:CategoryInterface;
 getCategories(){
        this.dataApi
        .getCategories()
        .subscribe((categories: CategoryInterface) => (this.categories=categories));
    }
  ngOnInit() {
  	this.getCategories();
  }

}
