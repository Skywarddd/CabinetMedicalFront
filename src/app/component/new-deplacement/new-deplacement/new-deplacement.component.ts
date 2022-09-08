import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { DeplacementService } from 'src/app/service/deplacement/deplacement.service';

@Component({
  selector: 'app-new-deplacement',
  templateUrl: './new-deplacement.component.html',
  styleUrls: ['./new-deplacement.component.css']
})
export class NewDeplacementComponent implements OnInit {

  deplacementForm!: FormGroup;

  constructor(private service: DeplacementService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.deplacementForm = this.formBuilder.group({
      cout: [null, [Validators.required]]
    });
  }

  postDeplacement(): void {
    this.service.postDeplacement(this.deplacementForm.value).pipe(
      tap(() => this.router.navigateByUrl('/deplacement'))
  ).subscribe();
  }

}
