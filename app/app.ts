


import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {ColorpickerComponent} from "./components/colorpicker/colorpicker-component";
import {HeaderComponent} from "./components/header/header.component";




@Component({
    selector:'my-app',
    templateUrl: './app/app.component.html'
})
export class HelloWorld {

    onColor(color: string){
        console.log('color: ', color)
    }

}

 
@NgModule({
    declarations: [
        HelloWorld,
        SearchBoxComponent,
        ColorpickerComponent,
        HeaderComponent],

    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
