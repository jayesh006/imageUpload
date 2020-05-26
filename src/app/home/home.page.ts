import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController } from '@ionic/angular';
import { ModelPagePage } from '../model/model-page/model-page.page';
import { OCR, OCRSourceType, OCRResult } from '@ionic-native/ocr/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  dummyArray = [1];


  contactList: any[] = [];

  constructor(private camera: Camera,
    private con: Contacts,
    public actionSheetController: ActionSheetController,
    private file: File,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    private model: ModalController,
    private ocr: OCR,
    private navCtrl: NavController
  ) { }

  public lunch = {
    mainCourse: 'steak',
    desert: 'pudding'
  };

  public dinner: string;


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);

      // Handle error
    });
  }

  async selectImage() {
    console.log('hiii');

    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }


  onCommentClick() {
    const promt = this.alertCtrl.create({
      header: 'Comment Box',
      subHeader: "Enter your comments",
      inputs: [
        {
          name: 'Comments',
          placeholder: 'Type to comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked' + data.Comments);
          }
        }
      ]
    });
    promt.then((e) => {
      e.present();
    })

  }

  onShareClick() {
    var option = {
      message: 'Ionic Share',
      url: 'https://www.youtube.com/watch?v=44TgUEiqp3k'
    };

    this.socialSharing.shareWithOptions(option);
  }


  async openModal() {
    const modal = await this.model.create({
      component: ModelPagePage
    });
    return await modal.present();
  }

  async openModalWithData() {
    const modal = await this.model.create({
      component: ModelPagePage,
      componentProps: {
        lunch: this.lunch
      }
    });

    modal.onWillDismiss().then(dataReturn => {
      this.dinner = dataReturn.data;
      console.log('Receive: ', this.dinner);

    });
    return await modal.present().then(_ => {
      console.log('Seding: ', this.lunch);

    });
  }


  onToggleClick(e) {
    console.log(e);

  }


  loadContacts() {
    let option = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };

    this.con.find(['*'], option).then((contact: any) => {
      this.contactList = contact
      console.log(contact);

    });
  }


  createContact() {
    let contact = this.con.create();
    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );

  }

  ocrFun(){
    
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.ocr.recText(OCRSourceType.NORMFILEURL, imageData).then((res:OCRResult) => {
        // console.log(JSON.stringify(res));
        console.log(res.blocks.blocktext);
        
      }).catch((error: any) => {
        console.log('error : '+error,JSON.stringify(error));
        
      });
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);

      // Handle error
    });
    
  }


  graph(){
    this.navCtrl.navigateForward('graph');
  }


}

