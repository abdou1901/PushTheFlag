import { rootCertificates } from 'tls';

const rTokenStore = new Map();

export function setRefreshToken(token, userId) {
   rTokenStore.set(token, userId);
}

export function RefreshTokenExists(token) {
   return rTokenStore.has(token);
}

export function RemoveRefreshToken(token) {
   rTokenStore.delete(token);
}

export function ClearTokens() {
   rTokenStore.clear();
}
