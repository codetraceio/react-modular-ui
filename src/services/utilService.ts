export class UtilService {
  generateKey(): string {
    return `k${Math.random().toString(36).substr(2, 20)}`;
  }
}

export default new UtilService();
