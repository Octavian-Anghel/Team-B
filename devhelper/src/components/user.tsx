// user.ts
import { Settings, Theme } from "../components/settings";

class User {
  private email: string;
  private password: string;
  private settings: Settings;

  constructor(email: string, password: string, language: string, theme: Theme) {
    this.email = email;
    this.password = password;
    this.settings = new Settings(theme, language);
  }

  public toggleTheme(): void {
    this.settings.toggleTheme();
  }

  public switchLanguage(newLanguage: string): void {
    this.settings.getPreferredLanguage();
  }

  public updateSettings(newSettings: Settings): void {
    this.settings = newSettings;
  }

  public changeEmail(newEmail: string): void {
    this.email = newEmail;
  }

  public changePassword(newPassword: string): void {
    this.password = newPassword;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getCurrentTheme(): Theme {
    return this.settings.getCurrentTheme();
  }

  public getPreferredLanguage(): string {
    return this.settings.getPreferredLanguage();
  }

  public getSettings(): Settings {
    return this.settings;
  }
}

export { User };
