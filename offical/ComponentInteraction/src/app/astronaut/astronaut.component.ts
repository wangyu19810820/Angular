import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;

  constructor(private missionService:MissionService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  confirm() {
    this.confirmed = true;
    this.mission = this.missionService.confirmMission(this.astronaut);
  }
  
}
