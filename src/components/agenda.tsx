/**
 * Composant Agenda : pour réserver une date, la librairie DAYPICKER a été utilisée.
 * adresse mail : https://react-day-picker.js.org/
 * pour installation --> npm install react-day-picker date-fns
 *
 */

import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function Agenda() {
  const [selectedDay, setSelectedDay] = useState<Date>();

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <div className="centrage">
      <DayPicker
        mode='single'
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
        locale={fr}
      />
    </div>
  );
}

export default Agenda;
