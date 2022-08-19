//node thing - not nothing.
// https://codesandbox.io/s/react-pibc94
//console.log('This is the nothing.js script.')
//modern react course on udemy https://www.udemy.com/course/react-redux/learn/lecture/32831326#overview
//  https://github.com/JJacksonCode/node-repo/blob/main/nothing.js
//
//
//

import React, { useState } from 'react';
import Field from 'components/field';
import Translate from 'components/translate';
import Languages from 'components/language';

export default function App() {
  const [language, setLanguage] = useState('fi');
  const [text, setText] = useState('');
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>

  );
}
