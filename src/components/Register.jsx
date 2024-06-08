import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4"> فروشگاه لوازم خانگی </h1>
      <p className="text-lg mb-4">
        جهت استفاده از ویژگی های   فروشگاه  ثبت نام کنید
      </p>
      <p className="text-lg mb-6">
        قبلا ثبت نام کرده اید؟
        <Link to="/login" className="text-indigo-500 hover:underline ml-2">
          وارد شوید
        </Link>
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">موبایل</label>
            <input
              {...register("mobile", {
                required: "موبایل الزامی است",
                minLength: 11,
                maxLength: 11,
              })}
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 ${
                errors.mobile && "border-red-500"
              }`}
            />
            {errors.mobile && errors.mobile.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile?.message}
              </p>
            )}
            {errors.mobile && (errors.mobile.type === "minLength" || errors.mobile.type === "maxLength") && (
              <p className="text-red-500 text-sm mt-1">
                موبایل باید 11 رقم باشد
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">رمز عبور</label>
            <input
              {...register("password", { required: "رمز عبور الزامی است" })}
              type="password"
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 ${
                errors.password && "border-red-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">تکرار رمز عبور</label>
            <input
              {...register("confirmPassword", {
                required: "تکرار رمز عبور الزامی است",
                validate: (value) => {
                  if (watch("password") !== value) {
                    return "عدم تطابق با رمز عبور وارد شده";
                  }
                },
              })}
              type="password"
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 ${
                errors.confirmPassword && "border-red-500"
              }`}
            />
            {errors.confirmPassword && errors.confirmPassword.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
            {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              ثبت نام کنید
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
