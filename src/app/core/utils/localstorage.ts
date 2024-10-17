export class LocalStorageUtils {
  private _ib_user: string = 'ib.u';

  clearLoggedData() {
    localStorage.removeItem(this._ib_user);
  }

  //TODO ajustar tipagem
  getUser(): any | null {
    const user = localStorage.getItem(this._ib_user);

    if (!user) return null;

    return user;
  }

  //TODO ajustar tipagem
  saveUser(user: any) {
    localStorage.setItem(this._ib_user, JSON.stringify(user));
  }
}
