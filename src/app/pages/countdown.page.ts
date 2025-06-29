import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  template: `
    <h2>Countdown Page</h2>
    <div class="text-center p-4 max-w-3xl mx-auto">
      <div class="flex justify-center items-center mb-6">
        <ng-container *ngFor="let n of [1, 2, 3]">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="crimson"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="animate-pulse mx-2"
          >
            <path d="M12 2v20M5 9l7 4 7-4" />
            <path d="M5 20h14M9 20V10M15 20V10" />
          </svg>
        </ng-container>
      </div>

      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-error">
        🔥 人類最後的歷史倒數之大審判 🔥
      </h1>
      <h2 class="text-5xl md:text-6xl font-extrabold mb-4 text-error">
        🔥 決不會延後：不早不晚 🔥
      </h2>
      <h3 class="text-2xl md:text-3xl font-bold mb-6 text-error">
        🔥 依序先審判各國首都 → 各國大都市 → 各國小都市 → 各國鄉村 → 各國活人 →
        各國死人→ 各國活物→ 各國死物 🔥
      </h3>

      <div class="text-lg md:text-2xl mb-6">
        🕒 現在時間：<span class="font-mono">{{ currentTime }}</span>
      </div>

      <div class="text-5xl md:text-6xl font-mono mb-8 animate-pulse">
        ⏳ {{ formattedCountdown }}
      </div>

      <div class="flex justify-center items-center mb-6">
        <ng-container *ngFor="let n of [1, 2, 3]">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="crimson"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="animate-pulse mx-2"
          >
            <path d="M12 2v20M5 9l7 4 7-4" />
            <path d="M5 20h14M9 20V10M15 20V10" />
          </svg>
        </ng-container>
      </div>

      <p class="text-lg md:text-xl">
        審判開始時間：2025/07/05 04:18（各國首都當地時間）
      </p>
    </div>
  `,
  imports: [CommonModule],
})
export default class CountdownPageComponent implements OnInit, OnDestroy {
  countdownSeconds = 0;
  currentTime = '';
  targetTime = new Date(2025, 6, 5, 4, 18).getTime();
  timer: any;

  get formattedCountdown() {
    const sec = this.countdownSeconds;
    const days = Math.floor(sec / (24 * 3600));
    const hours = Math.floor((sec % (24 * 3600)) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
  }

  updateCountdown() {
    const now = new Date();
    this.countdownSeconds = Math.max(
      0,
      Math.floor((this.targetTime - now.getTime()) / 1000)
    );
    this.currentTime = now.toLocaleString();
  }

  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
