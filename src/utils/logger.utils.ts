import colors from './colors.constants';
import Environment from '../configs/Env.config';

const currentDateTime = () =>
    new Date().toLocaleString('en-US', {
        timeZone: 'America/Monterrey',
    });

const logger = (content: string, color: string): any => {
    const toLog = `${colors[color]}${content} ${colors.Reset}`;
    return Environment.env !== 'prod' ? console.log(toLog) : undefined;
};

export const dateTime = currentDateTime;
export const Logger = logger;
