import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text:string="";
  @Input() color:string="";
  @Input() size:string="small";

  @Output() onClickEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

   getBgColor(): string{
      if(this.color == 'primary')
        return '#3f51b5'
      else
        return ''
  }

  getWidth(): string{
    if(this.size == 'large')
      return "100px"
    return "80px"
  }

  getHeight(): string{
    if(this.size == 'large')
      return "30px"
    return "30px"
  }

  clickHandler() :void{
    this.onClickEvent.emit();
  }
}
