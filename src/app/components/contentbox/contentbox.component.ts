import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TransactionInterface } from '../../models/transaction-interface'; 
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.css']
})
export class ContentboxComponent implements OnInit {

   constructor(
    private dataApi: DataApiService
  	) { }
  public transactions:TransactionInterface;
  public tixs:TransactionInterface;
  egress=false;
  entry=false;
  all=true;
  transactionType="all";

setType(){
	if (this.transactionType=="egress"){
		this.egress=true;
		this.entry=false;
		this.all=false;
		console.log("egress");}
	if (this.transactionType=="entry"){
		this.egress=false;
		this.entry=true;
		this.all=false;
		console.log("entry");}
	if (this.transactionType=="all"){
		this.egress=true;
		this.entry=true;
		this.all=true; 
		console.log("all");}
}

getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.tixs=res;  
      //  this._uw.tixs=res;
        //   this._uw.totalTixs = res.length;          
        }
     });  
    }


 getTransactions(){
        this.dataApi
        .getTransactions()
        .subscribe((transactions: TransactionInterface) => (this.transactions=transactions));
    }
  ngOnInit() {
  	this.getTransactions();
  	this.getAllTixs();
  }
}
