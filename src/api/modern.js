import Axios from "axios";

export const getModernApi = (options) => {
    return Axios.get('http://localhost:4000/moderntrade',options);
}
    
export const getGeneralTradeApi = (options) => {
    return Axios.get('http://localhost:4000/generaltrade',options);
}