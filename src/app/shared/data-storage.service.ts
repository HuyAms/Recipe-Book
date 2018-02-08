import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/add/operator/map';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://recipe-book-56b71.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    // console.log('fetch data works')
    this.http.get('https://recipe-book-56b71.firebaseio.com/recipes.json')
      .map(
        (response: Recipe[]) => {
          for (let recipe of response) {
            if (!recipe['ingredients']) {
              recipe.ingredients = [];
            }
          }
          return response;
        }
      )
      .subscribe(
      (response: Recipe[]) => {
        console.log(response);
        this.recipeService.setRecipes(response);
      }
    );
  }
}
