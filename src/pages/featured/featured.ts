import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Owner } from '../../models/owner';

@IonicPage()
@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})
export class FeaturedPage {
  owners: Owner[] = [
    {
      id: '0',
      name: 'Advertiser Name',
      bio: 'Advertiser Description',
      imageUrl: 'http://via.placeholder.com/350x150'
    },
    {
      id: '1',
      name: 'Advertiser Name',
      bio: 'Advertiser Description',
      imageUrl: 'http://via.placeholder.com/350x150'
    },
    {
      id: '2',
      name: 'Advertiser Name',
      bio: 'Advertiser Description',
      imageUrl: 'http://via.placeholder.com/350x150'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
