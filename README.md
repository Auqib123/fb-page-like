# FbPageLike

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## for usage 
  #add component tag as

#    <app-fan-of-page [info]="pageName"  (output)="onClicked($event)"></app-fan-of-page>
where 'info' is an input of Array holding info[0]===AppId
and info[1] is PageName you want to check weather user has liked or not

and 

(output)="onClicked($event)"
it will show you message weather user has liked your page or not;
message:1->user does not likes your page
           or
        2->user likes your page


to get link in git 

##make sure you are importing
HttpClientModule in parent component where you are using this

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
