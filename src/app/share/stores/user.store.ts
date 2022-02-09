import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

//import * as _shareMls from '@share/models';
import * as _shareSvc from '@share/services';

@Injectable()
export class UserStore extends ComponentStore<any> {

  constructor(private readonly userStorageSvc: _shareSvc.UserStorageService) {
    super({
      phone: undefined,
      guid: undefined,
      name: undefined,
      pincode: undefined,
      securityPhrase: undefined,
      token: undefined,
      userInfo: undefined,
      exchangeInfo: undefined,
      shopInfo: undefined,
      appPinCode:undefined
    });
  }

  phone: Observable<string> = this.select(state => state.phone);
  guid: Observable<string> = this.select((state) => state.guid);
  name: Observable<string> = this.select((state) => state.name);
  pincode: Observable<string> = this.select((state) => state.pincode);
  securityPhrase: Observable<string> = this.select((state) => state.securityPhrase);
  changeNumber: Observable<ChangeNumberData> = this.select(state => state.changeNumber);
  balance: Observable<number> = this.select(state => state.userInfo.balance);

  token: Observable<string> = this.select((state) => state.token);
  shopInfo: Observable<ShopInfo> = this.select(state => state.shopInfo);
  appPinCode: Observable<string> = this.select(state => state.appPinCode);

  /** Update only display name */
  readonly updateDisplayName = this.updater((state, name: string) => {
    state.userInfo.displayName = name;
    return state;
  });




  /** Update only shop banner */
  readonly updateShopBanner = this.updater((state, banner: string) => {
    state.shopInfo.banner = banner;
    return state;
  });

  readonly clearStore = this.updater((state) => {

    state = {
      phone: undefined,
      guid: undefined,
      name: undefined,
      pincode: undefined,
      securityPhrase: undefined,
      changeNumber: {
        oldPhoneNumber: undefined,
        oldPincode: undefined
      },
      token: undefined,
      userInfo: undefined,
      exchangeInfo: undefined,
      shopInfo: undefined,
      appPinCode:undefined
    }
    return state;
  });
}



/** this interface for keep data of change number steps */
export interface ChangeNumberData {
  oldPhoneNumber?: string;
  oldPincode?: string;
}


export interface BrokerInfo {
  activityRegion?: string;
  brokerId?: number;
  exchangeId?: number;
  factorRatio?: number;
  isActive?: boolean;
  isDeleted?: boolean;
  uniqueId?: string;
  user?: boolean;
  userId?: number;
}

export interface ShopInfo {
  address?: string;
  category?: string;
  categoryId?: number;
  description?: string;
  iban?: string;
  id?: number;
  interactiveSettings?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  location?: string;
  logo?: string;
  name?: string;
  owner?: { displayName?: string; }
  ownerId?: number;
  phoneNumber?: string;
  rate?: number;
  reviewsCount?: number;
  uniqueId?: string;
  banner?: string;
}

