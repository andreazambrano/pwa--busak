import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TransactionInterface } from '../../models/transaction-interface'; 
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
  	) { }
  public transactions:TransactionInterface;
 getTransactions(){
        this.dataApi
        .getTransactions()
        .subscribe((transactions: TransactionInterface) => (this.transactions=transactions));
    }
  ngOnInit() {
  	this.getTransactions();
  }

}
