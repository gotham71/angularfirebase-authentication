import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformsList } from '../../data/platforms';
import { Platform } from '../../models/game';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  openedBtn = false;
  PlatformsList: Platform[] = PlatformsList;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.route.navigate(['search', form.value.search]);
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
