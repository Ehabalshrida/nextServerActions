import Link from "next/link";
import AddTaskForm from "./addTaskForm";

const AddTaskPage = () => {
    return (
        <section className="p-5">
            <Link href="/" className="underline block mb-10">
                {"<< "} Back to tasks table
            </Link>
            <div className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300">
                <h1 className="mb-7 text-blue-700 font-bold text-3xl">Add Your Task</h1>
                <AddTaskForm />
            </div>
        </section>
    )
}

export default AddTaskPage;