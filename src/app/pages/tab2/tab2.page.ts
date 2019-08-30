import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    /** Para obtener un elemento de ionic ddel html se hace a traves del viewchiel */
    @ViewChild(IonSegment, {static: true}) segment: IonSegment;

    noticias: Article[] = [];

    categorias = [
        'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
    ];

    constructor( private noticiasService: NoticiasService) {}

    ngOnInit() {
        this.segment.value = this.categorias[0];

        this.cargarNoticia( this.categorias[0] );
    }

    cambioCategoria( event ){

        this.noticias = [];

        this.cargarNoticia( event.detail.value );
    }

    cargarNoticia( categoria: string ) {

        this.noticiasService.getTopHeadlinesCategoria( categoria ).subscribe(
            respuesta => {
                // console.log(respuesta);
                /**
                 * Lo trabajo de este modo para ir agregando elementos a la noticias
                 * utilizo el spread operator para tomar cada arreglo o item
                 * del arreglo general respuesta.articles e irlo agregando uno a uno
                 */
                this.noticias.push( ...respuesta.articles );
            }
        );
    }

}
