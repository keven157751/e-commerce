import { MdOutlineShoppingCart } from "react-icons/md";

export default function CartButton() {
    const itensCart = 1;
    return (
        <div className="absolute bottom-0 right-0 m-4 bg-gray-500 p-2 rounded-full">
            <div className="absolute text-white bg-red-500 rounded-full w-6 flex justify-center top-0 right-0">
                {itensCart}
            </div>
            <MdOutlineShoppingCart color="white" className="h-8 w-8"/>
        </div>
    )
}