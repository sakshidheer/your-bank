import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label:string="";
  @Input() name:string="";
  @Input() type:string ="input"
  constructor() { }

  ngOnInit(): void {
  }

}
