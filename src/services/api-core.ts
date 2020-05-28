import { UserAuth } from '../models/User';
import { Dream } from '../models/Dream';

export const getAllDreamsService = () =>
  new Promise<{ dreams: Dream[] }>((resolve) =>
    setTimeout(() => resolve(require('../data/dreams.json')), 200)
  );

export const authenticate = () =>
  new Promise<UserAuth>((resolve) =>
    setTimeout(() => resolve(require('../data/auth.json')), 200)
  );
