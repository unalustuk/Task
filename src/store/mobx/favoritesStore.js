import {action, makeObservable, observable} from 'mobx';

class Favorites {
  favorites = [];

  constructor() {
    makeObservable(this, {
      favorites: observable,
      addFavorite: action,
      removeFavorite: action,
    });
  }

  addFavorite(user) {
    this.favorites = [...this.favorites, {...user, isFavorite: true}];
  }

  removeFavorite(userId) {
    this.favorites = this.favorites.filter(user => user.id !== userId);
  }
}

export const favoritesStore = new Favorites();
