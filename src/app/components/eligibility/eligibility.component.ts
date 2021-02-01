import { Component, OnInit } from '@angular/core';
interface repay {
  period: number;
  value: string
}
@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  
  constructor() { }
  minIncome: number = 100000;
  maxIncome: number = 300000;
  incomeValue: number = 150000;
  maxExpense: number = 100000;
  minExpense: number = 10000;
  expenseValue: number = 50000;
 
  repayTenure: repay[] = [{ period: 6, value: '6 Months' },
  { period: 9, value: '9 Months' },
  { period: 12, value: '12 Months' }
  ];
  selectedTenure : string = this.repayTenure[0].value;
  ngOnInit(): void {
  }

}
