import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
  
  ],
  imports: [
    
    StudentComponent,
    AppComponent,
   
 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }