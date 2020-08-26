import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SlidesComponent } from './slides/slides.component';
import { StartButtonComponent } from './start-button/start-button.component';



@NgModule({
  declarations: [SlidesComponent, StartButtonComponent],
  exports: [SlidesComponent, StartButtonComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule { }
