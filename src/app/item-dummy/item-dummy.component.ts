import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

declare var gtag:Function;

@Component({
  selector: 'app-item-dummy',
  templateUrl: './item-dummy.component.html',
  styleUrls: ['./item-dummy.component.css']
})
export class ItemDummyComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    /*
    this._router.routerState.snapshot.queryParams.subscribe(
      data => console.log('queryParams', data['code']));
      */
      console.log("_router:" , this._activatedRoute.snapshot.queryParams['codigo']);
      
      console.log("_activatedRoute", this._activatedRoute);
      this.chamaConversao();
  }

 
  chamaConversao() {
    console.log('Chamou converte');
    gtag('event', 'conversion', {
      'send_to': 'AW-853405762/YhUOCJ7CsYgBEMLg95YD'
    });
  }

}
