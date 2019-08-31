import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

    noticias: Article[] = [];

    constructor(private storage: Storage) { }

    guardarNoticia( noticia: Article ) {

        /** Con find lo que hago es si encuentro alguna que coincida en mi arreglo lo retorna 
         * y si no retorna undefined
         */
        const existe = this.noticias.find( noti => noti.title === noticia.title );

        if ( !existe ) {

            /** Guardamos la noticia en la primera posicion del arreglo */
            this.noticias.unshift( noticia );

            this.storage.set('favoritos', this.noticias);
        }

    }

    cargarFavorito() {

    }
}
