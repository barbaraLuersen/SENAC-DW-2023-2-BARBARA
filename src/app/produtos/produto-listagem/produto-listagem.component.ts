import Swal from 'sweetalert2';
import { ProdutosService } from './../../shared/service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoSeletor } from 'src/app/shared/model/seletor/produto.seletor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss'],
})
export class ProdutoListagemComponent implements OnInit {
  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) {}

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

  //router porque quando você clica no botão 'editar' na tela de listagem o sistema deve redirecionar para a tela de
  //detalhe(tela de cadastro)
  editar(id: number) {
    this.router.navigate(['/produtos/detalhe', id]);
  }

  pesquisar() {
    this.produtosService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  limpar() {
    this.seletor = new ProdutoSeletor();
  }

  //TODO Pegar o que está no git do prof - Correção em relação ao botão cancelar exclusão
  excluir(id: number) {
    Swal.fire({
      title: 'Você está certo disso?',
      text: 'Deseja excluir o produto #' + id + '?',
      icon: 'warning',
      showCancelButton: true,
    }).then((retorno) => {
      if (retorno.isConfirmed) {
        this.produtosService.excluir(id).subscribe(
          (sucesso) => {
            Swal.fire('Sucesso', 'Produto excluído com sucesso!', 'success');
            this.buscarProdutos(); //Atualiza a listagem
          },
          (erro) => {
            Swal.fire('Erro', 'Erro ao excluir o produto ' + erro, 'error');
          }
        );
      }
    });
  }
}
