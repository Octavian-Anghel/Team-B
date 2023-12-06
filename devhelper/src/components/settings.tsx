// settings.ts

enum Theme {
    Light = "light",
    Dark = "dark",
  }
  
  class Settings {
    private currentTheme: Theme;
    private preferredLanguage: string;
  
    constructor(theme: Theme, language: string) {
      this.currentTheme = theme;
      this.preferredLanguage = language;
    }
  
    public toggleTheme(): void {
      this.currentTheme = this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
      this.applyTheme();
    }
  
    public setPreferredLanguage(newLanguage: string): void {
      this.preferredLanguage = newLanguage;
      this.applyLanguage();
    }
  
    private applyLanguage(): void {
      // You can implement logic to apply language changes if needed
      console.log(`Preferred language applied: ${this.preferredLanguage}`);
    }
  
    private applyTheme(): void {
      const body = document.body;
  
      if (this.currentTheme === Theme.Dark) {
        // Apply dark mode styles
        body.style.backgroundColor = '#000';  // Dark background color
        body.style.color = '#fff';            // Light text color
      } else {
        // Apply light mode styles
        body.style.backgroundColor = '#fff';  // Light background color
        body.style.color = '#000';            // Dark text color
      }
  
      console.log(`Theme applied: ${this.currentTheme}`);
    }
  
    public getCurrentTheme(): Theme {
      return this.currentTheme;
    }
  
    public getPreferredLanguage(): string {
      return this.preferredLanguage;
    }
  }
  
  export { Settings, Theme };
  