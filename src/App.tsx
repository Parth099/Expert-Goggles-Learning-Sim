import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="min-w-full min-h-full overflow-hidden">
            <Outlet />
        </div>
    );
}

export default App;
