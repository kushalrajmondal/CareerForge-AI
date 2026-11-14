import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'

function ViewResume() {

    const [resumeInfo, setResumeInfo] = useState()
    const { resumeId } = useParams()

    useEffect(() => {
        GetResumeInfo()
    }, [])

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(resp => {
            console.log(resp.data.data)
            setResumeInfo(resp.data.data)
        })
    }

    const HandleDownload = () => {
        window.print()
    }

    const HandleShare = async () => {
        const resumeUrl =
            import.meta.env.VITE_BASE_URL +
            "/my-resume/" +
            resumeId +
            "/view"

        const shareData = {
            title:
                resumeInfo?.firstName +
                " " +
                resumeInfo?.lastName +
                " resume",

            text: "Hello Everyone, This is my resume. Please open the URL to see it.",

            url: resumeUrl,
        }

        try {

            if (navigator.share) {

                await navigator.share(shareData)

                console.log("Shared successfully!")

            } else {

                await navigator.clipboard.writeText(resumeUrl)

                alert("Resume URL copied to clipboard!")

            }

        } catch (error) {

            console.log("Sharing cancelled or failed:", error)

        }
    }

    return (
        <ResumeInfoContext.Provider
            value={{ resumeInfo, setResumeInfo }}
        >

            {/* Header + buttons */}
            <div id="no-print">

                <Header />

                <div className='my-10 mx-10 md:mx-20 lg:mx-36'>

                    <h2 className='text-center text-2xl font-medium'>
                        Congrats! Your AI-generated Resume is ready!
                    </h2>

                    <p className='text-center text-gray-400'>
                        Now you are ready to download your resume and
                        share your unique resume URL with your friends
                        and family.
                    </p>

                    <div className='flex justify-between px-44 my-10'>

                        {/* Download */}
                        <Button onClick={HandleDownload}>
                            Download
                        </Button>

                        {/* Share */}
                        <Button onClick={HandleShare}>
                            Share
                        </Button>

                    </div>

                </div>

            </div>

            {/* Resume Preview */}
            <div className='my-10 mx-10 md:mx-20 lg:mx-36'>

                <div id="print-area">
                    <ResumePreview />
                </div>

            </div>

        </ResumeInfoContext.Provider>
    )
}

export default ViewResume