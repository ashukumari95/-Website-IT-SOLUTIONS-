'use client'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        router.push('/contact/success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-2xl rounded-xl">
      <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Secure Strategy Inquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 outline-none transition"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 outline-none transition"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="How can we help with your federal mission?"
          className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-red-600 outline-none transition"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-red-600 text-white font-black py-4 rounded-lg hover:bg-red-700 transition uppercase tracking-widest shadow-lg active:scale-95 disabled:opacity-50"
        >
          {status === 'loading' ? 'Processing...' : 'Schedule Strategy Meeting'}
        </button>

        {status === 'success' && <p className="text-green-600 font-bold text-center">Redirecting to success page...</p>}
        {status === 'error' && <p className="text-red-600 font-bold text-center">System error. Please try again.</p>}
      </form>
    </div>
  );
}