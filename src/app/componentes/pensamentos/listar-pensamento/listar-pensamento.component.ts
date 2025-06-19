import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentosService } from '../pensamentos.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {


  listarPensamentos: Pensamento[] = 
  [
    
  ]

  constructor(private service: PensamentosService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listarPensamentos) => {
      this.listarPensamentos = listarPensamentos;
    })
  }

}
