import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // count: WritableSignal<number> = signal(0);
  count = signal(5);
  constructor() {
    console.log(this.count());
  }
  // name1 = signal('vamshii');
  // isLoggedIn = signal(true);
  // items = signal<string[]>([]);
  // user = signal({
  //   name: 'John',
  //   age: 25,
  // });

  title = 'Welcome to Angular 22';

  name = '';

  getMessage() {
    return 'Learn Angular with simple examples.';
  }

  showMessage1(event: Event) {
    console.log(event);
    console.log(event.target);
  }

  showMessage2(name: string) {
    console.log(name);
  }

  showInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  showKeyPressed(event: KeyboardEvent) {
    console.log(event.key);
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Input Entered....', value);
  }

  showName(name: string) {
    console.log(name);
  }
}
