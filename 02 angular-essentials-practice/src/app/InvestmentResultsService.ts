// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it


import { Injectable } from "@angular/core";
import { Investement } from "./investment-results/investment.model";

@Injectable(
  {providedIn : 'root'}
)
export class InvestmentResultsService{


 calculateInvestmentResults( initialInvestment : number,
  annualInvestment : number,
  expectedReturn : number,
  duration : number,
  
 ) {
  const annualData : Investement[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}

}