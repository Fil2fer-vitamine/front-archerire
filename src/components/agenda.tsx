import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      mode='single'
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
      locale={fr}
    />
  );
}

export default App;
