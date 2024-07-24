import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-join-room',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './join-room.component.html',
  styleUrl: './join-room.component.css'
})
export class JoinRoomComponent implements OnInit {
  joinRoomForm!: FormGroup;
  fb = inject(FormBuilder);

  router = inject(Router);

  ngOnInit(): void {
    this.joinRoomForm = this.fb.group({
      user:['', Validators.required],
      room:['', Validators.required],
    });
  }

  joinRoom(){
    console.log(this.joinRoomForm.value);
    this.router.navigate(['chat']);
  }
}
