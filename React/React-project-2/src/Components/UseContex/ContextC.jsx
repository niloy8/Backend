import { useContext } from "react";
import { UserContext } from "../../App";

const ContextC = () => {
    const user = useContext(UserContext);
    const handleClick = () => {
        console.log(user);
        if (user.theme === 'light') {
            user.setTheme('dark');
        } else {
            user.setTheme('light');
        }

    }
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    );
};

export default ContextC;