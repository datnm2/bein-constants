export interface SharedUserDto {
  id: string;
  username: string;
  fullname: string;
  avatar: string;
  email: string;
  groups: string[];
}

export const SHARED_USER_KEY_PREFIX = "SU";
