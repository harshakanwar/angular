import { Component } from '@angular/core';
import { UserInvestment } from './user/user-investment.model';
import { InvestmentResultsService } from './InvestmentResultsService';
import { Investement } from './investment-results/investment.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  investmentResultsService: InvestmentResultsService;
  investmentArray!: Investement[];

  constructor(investmentResultsService: InvestmentResultsService) {
    this.investmentResultsService = investmentResultsService;
  }
  oncalculateInvestmentResults(userInvestment : UserInvestment) {
    console.log('calculating');
    this.investmentArray =
      this.investmentResultsService.calculateInvestmentResults(
        userInvestment.initialInvestment,
        userInvestment.annualInvestment,
        userInvestment.expectedReturn,
        userInvestment.duration
      );
    return this.investmentArray;
  }
}
