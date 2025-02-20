import { SupportedLanguage } from "@/app/types"
import { useCreateLesson } from "@/lib/mutations/useCreateLesson"
import { transformInputIntoData } from "@/lib/processTextInput"
import { routes } from "@/lib/routes"
import { sendErrorToast } from "@/lib/utils"
import { Topic } from "@/ogm-types"
import { useRouter } from "next/navigation"

export const useGenerateLesson = () => {
    const createLesson = useCreateLesson()
    const router = useRouter()

    const generateLesson = async (topic: Topic, subtopic: Topic, level: number, language: SupportedLanguage, activitiesNumber: number) => {

        if (!topic.id || !subtopic.id) {
            return
        }
        const apiData = await transformInputIntoData(
            topic.title,
            subtopic.title,
            level,
            language as SupportedLanguage,
            activitiesNumber,
            sendErrorToast
        )

        if (apiData) {
            const lessonData = await createLesson(apiData, topic.id, subtopic?.id)
            console.log("lessonData", lessonData)
            if (lessonData?.id) {
                router.push(routes.lesson(lessonData.id))
            }
        }
    }

    return { generateLesson }
}