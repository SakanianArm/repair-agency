import React, { useState } from 'react';
import MyForm from './Form';

interface FormData {
  name: string;
  email: string;
}

const FormPage: React.FC = () => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  const handleFormSubmit = (formData: FormData) => {
    setFormDataList([...formDataList, formData]);
  };

  return (
    <div>
      <h1>My Page</h1>
      <MyForm onSubmit={handleFormSubmit} />
      
      <h2>Form Data List:</h2>
      <ul>
        {formDataList.map((data, index) => (
          <li key={index}>{JSON.stringify(data)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormPage;
