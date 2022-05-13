import { PluginRoute } from './state/actions/actions.types';

export interface ReactTablePlaygroundSettings {
  routes: PluginRoute[];
}

export let settings: Promise<ReactTablePlaygroundSettings | void>;
export const setSettings = (
  newSettings: Promise<ReactTablePlaygroundSettings | void>
): void => {
  settings = newSettings;
};
