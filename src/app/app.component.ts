import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Card, ProductsHttpService} from "./services/products-http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards$: Observable<Card[]> = of([]);

  constructor(private productsHttpService: ProductsHttpService) {
  }

  ngOnInit() {
    this.cards$ = this.productsHttpService.getProducts();
  }

  flipCard(setting: MouseEvent) {
    let card: HTMLElement;

    if ((setting?.target as HTMLElement)?.classList.contains("card__setting_img"))
      card  = ((setting?.target as HTMLElement)?.parentNode?.parentNode?.parentNode as HTMLElement);
    else
      card = ((setting?.target as HTMLElement)?.parentNode?.parentNode as HTMLElement);

    (card.getElementsByClassName("card__view_up")[0] as HTMLElement).classList.toggle("card__view_hide");
    (card.getElementsByClassName("card__view_down")[0] as HTMLElement).classList.toggle("card__view_hide");

    return false;
  }
}
