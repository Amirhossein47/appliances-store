// import logo from "@assets/images/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center  text-center p-4 m-5">
      <h1 className="text-2xl font-bold mb-4"> فروشگاه لوازم خانگی </h1>
      <p className="text-lg mb-4">
        جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
      </p>
      <p className="text-lg mb-6">
        قبلا ثبت نام نکرده اید؟
        <Link to="/register" className="text-indigo-500 hover:underline ml-2">ثبت نام کنید</Link>
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">موبایل</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">رمز عبور</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              وارد شوید
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;