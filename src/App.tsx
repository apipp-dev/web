/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { MainApp } from './components/MainApp';

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
