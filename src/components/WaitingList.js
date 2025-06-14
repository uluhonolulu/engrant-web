import React, { useState } from 'react';
import axios from 'axios';

const WaitingList = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await axios.post('/api/waitlist', { email });
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">You're on the list!</h3>
        <p className="text-green-700">We'll notify you when we launch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-100"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}
    </form>
  );
};

export default WaitingList; 