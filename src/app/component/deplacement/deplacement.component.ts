import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Deplacement } from 'src/app/model/deplacement/deplacement.model';
import { DeplacementService } from 'src/app/service/deplacement/deplacement.service';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.component.html',
  styleUrls: ['./deplacement.component.css']
})
export class DeplacementComponent implements OnInit {

  deplacements: Deplacement[] = [new Deplacement()];

  deplacementFormUpdate!: FormGroup;
  isUpdate: boolean = false;

  constructor(private service: DeplacementService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getDeplacements();
    this.deplacementFormUpdate = this.formBuilder.group({
      cout: [null, [Validators.required]]
    });
  }

  getDeplacements(): void {
    this.service.getDeplacements().subscribe(res => this.deplacements = res);
  }

  putDeplacement(id: string): void {
    this.service.putDeplacement(id, this.deplacementFormUpdate.value).subscribe(res => { this.getDeplacements});
  }

  deleteDeplacement(id: string) {
    this.service.deleteDeplacement(id).subscribe(ok => {this.deplacements = this.deplacements.filter(item => item.id != id)});
  }

  updateForm(): void {
    this.isUpdate = !this.isUpdate;
  }

  addDeplacementLink(){
    this.router.navigateByUrl("/deplacement/create")
  }

}
