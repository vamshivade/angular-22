import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name: string = 'Vamshi Vade';

  topic: string = '4 Types of Data Bindings';

  image =
    'https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80';

  constructor() {
    console.log('constructor is called');
    console.log(this);
  }

  onSubmitClick() {
    const data = { name: this.name, topic: this.topic, image: this.image };
    console.log('Data sent to API', data);
  }

  // onCountryChange() {
  //   alert('Country has changed');
  // }
  onCountryChange1(event: Event) {
    console.log(event);
    const country = (event.target as HTMLSelectElement).value;

    alert(`Country has changed to: ${country}`);
  }

  onCountryChange2(country: string) {
  alert(country);
}
}
