import { Component, EventEmitter, Output } from '@angular/core';
import { UserInvestment } from './user-investment.model';
import { InvestmentResultsService } from '../InvestmentResultsService';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // ngModel compulsorily needs a name attribute in the form input tag
  // Withput name tag there will be error
  enteredinitialInvestment = '';
  enteredannualInvestment = '';
  enteredexpectedReturn = '';
  enteredduration = '';
  @Output() calculate = new EventEmitter<UserInvestment>();
  userInvestment!: UserInvestment ;
  investmentResultsService: InvestmentResultsService;

 constructor(investmentResultsService: InvestmentResultsService) {
    this.investmentResultsService = investmentResultsService;
  }

  onSubmit() {
    this.calculate.emit( {
      annualInvestment: +this. enteredannualInvestment,
      initialInvestment: +this. enteredinitialInvestment,
      expectedReturn: +this. enteredexpectedReturn,
      duration: +this. enteredduration,
    });
    console.info('Form has been submitted');
  }
}
