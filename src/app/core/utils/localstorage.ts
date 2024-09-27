export class LocalStorageUtils {

    public clearLoggedData(key: string) {
      localStorage.removeItem(key);
    }
  
    public getItem(key: string): any {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : null;
    }
      
    public setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }
      
    public removeItem(key: string): void {
      localStorage.removeItem(key);
    }
  }