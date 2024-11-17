import {Entity} from '../models/entity.model';

export async function fetchWrapper(entity: Entity) {
  return fetch(`https://api.dev.pentacode.app/rest/v1/${entity}s`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 283b4649756010dd5cc49760665f97063a66b6c0c1b42b687301ef23a76eb76a'
    }
  }).then(async response => await response.json())
}