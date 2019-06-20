import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import {Input} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() title: string;
  @Input() poster: string;
  @Input() posterId: number;
  @Input() content: string;
  @Input() postId: number;

  constructor() { }

  ngOnInit() {
  }

}
