import { registerRootComponent } from 'expo';

import App from './App';
import Page from './Page';
import DietBarFinal from './DietBarFinal';
import ExpensesBarFinal from './ExpensesBarFinal';
import ProgressBarFinal from './ProgressBarFinal';
import Welcome from './Welcome';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ExpensesBarFinal);

