import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector :'search-box',
    templateUrl: './app/components/search-box/search-box.component.html',
    styleUrls: ['./app/components/search-box/search-box.component.css']
})
export class SearchBoxComponent {
    searchInputAnimationState: string = 'hidden';

    showSearchInput(): void {
        console.log('show');
        this.searchInputAnimationState = 'show';
    }

    @Output() onSearch: EventEmitter<string> = new EventEmitter();


}