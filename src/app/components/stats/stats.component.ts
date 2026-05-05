import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats: Stat[] = [
    { value: 18, suffix: '+', label: 'Years in Business', icon: 'fa-calendar', current: 0 },
    { value: 500, suffix: '+', label: 'Happy Clients', icon: 'fa-face-smile', current: 0 },
    { value: 12, suffix: '+', label: 'Product Categories', icon: 'fa-box', current: 0 },
    { value: 100, suffix: '%', label: 'Quality Assured', icon: 'fa-square-check', current: 0 },
  ];

  animated = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this.animateCounters();
      }
    }, { threshold: 0.3 });
    observer.observe(this.el.nativeElement);
  }

  animateCounters() {
    this.stats.forEach(stat => {
      const duration = 1800;
      const steps = 60;
      const increment = stat.value / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.value);
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    });
  }
}
