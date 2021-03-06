import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'step1',
    loadChildren: () => import('./step1/step1.module').then( m => m.Step1PageModule)
  },  {
    path: 'step2',
    loadChildren: () => import('./step2/step2.module').then( m => m.Step2PageModule)
  },
  {
    path: 'step3',
    loadChildren: () => import('./step3/step3.module').then( m => m.Step3PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./finish/finish.module').then( m => m.FinishPageModule)
  },
  {
    path: 'ag-entrega',
    loadChildren: () => import('./ag-entrega/ag-entrega.module').then( m => m.AgEntregaPageModule)
  },
  {
    path: 'entrega',
    loadChildren: () => import('./entrega/entrega.module').then( m => m.EntregaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
