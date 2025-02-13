import React, { createContext, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertContext = createContext()

function AlertProvider({ children }) {

    const showAlert = {
        success: (msg) => toast.success(msg),
        warning: (msg) => toast.warn(msg),
        error: (msg) => toast.error(msg),
        info: (msg) => toast.info(msg),
    }

    return (
        <AlertContext.Provider value={showAlert}>
            {children}
            <ToastContainer position='top-right' autoClose={2000} />
        </AlertContext.Provider>
    )
}

// Custom Hook  
const useAlert = () => {
    return useContext(AlertContext)
}

export { AlertProvider, useAlert }