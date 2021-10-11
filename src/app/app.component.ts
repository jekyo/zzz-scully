import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>Basic Scully app successfully deployed on {{ value }}</h1></div>`,
})
export class AppComponent {
  value = 'Jekyo';
}
