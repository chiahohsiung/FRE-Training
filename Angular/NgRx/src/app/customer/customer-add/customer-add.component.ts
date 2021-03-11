import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Customer} from '../../models/customer';
import { addCustomers } from '../store/action/customer.actions';
import {CustomerState} from '../store/reduce/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
  }

  addCustomer(customerName:string):void{
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomers(customer));
  }

}
