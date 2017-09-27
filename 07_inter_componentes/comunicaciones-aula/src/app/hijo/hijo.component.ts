import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public sUsuario: string;
  @Output()
  public evento = new EventEmitter<boolean>();

  constructor() { 
    // Tambien funcionaría si lo ponemos aquí, pero Angular recomienda que se deje el constructor vacío
    //this.evento = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  btnBorrar(oEv) {
    console.log(oEv);
    this.evento.emit(true);
  }

}
