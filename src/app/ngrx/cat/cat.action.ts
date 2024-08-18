import {createAction, props} from "@ngrx/store";
import {CatModel} from "../../models/cat.model";

export const getAllCats = createAction('[Cat] Get All Cats', props<{ limit: number }>());
export const getAllCatsSuccess = createAction('[Cat] Get All Cats Success', props<{ cats: CatModel[] }>());
export const getAllCatsError = createAction('[Cat] Get All Cats Error', props<{ error: string }>());
