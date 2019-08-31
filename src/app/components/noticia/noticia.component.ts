import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

    @Input() noticia: Article;
    @Input() indice: any = '';

    constructor(private iab: InAppBrowser,
                private actionSheetCtrl: ActionSheetController,
                private socialSharing: SocialSharing) { }

    ngOnInit() {}

    abrirNoticia() {
        console.log('noticia', this.noticia.url);
        /** plugin para abrir la pagina web desde el navegador web predeterminado en el movil */
        const browser = this.iab.create( this.noticia.url, '_system');
    }

    /**
     * La clase action-dark estara de manera global por el action sheet por eso se coloca en el global.sccs
     */
    async lanzarMenu() {
        const actionSheet = await this.actionSheetCtrl.create({
            // header: 'Albums',
            buttons: [{
                text: 'Compartir',
                icon: 'share',
                cssClass: 'action-dark',
                handler: () => {
                    console.log('Share clicked');

                    this.socialSharing.share(

                        this.noticia.title,
                        this.noticia.source.name,
                        '',
                        this.noticia.url
                    );
                }
            }, {
                text: 'Favorito',
                icon: 'star',
                cssClass: 'action-dark',
                handler: () => {
                    console.log('Share Favorito');
                }
            }, {
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                cssClass: 'action-dark',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
    
        await actionSheet.present();
    }

}
