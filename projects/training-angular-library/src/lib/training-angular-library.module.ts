import { NgModule } from '@angular/core';
import { TrainingAngularLibraryComponent } from './training-angular-library.component';
import { TalButtonComponent } from './tal-button/tal-button.component';

@NgModule({
  imports: [
  ],
  declarations: [TrainingAngularLibraryComponent, TalButtonComponent],
  exports: [TrainingAngularLibraryComponent]
})
export class TrainingAngularLibraryModule { }
