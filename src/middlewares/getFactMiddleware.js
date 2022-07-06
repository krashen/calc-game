/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import * as actions from '../constants/actions';
import axios from 'axios';

const getFactMiddleware = (store) => (next) => (action) => {

    if (action.type == actions.UPDATE_FACT) {
      const getFact = async () => {
        const req = await axios.get("http://numbersapi.com/random/math");
        action.payload = req.status === 200 ? req.data : '<3';
        next(action);       
      }
      getFact();
    } else {
      next(action); 
    }    
}
export default getFactMiddleware;
