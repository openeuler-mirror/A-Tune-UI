import axios from "../utils/AxiosConfig";

const Tuning = {
  async sendCommand(data) {
    return await axios("/V2/echo", data, "post");
  },
  async updateConfig(data) {
      const param = new FormData();
      param.append("file", data.file);
      const config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
    return await axios("/V2/tuning/config", param, "post");
  },
};

export default Tuning;
