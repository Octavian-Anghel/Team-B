// user/user.test.ts
import { User } from "../components/user";
import { Settings, Theme } from "../components/settings";

describe("User Class", () => {
  const initialEmail = "user@example.com";
  const initialPassword = "password123";
  const initialLanguage = "en";
  const initialTheme = Theme.Light;

  let user: User;

  beforeEach(() => {
    user = new User(initialEmail, initialPassword, initialLanguage, initialTheme);
  });

  test("Toggle Theme", () => {
    const initialTheme = user.getCurrentTheme();
    user.toggleTheme();
    expect(user.getCurrentTheme()).not.toBe(initialTheme);
  });

  test("Switch Language", () => {
    const newLanguage = "es";
    user.switchLanguage(newLanguage);
    expect(user.getPreferredLanguage()).toBe(newLanguage);
  });

  test("Update Settings", () => {
    const newSettings = new Settings(Theme.Dark, "fr");
    user.updateSettings(newSettings);
    expect(user.getCurrentTheme()).toBe(newSettings.getCurrentTheme());
    expect(user.getPreferredLanguage()).toBe(newSettings.getPreferredLanguage());
  });

  test("Change Email", () => {
    const newEmail = "new-email@example.com";
    user.changeEmail(newEmail);
    expect(user.getEmail()).toBe(newEmail);
  });

  test("Change Password", () => {
    const newPassword = "newPassword123";
    user.changePassword(newPassword);
    expect(user.getPassword()).toBe(newPassword);
  });

  test("Get Settings", () => {
    const settings = user.getSettings();
    expect(settings instanceof Settings).toBe(true);
    expect(settings.getCurrentTheme()).toBe(initialTheme);
    expect(settings.getPreferredLanguage()).toBe(initialLanguage);
  });
});
