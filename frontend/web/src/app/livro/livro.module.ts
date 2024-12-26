import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroRoutingModule } from './livro.route';
import { LivroAppComponent } from './livro-app.component';
import { LivroService } from './services/livro.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LivroAppComponent,
    LivroFormComponent,
    LivroListComponent,
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LivroService
  ]
})
export class LivroModule { }
