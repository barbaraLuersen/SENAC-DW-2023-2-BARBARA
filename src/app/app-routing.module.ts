import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//routes cria uma rota para saber para qual página você é redirecionado dependendo da url.
//Tipo a url que tinhamos no controller no backend em java.
//{path: '', redirectTo:'produtos/lista', pathMatch:'full'}, = quando a url não tiver nada além da url padrão
//ela deve colocar 'produtos/lista' (ou qualquer tela que seja a inicial, como menu) e depois ir para a o pacote
//'produtos.module', de onde ele pega uma outra route e segue o caminho
const routes: Routes = [
  //{ path: '', redirectTo: 'produtos/lista', pathMatch: 'full' },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
