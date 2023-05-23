import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  LinearScale,
  LineController,
  LineElement,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  
  
  Events=[]
  calendarOptions !:CalendarOptions
  onDateClick(res:{dateStr:string}){
    alert("You clicked on :"+res.dateStr)
  }
  
  constructor(){
  
  }
  ngOnInit(){
    setTimeout(()=>{
      this.calendarOptions = {
        initialView:'dayGridMonth',
        dateClick:this.onDateClick.bind(this),
        events:this.Events
      }

    },3500)
    Chart.register(
      ArcElement,
      BarController,
      BarElement,
      CategoryScale,
      DoughnutController,
      LinearScale,
      LineController,
      LineElement,
      PieController,
      PointElement,
      PolarAreaController,
      RadarController,
      RadialLinearScale,
      Title,
      Tooltip,
      Legend,
    );
  }
}
