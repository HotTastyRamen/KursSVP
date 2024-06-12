import { Injectable } from '@angular/core';
import { Student } from '../models/student';

const SurNAMES: string[] = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Taylor',
  'Davis',
  'Wilson',
  'Anderson',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const GROUP: string[]=[
  'bVM-211',
  'bAP-211',
  'bPO-211',
  'bRIS-211',
  'bIC-211',
  'bID-211',
]

const PHONENUMBER: string[]=[
  '+7',
  '+8',
  '+9',
]

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { };

  createDb() {
    const students = Array.from({length: 100}, (_, k=0) => createNewStudent(k++));
      /*{id: 0, name: 'Имя', surname: 'Фамилия'},
      {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
      {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}*/
    return {students};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id ? student.id : 0)) + 1 : 11;
  }


}

function createNewStudent(id: number): Student {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const surname =
    NAMES[Math.round(Math.random() * (SurNAMES.length - 1))];
  const group =
    GROUP[Math.round(Math.random() * (GROUP.length - 1))];
  const phoneNumber =
    PHONENUMBER[Math.round(Math.random() * (PHONENUMBER.length - 1))];


  return {
    id: id,
    fio: name + " "+ surname,
    group: group,
    phoneNumber: phoneNumber
  };
}
