import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

const directives: Array<any> = [HeaderComponent, ErrorComponent];

@NgModule({
  declarations: directives,
  imports: [CommonModule, IonicModule, RouterModule],
  exports: directives,
})
export class SharedModule {}
