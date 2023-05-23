import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../services/conge.service';
import { multi } from '../data';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Jour';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Pourcentage';
  legendTitle: string = 'Arrivée';
  colorScheme = {
    domain: ['#36D1B2', '#B27DF7', '#AAAAAA']
  };

  constructor(private congeService: CongeService) { Object.assign(this, { multi }); }

  ngOnInit() {
    this.getPourcentages();
  }

  getPourcentages() {
    this.congeService.getPourcentage().subscribe(
      (data) => {
        this.multi = data; // Mettez à jour la variable multi avec les données récupérées
      },
      (error) => {
        console.error('Failed to fetch pourcentages:', error);
      }
    );

    this.congeService.getPourcentageRetard().subscribe(pourcentage => {
      const delayPercentage = {
        name: 'Retard',
        value: pourcentage
      };
      this.multi.push(delayPercentage);
    });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
