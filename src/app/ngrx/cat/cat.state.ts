import {CatModel} from "../../models/cat.model";

export interface CatState {
  cats: CatModel[];
  loading: boolean;
  error: string;
}
