import { Component, VERSION, OnInit } from '@angular/core';
import { DatabaseConnectionService } from './database-connection-service/database-connection.service'
import { ViewComponent } from './view-component/view.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'iRacing Series Picker';
  data = [];
  private db;

  constructor(private dbService: DatabaseConnectionService) {
  }

  ngOnInit() {
    this.data = this.dbService.getSeries()
  }


  addTracks() {
    this.db.collection('tracks').doc('Limerock').set({
      type: 'road'
    });
  }

  getSeries() {
  }
}
