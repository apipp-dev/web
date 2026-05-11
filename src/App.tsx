/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { MainApp } from './components/MainApp';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <MainApp />
    </LanguageProvider>
  );
}
