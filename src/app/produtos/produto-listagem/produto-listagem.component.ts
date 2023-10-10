import { ProdutosService } from './../../shared/service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoSeletor } from 'src/app/shared/model/seletor/produto.seletor';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss'],
})
export class ProdutoListagemComponent implements OnInit {
  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();
  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    //Similar ao método mais() do Java
    this.buscarProdutos();
  }

  //subscribe: chama função assincrona
  buscarProdutos() {
    this.produtosService.listarTodos().subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  editar(id: number) {
  }

  pesquisar(){
    this.produtosService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }
}
