import { useForm } from "react-hook-form";

const PostJob = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Post a Job</h1>
            <p className="text-gray-600 mb-6">Find the best talent for your company</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("jobTitle")} className="w-full p-2 border rounded" placeholder="Add job title, role vacancies etc" />

                <div className="grid grid-cols-2 gap-4">
                    <input {...register("tags")} className="p-2 border rounded" placeholder="Job keyword, tags etc" />
                    <select {...register("jobRole")} className="p-2 border rounded">
                        <option>Select...</option>
                    </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <input {...register("minSalary")} className="p-2 border rounded" placeholder="Minimum Salary" />
                    <input {...register("maxSalary")} className="p-2 border rounded" placeholder="Maximum Salary" />
                    <select {...register("salaryType")} className="p-2 border rounded">
                        <option>INR</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <select {...register("vacancies")} className="p-2 border rounded">
                        <option>Select...</option>
                    </select>
                    <select {...register("jobLevel")} className="p-2 border rounded">
                        <option>Select...</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <select {...register("country")} className="p-2 border rounded">
                        <option>Select...</option>
                    </select>
                    <select {...register("city")} className="p-2 border rounded">
                        <option>Select...</option>
                    </select>
                </div>

                <textarea {...register("jobDescription")} className="w-full p-2 border rounded" placeholder="Add your description..." />

                <button type="submit" className="bg-purple-600 text-white p-2 rounded w-full">Post Job</button>
            </form>
        </div>
    );
};

export default PostJob;
