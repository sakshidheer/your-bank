import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text:string="";
  @Input() color:string="";

  constructor() { }

  ngOnInit(): void {
  }

   getBgColor(): string{
      if(this.color == 'primary')
        return '#3f51b5'
      else
        return ''
  }

}
