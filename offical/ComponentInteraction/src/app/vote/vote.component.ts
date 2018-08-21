import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() name: string;
  @Output() vote = new EventEmitter<boolean>();
  didVote = false;

  constructor() { }

  ngOnInit() {
  }


  disAgree() {
    this.didVote = true;
    this.vote.emit(false);
  }

  agree() {
    this.didVote = true;
    this.vote.emit(true);
  }
}
