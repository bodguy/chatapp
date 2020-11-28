import { hot, setConfig } from 'react-hot-loader';
import Routes from 'routes';

setConfig({ logLevel: 'no-errors-please' });
export default hot(module)(Routes);