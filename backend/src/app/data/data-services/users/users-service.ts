import { User } from '../../models';

export interface UsersService {  
  validateCheckin(id:string,bookingid:string,familyname:string):Promise<boolean | null>;
  getAllLabels(language:string): Promise<{[name:string] : string}[]>
}