'use client'

import {AnimatePresence, motion} from 'framer-motion'
import {useNotificationStore} from '@/PonBike/app/libs/stores/notificationStore'
import {IconWarning} from '@/PonBike/app/libs/icons';

export const FeatureWarningNotification = () => {
    const message = useNotificationStore((s) => s.message)
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{y: 10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: 10, opacity: 0}}
                    transition={{type: 'spring', stiffness: 300, damping: 30}}
                    className="fixed top-4 right-4 z-50 bg-red-800 text-white text-sm px-4 py-2 rounded shadow-lg"
                >
                    <div className="flex items-center gap-2">
                        <div className="size-4">
                            <IconWarning/>
                        </div>
                        <div>{message}</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}