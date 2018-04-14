import {Component, EventEmitter, Input, Output} from "@angular/core";
import {BLUE, RED} from "../constants";

@Component({
    selector: 'color-piker',
    template: `
        <div class="color-title" [ngStyle]="{'color': color}">Color picker</div>
        <div class="color-picker">
            <div class="color-sample color-sample-blue" (click)="choose('${BLUE}')">
                Blue
            </div>
            <div class="color-sample color-sample-red" (click)="choose('${RED}')">
                Red
            </div>
        </div>
    `,
})

export class ColorpickerComponent {
    @Input()
    color: string;

    @Output("color")
    colorOutput = new EventEmitter();

    choose(color:string){
        this.color = color;
        this.colorOutput.emit(color)
    }
    reset(){
        this.choose('black')
    }
}