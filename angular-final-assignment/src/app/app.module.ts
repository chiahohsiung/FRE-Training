import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FormComponent } from "./form/form.component"
import { HttpClientModule } from "@angular/common/http"
import { AlbumsComponent } from "./albums/albums.component"
import { FormsModule } from "@angular/forms"
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

@NgModule({
    declarations: [AppComponent, FormComponent, AlbumsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
