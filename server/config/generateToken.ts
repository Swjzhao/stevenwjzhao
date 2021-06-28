import jwt from 'jsonwebtoken';

const { ACTIVE_TOKEN_SECRET, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export const generateActiveToken = (payload: object) => jwt.sign(payload, `${ACTIVE_TOKEN_SECRET}`, { expiresIn: '15m' });

export const generateAccessToken = (payload: object) => jwt.sign(payload, `${ACCESS_TOKEN_SECRET}`, { expiresIn: '60m' });

export const generateRefreshToken = (payload: object) => jwt.sign(payload, `${REFRESH_TOKEN_SECRET}`, { expiresIn: '30d' });
