import { Component } from '@angular/core';

@Component({
  selector: 'univ-dashboard2',
  templateUrl: './univ-dashboard2.component.html',
  styleUrls: ['./univ-dashboard2.component.css']
})
export class UnivDashboard2Component {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
