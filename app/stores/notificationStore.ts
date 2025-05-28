import {create} from 'zustand'

let timeoutId: ReturnType<typeof setTimeout> | null = null

type NotificationState = {
    message: string | null
    showFeatureWarnungNotification: (msg: string) => void
    clear: () => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
    message: null,
    showFeatureWarnungNotification: (msg: string) => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
        }
        set({message: msg})
        timeoutId = setTimeout(() => {
            set({message: null})
            timeoutId = null
        }, 5000)
    },
    clear: () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
            timeoutId = null
        }
        set({message: null})
    },
}))