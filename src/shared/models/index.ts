import { Request } from 'express';

import { User } from '../../users/models';

export interface AppRequest extends Request {
  user?: User
}
