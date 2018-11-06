import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
  @Input() doctor: Doctor;
  @Input() profession: any;
  @Input() city: any;
  @Output() updateDoctorEvent = new EventEmitter<Doctor>();

  constructor() { }

  ngOnInit() {}

  updateDoc (){
    this.updateDoctorEvent.emit(this.doctor);
  }

}
