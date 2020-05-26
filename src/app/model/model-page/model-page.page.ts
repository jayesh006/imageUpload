import { Component, OnInit, Input } from '@angular/core';
import{ ModalController } from '@ionic/angular';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.page.html',
  styleUrls: ['./model-page.page.scss'],
})
export class ModelPagePage implements OnInit {

  constructor(private modal: ModalController) { }

  @Input() public lunch: string;

  public dinner ={
    mainCourse: 'Fried Chicken',
    desert: 'Chocolate Cake'
  };

  ngOnInit() {
  }

  async closeModal() {
    await this.modal.dismiss(this.dinner);
  }

}
