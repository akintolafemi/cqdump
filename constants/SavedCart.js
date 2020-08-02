import { AsyncStorage } from 'react-native';

export default async function SavedCart() {
  try {
    const retrievedCart =  await AsyncStorage.getItem('mpCart');
    let items = [];
    let total = 0;
    let subTotal = 0;
    if (retrievedCart !== null) {
      items = JSON.parse(retrievedCart);
      total = (JSON.parse(retrievedCart)).length;
      for(let i = 0; i < total; i++) {
        subTotal = subTotal + (parseInt(items[i].productprice) * items[i].quantity)
      }
    }
    let cart = {
      "items": items,
      "total": total,
      "subTotal": subTotal
    };
    return cart;
  } catch (error) {
    console.log(error.message);
  } 
  return
}
