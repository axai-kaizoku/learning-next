'use client'
import AutoCorrection from "@/components/AutoCorrection"
import Suggestions from "@/components/Suggestions"

const docsLayout  = ({ children }: { children: React.ReactNode })  => {
    return (
        <div>
            Layout
            {/* <Suggestions/> */}
            <AutoCorrection/>
            <br className="border-solid border-4 border-gray-500"/>
            <br /><br />
            <br /><br />
            {children}
        </div>
    )
}

export default docsLayout