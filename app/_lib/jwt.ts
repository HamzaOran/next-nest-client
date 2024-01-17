import jwt from 'jsonwebtoken';

export const signJwt = async (payload: Record<string, any>, expiresIn = '1d'): Promise<string> => {
  const token = await jwt.sign(payload, process.env.APP_JWT_SECRET!, {
    algorithm: 'HS512',
    expiresIn,
  });
  return token;
};

export const verifyJwt = (token: string): Record<string, any> => {
  const data = jwt.verify(token, process.env.APP_JWT_SECRET!, {
    algorithms: ['HS512'],
  }) as Record<string, any>;
  return data;
};
