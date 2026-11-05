import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  isSubmitted = signal(false);
  private formBuilder = inject(FormBuilder).nonNullable;
  private http = inject(HttpClient);
  form = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    message:[''],
    phone:['',[Validators.required]],
  })


  get name(){
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get message(){
    return this.form.get('message');
  }
  get phone(){
    return this.form.get('phone');
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.http.post('https://formbold.com/s/3wQv0',this.form.value).subscribe(
      {
        next:(response) => {
          this.form.reset();
          this.isSubmitted.set(true);
          console.log(response);

        },
        error:(error) => {
          console.log(error);
        }
        
      }
    );
  }
}
