class Github {
  constructor() {
    this.client_id = 'e519ce51f6ecbf1410f1';
    this.client_secret = '1cfedf217ea656302ddd2a97f3c6845a80c6cf7e';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}