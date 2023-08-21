import { Component , OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('name') nameKey!: ElementRef;
  constructor(){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.   
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
