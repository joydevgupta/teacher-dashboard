import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { countryIsdMap } from '../data/countryIsdMap'; // Correct way to import named exports

const TeacherForm: React.FC = () => {
  // State to manage form input fields
  const [title, setTitle] = useState<string>('Mr.');
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>(''); // Add a country field
  const [isdCode, setIsdCode] = useState<string>(''); // State to manage ISD code
  const [contactNumber, setContactNumber] = useState<string>('');

  const [degree, setDegree] = useState<string>('');
  const [university, setUniversity] = useState<string>('');
  const [teachingQualification, setTeachingQualification] =
    useState<string>('');

  const [availableFrom, setAvailableFrom] = useState<string | null>('00:00');
  const [availableUntil, setAvailableUntil] = useState<string | null>('00:00');
  const [daysOfAvailability, setDaysOfAvailability] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');

  const [teachingLanguage, setTeachingLanguage] = useState<string>('English');
  const [preferredAgeGroup, setPreferredAgeGroup] =
    useState<string>('Elementary');
  const [englishCourses, setEnglishCourses] = useState<string[]>([]);

  const [hourlyRate, setHourlyRate] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('PayPal');

  const [notes, setNotes] = useState<string>('');

  // Handle country change and update the ISD code
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setIsdCode(countryIsdMap[selectedCountry] || ''); // Set ISD code based on the selected country
  };

  // Submit handler function
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      title,
      firstName,
      secondName,
      lastName,
      email,
      country,
      isdCode,
      contactNumber,
      degree,
      university,
      teachingQualification,
      availableFrom,
      availableUntil,
      daysOfAvailability,
      timezone,
      teachingLanguage,
      preferredAgeGroup,
      englishCourses,
      hourlyRate,
      paymentMethod,
      notes,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Personal Information Fields */}
      <div>
        <label>Title:</label>
        <select value={title} onChange={(e) => setTitle(e.target.value)}>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
        </select>
      </div>

      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Second Name (Optional):</label>
        <input
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Country:</label>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {Object.keys(countryIsdMap).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>ISD Code:</label>
        <input type="text" value={isdCode} readOnly />
      </div>

      <div>
        <label>Contact Number:</label>
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </div>

      {/* Education & Qualifications Fields */}
      <div>
        <label>Highest Degree:</label>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
        />
      </div>

      <div>
        <label>University/College Name:</label>
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Teaching-Related Qualification (Optional):</label>
        <input
          type="text"
          value={teachingQualification}
          onChange={(e) => setTeachingQualification(e.target.value)}
        />
      </div>

      {/* Calendar and Availability Fields */}
      <div>
        <label>Available From:</label>
        <TimePicker
          onChange={setAvailableFrom}
          value={availableFrom}
          disableClock={true}
          clearIcon={null}
        />
      </div>

      <div>
        <label>Available Until:</label>
        <TimePicker
          onChange={setAvailableUntil}
          value={availableUntil}
          disableClock={true}
          clearIcon={null}
        />
      </div>

      <div>
        <label>Days of Availability:</label>
        <input
          type="text"
          value={daysOfAvailability}
          onChange={(e) => setDaysOfAvailability(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Timezone:</label>
        <input
          type="text"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          required
        />
      </div>

      {/* Teaching Preferences Fields */}
      <div>
        <label>Teaching Language:</label>
        <select
          value={teachingLanguage}
          onChange={(e) => setTeachingLanguage(e.target.value)}
        >
          <option value="English">English</option>
        </select>
      </div>

      <div>
        <label>Preferred Age Group:</label>
        <select
          value={preferredAgeGroup}
          onChange={(e) => setPreferredAgeGroup(e.target.value)}
        >
          <option value="Elementary">Elementary</option>
          <option value="Middle School">Middle School</option>
          <option value="High School">High School</option>
          <option value="College">College</option>
        </select>
      </div>

      <div>
        <label>English Courses Offered:</label>
        <select
          multiple
          value={englishCourses}
          onChange={(e) =>
            setEnglishCourses(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="General English">General English</option>
          <option value="Business English">Business English</option>
          <option value="Grammar">Grammar</option>
          <option value="Vocabulary">Vocabulary</option>
          <option value="Exam Prep">Exam Prep</option>
        </select>
      </div>

      {/* Payment Information Fields */}
      <div>
        <label>Hourly Rate:</label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Preferred Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </div>

      {/* Teacher's Notes */}
      <div>
        <label>Notes (Optional):</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TeacherForm;
