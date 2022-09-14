import axios from "axios";

class Network {
  getContent = async (params) => {
    const res = await axios
      .get(`https://www.googleapis.com/youtube/v3/search/`, {
        params,
      })
      .then((data) => data.data.items);
    return res;
  };
}
const network = new Network();
export default network;
