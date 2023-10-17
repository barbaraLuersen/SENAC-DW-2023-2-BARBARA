import { ProdutosModule } from './produtos.module';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

//Routes cria uma rota para saber para qual página você é redirecionado dependendo da url.

//Tipo a url que tinhamos no controller no backend em java.

//Exemplo: {path: 'lista', component:ProdutoListagemComponent}, = quando a url vier com 'lista', o que será feito
//é o redirecinamento para o pacote ProdutoListagem
const routes: Routes = [
  { path: 'lista', component: ProdutoListagemComponent }, //URL para BUSCAR produtos
  { path: 'detalhe', component: ProdutoDetalheComponent }, //URL para CADASTRAR produtos
  { path: 'detalhe/:id', component: ProdutoDetalheComponent }, //URL para EDITAR produtos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
