import Link from 'next/link'
import NavBar from '../NavBar';
export default function Layout({children}) {
  return (
    <div className='flex flex-col w-full items-center'>
      {/* <div className='absolute inset-0 bg-stars bg-cover z-10'>
      </div> */}
      <NavBar />
      <main className='flex-1 w-full flex flex-col items-center overflow-x-hidden'>
        {children}
      </main>
    </div>
  );
}
