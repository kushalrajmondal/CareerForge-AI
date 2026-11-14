import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { Brain, LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'
import { AIChatSession } from '../../../../../service/AIModal'

const prompt = `
Job Title: {jobTitle}

Based on this job title, generate 3 professional resume summaries.

Generate exactly these 3 experience levels:
1. Fresher
2. Mid Level
3. Senior Level

Each summary should be 3-4 professional lines long and specifically relevant to the given job title.

Do not include fake company names, fake achievements, fake years of experience, or specific technologies unless they are generally relevant to the job role.

Return ONLY valid JSON in this exact structure:

{
  "summaries": [
    {
      "summery": "Professional summary here...",
      "experience_level": "Fresher"
    },
    {
      "summery": "Professional summary here...",
      "experience_level": "Mid Level"
    },
    {
      "summery": "Professional summary here...",
      "experience_level": "Senior Level"
    }
  ]
}
`

function Summery({ enabledNext }) {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    const [summery, setSummery] = useState('')
    const [loading, setLoading] = useState(false)
    const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([])

    const params = useParams()

    useEffect(() => {

        if (summery) {
            setResumeInfo({
                ...resumeInfo,
                summery: summery
            })
        }

    }, [summery])

    const GenerateSummeryFromAI = async () => {

        if (!resumeInfo?.jobTitle) {
            toast.error('Please enter a Job Title first')
            return
        }

        try {

            setLoading(true)

            const PROMPT = prompt.replace(
                '{jobTitle}',
                resumeInfo.jobTitle
            )

            console.log('AI Prompt:', PROMPT)

            const result = await AIChatSession.sendMessage(PROMPT, true)

            const responseText = result.response.text()

            console.log('AI Response:', responseText)

            const parsedResponse = JSON.parse(responseText)

            console.log('Parsed AI Response:', parsedResponse)

            // Groq returns:
            // {
            //   summaries: [...]
            // }

            if (
                !parsedResponse ||
                !Array.isArray(parsedResponse.summaries)
            ) {
                throw new Error('Invalid AI response format')
            }

            setAiGenerateSummeryList(parsedResponse.summaries)

            toast.success('AI summaries generated')

        } catch (error) {

            console.error('AI Generation Error:', error)

            toast.error(
                'Failed to generate summary. Please try again.'
            )

        } finally {

            setLoading(false)

        }
    }

    const onSave = (e) => {

        e.preventDefault()

        if (!summery.trim()) {
            toast.error('Please add a summary first')
            return
        }

        setLoading(true)

        const data = {
            data: {
                summery: summery
            }
        }

        GlobalApi.UpdateResumeDetail(
            params?.resumeId,
            data
        )
            .then((resp) => {

                console.log('Summary saved:', resp)

                enabledNext(true)

                toast.success('Details updated')

            })
            .catch((error) => {

                console.error('Save Error:', error)

                toast.error('Failed to save summary')

            })
            .finally(() => {

                setLoading(false)

            })
    }

    return (
        <div>

            {/* Summary Form */}

            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>

                <h2 className='font-bold text-lg'>
                    Summery
                </h2>

                <p>
                    Add Summery for your job title
                </p>

                <form
                    className='mt-7'
                    onSubmit={onSave}
                >

                    <div className='flex justify-between items-end'>

                        <label>
                            Add Summery
                        </label>

                        <Button
                            variant="outline"
                            onClick={GenerateSummeryFromAI}
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                            disabled={loading}
                        >

                            {loading ? (
                                <LoaderCircle className='h-4 w-4 animate-spin' />
                            ) : (
                                <Brain className='h-4 w-4' />
                            )}

                            {loading
                                ? 'Generating...'
                                : 'Generate from AI'
                            }

                        </Button>

                    </div>

                    <Textarea
                        className="mt-5"
                        required
                        value={summery}
                        placeholder="Write your professional summary or generate one using AI..."
                        onChange={(e) =>
                            setSummery(e.target.value)
                        }
                    />

                    <div className='mt-2 flex justify-end'>

                        <Button
                            type="submit"
                            disabled={loading}
                        >

                            {loading ? (
                                <LoaderCircle className='animate-spin' />
                            ) : (
                                'Save'
                            )}

                        </Button>

                    </div>

                </form>

            </div>


            {/* AI Suggestions */}

            {aiGeneratedSummeryList.length > 0 && (

                <div className='my-5'>

                    <h2 className='font-bold text-lg'>
                        Suggestions
                    </h2>

                    {aiGeneratedSummeryList.map((item, index) => (

                        <div
                            key={`${item.experience_level}-${index}`}
                            onClick={() => {
                                setSummery(item?.summery)

                                toast.success(
                                    `${item?.experience_level} summary selected`
                                )
                            }}
                            className='p-5 shadow-lg my-4 rounded-lg cursor-pointer hover:border-primary border'
                        >

                            <h2 className='font-bold my-1 text-primary'>
                                Level: {item?.experience_level}
                            </h2>

                            <p>
                                {item?.summery}
                            </p>

                        </div>

                    ))}

                </div>

            )}

        </div>
    )
}

export default Summery