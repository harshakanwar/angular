import { Component, INJECTOR, Input } from '@angular/core';
import { Investement } from './investment.model';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() investmentArray!: Investement[];



}
