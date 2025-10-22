import { Component, OnInit } from '@angular/core';
import { cachorro } from 'src/app/core/models/cachorro.model';
import { TabelaPrecosService } from 'src/app/core/services/tabela-precos.service';

@Component({
  selector: 'app-teste-preco',
  templateUrl: './teste-preco.component.html'
})
export class TestePrecoComponent implements OnInit {
  
  porteSelecionado = 'Grande';
  racas: string[] = [];
  servicosBase: string[] = [];
  servicosAdicionais: string[] = [];

  cachorroExemplo: cachorro = {
    id: 'pet001',
    nomeCachorro: 'Juck',
    nomeTutor: 'Gabriel',
    contatoTutor: '(11)9 9999-9999',
    endereco: 'Rua Thomas Mann 91',
    raca: 'Golden',
    porte: 'Grande',
    servicosBase: 'Banho e Triming',
    adicionais: ['Hidratação', 'Cortar Unha']
  };

  valorBase = 0;
  valorAdicional = 0;
  valorTotal = 0;

  constructor(private tabelaPrecos: TabelaPrecosService) {}

  ngOnInit(): void {
    this.racas = this.tabelaPrecos.getRacasPorPorte(this.porteSelecionado);
    this.servicosBase = this.tabelaPrecos.getServicosPorRacaPorte(this.cachorroExemplo.raca, this.cachorroExemplo.porte);
    this.servicosAdicionais = this.tabelaPrecos.getServicosAdicionais();

    this.valorBase = this.tabelaPrecos.getPrecoBasePorCachorro(this.cachorroExemplo);
    this.valorAdicional = this.tabelaPrecos.getPrecoAdicionalPorCachorro(this.cachorroExemplo);
    this.valorTotal = this.tabelaPrecos.getPrecoTotalPorCachorro(this.cachorroExemplo);
  }
}
