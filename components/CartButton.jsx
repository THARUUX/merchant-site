import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartButton() {
    const router = useRouter(); // Access the router object
    const {cartProducts} = useContext(CartContext);


    function goBack() {
        router.back(); // Go back to the previous page
    }

    return (
        <Link href={'/cart'} onClick={() => (setLoading(true))} className='flex gap-2 items-center text-white fixed z-10 bottom-5 sm:bottom-10 left-5 text-sm sm:left-10 btn bg-slate-900/70 hover:bg-slate-900 p-3 cursor-pointer rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
            </svg>
                Cart ({cartProducts.length})
        </Link>
    );
}
