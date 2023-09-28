import { ProdutosModule } from './produtos.module';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//routes cria uma rota para saber para qual página você é redirecionado dependendo da url.
//Tipo a url que tinhamos no controller no backend em java.
//{path: 'lista', component:ProdutoListagemComponent}, = quando a url vier com 'lista', o que será feito
//é o redirecinamento para o pacote ProdutoListagem
const routes: Routes = [
  { path: 'lista', component: ProdutoListagemComponent },
  //{path: ':id', component:ProdutoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
