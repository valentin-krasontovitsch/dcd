import { createContext, useContext } from 'react'
import { APIClient } from './apiClient'

export interface IAppContext {
    apiClient: APIClient
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const useAppContext = () => useContext(AppContext)

export default AppContext
