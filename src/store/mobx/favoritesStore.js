import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable} from 'mobx';

//delete token from local storage
const deleteFavoritesFromLocalStorage = async () => {
  try {
    await AsyncStorage.removeItem('favorites');
  } catch (e) {
    console.log(e);
  }
};
class Favorites {
  favorites = [];

  constructor() {
    makeObservable(this, {
      favorites: observable,
      addFavorite: action,
      getFavorites: action,
      removeFavorite: action,
      storeFavoritesToLocalStorage: action,
    });
  }

  addFavorite(user) {
    this.favorites = [...this.favorites, {...user, isFavorite: true}];
    console.log('favorites');
    console.log(this.favorites);
    this.storeFavoritesToLocalStorage(JSON.stringify(this.favorites));
  }

  getFavorites(users) {
    this.favorites = [...this.favorites, ...users];
    console.log('getfavorites');
    console.log(this.favorites);
  }

  removeFavorite(userId) {
    this.favorites = this.favorites.filter(user => user.id !== userId);
    console.log('favorites');
    console.log(this.favorites);
    this.storeFavoritesToLocalStorage(JSON.stringify(this.favorites));
  }

  //store favorites to local storage
  storeFavoritesToLocalStorage = async value => {
    try {
      await AsyncStorage.setItem('favorites', value);
    } catch (e) {
      console.log(e);
    }
  };
}

export const favoritesStore = new Favorites();
