import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test recipe", "This is simply a test", "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=550&h=367&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F08%2FHD-201306-r-zimmern-mah-po-eggplant-in-garlic-sauce.jpg"),
    new Recipe("Test recipe", "This is simply a test", "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=550&h=367&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F08%2FHD-201306-r-zimmern-mah-po-eggplant-in-garlic-sauce.jpg"),
    new Recipe("Test recipe", "This is simply a test", "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=550&h=367&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F08%2FHD-201306-r-zimmern-mah-po-eggplant-in-garlic-sauce.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
