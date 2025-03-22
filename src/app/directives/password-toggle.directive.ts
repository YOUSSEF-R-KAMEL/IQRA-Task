import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]',
  standalone: true,
})
export class PasswordToggleDirective {
  private isPasswordVisible = false;
  private button!: HTMLButtonElement;
  private icon!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.button = this.el.nativeElement as HTMLButtonElement;
    this.icon = this.button.querySelector('i') as HTMLElement; // FontAwesome or plain <i> element
  }

  @HostListener('click')
  togglePassword() {
    const input = this.button.previousElementSibling as HTMLInputElement;

    if (input) {
      this.isPasswordVisible = !this.isPasswordVisible;
      input.type = this.isPasswordVisible ? 'text' : 'password';

      // Toggle between "eye" and "eye-slash" icons
      if (this.icon) {
        this.icon.classList.toggle('fa-eye');
        this.icon.classList.toggle('fa-eye-slash');
      }
    }
  }
}
