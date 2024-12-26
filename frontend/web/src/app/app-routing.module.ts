import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/livros', pathMatch: 'full' },
  {
    path: 'livros',
    loadChildren: () => import('./livro/livro.module')
      .then(m => m.LivroModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }