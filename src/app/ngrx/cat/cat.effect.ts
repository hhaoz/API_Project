import {Injectable} from "@angular/core";
import {CatService} from "../../services/cat.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as CatAction from "./cat.action";
import {catchError, map, mergeMap, of} from "rxjs";


@Injectable()
export class CatEffect {
  constructor(private actions$: Actions,
              private catService: CatService) {
  }

  getCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatAction.getAllCats),
      mergeMap((quantity) => this.catService.getCats(quantity.limit).pipe(
        map(cats => CatAction.getAllCatsSuccess({cats})),
        catchError(error => of(CatAction.getAllCatsError({error})))
      ))
      ))
}
