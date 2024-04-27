import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        fullName: 'Мелоян Гранд Арсенович',
        image: 'https://media.licdn.com/dms/image/C5603AQHR2XFoZJUNow/profile-displayphoto-shrink_400_400/0/1624171171649?e=2147483647&v=beta&t=yxOSz_LrecPG-9K_EApdSB9gDxJACbKp57GkpcQd4HA'
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
