import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaToHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
    'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

    headlinesPage = 0;
    
    categoriaActual = '';
    

    constructor(private http: HttpClient) { }

    /**
     * 
     * @param query 
     * <T> : esto es para recibir el tipo de dato a devolver, al invocar la funcion le tengo que 
     * pasar el tipo de dato a devolver
     */
    private ejecutarQuery<T>( query: string ) {

        query = `${apiUrl}${query}`;

        return this.http.get<T>(query, {headers} );
    }

    getTopHeadlines() {

        this.headlinesPage++;

        /** Retornar peticion de tipo RespuestaToHeadlines
         * de la interfaz esto es para que typescript identifique que trae y no tener que usar
         *  ['indice']
         */

        // tslint:disable-next-line: max-line-length
        // return this.http.get<RespuestaToHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c5efa20eb664a04af76e19ba1b0dd0f`);
        return this.ejecutarQuery<RespuestaToHeadlines>(`/top-headlines?country=us&page=${ this.headlinesPage }`);
    }

    getTopHeadlinesCategoria( categoria: string ) {
        // tslint:disable-next-line: max-line-length
        // return this.http.get<RespuestaToHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c5efa20eb664a04af76e19ba1b0dd0f`);
        return this.ejecutarQuery<RespuestaToHeadlines>(`/top-headlines?country=us&category=${ categoria }`);
    }
}
