import React, { useState } from "react";

// Initial form state
const initialFormState = {
  fullName: "",
  email: "",
  subject: "",
  messageBody: "",
};

// Simple form validation function
const validateForm = (data) => {
  const errors = {};

  if (!data.fullName || data.fullName.length < 3) {
    errors.fullName = "Full name should be at least 3 characters.";
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.subject || data.subject.length < 3) {
    errors.subject = "Subject should be at least 3 characters.";
  }

  if (!data.messageBody || data.messageBody.length < 3) {
    errors.messageBody = "Message should be at least 3 characters.";
  }

  return errors;
};

// InfoMessage component to display success message
const InfoMessage = ({ message, className = "" }) => (
  <div className={`bg-green-100 text-green-800 p-3 rounded-md ${className}`}>
    {message}
  </div>
);

export const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [infoMessage, setInfoMessage] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    // Validate form data
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setFormData(initialFormState);
      setInfoMessage("Message sent! We'll be in touch soon.");
      setTimeout(() => setInfoMessage(""), 4000);
    }
    setLoading(false); // End loading state
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-16 flex flex-col items-center mt-24">
      <div className="helmet">
        <title>Contact Us | Trendora</title>
        <meta name="description" content="Get in touch with Trendora for any inquiries or support." />
      </div>

      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        Have any questions? Let us know how we can assist you!
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 dark:text-white">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
        </div>

        {/* Message Body */}
        <div className="mb-6">
          <label htmlFor="messageBody" className="block text-sm font-medium text-gray-900 dark:text-white">
            Your Message
          </label>
          <textarea
            id="messageBody"
            rows="4"
            value={formData.messageBody}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.messageBody && <p className="text-sm text-red-500 mt-1">{errors.messageBody}</p>}
        </div>

        {/* Info Message */}
        {infoMessage && <InfoMessage message={infoMessage} className="mt-4" />}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gray-900 text-white font-medium py-3 rounded-md hover:bg-blue-500 transition-all duration-200 ${loading && "opacity-50 cursor-not-allowed"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
};