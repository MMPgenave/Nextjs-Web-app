// agility.lib.js
import agility from '@agility/content-fetch';
const instanceGuid = '3f0ac84c-u';
console.log(instanceGuid)
export const api = agility.getApi({
  guid: instanceGuid,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: false,
});
