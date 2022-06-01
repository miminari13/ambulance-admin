import axios from '../utils/axios';

export default class DispatcherService {
    static async getList() {
        try {
            const res = await axios.get('dispatchers/all'); // https://jsonplaceholder.typicode.com/users
            return res.data;
        } catch (err) {
            console.log(`Err on Dispatchers List: ${err}`);
        }
        return null;
    }
}
