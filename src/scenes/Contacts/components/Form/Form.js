import React, { useState } from 'react';

import styles from './Form.module.scss';

const Form = () => {
  const [data, setData] = useState({
    name: {
      value: '',
      valid: false,
    },
    company: {
      value: '',
      valid: false,
    },
    email: {
      value: '',
      valid: false,
    },
    message: {
      value: '',
      valid: false,
    },
  });

  const [isValid, setisValid] = useState(true);
  const [filesList, setFilesList] = useState([]);

  const fileAccept =
    '.png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  const isCompanyEmailValid = email => {
    const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
    return regexp.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const valid =
      data.name.valid &&
      data.email.valid &&
      isCompanyEmailValid(data.email.value) &&
      data.message.valid;

    setisValid(valid);

    const formData = {
      'quote-name': data.name.value,
      'quote-company': data.company.value,
      'quote-email': data.email.value,
      'quote-message': data.message.value,
    };

    valid &&
      fetch(
        'http://api.halo-lab.com/wp-json/contact-form-7/v1/contact-forms/288/feedback',
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );
  };

  const handleInputFileChange = async e => {
    const mergedFilesList = [...e.target.files];
    setFilesList(mergedFilesList);
  };

  const handleFileClear = async () => {
    setFilesList([]);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={e => handleSubmit(e)}>
        <h3 className={styles.formTitle}>REQUEST A QUOTE</h3>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              !isValid && !data.name.valid ? styles.error : ''
            } ${data.name.valid ? styles.focused : ''}`}
            type="text"
            name="quote-name"
            id="name"
            require="true"
            onChange={event =>
              setData({
                ...data,
                ['name']: {
                  ...data.name,
                  value: event.target.value,
                  valid: !!event.target.value.length,
                },
              })
            }
          />
          <label className={styles.placeholder} htmlFor="name">
            Full Name
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              data.company.valid ? styles.focused : ''
            }`}
            type="text"
            name="quote-company"
            id="company"
            onChange={event =>
              setData({
                ...data,
                ['company']: {
                  ...data.company,
                  value: event.target.value,
                  valid: !!event.target.value.length,
                },
              })
            }
          ></input>
          <label className={styles.placeholder} htmlFor="company">
            Company
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${
              !isValid && !data.email.valid ? styles.error : ''
            } ${data.email.value.length ? styles.focused : ''}`}
            type="text"
            name="quote-email"
            id="email"
            require="true"
            onChange={event =>
              setData({
                ...data,
                ['email']: {
                  ...data.email,
                  value: event.target.value,
                  valid:
                    !!event.target.value.length &&
                    isCompanyEmailValid(event.target.value),
                },
              })
            }
          />
          <label className={styles.placeholder} htmlFor="email">
            Email
          </label>
        </div>
        <h3 className={`${styles.formTitle} ${styles.formTitleMobile}`}>
          Message
        </h3>
        <div className={styles.textareaWrapper}>
          <textarea
            className={`${styles.textarea} ${
              !isValid && !data.message.valid ? styles.error : ''
            } ${data.message.valid ? styles.focused : ''}`}
            name="quote-message"
            id="message"
            require="true"
            onChange={event =>
              setData({
                ...data,
                ['message']: {
                  ...data.message,
                  value: event.target.value,
                  valid: !!event.target.value.length,
                },
              })
            }
          ></textarea>
          <label className={styles.placeholder} htmlFor="message">
            What is your project about?
          </label>
          <div className={styles.block}></div>
          <div
            className={`${styles.attachmentWrapper} ${
              filesList.length ? styles.attached : ''
            }`}
          >
            <label
              className={styles.attachmentLabel}
              htmlFor="attachment-file"
            ></label>
            <input
              className={styles.attachmentFile}
              type="file"
              name="quote-file"
              id="attachment-file"
              accept={fileAccept}
              onChange={handleInputFileChange}
            ></input>
            <div className={styles.attachmentName}>
              <button
                type="button"
                className={styles.attachmentButton}
                onClick={handleFileClear}
              ></button>
              {!!filesList.length && <span>{filesList[0].name}</span>}
            </div>
          </div>
        </div>
        <button className={styles.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
