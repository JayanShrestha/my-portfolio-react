import axios from "axios";

export const ContactApi = async (data) => {
  const Api = import.meta.env.VITE_API_BACKEND;

  try {
    const response = await axios.post(`${Api}/contact`, data);
    console.log(response.data);
    return "true";
  } catch (err) {
    console.log(err, "Message Unsuccessful");
    return "false";
  }
};
