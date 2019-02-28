import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmpyLayoutComponent } from './empy-layout/empy-layout.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainLayoutComponent, 
    EmpyLayoutComponent, 
    HeaderComponent, 
    NavigationComponent, 
    FooterComponent, 
    RibbonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainLayoutComponent, 
    EmpyLayoutComponent
  ]
})
export class LayoutModule { }
