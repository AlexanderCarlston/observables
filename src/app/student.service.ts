// student.service.ts

import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

students: Student[] = [{
    id: 1,
    name: 'Krunal',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    EnrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
}];

  constructor() { }
}
