import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: BookComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
