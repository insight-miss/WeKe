import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainBow]'
})
export class RainBowDirective {
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.outline-color') borderColor: string;
  @HostListener('keydown')
    onKeydown(){
    let colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  constructor() { }

}

