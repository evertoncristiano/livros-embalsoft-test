import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroAppComponent } from './livro-app.component';

const livroRouterConfig: Routes = [
    {
        path: '', component: LivroAppComponent,
        children: [
            {
                path: '', component: LivroListComponent,
            },
            {
                path: 'novo', component: LivroFormComponent,
            },
            {
                path: 'editar/:id', component: LivroFormComponent,
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(livroRouterConfig)
    ],
    exports: [RouterModule]
})
export class LivroRoutingModule { }