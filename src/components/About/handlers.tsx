import { http } from 'msw';

export const handlers = [
  http .get('https://api.github.com/users/Marouane-sebti',  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        login: 'Marouane-sebti',
        avatar_url: 'https://github.com/Marouane-sebti.png',
      })
    );
  }),
];