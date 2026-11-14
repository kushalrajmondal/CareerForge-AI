import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Brain, LoaderCircle } from 'lucide-react'
import React, { useContext, useState } from 'react'
import {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Editor,
    EditorProvider,
    Separator,
    Toolbar
} from 'react-simple-wysiwyg'
import { AIChatSession } from "../../../../service/AIModal"
import { toast } from 'sonner'

const PROMPT = `
Position Title: {positionTitle}

Based on this position title, generate 5-7 professional bullet points for a resume work experience section.

Requirements:
- Do not mention experience level.
- Do not return JSON.
- Return only HTML.
- Use <ul> and <li> tags.
- Each bullet point should be concise and action-oriented.
- Do not invent specific achievements, percentages, company details, or technologies unless they are generally relevant to the role.

Example:
<ul>
<li>Developed and maintained software applications based on project requirements.</li>
<li>Collaborated with team members to implement and test new features.</li>
<li>Participated in debugging and resolving application issues.</li>
</ul>
`

function RichTextEditor({
    onRichTextEditorChange,
    index,
    defaultValue
}) {

    const [value, setValue] = useState(defaultValue || '')
    const [loading, setLoading] = useState(false)

    const { resumeInfo } = useContext(ResumeInfoContext)

    const GenerateSummeryFromAI = async () => {

        if (!resumeInfo?.Experience?.[index]?.title) {
            toast.error('Please add Position Title')
            return
        }

        try {

            setLoading(true)

            const prompt = PROMPT.replace(
                '{positionTitle}',
                resumeInfo.Experience[index].title
            )

            console.log('Experience AI Prompt:', prompt)

            const result = await AIChatSession.sendMessage(prompt)

            const response = result.response.text()

            console.log('Experience AI Response:', response)

            // Keep the HTML response as it is.
            const generatedValue = response.trim()

            setValue(generatedValue)

            // IMPORTANT:
            // Send AI-generated content back to Experience.jsx
            onRichTextEditorChange({
                target: {
                    value: generatedValue
                }
            })

            toast.success('Work summary generated')

        } catch (error) {

            console.error('Experience AI Generation Error:', error)

            toast.error(
                'Failed to generate work summary. Please try again.'
            )

        } finally {

            setLoading(false)

        }
    }

    return (
        <div>

            <div className='flex justify-between my-2'>

                <label className='text-xs'>
                    Summery
                </label>

                <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary"
                >

                    {loading ? (
                        <LoaderCircle className='animate-spin' />
                    ) : (
                        <>
                            <Brain className='h-4 w-4' />
                            Generate from AI
                        </>
                    )}

                    {loading && 'Generating...'}

                </Button>

            </div>

            <EditorProvider>

                <Editor
                    value={value}
                    onChange={(e) => {

                        setValue(e.target.value)

                        onRichTextEditorChange(e)

                    }}
                >

                    <Toolbar>

                        <BtnBold />

                        <BtnItalic />

                        <BtnUnderline />

                        <BtnStrikeThrough />

                        <Separator />

                        <BtnNumberedList />

                        <BtnBulletList />

                        <Separator />

                        <BtnLink />

                    </Toolbar>

                </Editor>

            </EditorProvider>

        </div>
    )
}

export default RichTextEditor