import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BrianTambaraSharedModule } from 'app/shared/shared.module';
import { BrianTambaraCoreModule } from 'app/core/core.module';
import { BrianTambaraAppRoutingModule } from './app-routing.module';
import { BrianTambaraHomeModule } from './home/home.module';
import { BrianTambaraEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BrianTambaraSharedModule,
    BrianTambaraCoreModule,
    BrianTambaraHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BrianTambaraEntityModule,
    BrianTambaraAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class BrianTambaraAppModule {}
