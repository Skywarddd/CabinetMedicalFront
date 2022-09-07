import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {ServicePatientService} from "../../service/service-patient.service";

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  patients: Patient[] = [new Patient()];

  constructor(private service: ServicePatientService) {
  }

  ngOnInit(): void {
    this.getAllPatient()
  }

  getAllPatient = () =>{
    // @ts-ignore
    this.service.getAllPatient().subscribe((resu: any) =>{
      this.patients = resu
    }, (err: any) =>{
      console.error(err)
    })
  }
  deletePatient = (id: string | undefined) => {
    this.service.deletePatient(id).subscribe(ok => {
      this.patients = this.patients.filter(item => item.id != id)
    })
  }
}
