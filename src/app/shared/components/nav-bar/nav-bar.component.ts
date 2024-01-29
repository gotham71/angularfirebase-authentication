import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformsList } from '../../data/platforms';
import { Platform } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  platformsSelected = {};
  openedBtn = false;
  PlatformsList: Platform[] = PlatformsList;
  searchQuery!: string;

  constructor(
    private route: Router,
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.searchQuery = '';
    this.platformsSelected = this.PlatformsList[0];
  }

  onSubmit(form: NgForm) {
    this.searchQuery = form.value.search;
    this.gameService.getPlatformSelected(this.platformsSelected);
    this.route.navigate(['search', this.searchQuery]);
    this.searchQuery = '';
  }


}
// <!-- <script>
// var mainListDiv = document.getElementById("mainListDiv"),
//   mediaButton = document.getElementById("mediaButton");

// mediaButton.onclick = function () {

//   "use strict";

//   mainListDiv.classList.toggle("show_list");
//   mediaButton.classList.toggle("active");

// };
// </script> -->
