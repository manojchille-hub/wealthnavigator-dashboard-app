import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wealthnavigator-dashboard-app');
  netWorth = 2280000
 investment = 1950000
 currentValue = 2280000
 pnl = 330000
}
