import { Component } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent {

  constructor(){
  }

  days = [
    {
      "date": "01.04.2024",
      "type_id": 1,
      "type_text": "Рабочий день",
      "week_day": "пн",
      "working_hours": 8
    },
    {
      "date": "02.04.2024",
      "type_id": 1,
      "type_text": "Рабочий день",
      "week_day": "вт",
      "working_hours": 8
    },
    {
      "date": "03.04.2024",
      "type_id": 1,
      "type_text": "Рабочий день",
      "week_day": "ср",
      "working_hours": 8
    },
    {
      "date": "04.04.2024",
      "type_id": 1,
      "type_text": "Рабочий день",
      "week_day": "чт",
      "working_hours": 8
    },
    {
      "date": "05.04.2024",
      "type_id": 1,
      "type_text": "Рабочий день",
      "week_day": "пт",
      "working_hours": 8
    },
    {
      "date": "06.04.2024",
      "type_id": 2,
      "type_text": "Выходной день",
      "week_day": "сб",
      "working_hours": 0
    },
    {
      "date": "07.04.2024",
      "type_id": 2,
      "type_text": "Выходной день",
      "week_day": "вс",
      "working_hours": 0
    }
  ]

  workerSchdls =[
    { "workerName": "admin1",
      day: [
      {
        "worker_id": 0,
        "date": "01.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "пн",
        "working_hours": 8
      },
      {
        "worker_id": 0,
        "date": "02.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "вт",
        "working_hours": 8
      },
      {
        "worker_id": 0,
        "date": "03.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "ср",
        "working_hours": 8
      },
      {
        "worker_id": 0,
        "date": "04.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "чт",
        "working_hours": 8
      },
      {
        "worker_id": 0,
        "date": "05.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "пт",
        "working_hours": 8
      },
      {
        "worker_id": 0,
        "date": "06.04.2024",
        "type_id": 2,
        "type_text": "Выходной день",
        "week_day": "сб",
        "working_hours": 0
      },
      {
        "worker_id": 0,
        "date": "07.04.2024",
        "type_id": 2,
        "type_text": "Выходной день",
        "week_day": "вс",
        "working_hours": 0
      }
    ]},
    { "workerName": "user1",
      day:[
      {
        "worker_id": 1,
        "date": "01.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "пн",
        "working_hours": 8
      },
      {
        "worker_id": 1,
        "date": "02.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "вт",
        "working_hours": 8
      },
      {
        "worker_id": 1,
        "date": "03.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "ср",
        "working_hours": 8
      },
      {
        "worker_id": 1,
        "date": "04.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "чт",
        "working_hours": 8
      },
      {
        "worker_id": 1,
        "date": "05.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "пт",
        "working_hours": 8
      },
      {
        "worker_id": 1,
        "date": "06.04.2024",
        "type_id": 2,
        "type_text": "Выходной день",
        "week_day": "сб",
        "working_hours": 0
      },
      {
        "worker_id": 1,
        "date": "07.04.2024",
        "type_id": 2,
        "type_text": "Выходной день",
        "week_day": "вс",
        "working_hours": 0
      }
    ]},
    { "workerName": "user2",
      day : [
      {
        "worker_id": 2,
        "date": "01.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "пн",
        "working_hours": 8
      },
      {
        "worker_id": 2,
        "date": "02.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "вт",
        "working_hours": 8
      },
      {
        "worker_id": 2,
        "date": "03.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "ср",
        "working_hours": 8
      },
      {
        "worker_id": 2,
        "date": "04.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "чт",
        "working_hours": 8
      },
      {
        "worker_id": 2,
        "date": "05.04.2024",
        "type_id": 1,
        "type_text": "Рабочий день",
        "week_day": "пт",
        "working_hours": 8
      },
      {
        "worker_id": 2,
        "date": "06.04.2024",
        "type_id": 2,
        "type_text": "Выходной день",
        "week_day": "сб",
        "working_hours": 0
      },
      {
        "worker_id": 2,
        "date": "07.04.2024",
        "type_id": 2,
        "type_text": "Выходной день",
        "week_day": "вс",
        "working_hours": 0
      }
    ]}
  ]
}
