import { createContext, useCallback, useContext, useState, ReactNode } from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

type ToastType = 'success' | 'error' | 'info'
interface Toast { id: number; type: ToastType; message: string }
interface NotifCtx { notify: (message: string, type?: ToastType) => void }

const NotificationContext = createContext<NotifCtx | undefined>(undefined)
let idSeq = 0

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const notify = useCallback((message: string, type: ToastType = 'success') => {
    const id = ++idSeq
    setToasts((t) => [...t, { id, type, message }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200)
  }, [])

  const icons: Record<ToastType, ReactNode> = {
    success: <CheckCircle2 size={18} className="text-gold" />,
    error: <AlertCircle size={18} className="text-red-400" />,
    info: <Info size={18} className="text-ivory" />,
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="fixed bottom-6 right-4 sm:right-6 z-[100] flex flex-col gap-3 max-w-sm w-[calc(100%-2rem)] sm:w-auto">
        {toasts.map((t) => (
          <div key={t.id} className="flex items-center gap-3 px-5 py-4 bg-forest text-ivory shadow-2xl border-l-2 border-gold animate-fade-up">
            {icons[t.type]}
            <p className="text-sm flex-1">{t.message}</p>
            <button onClick={() => setToasts((x) => x.filter((y) => y.id !== t.id))} className="opacity-60 hover:opacity-100">
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export const useNotify = () => {
  const ctx = useContext(NotificationContext)
  if (!ctx) throw new Error('useNotify must be used inside NotificationProvider')
  return ctx
}
