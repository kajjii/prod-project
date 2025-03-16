import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    const {t} = useTranslation()

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>
                {t('Прибавить')}
            </Button>
            <Button onClick={decrement}>
                {t('Вычесть')}
            </Button>
        </div>
    );
};