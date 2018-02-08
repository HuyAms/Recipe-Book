import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC6b8YncY-ng_VMTsJZXEcSppI5XTGdjOM",
      authDomain: "recipe-book-56b71.firebaseapp.com"
    });
  }

}
