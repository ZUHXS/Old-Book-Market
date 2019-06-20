import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookModule {
  id?: string;
  posterId: string;
  name: string;
  exprice: number;
  price: number;
  ISBN: string;
  imageURL: string;
  date: string;
  constructor() {  }
}
