import { Component, OnInit } from '@angular/core';
import { ArtworksService } from 'src/app/services/artworks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  artworks: Array<any>;

  constructor(private artworkService: ArtworksService) {
    this.load();
  }

  load() {
    this.artworkService.getAll().subscribe((data) => {
      this.artworks = data;
    });
  }

  ngOnInit() {}
}
