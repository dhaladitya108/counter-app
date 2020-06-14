import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter-app';

  count: number = 0;

  handlerIncrease() {
    if (this.count < 10) this.count += 1;
  }

  handlerDecrease() {
    if (this.count > 0) this.count -= 1;
  }

  handlerReset() {
    this.count = 0;
  }
}
