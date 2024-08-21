// "use client"

// import { useRouter, useSearchParams } from 'next/navigation'
// import { Loader2 } from 'lucide-react'

// import { trpc } from '../_trpc/client'

// const Page = () => {
//     const router = useRouter()

//     // to get origin value from param
//     // const SearchParams = useSearchParams()
//     // const origin = SearchParams.get('origin')

//     // using trpc => response type is defined
//     const { data: authData } = trpc.authCallback.useQuery(undefined ,{
//         retry:true,
//         retryDelay: 500
//     });

//     // Check for successful authentication
//     if (authData?.success) {
//         // User is synced to the database
//         router.push('/dashboard');
//     }
    
//     if (authData?.success === false) {
//         // User is synced to the database
//         router.push('https://inquirydoc.kinde.com/auth/cx/_:nav&m:login&psid:8e05244e084b47b8824919958c4f327a');
//     }

//     return (
//         <div className='w-full mt-24 flex justify-center'>
//           <div className='flex flex-col items-center gap-2'>
//             <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
//             <h3 className='font-semibold text-xl'>
//               Setting up your account...
//             </h3>
//             <p>You will be redirected automatically.</p>
//           </div>
//         </div>
//       )
// }

// export default Page
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');

  const { data, isLoading, error } = trpc.authCallback.useQuery(undefined);

  useEffect(() => {
    // error code unathorized : 
    if (error?.data?.code === "UNAUTHORIZED" ) {
      router.push("/sign-in");
    }

    // success
    else if (!isLoading) {
      router.push((data !== undefined && data.success && origin) ? `/${origin}` : "/dashboard");
    }
  }, [data, isLoading, error, origin, router]);

  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-800'/>
        <h3 className='font-semibold text-xl'>
          Setting up your account...
        </h3>
        <p>You will be redirected automatically. </p>
      </div>
    </div>
  );
}

export default Page;
