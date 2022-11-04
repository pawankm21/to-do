import { Popover } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { signOut, auth } from "../../../firebase.config";
export default function Settings() {
  const dispatch = useDispatch();
  async function handleLogout() {
    await signOut(auth).then(dispatch(logout));
  }
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none">
        <img
          src="/avatar.webp"
          className="w-8 h-8 rounded-full border-2 border-gray-400"
        />
      </Popover.Button>

      <Popover.Panel className="absolute right-2 rounded grid gap-4 z-10 bg-white py-4 px-8 shadow-2xl">
        <button className="hover:text-green-500" onClick={handleLogout}>
          Logout
        </button>
        <button className="hover:text-green-500">Settings</button>
      </Popover.Panel>
    </Popover>
  );
}
