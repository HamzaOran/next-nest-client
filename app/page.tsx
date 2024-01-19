import Image from 'next/image'
import Grid from './_components/Grid'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      

      
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono ">
        <p className=' mt-20 text-6xl text-center'>Fullstack Nextjs and Nestjs Mini Data Grid Project</p>
        <p className=" mt-20 text-center pb-6 pt-8   ">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet laborum, blanditiis obcaecati, nostrum vitae tenetur beatae explicabo ab quis hic sequi provident aperiam. Aspernatur officia dolor fugiat quidem perspiciatis. Dolorum!
          
        </p>
        
       
      </div>

      <div className='mb-20 gap-20 text-white bg-black rounded-full p-3 text-lg w-40 flex justify-center items-center font-semibold'>
        <Link href="/">
        
          <button>Get Started</button>
        </Link>
        </div>

      <div className="mb-20 relative flex place-items-center ">
        <Image
          
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={100}
          priority
        />
        <Image
         
          src="/nest.svg"
          alt="Nest.js Logo"
          width={200}
          height={100}
          priority
        />
      </div>

      <div className="mb-32 flex text-center items-center justify-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://nextjs.org/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Nextjs
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          The React Framework for the web to create full-stack Web applications.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Nestjs
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          A progressive Node.js framework for building efficient, reliable and scalable server-side applications
          </p>
        </a>

      </div>
        <Grid/>
        
    </main>
  )
}
