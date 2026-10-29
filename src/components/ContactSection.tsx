import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle, AlertCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const PHONE_NUMBER = '+94 70 503 2889';
  const TEL_LINK = 'tel:+94705032889';
  const EMAIL_ADDRESS = 'lungosrilanka@gmail.com';
  const MAILTO_LINK = 'mailto:lungosrilanka@gmail.com';
  const FACEBOOK_URL = 'https://web.facebook.com/profile.php?id=61596201171023';
  const INSTAGRAM_URL = 'https://www.instagram.com/lungosrilanka/';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'validated'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter your message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate validation pass and show realistic backend integration note
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('validated');
    }, 600);
  };

  const handlePrefillMailto = () => {
    const encodedSubject = encodeURIComponent(`[LUNGO Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello LUNGO Sri Lanka Team,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-cream text-espresso-800 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-caramel-dark text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-caramel" />
            <span>Direct Inquiries</span>
          </div>

          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso-700 tracking-tight leading-tight mb-6"
          >
            Let's Talk Coffee.
          </h2>

          <p className="text-base sm:text-lg text-espresso-600/85 leading-relaxed font-light">
            Have a question, feedback, or want to collaborate with LUNGO Sri Lanka?
            Reach out through our direct contact channels or send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-cream-soft p-8 sm:p-10 rounded-3xl border border-espresso-700/10 shadow-coffee space-y-8">
              <h3 className="font-serif text-2xl text-espresso-700 font-normal">
                Contact Information
              </h3>

              {/* Phone Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-espresso-700 text-cream-soft flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-caramel-light" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-caramel-dark font-medium">Direct Line</p>
                  <a
                    href={TEL_LINK}
                    className="text-lg font-medium text-espresso-700 hover:text-caramel transition-colors block mt-0.5"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <span className="text-xs text-espresso-500 font-light">Available for calls and inquiries</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-espresso-700 text-cream-soft flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-caramel-light" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-caramel-dark font-medium">Email Address</p>
                  <a
                    href={MAILTO_LINK}
                    className="text-lg font-medium text-espresso-700 hover:text-caramel transition-colors block mt-0.5 break-all"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <span className="text-xs text-espresso-500 font-light">Official brand correspondence</span>
                </div>
              </div>

              {/* Market Location Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-espresso-700 text-cream-soft flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-xl">🇱🇰</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-caramel-dark font-medium">Location</p>
                  <p className="text-lg font-medium text-espresso-700 mt-0.5">Sri Lanka</p>
                  <span className="text-xs text-espresso-500 font-light">Serving coffee moments nationwide</span>
                </div>
              </div>

              {/* Functional Quick Action Buttons Grid */}
              <div className="pt-6 border-t border-espresso-700/10 space-y-3">
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-espresso-500">Quick Actions</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={TEL_LINK}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-espresso-900 bg-caramel-light hover:bg-caramel active:scale-98 transition-all duration-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href={MAILTO_LINK}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-espresso-900 bg-cream-dark/60 hover:bg-cream-dark active:scale-98 transition-all duration-200"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Us</span>
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-espresso-800 bg-white border border-espresso-700/15 hover:border-caramel hover:text-caramel active:scale-98 transition-all duration-200"
                  >
                    <span>Follow on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-espresso-800 bg-white border border-espresso-700/15 hover:border-caramel hover:text-caramel active:scale-98 transition-all duration-200"
                  >
                    <span>Visit Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form with Validation & Feedback */}
          <div className="lg:col-span-7">
            <div className="bg-cream-soft p-8 sm:p-10 rounded-3xl border border-espresso-700/10 shadow-coffee relative">
              <h3 className="font-serif text-2xl text-espresso-700 font-normal mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-espresso-600 font-light mb-8">
                Fill in your details below and we will get back to you as soon as possible.
              </p>

              {/* Validation Success / Integration Explanation Banner */}
              {submissionStatus === 'validated' && (
                <div className="mb-8 p-6 rounded-2xl bg-espresso-900 text-cream-soft border border-caramel/40 shadow-xl animate-fade-in space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-caramel flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-lg text-cream-soft">Form Validated Successfully!</h4>
                      <p className="text-xs sm:text-sm text-cream-dark/80 mt-1 leading-relaxed">
                        Your inquiry has been checked and validated.
                      </p>
                    </div>
                  </div>

                  {/* Honest backend notification as required by prompt */}
                  <div className="p-3.5 rounded-xl bg-espresso-800 border border-white/10 text-xs text-cream-dark/75 leading-relaxed">
                    <span className="font-semibold text-caramel-light">Email Integration Notice:</span> This
                    website operates with client-side form validation. To automatically dispatch incoming emails
                    to <span className="text-white underline">{EMAIL_ADDRESS}</span> without opening a mail client,
                    an email service integration (such as EmailJS, Resend, or a dedicated SMTP backend) can be configured.
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handlePrefillMailto}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-espresso-900 bg-caramel-light hover:bg-caramel transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Dispatch via Email Client Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmissionStatus('idle')}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-cream-light hover:text-white transition-colors border border-white/10 hover:bg-white/5"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                    Full Name <span className="text-caramel">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ruwan Silva"
                    className={`w-full px-4 py-3.5 rounded-xl bg-cream/70 border text-espresso-800 placeholder-espresso-400/60 focus:outline-none focus:ring-2 focus:ring-caramel text-sm transition-all ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-espresso-700/15'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                    Email Address <span className="text-caramel">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ruwan@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-cream/70 border text-espresso-800 placeholder-espresso-400/60 focus:outline-none focus:ring-2 focus:ring-caramel text-sm transition-all ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-espresso-700/15'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                    Subject <span className="text-caramel">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Coffee Inquiry / Brand Collaboration"
                    className={`w-full px-4 py-3.5 rounded-xl bg-cream/70 border text-espresso-800 placeholder-espresso-400/60 focus:outline-none focus:ring-2 focus:ring-caramel text-sm transition-all ${
                      errors.subject ? 'border-red-500 bg-red-50/30' : 'border-espresso-700/15'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                    Message <span className="text-caramel">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-cream/70 border text-espresso-800 placeholder-espresso-400/60 focus:outline-none focus:ring-2 focus:ring-caramel text-sm transition-all resize-y ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-espresso-700/15'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-sm font-semibold text-espresso-900 bg-gradient-to-r from-caramel-light via-caramel to-caramel-accent shadow-caramel-glow hover:shadow-xl hover:brightness-105 active:scale-98 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Validating Form...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
