import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    /** Tomar clase del elemento HTML y trabajarlo aqui, tomar elemtos de HTML */
    /** Componente, clase:tipoClase */
    @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

    noticias: Article[] = [];

    constructor(private noticiasService: NoticiasService) {}

    ngOnInit() {
        this.cargarNoticia();
    }

    loadData( event ) {
        this.cargarNoticia( event );
    }

    cargarNoticia( event? ) {

        this.noticiasService.getTopHeadlines().subscribe(
            respuesta => {
                console.log(respuesta);

                /**
                 * Lo trabajo de este modo para ir agregando elementos a la noticias
                 * utilizo el spread operator para tomar cada arreglo o item
                 * del arreglo general respuesta.articles e irlo agregando uno a uno
                 */
                this.noticias.push( ...respuesta.articles );

                if ( event ) {
                    event.target.complete();

                    if ( respuesta.articles.length === 0 ){

                        this.infiniteScroll.disabled = true;
                    }
                }
            }
        );
    }

}
