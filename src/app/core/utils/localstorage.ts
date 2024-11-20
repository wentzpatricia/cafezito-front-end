import { User } from '../models/user.model';

export class LocalStorageUtils {
  private _cs_user: string = 'cs.u';

  clearLoggedData() {
    localStorage.removeItem(this._cs_user);
  }

  getUser(): User | null {
    const user = localStorage.getItem(this._cs_user);

    if (!user) return null;

    try {
      return JSON.parse(user) as User;
    } catch {
      console.error('Erro ao parsear os dados do usuário');
      return null;
    }
  }

  saveUser(user: User): void {
    localStorage.setItem(this._cs_user, JSON.stringify(user));
  }

  getToken(): string | null {
    const user = this.getUser();
    return user?.access_token || null;
  }
}
