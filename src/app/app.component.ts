import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_end_project';
}
