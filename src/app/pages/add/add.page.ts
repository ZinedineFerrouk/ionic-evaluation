import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/models/artwork';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from '@capacitor/geolocation';

import { ArtworksService } from 'src/app/services/artworks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  artwork = new Artwork();

  constructor(
    private geocoder: NativeGeocoder,
    private router: Router,
    private toastCtrl: ToastController,
    private artworkService: ArtworksService
  ) {}

  ngOnInit() {
    this.fillPosition();
  }

  async fillPosition() {
    Geolocation.watchPosition(
      { enableHighAccuracy: true },
      async (position, err) => {
        if (!err) {
          const results = await this.geocoder.reverseGeocode(
            position.coords.latitude,
            position.coords.longitude
          );
          const address = results.pop();
          if (address.locality) {
            this.artwork.name = address.locality;
          }
        }
      }
    );
  }

  save() {
    this.artworkService.add(this.artwork).subscribe(async () => {
      const toast = await this.toastCtrl.create({
        message: 'Votre oeuvre à été ajoutée',
        duration: 2000,
        color: 'success',
      });
      toast.present();
      this.router.navigate(['/list']);
    });
  }
}
