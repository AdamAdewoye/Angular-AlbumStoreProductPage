import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ProductService {

  _albumUrl:string = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id, number){
    return this._http.get(this._albumUrl)
  }

}
