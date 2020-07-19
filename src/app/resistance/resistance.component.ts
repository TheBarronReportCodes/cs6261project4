import { Component, OnInit } from '@angular/core';
import { ResistanceService } from '../services/resistance.service';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {
  public colors: string[];

  public sigFiguresList: string[];
  public multiplierList: string[];
  public toleranceList: string[];

  public sigFiguresDict: any;
  public multiplerDict: any;
  public toleranceDict: any;


  constructor(private resistanceService: ResistanceService) { }

  ngOnInit(): void {
    this.colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
                'violet', 'grey', 'white', 'gold', 'silver', 'none'];
                
    this.sigFiguresList = [this.colors[0], this.colors[1], this.colors[2],
                          this.colors[3], this.colors[4], this.colors[5],
                          this.colors[6], this.colors[7], this.colors[8],
                          this.colors[9]
                          ];
    this.multiplierList = [this.colors[0], this.colors[1], this.colors[2],
                          this.colors[3], this.colors[4], this.colors[5],
                          this.colors[6], this.colors[7], this.colors[8],
                          this.colors[9], this.colors[10], this.colors[11]
                          ];
    this.toleranceList = [this.colors[1], this.colors[2],
                          this.colors[5], this.colors[6],
                          this.colors[7], this.colors[8],
                          this.colors[10], this.colors[11],
                          this.colors[12]
                          ];

    this.sigFiguresDict = {
                    'black': 0, 'brown': 1,
                    'red': 2, 'orange': 3,
                    'yellow': 4, 'green': 5,
                    'blue': 6, 'violet': 7,
                    'grey': 8, 'white': 9
                  };

    this.multiplerDict = {
                    'black': 'x1', 'brown': 'x10',
                    'red': 'x100', 'orange': 'x1K',
                    'yellow': 'x10K', 'green': 'x100K',
                    'blue': 'x1M', 'violet': 'x10M',
                    'grey': 'x100M', 'white': 'x1G',
                    'gold': 'x0.1', 'silver': 'x0.01'
                  };

    this.toleranceDict = {
                    'brown': 1, 'red': 2,
                    'green': .5, 'blue': .25,
                    'violet': .1, 'grey': 0.05,
                    'gold': 5, 'silver': 10,
                    'none': 20
                  };
  }

  getColors(): string[] {
    return this.colors;
  }

  getSigFiguresList(): string[] {
    return this.sigFiguresList;
  }

  getMultiplierList(): string[] {
    return this.multiplierList;
  }

  getToleranceList(): string[] {
    return this.toleranceList;
  }

  getSigFiguresDict(color: string) : any {
    return this.sigFiguresDict[color];
  }

  trackSigFigBySlot(index, sigFiguresList) {
    return sigFiguresList.index;
  }

  trackMultiplierBySlot(index, multiplierList) {
    return multiplierList.index;
  }

  trackToleranceBySlot(index, toleranceList) {
    return toleranceList.index;
  }
}
