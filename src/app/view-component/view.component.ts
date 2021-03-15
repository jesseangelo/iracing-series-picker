import { Component, Input } from '@angular/core';

@Component({
  selector: 'view-component',
  templateUrl: './view.component.html',
  // styleUrls: [ './app.component.css' ]
})
export class ViewComponent {
  @Input() data

}
