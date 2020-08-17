import React from 'react';

export default React.createContext({
    token: null,
    userID: null,
    Rol: null,
    login: (token, userID, Rol, tokenExpiration) =>{},
    logout: () => {}
}); 