import { SCBtnDia, SCDiasSemana } from "../styled-components/StyleWeek";

export default function Week(props) {


    const { selectedDays, setSelectedDays, disabled } = props;
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <SCDiasSemana>
            {days.map((day, index) => (
                <Weekday
                    key={index}
                    day={day}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    index={index}
                    disabled={disabled}
                />
            ))}
        </SCDiasSemana>
    );
}

function Weekday(props) {
    const { day, selectedDays, setSelectedDays, index, disabled } = props;

    return (
        <>
            <SCBtnDia
                data-test="habit-day"
                onClick={() => chooseDay(selectedDays, setSelectedDays, index)}
                selecionado={selectedDays.includes(index)}
                disabled={disabled}
            >
                {day}
            </SCBtnDia>
        </>
    );
}

function chooseDay(selectedDays, setSelectedDays, index) {
    const newSelectedDays = selectedDays.includes(index)
      ? selectedDays.filter(dayIndex => dayIndex !== index)
      : [...selectedDays, index];
  
    setSelectedDays(newSelectedDays);
  }
  




