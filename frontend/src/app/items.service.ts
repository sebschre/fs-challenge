import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

export interface Item {
  city: string;
  start_date: Date;
  end_date: Date;
  price: number;
  status: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private rootUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getItems$(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.rootUrl}/items`).pipe(
      map((items) =>
        items.map((item) => ({
          ...item,
          start_date: new Date(item.start_date),
          end_date: new Date(item.end_date),
        }))
      )
    );
  }
}
