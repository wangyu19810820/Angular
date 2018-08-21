import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missions = {};

  constructor() { }

  announceMission(name, mission) {
    this.missions[name] = mission;
  }

  confirmMission(name) {
    return this.missions[name];
  }

}
