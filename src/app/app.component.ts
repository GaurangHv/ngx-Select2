import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected2: any;
  data2: Array<any>;

  ngOnInit() {

    let tempData = [];
    for (let i = 0; i < 101; i++) {
      tempData.push(`A ${i}`);
    }
    this.data2 = tempData;
  }
}
