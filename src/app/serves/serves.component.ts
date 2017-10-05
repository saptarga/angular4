import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serves',
  templateUrl: './serves.component.html',
  styleUrls: ['./serves.component.css']
})
export class ServesComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
