import { createContext,useState } from "react"
import options from '../Api/Api';

export const DataContext = createContext({state:[] , dispatch: ()=>{}})

const CoinProvider = ({ children }) => {
    const [dataCoins, setDataCoins] = useState([])
    const handleData = async () => {
        const data = await options('/coins').then(res => res.data.data.coins)
        setDataCoins(data)
    }
    return (
        <DataContext.Provider value={{ dataCoins, setDataCoins, handleData }}>
            {children}
        </DataContext.Provider>
    );

}

export default CoinProvider;