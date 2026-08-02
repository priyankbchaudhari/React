import { useSelector } from "react-redux";

function Navbar()
{
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <h1>This is a counter app and the current value is {count}</h1>
        </>
    );
}
export default Navbar;