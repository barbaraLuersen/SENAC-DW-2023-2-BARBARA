import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];

  constructor(
    private produtoService: ProdutosService,
    private fabricanteService: FabricanteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fabricanteService.listarTodos().subscribe(
      (resultado) => {
        this.fabricantes = resultado;
      },
      (erro) => {
        Swal.fire('Erro', 'Erro ao buscar os fabricantes: ' + erro, 'error');
      }
    );
  }
  salvar() {
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

  voltar() {
    this.router.navigate(['app/produtos/listagem/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
