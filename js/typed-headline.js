class TypedHeadline {
  constructor(el, words, opts = {}) {
    this.el = el;
    this.words = words;
    this.typeSpeed = opts.typeSpeed ?? 80;
    this.deleteSpeed = opts.deleteSpeed ?? 40;
    this.pauseAfter = opts.pauseAfter ?? 3000;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.deleting = false;
    this._tick = this._tick.bind(this);
    this._tick();
  }

  _tick() {
    const word = this.words[this.wordIndex];
    if (!this.deleting) {
      this.charIndex++;
      this.el.textContent = word.slice(0, this.charIndex);
      if (this.charIndex === word.length) {
        // done typing -> wait then delete
        setTimeout(() => {
          this.deleting = true;
          this._tick();
        }, this.pauseAfter);
        return;
      }
      setTimeout(this._tick, this.typeSpeed);
      return;
    }

    // deleting
    this.charIndex--;
    this.el.textContent = word.slice(0, this.charIndex);
    if (this.charIndex === 0) {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(this._tick, 200); // small pause before next word
      return;
    }
    setTimeout(this._tick, this.deleteSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.hero__typed');
  if (!el) return;
  const words = ['Developer.', 'Business Owner.', 'Designer.'];
  new TypedHeadline(el, words, {
    typeSpeed: 90,
    deleteSpeed: 70,
    pauseAfter: 3000,
  });
});
