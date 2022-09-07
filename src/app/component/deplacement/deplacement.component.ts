import { Component, OnInit } from '@angular/core';
import { Deplacement } from 'src/app/model/deplacement/deplacement.model';
import { DeplacementService } from 'src/app/service/deplacement/deplacement.service';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.component.html',
  styleUrls: ['./deplacement.component.css']
})
export class DeplacementComponent implements OnInit {

  deplacements: Deplacement[] = [new Deplacement()];

  constructor(private service: DeplacementService) { }

  ngOnInit(): void {
    this.getDeplacements();
  }

  getDeplacements(): void {
    this.service.getDeplacements().subscribe(res => this.deplacements = res);
  }

  deleteDeplacement(id: string) {
    this.service.deleteDeplacement(id).subscribe(ok => {this.deplacements = this.deplacements.filter(item => item.id != id)}
)
  }

}
