import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectionService {

  config = {
    apiKey: "AIzaSyDocNaZ8mixbxlylgAiqis059yvRpWncUs",
    authDomain: "racebase-6bd9c.firebaseapp.com",
    databaseURL: "https://racebase-6bd9c.firebaseio.com",
    projectId: "racebase-6bd9c",
    storageBucket: "racebase-6bd9c.appspot.com",
    messagingSenderId: "136740290966",
    appId: "1:136740290966:web:f056882ae864e405f41db7",
    measurementId: "G-XPPZ0M1VZ0"
  };
  data = [];
  private db;
  seriesFormData: any = {};

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
    } 
    this.db = firebase.firestore();
  }

  ngOnInit() {
    this.getSeries()
  }

  addSeries() {
    this.db.collection('series').doc(this.seriesFormData.id).set({
      name: this.seriesFormData.name,
      type: this.seriesFormData.type,
      isDirt: this.seriesFormData.isDirtSeries ? true : false,
      license: this.seriesFormData.license,
      isSetupOpen: (this.seriesFormData.isSetupOpen == "true" ? true : false),
    });
    this.getSeries();
  }

  addTracks() {
    this.db.collection('tracks').doc('Limerock').set({
      type: 'road'
    });
  }

  getSeries(): [] {
    this.db.collection("series").get().then((querySnapshot) => {
    // console.log(querySnapshot.size)
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().license}`);
    });
      querySnapshot.forEach((doc) => {
        this.data.push({
          id: doc.id,
          displayName: doc.data().displayName,
          license: doc.data().license,
          setup: doc.data().setup,
          type: doc.data().type
        })
      });
    });
    return this.data as [];
  }
}