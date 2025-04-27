import { Sider } from "../components/Sider";

const market = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-100">
            <Sider />
            <div className="flex flex-col flex-auto items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-2xl font-bold">Market Page</h1>
                <p className="mt-4 text-gray-600">Welcome to the Market page!</p>
            </div>
        </div>
    );
}

export default market;