import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from '../store/reduce/customer.reducer';
import { selectCustomers } from '../store/select/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  

  ngOnInit(): void {
  }
  customers$:Observable<Customer[]>;

  constructor(private store:Store<CustomerState>){
    this.customers$ = this.store.pipe(select(selectCustomers));
  }
}
