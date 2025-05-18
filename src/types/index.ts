export interface SUserAuth {
  username: string;
  email: string;
  tg_id?: number | null;
  password: string;
}

export interface SUserLogin {
  email: string;
  password: string;
}

export interface ProfilePayload {
  date_of_birth: string;
  region: string;
  sex: boolean;
  api_key_ozon: string;
  client_id_ozon: number;
  provider_id?: number;
}
