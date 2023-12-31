"use client"

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { Manrope, Raleway } from 'next/font/google';
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});
function Left() {
    const { admin, setAdmin } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {

        const isAdmin = localStorage.getItem("isAdmin") === "true" || '';

        if (!isAdmin) {
            router.push('faculty-login');
        }
    }, [])


    return (
        <div className={`${raleway.className} flex items-center flex-col mt-28  min-w-[200px]`}>

            <div className='flex justify-center items-center ml-6 mb-72'>
                <div className='flex flex-col justify-center items-center space-y-8'>
                    <Link href="/admin-page" >
                        <div className='mt-2 mr-4 hover:cursor-pointer'>
                            <img src="./home.png" alt="home" className='w-6 h-6 object-contain' />
                        </div>
                    </Link>

                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./notifications.png" alt="notifications" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./important-links.png" alt="links" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./results.png" alt="results" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./timetable.png" alt="timetable" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./hall-tickets.png" alt="hall-tickets" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./hall-tickets.png" alt="hall-tickets" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./settings.png" alt="Settings" className='w-6 h-6 object-contain' />
                    </div>
                    <div className='mt-2 mr-4 hover:cursor-pointer'>
                        <img src="./logout.png" alt="logout" className='w-6 h-6 object-contain' />
                    </div>
                </div>

                <div className='flex flex-col justify-center space-y-8 mt-2'>
                    <Link href="/admin-page" >
                        <div className='hover:cursor-pointer'>
                            <h1>Home</h1>
                        </div>
                    </Link>
                    <div className='hover:cursor-pointer'>
                        <Link href="/edit-notifications" className="nav-link">
                            <h1>Notifications</h1>
                        </Link>
                    </div>
                    <Link href="/important-links" >
                        <div className='hover:cursor-pointer'>
                            <h1>Important Links</h1>
                        </div>
                    </Link>
                    <Link href="/create-results" >
                        <div className='hover:cursor-pointer'>
                            <h1>Results</h1>
                        </div>
                    </Link>
                    <Link href="/create-exam-timetable" >
                        <div className='hover:cursor-pointer'>
                            <h1>Exam Timetable</h1>
                        </div>
                    </Link>
                    <Link href="/create-hall-tickets" >
                        <div className='hover:cursor-pointer'>
                            <h1>Hall Tickets</h1>
                        </div>
                    </Link>
                    <Link href="/create-hall-tickets-beta" >
                        <div className='hover:cursor-pointer'>
                            <h1>Hall Tickets (Beta)</h1>
                        </div>
                    </Link>
                    <Link href="/settings" >
                        <div className='hover:cursor-pointer'>
                            <h1>Settings</h1>
                        </div>
                    </Link>
                    <div onClick={() => {
                        router.push('faculty-login');

                        if (typeof window !== 'undefined') {
                            localStorage.setItem("isAdmin", "false") || ''
                        }
                    }}>
                        <div className='hover:cursor-pointer'>
                            <h1>Logout</h1>
                        </div>
                    </div>

                </div>
            </div>


        </div >


    )
}

export default Left