import axios from "axios";
import { API_URL, GET_TRANSACTIONS } from "./constants";
export const getTransactions = async ({page=1,searchTerm='',startDate='',endDate=''}) => {
    const res = await axios.get(`${API_URL}${GET_TRANSACTIONS}?page=${page}&name=${searchTerm}&startDate=${startDate}&endDate=${endDate}`);
    return res; 
}