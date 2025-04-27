import { Sider } from "../components/Sider";

const groups = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-100">
            <Sider />
            <div className="flex flex-col flex-auto items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-3xl font-bold">Groups Page</h1>
                <p className="mt-4 text-lg">Welcome to the Groups page!</p>
            </div>
        </div>
    );
}

export default groups;