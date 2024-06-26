import FeedbackForm from '@/components/FeedbackForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'


const Page = async () => {


    return (
        <MaxWidthWrapper className='mb-8 mt-24 text-center max-w-5xl'>
            <div className='mx-auto mb-10 sm:max-w-lg'>
                <h1 className='text-6xl font-bold sm:text-7xl'>
                    Support
                </h1>

                <p className='mt-5 text-gray-600 sm:text-lg'>
                &quot;I&apos;ll respond within an hour, unless my dog demands a belly rub. <br /> Thanks for your understanding!&quot;
                </p>
            </div>


            <div>
                <FeedbackForm/>
            </div>
        </MaxWidthWrapper >
    )
}

export default Page