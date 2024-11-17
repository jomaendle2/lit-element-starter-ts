
export const entitiesArray = ['department', 'venue', 'position'] as const;

export type Entity = typeof entitiesArray[number];