import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummery: '',
}

function Experience() {

    const [experinceList, setExperinceList] = useState([])

    const {
        resumeInfo,
        setResumeInfo
    } = useContext(ResumeInfoContext)

    const params = useParams()

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (resumeInfo?.Experience?.length > 0) {

            setExperinceList(resumeInfo.Experience)

        }

    }, [resumeInfo?.Experience])

    const handleChange = (index, event) => {

        const newEntries = [...experinceList]

        const {
            name,
            value
        } = event.target

        newEntries[index] = {
            ...newEntries[index],
            [name]: value
        }

        setExperinceList(newEntries)
    }

    const AddNewExperience = () => {

        setExperinceList([
            ...experinceList,
            {
                ...formField
            }
        ])
    }

    const RemoveExperience = () => {

        if (experinceList.length === 0) {
            return
        }

        setExperinceList(
            experinceList.slice(0, -1)
        )
    }

    const handleRichTextEditor = (
        event,
        name,
        index
    ) => {

        const newEntries = [...experinceList]

        newEntries[index] = {
            ...newEntries[index],
            [name]: event.target.value
        }

        setExperinceList(newEntries)
    }

    useEffect(() => {

        setResumeInfo({
            ...resumeInfo,
            Experience: experinceList
        })

    }, [experinceList])

    const onSave = async () => {

        try {

            setLoading(true)

            const data = {
                data: {
                    Experience: experinceList.map(
                        ({ id, ...rest }) => rest
                    )
                }
            }

            console.log(
                'Saving Experience:',
                experinceList
            )

            const res =
                await GlobalApi.UpdateResumeDetail(
                    params?.resumeId,
                    data
                )

            console.log(
                'Experience saved:',
                res
            )

            toast.success('Details updated!')

        } catch (error) {

            console.error(
                'Experience Save Error:',
                error
            )

            toast.error(
                'Failed to save experience details'
            )

        } finally {

            setLoading(false)

        }
    }

    return (
        <div>

            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>

                <h2 className='font-bold text-lg'>
                    Professional Experience
                </h2>

                <p>
                    Add Your previous Job experience
                </p>

                <div>

                    {experinceList.map(
                        (item, index) => (

                            <div key={index}>

                                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>

                                    {/* Position Title */}

                                    <div>

                                        <label className='text-xs'>
                                            Position Title
                                        </label>

                                        <Input
                                            name="title"
                                            onChange={(event) =>
                                                handleChange(
                                                    index,
                                                    event
                                                )
                                            }
                                            defaultValue={
                                                item?.title
                                            }
                                        />

                                    </div>

                                    {/* Company Name */}

                                    <div>

                                        <label className='text-xs'>
                                            Company Name
                                        </label>

                                        <Input
                                            name="companyName"
                                            onChange={(event) =>
                                                handleChange(
                                                    index,
                                                    event
                                                )
                                            }
                                            defaultValue={
                                                item?.companyName
                                            }
                                        />

                                    </div>

                                    {/* City */}

                                    <div>

                                        <label className='text-xs'>
                                            City
                                        </label>

                                        <Input
                                            name="city"
                                            onChange={(event) =>
                                                handleChange(
                                                    index,
                                                    event
                                                )
                                            }
                                            defaultValue={
                                                item?.city
                                            }
                                        />

                                    </div>

                                    {/* State */}

                                    <div>

                                        <label className='text-xs'>
                                            State
                                        </label>

                                        <Input
                                            name="state"
                                            onChange={(event) =>
                                                handleChange(
                                                    index,
                                                    event
                                                )
                                            }
                                            defaultValue={
                                                item?.state
                                            }
                                        />

                                    </div>

                                    {/* Start Date */}

                                    <div>

                                        <label className='text-xs'>
                                            Start Date
                                        </label>

                                        <Input
                                            type="date"
                                            name="startDate"
                                            onChange={(event) =>
                                                handleChange(
                                                    index,
                                                    event
                                                )
                                            }
                                            defaultValue={
                                                item?.startDate
                                            }
                                        />

                                    </div>

                                    {/* End Date */}

                                    <div>

                                        <label className='text-xs'>
                                            End Date
                                        </label>

                                        <Input
                                            type="date"
                                            name="endDate"
                                            onChange={(event) =>
                                                handleChange(
                                                    index,
                                                    event
                                                )
                                            }
                                            defaultValue={
                                                item?.endDate
                                            }
                                        />

                                    </div>

                                    {/* Work Summary */}

                                    <div className='col-span-2'>

                                        <RichTextEditor
                                            index={index}
                                            defaultValue={
                                                item?.workSummery
                                            }
                                            onRichTextEditorChange={(
                                                event
                                            ) =>
                                                handleRichTextEditor(
                                                    event,
                                                    'workSummery',
                                                    index
                                                )
                                            }
                                        />

                                    </div>

                                </div>

                            </div>

                        )
                    )}

                </div>

                {/* Buttons */}

                <div className='flex justify-between'>

                    <div className='flex gap-2'>

                        <Button
                            variant="outline"
                            type="button"
                            onClick={AddNewExperience}
                            className="text-primary"
                        >
                            + Add More Experience
                        </Button>

                        <Button
                            variant="outline"
                            type="button"
                            onClick={RemoveExperience}
                            className="text-primary"
                        >
                            - Remove
                        </Button>

                    </div>

                    <Button
                        disabled={loading}
                        type="button"
                        onClick={onSave}
                    >

                        {loading ? (
                            <LoaderCircle className='animate-spin' />
                        ) : (
                            'Save'
                        )}

                    </Button>

                </div>

            </div>

        </div>
    )
}

export default Experience