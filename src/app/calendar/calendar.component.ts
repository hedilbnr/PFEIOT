import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { createEventId, INITIAL_EVENTS } from '../event-utils';
import { CongeService } from '../../services/conge.service';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  employee: any;
  employeeID: string;
  users: any;
  conges: any;
  datepipe: any;
  // addConge(start: string, end: string, title: string) {
  //   const calendarApi = this.calendarComponent.getApi();
  //   employee:Employee;
  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title,
  //     start,
  //     end,
  //     allDay: true,
  //     color: '#FF0000', // Choose a color for the congé
  //   });

  //   this.holidays.push({ start, end, title }); // Add the congé to the list of holidays
  // }
  constructor( private employeeService:EmployeeService,private congeService : CongeService ,private changeDetector: ChangeDetectorRef) {
    this.holidays = []; // initialiser la liste des congés
    this.fetchEtatConge();
    this.getEmployeeByID(this.employeeID);
    this.getEvennement();
  }
  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.employeeID = params['id'];
    //  if(this.employeeID==='myProfile'){
    //    console.log('test');
    //    this.employeeID=103;
    //  }
    //   
    // })
    this.employeeID=localStorage.getItem('IDUSER')
    this.getEmployeeByID(this.employeeID);
  
  }

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    events: [
      { title: 'event 1', date: '2023-05-15' },
      { title: 'event 2', date: '2023-05-17' }
    ],
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    dayCellContent: this.handleDayCellContent.bind(this),

  };
  
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  
  holidays: any[] = [];
  calendarComponent: any;
  addHoliday(start: Date, end: Date, title: string) {
    const calendarApi = this.calendarComponent.getApi();
  
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start,
      end,
      allDay: true,
      color: '#FF0000', // Choose a color for the congé
    });
  
    this.addHoliday(new Date('2023-05-01'), new Date('2023-05-01'), 'Fête du travail');
 // Add the congé to the list of holidays
  }
  
  
  isHoliday(date: Date): boolean {
    for (const holiday of this.holidays) {
      if (date >= holiday.start && date <= holiday.end) {
        return true;
      }
    }
  
    return false;
  }
  
  handleDayCellContent(e) {
    if (this.isHoliday(e.date)) {
      return { html: "<span style='color: red;'>Férié</span>" };
    } else {
      return {};
    }
  }
    
// Ajouter une méthode pour ajouter un événement de congé

  currentEvents: EventApi[] = [];

  getEvennement(){
    this.congeService.getEvennement()
    .subscribe(data=>{
     
      this.conges=data
      console.log(data)
      let newEvents = [];
      let currentDate =new Date().getMonth();
      console.log(" ------ currentDate ----- "+currentDate );
      for (let c of this.conges){
        
        let newdate= new Date(c.dateFin).getMonth();
        
        if (currentDate == newdate && c.etat){
          //console.log(" ------ date fin ----- "+c.dateFin);
          let x={ title: c.id, date: c.dateDebut}
          newEvents.push(x)
        }
       
      }
      this.calendarOptions.events=newEvents;
    },err=>{
      console.log(err)
    })
  }



  
  getEmployeeByID(id:any) {
    console.log("++++++++++++++++++++ "+id);
    this.employeeService.getEmployeeByID(id).subscribe(data => {
      // this.employee = data;
        this.employee = data;
        let newEvents = [];
        for (let c of this.employee.demandeConges) {
          let x = { title: this.employee.prenom, date: c.dateDebut };
          newEvents.push(x);
        }
        this.calendarOptions.events = newEvents;
      //console.log('test-----'+this.employee.demandeConges[0].dateDebut)
      // let newEvents = [];
      // for (let c of this.employee.demandeConges){
      //   let x={ title: this.employee.prenom, date: c.dateDebut}
      //   newEvents.push(x)
      // }
      // this.calendarOptions.events=newEvents;
      //console.log(this.employee.pointages)
    },(err)=>{
      console.log(err);
      
    })
  }
  fetchEtatConge() {
    this.congeService.getEtatConge().subscribe(
      (data) => {
        // Process the data here
      },
      (error) => {
        console.error('Failed to fetch etat conge:', error);
      }
    );
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}