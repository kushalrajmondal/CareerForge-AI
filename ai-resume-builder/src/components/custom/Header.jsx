import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/react'
import { Moon, Sun, ArrowLeft, Sparkles } from 'lucide-react'

function Header() {
    const { isSignedIn } = useUser()
    const location = useLocation()

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    // Hide Back to Home on landing page
    const isHomePage = location.pathname === '/'

    return (
        <header className='sticky top-0 z-50 border-b bg-white/90 dark:bg-[#080b14]/90 dark:border-white/10 backdrop-blur-md transition-colors'>

            <div className='px-6 py-3 flex justify-between items-center'>

                {/* Logo + Project Name */}
                <Link
                    to='/'
                    className='flex items-center gap-3 group'
                >
                    <img
                        src='/logo.svg'
                        className='cursor-pointer transition-transform duration-300 group-hover:scale-105'
                        width={90}
                        height={90}
                        alt='CareerForge AI'
                    />

                    <div className='flex flex-col'>
                        <div className='flex items-center gap-1.5'>
                            <span className='text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                CareerForge
                            </span>

                            <span className='text-2xl font-extrabold text-slate-900 dark:text-white'>
                                AI
                            </span>

                            <Sparkles className='w-4 h-4 text-purple-500' />
                        </div>

                        <span className='text-[10px] font-medium tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400'>
                            AI Resume Engineering
                        </span>
                    </div>
                </Link>


                {/* Right Side */}
                <div className='flex items-center gap-3'>

                    {/* Back to Home - Hidden on Home Page */}
                    {!isHomePage && (
                        <Link to='/'>
                            <Button
                                variant='outline'
                                className='gap-2 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                            >
                                <ArrowLeft className='h-4 w-4' />
                                Back to Home
                            </Button>
                        </Link>
                    )}

                    {/* Dark Mode */}
                    <Button
                        variant='outline'
                        size='icon'
                        onClick={() => setDarkMode(!darkMode)}
                        className='rounded-full dark:border-white/20 dark:bg-white/5'
                        aria-label='Toggle theme'
                    >
                        {darkMode ? (
                            <Sun className='h-5 w-5' />
                        ) : (
                            <Moon className='h-5 w-5' />
                        )}
                    </Button>


                    {/* User Section */}
                    {isSignedIn ? (
                        <div className='flex items-center gap-2'>

                            <Link to='/dashboard'>
                                <Button
                                    variant='outline'
                                    className='dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                                >
                                    Dashboard
                                </Button>
                            </Link>

                            <UserButton />
                        </div>
                    ) : (
                        <Link to='/auth/sign-in'>
                            <Button>
                                Get Started
                            </Button>
                        </Link>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header