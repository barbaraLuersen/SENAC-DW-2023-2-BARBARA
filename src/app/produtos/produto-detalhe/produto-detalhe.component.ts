import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fabricante } from 'src/app/shared/model/fabricante';
import { Produto } from 'src/app/shared/model/produto';
import { FabricanteService } from 'src/app/shared/service/fabricante.service';
import { ProdutosService } from 'src/app/shared/service/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss'],
})
export class ProdutoDetalheComponent implements OnInit {
  //Cria um atributo para armazenar o id do produto selecionado
  //em outra tela, passado através da URL (mesma coisa para o atributo que trás
  //um produto e que trás um fabricante, mas eles vieram atráves de uma classe)
  public idProduto: number;
  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];

  constructor(
    private produtoService: ProdutosService,
    private fabricanteService: FabricanteService,
    private router: Router,
    private route: ActivatedRoute //Objeto route, do tipo ActivatedRoute, Este objeto tem a //capacidade de obter parâmetros passados na URL.
  ) {}

  //ngOnInit é carregado depois que o nosso construtor é inicializado.
  //É um local para colocar o código que precisamos executar logo que
  //a classe é instanciada.
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idProduto = params['id']; //'id' é o nome do parâmetro definido na rota (na classe: produtos-routing-module.ts)

      //Se tem um id na URL então ele busca o produto com aquele id
      if (this.idProduto) {
        this.buscarProduto();
      }
    });

    this.fabricanteService.listarTodos().subscribe(
      (resultado) => {
        this.fabricantes = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar os fabricantes: ' + erro, 'error');
      }
    );
  }

  //Este método está buscando um produto a partir de seu 'id' que veio da URL
  buscarProduto() {
    this.produtoService.pesquisarPorId(this.idProduto).subscribe(
      (resultado) => {
        this.produto = resultado;
      },
      (erro) => {
        Swal.fire(
          'Erro',
          'Erro ao buscar o produto com id (' + this.idProduto + ') : ' + erro,
          'error'
        );
      }
    );
  }

  salvar() {
    //Se chama o método 'salvar()' e tem um 'id' na URL então vai para a
    //página de edição (que é a página de cadastro, mas com alguns campos já preenchidos)
    if (this.idProduto) {
      this.produtoService.atualizar(this.produto).subscribe(
        (sucesso) => {
          Swal.fire('Sucesso', 'Produto atualizado!', 'success');
          this.produto = new Produto();
        },
        (erro) => {
          Swal.fire('Erro', 'Erro ao atualizar o produto: ' + erro, 'error');
        }
      );

      //Se chama o método 'salvar()' e NÃO tem um 'id' na URL então vai para a
      //página de cadastro
    } else {
      this.produtoService.salvar(this.produto).subscribe(
        (sucesso) => {
          Swal.fire('Sucesso', 'Produto cadastrado!', 'success');
          this.produto = new Produto();
        },
        (erro) => {
          Swal.fire('Erro', 'Erro ao cadastrar o produto: ' + erro, 'error');
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['produtos/lista/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
