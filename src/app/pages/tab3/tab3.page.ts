import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    /** Bloquear el movimiento del Slide */
    slidesOpts = {
        allowSlidePrev: false,
        allowSlideNext: false
    }

    constructor(public dataLocalService: DataLocalService) {}


}
