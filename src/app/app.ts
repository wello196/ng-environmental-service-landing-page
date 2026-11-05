import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './core/hero/hero';
import { About } from './core/about/about';
import { OurService } from './core/our-service/our-service';
import { ChooseUs } from './core/choose-us/choose-us';
import { Footer } from './core/footer/footer';
import { Contact } from './core/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Hero, About, OurService, ChooseUs, Footer, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('environmentalService');
}
