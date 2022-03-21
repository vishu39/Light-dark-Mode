import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

const materials = [
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatStepperModule,
  MatMenuModule,
  MatSelectModule,
  MatNativeDateModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
