import React, { useContext } from "react";
import { CourseProvider } from "../context/CourseContext";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CourseProvider);

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.success("Course removed from cart");
  };

  const totalPrice = cart.reduce(
    (total, course) => total + Number(course.cPrice),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <p className="mt-3 text-gray-500">
            Add some courses to continue learning.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">My Cart</h1>

      <div className="grid gap-6">
        {cart.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between rounded-xl border p-4 shadow"
          >
            <div className="flex items-center gap-5">
              <img
                src={course.cImg}
                alt={course.cName}
                className="h-24 w-32 rounded-lg object-cover"
              />

              <div>
                <h2 className="text-xl font-bold">{course.cName}</h2>

                <p className="text-gray-600">{course.cTrainer}</p>

                <p className="font-semibold text-green-600">
                  ₹{course.cPrice}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleRemove(course.id)}
              className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-xl bg-blue-50 p-6">
        <h2 className="text-2xl font-bold">
          Total : ₹{totalPrice}
        </h2>

        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Cart;