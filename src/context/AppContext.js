import React, { useState } from 'react'

export const AppContext = React.createContext();
function AppContextProvider({children}) {
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('job'))
        return storageJobs ?? []
    })
  return (
    <AppContext.Provider value={{jobs,setJobs}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider