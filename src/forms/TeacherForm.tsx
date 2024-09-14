import React, { useState } from 'react';

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    secondName: '',
    lastName: '',
    contactNumber: '',
    isdCode: '',
    qualification: '',
    university: '',
    teachingQualification: '',
    availableSlots: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data here (like sending to a backend or validating)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <select name="title" value={formData.title} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
        </select>
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Second Name:
        <input
          type="text"
          name="secondName"
          value={formData.secondName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        ISD Code:
        <input
          type="text"
          name="isdCode"
          value={formData.isdCode}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Qualification:
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
      </label>
      <label>
        University:
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
        />
      </label>
      <label>
        Teaching Qualification (Optional):
        <input
          type="text"
          name="teachingQualification"
          value={formData.teachingQualification}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TeacherForm;
