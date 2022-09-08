import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deplacement } from 'src/app/model/deplacement/deplacement.model';
import { DeplacementService } from 'src/app/service/deplacement/deplacement.service';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.component.html',
  styleUrls: ['./deplacement.component.css']
})
export class DeplacementComponent implements OnInit {

  deplacements: Deplacement[] = [new Deplacement()];

  deplacementForm!: FormGroup;
  deplacementFormUpdate!: FormGroup;
  isUpdate: boolean = false;

  constructor(private service: DeplacementService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getDeplacements();
    this.deplacementForm = this.formBuilder.group({
      cout: [null, [Validators.required]]
    });
    this.deplacementFormUpdate = this.formBuilder.group({
      cout: [null, [Validators.required]]
    });
  }

  getDeplacements(): void {
    this.service.getDeplacements().subscribe(res => this.deplacements = res);
  }

  postDeplacement(): void {
    this.service.postDeplacement(this.deplacementForm.value).subscribe();
  }

  putDeplacement(id: string): void {
    this.service.putDeplacement(id, this.deplacementFormUpdate.value).subscribe();
  }

  deleteDeplacement(id: string) {
    this.service.deleteDeplacement(id).subscribe(ok => {this.deplacements = this.deplacements.filter(item => item.id != id)});
  }

  updateForm(): void {
    this.isUpdate = !this.isUpdate;
  }

}
