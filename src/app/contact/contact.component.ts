import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validateForm() {
    let x = document.forms['form']['name'].value;
    let y = document.forms['form']['email'].value;
    let z = document.forms['form']['text'].value;
    if (x == "" || y == "" || z == "") {
      alert("Bitte Eingabefelder ausfüllen");
      return false;
    } else {
      return true;
    }
}

}
