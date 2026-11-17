import { useState } from 'react'
import { Mail } from 'lucide-react'
import { useNotify } from '../../context/NotificationContext'
export function Newsletter() {
  const [email, setEmail] = useState(''); const { notify } = useNotify()
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) { notify('Invalid email', 'error'); return } notify('Subscribed!', 'success'); setEmail('') }
  return (
    <section className="py-20 bg-forest relative overflow-hidden"><div className="absolute inset-0 opacity-10"><div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-gold" /><div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border border-gold" /></div>
      <div className="container-lux relative"><div className="max-w-2xl mx-auto text-center"><Mail size={28} className="mx-auto text-gold" /><h2 className="mt-4 font-serif text-3xl sm:text-4xl text-ivory">A Slow Journal of Mountains</h2><p className="mt-4 text-ivory/60 text-sm">Curated offers, seasonal recipes, and quiet stories.</p>
        <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 px-5 py-3.5 bg-transparent border border-ivory/25 text-ivory outline-none focus:border-gold text-sm" /><button type="submit" className="btn-gold">Subscribe</button></form>
      </div></div>
    </section>
  )
}
