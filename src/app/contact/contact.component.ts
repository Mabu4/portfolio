import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  /**
   * A post request construct configuration
   */
   post = {
    // Where to send the post request Ex. http://my-domain/sendMail.php
    //or https://my-domain/sendMail.php if you have SSL-Certificate Active
    
    endPoint: 'https://web-site24.de/sendMail.php',
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm){
    if(ngForm.submitted && ngForm.form.valid){
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
  }

}
