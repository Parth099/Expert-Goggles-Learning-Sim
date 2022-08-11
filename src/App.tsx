import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="min-w-full min-h-full overflow-hidden">
            <Outlet />
        </div>
    );
}
