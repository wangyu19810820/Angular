export class Hero {

  constructor(public id: number, public name: string, public state: string) {
  }

  toggleState() {
    if (this.state === 'inactive') {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }

}
