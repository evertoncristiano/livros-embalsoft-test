import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroRoutingModule } from './livro.route';
import { LivroAppComponent } from './livro-app.component';

@NgModule({
  declarations: [
    LivroAppComponent,
    LivroFormComponent,
    LivroListComponent,
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
  ]
})
export class LivroModule { }
