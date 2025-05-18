import React, { ChangeEvent, useState } from 'react';
import style from './Cabinet.module.scss';
import { CustomSelect } from '../../components/CustomSelect';

const Cabinet: React.FC = () => {
  const [dob, setDob] = useState('');
  const [region, setRegion] = useState('');
  const [sex, setSex] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [clientId, setClientId] = useState('');
  const [providerId, setProviderId] = useState('');

  const generateApiKey = () => {
    const newKey = 'ck_' + Math.random().toString(36).substring(2, 20);
    setApiKey(newKey);
  };

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <img src="/John.png" alt="Avatar" className={style.avatar} />
        <div className={style.userBlock}>
          <h2 className={style.username}>John Doe</h2>
          <p className={style.email}>john.doe@example.com</p>
        </div>
        <ul className={style.attributes}>
          <li>@johndoe</li>
          <li>New York, USA</li>
          <li>Joined Jan 2023</li>
        </ul>
        <button
          className={`${style.button} ${style.outlineButton}`}
          style={{ alignSelf: 'center' }}
        >
          Edit Profile
        </button>
      </div>

      <div className={style.main}>
        <section className={style.section}>
          <h3 className={style.title}>Personal Details</h3>
          <p className={style.subtitle}>Update your personal information.</p>
          <label>
            Date of Birth
            <input
              type="date"
              value={dob}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDob(e.target.value)
              }
            />
          </label>
          <label>
            Region
            <CustomSelect
              options={[
                { value: 'North America' },
                { value: 'Europe' },
                { value: 'Asia' },
                { value: 'South America' },
              ]}
              value={region}
              onChange={(value: string) => {
                setRegion(value);
              }}
            />
          </label>
          <label>
            Sex
            <CustomSelect
              options={[{ value: 'Male' }, { value: 'Female' }]}
              value={sex}
              onChange={(value: string) => {
                setSex(value);
              }}
            />
          </label>
          <button className={style.button}>Save Changes</button>
        </section>

        <section className={style.section}>
          <h3 className={style.title}>Integrations</h3>
          <p className={style.subtitle}>Connect to third-party services.</p>
          <label>
            OZON API Key
            <div className={style.apiKeyContainer}>
              <input
                type="text"
                value={apiKey}
                readOnly
                disabled
                placeholder="ck_************************"
              />
              <button
                className={`${style.button} ${style.outlineButton}`}
                onClick={generateApiKey}
                style={{ width: '20%' }}
              >
                Generate New
              </button>
            </div>
          </label>
          <label>
            OZON Client ID
            <input
              type="text"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
          </label>
          <label>
            Provider ID
            <input
              type="text"
              value={providerId}
              onChange={(e) => setProviderId(e.target.value)}
            />
          </label>
          <button className={style.button}>Save Integrations</button>
        </section>
      </div>
    </div>
  );
};

export default Cabinet;
