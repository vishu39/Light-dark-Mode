import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
