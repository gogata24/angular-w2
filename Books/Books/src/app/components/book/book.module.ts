import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    RatingModule,
    ButtonModule,
    ToastModule,
    TooltipModule,
    ConfirmDialogModule,
  ],
})
export class BookModule {}
