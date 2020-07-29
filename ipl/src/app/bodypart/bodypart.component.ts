import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodypart',
  templateUrl: './bodypart.component.html',
  styleUrls: ['./bodypart.component.css'],
})
export class BodypartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string[] = [
    'Chennai Super Kings',
    'Mumbai Indians',
    'Rajasthan Royals',
    'Delhi Capitals',
    'Royal Challengers Bangalore',
    'Kolkata Knight Riders',
    'Kings XI Punjab',
    'Sunrisers Hyderabad',
  ];
  website: string[] = [
    'https://www.chennaisuperkings.com',
    'https://www.mumbaiindians.com',
    'https://www.rajasthanroyals.com',
    'https://www.delhicapitals.in',
    'https://www.royalchallengers.com',
    'https://www.kkr.in',
    'https://www.kxip.in',
    'https://wwww.sunrisershyderabad.in',
  ];
  phone: string[] = [
    '965-144-6018',
    '1-522-714-2638x44811',
    '(038) 030-9641x7086',
    '005-851-7095x72027',
    '1-471-836-5871x5841',
    '(247) 305-7427',
    '475-071-4608x101',
    '070-610-2261',
  ];
  imagef: string[] = [
    'csk.png',
    'MI.png',
    'RR.png',
    'Delhi.png',
    'RCB.png',
    'KKR.png',
    'KXI.png',
    'SRH.png',
  ];
}
