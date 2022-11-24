import { createContext,useState } from "react"

export const DataContext = createContext({state:[] , dispatch: ()=>{}})

const CoinProvider = ({ children }) => {
    const [dataCoins, setDataCoins] = useState([])

    return (
        <DataContext.Provider value={{ dataCoins, setDataCoins }}>
            {children}
        </DataContext.Provider>
    );

}

export default CoinProvider;