import morgan from 'morgan';

import { dateTime, Logger } from '../utils/logger.utils';

export default function (): any {
    morgan.token('date', () => {
        const date = dateTime();
        Logger(`DATE: ${date}`, 'FCyan');
        return date;
    });

    return morgan(':method :url :status :res[content-length] - :response-time ms :date ');
}
