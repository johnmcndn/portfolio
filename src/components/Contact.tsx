'use client';

import { useActionState } from 'react';
import { sendMessage, type FormState } from '@/app/actions/sendMessage';
import { site } from '@/data/content';

const initialState: FormState = { ok: false };

const Contact = () => {
  const [state, formAction, pending] = useActionState(
    (_previous: FormState, formData: FormData) => sendMessage(formData),
    initialState,
  );

  return (
    <section className='ct' id='ct'>
      <div className='ct-head'>
        <h2 className='big'>
          Let&apos;s <span className='ac'>talk</span>
        </h2>
        <p className='ct-intro'>
          Have a project in mind? Tell me a little about it and I&apos;ll get
          back to you with the next steps.
        </p>
      </div>

      <form className='ct-form' action={formAction}>
        <label className='field'>
          <span className='label'>Your name</span>
          <input
            name='name'
            placeholder='Jane Smith'
            autoComplete='name'
            maxLength={100}
            required
          />
        </label>

        <label className='field'>
          <span className='label'>Your email</span>
          <input
            name='email'
            type='email'
            placeholder='jane@example.com'
            autoComplete='email'
            maxLength={200}
            required
          />
        </label>

        <label className='field'>
          <span className='label'>Subject</span>
          <input
            name='subject'
            placeholder='What is this about?'
            maxLength={150}
            required
          />
        </label>

        <label className='field'>
          <span className='label'>Your message</span>
          <textarea
            name='message'
            placeholder='Write your message here…'
            maxLength={5000}
            required
          />
        </label>

        {/* Honeypot: hidden from people, bots tend to fill it in */}
        <input
          className='hp'
          name='website'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
        />

        <div className='ct-actions'>
          <button className='send' type='submit' disabled={pending}>
            {pending ? 'Sending…' : 'Submit'}
          </button>

          <p className='ct-status' role='status' aria-live='polite'>
            {state.ok && 'Thanks! Your message was sent. I’ll reply soon.'}
            {state.error}
          </p>
        </div>
      </form>

      <div className='sl'>
        <a href={site.github} target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
        <a href={site.linkedin} target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
