import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintAndPrivacyComponent } from './imprint-and-privacy/imprint-and-privacy.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { InViewportModule } from 'ng-in-viewport';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModuleConfig } from '@ngx-translate/core/public_api';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const config: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MySkillsComponent,
    MyWorkComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ImprintAndPrivacyComponent,
    HomeComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(config)
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
