import { Dream, Topics } from '../models/Dream';
import { UserAuth } from '../models/User';

export const authenticate = () =>
  new Promise<UserAuth>((resolve) => resolve(require('../data/auth.json')));

export const getAllDreamsService = () =>
  new Promise<{ dreams: Dream[] }>((resolve) =>
    resolve(require('../data/dreams.json'))
  );

export const getAllTopicsByDreamId = (id: string) =>
  new Promise<Topics[] | undefined>((resolve) => {
    const data: { dreams: Dream[] } = require('../data/dreams.json');
    const topics = data.dreams.find((dream) => dream.id === id)?.topics;
    resolve(topics);
  });

export const getTopicById = (id: string) =>
  new Promise<Topics | undefined>((resolve) => {
    const data: { dreams: Dream[] } = require('../data/dreams.json');
    data.dreams.forEach((dream) => {
      const topic = dream.topics.find((topic) => topic.id === id);
      resolve(topic);
    });
  });
