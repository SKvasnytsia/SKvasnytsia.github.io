/**
 * Angular bootstrapping
 */
import { platformBrowser } from '@angular/platform-browser';
/**
 * App Module
 * our top level module that holds all of our components.
 */
import { AppModule } from './app/app.module'
/**
 * Bootstrap our Angular app with a top level NgModule.
 */
export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}